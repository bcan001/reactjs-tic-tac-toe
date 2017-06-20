class Board extends React.Component {
  // lift the state of the squares to the be controlled by the board, not by the squares
  constructor(props) {
    super(props);
    game = JSON.parse(this.props.game);
    // console.log(game);
    this.state = {
      squares: game.board,
      // taking turns (gets toggled with every click of the board)
      xIsNext: game.x_is_next
    };
  }

  // handles the click of the square.
  handleClick(i) {
    const squares = this.state.squares.slice();

    // exit game if someone has won
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    // squares[i] = 'X';
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    $.ajax({
        url: '/games',
        type: 'POST',
        data: {
          position: i,
          square: squares[i]
        },
        success: (response) => {
          // console.log('it worked!', response);
        }
    });

    this.setState({
      squares: squares,
      // toggle turns to true or false
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (<Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />);
  }

  render() {
    // const status = 'Next player: X';
    
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      // toggle between x and o
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
};



function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

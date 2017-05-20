class Board extends React.Component {
  // lift the state of the squares to the be controlled by the board, not by the squares
  constructor() {
    super();
    this.state = {
      // [null, null, null, null, null, null, null, null, null]
      squares: Array(9).fill(null)
    };
  }

  renderSquare(i) {
    // return <Square value={i} />;
    // pass values from board component into the square component
    // return <Square value={this.state.squares[i]} />;
    // the board is now handling the clicks, so pass the click method from the board to the square (value and onClick are props that are being handed down to the square)
    <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
  }

  render() {
    const status = 'Next player: X';

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

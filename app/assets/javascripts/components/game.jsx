class Game extends React.Component {

  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      game: this.props.initial_game
    };
  }


  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board game={ this.state.game } />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }


};


class Game extends React.Component {

  constructor(props) {
    super(props);
    console.log(this);

    this.state = {
      game: this.props.initial_game
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   this.setState({ game: event.currentTarget.value });
  // }

  componentDidMount() {
    this.setupSubscription();
  }

  updateGame(game) {
    // console.log('test1');
    console.log(game);
    console.log(this);

    let gameUpdate = game;
    this.setState({game: gameUpdate});

    console.log(this.state.game);

  }

  setupSubscription() {
    // console.log(this);
    var that = this;

    App.players = App.cable.subscriptions.create('PlayersChannel', {  
      received: function(data) {
        // console.log(data);
        // this.setState({game: data});
        that.updateGame(data);
      },
      updateGame: that.updateGame
    });
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

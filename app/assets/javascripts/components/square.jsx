class Square extends React.Component {
	// react components can be given a state, which is private to each component.
	// this is kind of like initialize in a ruby class. when it is first created, value is set to null
	// need to call super() when defining the constructor of a subclasses
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }

  render() {
    return (
     	// logs click when square is clicked. use new js arrow syntax. if onClick={alert('click')}, then the function would fire immediately as opposed to when the button is clicked
      // <button className="square" onClick={() => alert('click')}>
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
};
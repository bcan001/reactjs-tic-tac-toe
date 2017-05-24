// class Square extends React.Component {
// 	// react components can be given a state, which is private to each component.
// 	// this is kind of like initialize in a ruby class. when it is first created, value is set to null
// 	// need to call super() when defining the constructor of a subclasses
// 	// deleted constructor because square state has been lifted to be controlled by the board
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     value: null,
//   //   };
//   // }

//   render() {
//     return (
//      	// logs click when square is clicked. use new js arrow syntax. if onClick={alert('click')}, then the function would fire immediately as opposed to when the button is clicked
//       // <button className="square" onClick={() => alert('click')}>
//       // <button className="square" onClick={() => this.setState({value: 'X'})}>

//       // upon lifting the state of squares to be controlled by the board:
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// };


// refactor square to be a 'functional component', which in react is a component that only has a render method
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}




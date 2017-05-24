// refactor square to be a 'functional component', which in react is a component that only has a render method
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}




export default function Fave( onFaveToggle ) {
  console.log("FROMFAVE:PROPS", onFaveToggle);
  const handleClick = (e) => {
    e.stopPropagation();
    console.log("Handling Fave click!");
    onFaveToggle();
  };

  const action = props.isFave ? "remove_from_queue" : "add_to_queue";
  console.log(action);
  return (
    <>
      <div className={`film-row-fave ${action}`} onClick={() => handleClick()}>
        <p className="material-icons">add_to_queue</p>
      </div>
    </>
  );

  // Add this line. You'll call the function passed through props

  // Delete the `setIsFaves` line. You no longer track state here
  // setIsFave(!isFave)
}
// class Fave extends Component {
//   state = {
//     isFave:false
//   }
//   handleClick = (e) => {
//     /* It prevents the event from bubbling up the DOM tree. */
//     // e.stopPropagation();
//     // console.log('stopprop')
//     const currentState=this.state.isFave
//     this.setState({isFave: !currentState});
//     // return console.log('handling the fave')
//   }
//   render()  {
//     const action = this.state.isFave ?'remove_from_queue':'add_to_queue'
//     return (
//       <>
//         <div className={`film-row-fave ${action}`} onClick={() => this.handleClick('faves')}>
//           <p className="material-icons">add_to_queue</p>
//         </div>
//       </>
//     )
//   }
// }
// export default Fave;

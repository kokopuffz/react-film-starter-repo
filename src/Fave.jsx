import { Component } from 'react';


class Fave extends Component {
  state = {
    isFave:false
  }
  handleClick = (e) => {
    /* It prevents the event from bubbling up the DOM tree. */
    // e.stopPropagation();
    // console.log('stopprop')
    const currentState=this.state.isFave
    this.setState({isFave: !currentState});
    // return console.log('handling the fave')
  }
  render()  { 
    const action = this.state.isFave ?'remove_from_queue':'add_to_queue'
    return (
      <>
        <div className={`film-row-fave ${action}`} onClick={() => this.handleClick('faves')}>
          <p className="material-icons">add_to_queue</p>
        </div>
      </>
    )
  }
}
export default Fave;


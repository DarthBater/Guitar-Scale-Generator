import React, { Component } from 'react';


class Note extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      display: true
    }
  }


  render(){
    //if the note is in the current scale, make it visible, otherwise, make its visibility hidden
    return(
      <div className={this.props.note == this.props.root ? "note root" : "note normal"} style={{visibility: this.props.display ? 'visible' : 'hidden' }}>
        <p>{this.props.note}</p>
      </div>
    )
  }
}

export default Note;

import React, { Component } from 'react';


//Create a component responsible for the form selectors where we Choose
//the scale and the root note. This component should change the state of
//the App component by calling functions received as props.
class FormSelect extends Component{
  constructor(props){
    super(props);

    this.handleScaleChange = this.handleScaleChange.bind(this);
    this.handleRootChange = this.handleRootChange.bind(this);
    this.handleTriadRootChange = this.handleTriadRootChange.bind(this);
  }

  //onChange upDate the scale to the current selector value
  handleScaleChange(e){
    this.props.updateScale(e.target.value);
  }

  //onChange upDate the root note to the current selector value
  handleRootChange(e){
    this.props.updateRoot(e.target.value);
  }

  //onChange upDate the triadRoot to the current selector value
  handleTriadRootChange(e){
    this.props.setTriadRoot(e.target.value);
  }

  render(){
    //for each scale type we have, create an option element and store
    //each element as an array
    let scaleOptions = this.props.scales.map( (i) => {
        return(<option key={i.name} value={i.name}>{i.name}</option>);
    });

    //for each note, create an option element and store
    //each element as an array
    let noteOptions = this.props.notes.map( (i) => {
      return(<option key={i} value={i}>{i}</option>);
    });

    let notesInScale = this.props.notesInScale.map( (i) =>{
      return(<option key={i} value={i}>{i}</option>);
    })

    return(
      <form>
        <p>Choose Scale:</p>
        <select onChange={this.handleScaleChange}>
          {scaleOptions}
        </select>
        <select onChange={this.handleRootChange}>
          {noteOptions}
        </select>
        <select onChange={this.toggleShowTriad}>
          <option value="true">View: Normal</option>
          <option value="false">View: Triad</option>
        </select>
        <select onChange={this.handleTriadRootChange}>
          {notesInScale}
        </select>
     </form>
    )
  }
}

export default FormSelect;

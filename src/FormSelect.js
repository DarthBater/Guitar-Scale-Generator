import React, { Component } from 'react';


//Create a component responsible for the form selectors where we Choose
//the scale and the root note. This component should change the state of
//the App component by calling functions received as props.
class FormSelect extends Component{
  constructor(props){
    super(props);

    this.handleScaleChange = this.handleScaleChange.bind(this);
    this.handleRootChange = this.handleRootChange.bind(this);
  }

  //onChange upDate the scale to the current selector value
  handleScaleChange(e){
    this.props.updateScale(e.target.value);
  }

  //onChange upDate the root note to the current selector value
  handleRootChange(e){
    this.props.updateRoot(e.target.value);
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

    return(
      <form>
        <p>Choose Scale:</p>
        <select onChange={this.handleScaleChange}>
          {scaleOptions}
        </select>
        <select onChange={this.handleRootChange}>
          {noteOptions}
        </select>
     </form>
    )
  }
}

export default FormSelect;

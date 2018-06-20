import React, { Component } from 'react';


class FormSelect extends Component{
  constructor(props){
    super(props);

    this.handleScaleChange = this.handleScaleChange.bind(this);
    this.handleRootChange = this.handleRootChange.bind(this);
  }

  handleScaleChange(e){
    this.props.updateScale(e.target.value);
  }

  handleRootChange(e){
    this.props.updateRoot(e.target.value);
  }

  render(){
    let scaleOptions = this.props.scales.map( (i) => {
        return(<option key={i.name} value={i.name}>{i.name}</option>);
    });

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

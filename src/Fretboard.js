import React, { Component } from 'react';
import Note from './Note.js';

//array full of chromatic notes that are sorted according to what string we are on.
const eString = ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"];
const bString = ["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const gString = ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"];
const dString = ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D"];
const aString = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"];


class Fretboard extends Component{
  constructor(props){
    super(props);
  }

  //create an array that contains <Note> components for each note on the fretboard
  render(){
    const eStringPack = eString.map( (i) => {
      return(
      <Note
        note={i}
        scale={this.props.scale}
        root={this.props.root}
        notesInScale={this.props.notesInScale}
        display={this.props.notesInScale.indexOf(i) >= 0 ? true : false}
        />);
    });

    const bStringPack = bString.map( (i) => {
      return(
      <Note
        note={i}
        scale={this.props.scale}
        root={this.props.root}
        notesInScale={this.props.notesInScale}
        display={this.props.notesInScale.indexOf(i) >= 0 ? true : false}
        />);
    });

    const gStringPack = gString.map( (i) => {
      return(
      <Note
        note={i}
        scale={this.props.scale}
        root={this.props.root}
        notesInScale={this.props.notesInScale}
        display={this.props.notesInScale.indexOf(i) >= 0 ? true : false}
        />);
    });

    const dStringPack = dString.map( (i) => {
      return(
      <Note
        note={i}
        scale={this.props.scale}
        root={this.props.root}
        notesInScale={this.props.notesInScale}
        display={this.props.notesInScale.indexOf(i) >= 0 ? true : false}
        />);
    });

    const aStringPack = aString.map( (i) => {
      return(
      <Note
        note={i}
        scale={this.props.scale}
        root={this.props.root}
        notesInScale={this.props.notesInScale}
        display={this.props.notesInScale.indexOf(i) >= 0 ? true : false}
        />);
    });

    return(
      <div className="fretboard-container">
        <div id="fret-0" className="fret"></div>
        <div id="fret-1" className="fret"></div>
        <div id="fret-2" className="fret"></div>
        <div id="fret-3" className="fret"></div>
        <div id="fret-4" className="fret"></div>
        <div id="fret-5" className="fret"></div>
        <div id="fret-6" className="fret"></div>
        <div id="fret-7" className="fret"></div>
        <div id="fret-8" className="fret"></div>
        <div id="fret-9" className="fret"></div>
        <div id="fret-10" className="fret"></div>
        <div id="fret-11" className="fret"></div>
        <div id="fret-12" className="fret"></div>
        <div id="fret-13" className="fret"></div>
        {eStringPack}
        {bStringPack}
        {gStringPack}
        {dStringPack}
        {aStringPack}
        {eStringPack}
      </div>
    )
  }
}

export default Fretboard;

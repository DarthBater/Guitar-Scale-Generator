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

    this.notePacker = this.notePacker.bind(this);
  }

  //helper function
  //take a note and turn it into a Note component
  notePacker(note){
    let visible = "hidden";
    let className = "note normal";

    if(this.props.notesInScale.indexOf(note) >= 0){
      visible = "visible";
    }

    if(this.props.showTriad){
      if(this.props.first === note){
        className = "note root";
      }
      else if(this.props.third === note){
        className = "note third";
      }
      else if(this.props.fifth === note){
        className = "note fifth";
      }
    }
    else if(this.props.root === note){
      className = "note root";
    }


    return(
    <Note
      note={note}
      className={className}
      visible={visible}
      />);
  }

  //create an array that contains <Note> components for each note on the fretboard
  render(){
    const eStringPack = eString.map( (i) => {
        return(this.notePacker(i))
    });

    const bStringPack = bString.map( (i) => {
        return(this.notePacker(i))
      });

    const gStringPack = gString.map( (i) => {
        return(this.notePacker(i))
    });

    const dStringPack = dString.map( (i) => {
        return(this.notePacker(i))
    });

    const aStringPack = aString.map( (i) => {
        return(this.notePacker(i))
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

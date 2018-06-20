import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormSelect from './FormSelect.js';
import Fretboard from './Fretboard.js';

//Object array storing our scales and the scale rules, which should
//be an array of integers where each integer signifies the number of
//notes between the last one.
const scales = [{
  name: "Major",
  rule: [2, 2, 1, 2, 2, 2, 1]
}, {
  name: "Minor",
  rule: [2, 1, 2, 2, 1, 2, 2]
}, {
  name: "Minor Pentatonic",
  rule: [3, 2, 2, 3, 2]
}, {
  name: "Major Pentatonic",
  rule: [2, 2, 3, 2, 3]
}];


//array for each note in the chromatic scale.
const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];


class App extends Component {
  constructor(props){
    super(props);

    //create state for the current scale, the current root note,
    //and the notes in the current scale. Also will need whether we
    //should show triad or not. We need states for the 1st, 3rd, and 5th
    //note as well to keep track of selected triads.
    this.state = {
      scale: 'Major',
      root: 'A',
      notes: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
      showTriad: false,
      triadRoot: 'A',
      first: 'A',
      third: 'C#',
      fifth: 'E'
    };

    this.setScale = this.setScale.bind(this);
    this.setRoot = this.setRoot.bind(this);
    this.updateNotesInScale = this.updateNotesInScale.bind(this);
    this.toggleShowTriad = this.toggleShowTriad.bind(this);
    this.updateTriadNotes = this.updateTriadNotes.bind(this);
  }

  //toggle the state of toggleShowTriad
  toggleShowTriad(){
    this.setState({showTriad: !this.state.showTriad});
  }

  //set the state of the scale to <string>scale</string>
  setScale(scale){
    this.setState({scale: scale});
    this.updateNotesInScale(this.state.root, scale);
  }

  //set the root of the scale to <string>scale</string>
  setRoot(root){
    this.setState({root: root});
    this.updateNotesInScale(root, this.state.scale);
  }

  //triad was changed, update 1st, 3rd, and 5th notes of triad states
  updateTriadNotes(root){
    this.setState({first: root});

    let rootIndex = this.state.notes.indexOf(root);
    this.setState({third: this.state.notes[(rootIndex+2) % this.state.notes.length]});
    this.setState({fifth: this.state.notes[(rootIndex+4) % this.state.notes.length]});
  }

  //given the <string>root</string> and <string>scale</scale> (given)
  //by the current state, find the proper notes in the scale and set
  //the current state to an array of those notes.
  updateNotesInScale(root, scale){
    let rule = [];
    let result = [];

    for(let i = 0; i < scales.length; i++){
      if(scales[i].name === scale){
        rule = scales[i].rule;
        break;
      }
    }

    let noteIndex = notes.indexOf(root);

    for(let i = 0; i < rule.length; i++){
      result.push(notes[noteIndex]);
      noteIndex = (noteIndex+rule[i]) % notes.length;
    }

    this.setState({notes: result});
  }


  render(){

    return(
       <div>
        <div className="hub">
          <h1>Scale Generator</h1>
          <FormSelect updateScale={this.setScale}
             updateRoot={this.setRoot}
             updateNotes={this.updateNotesInScale}
             toggleShowTriad={this.toggleShowTriad}
             notesInScale={this.state.notes}
             updateTriadNotes={this.updateTriadNotes}
             scales={scales}
             notes={notes}
            />
        </div>
        <Fretboard
          scale={this.state.scale}
          root={this.state.root}
          notesInScale={this.state.notes}
          showTriad={this.state.showTriad}
          first={this.state.first}
          third={this.state.third}
          fifth={this.state.fifth}
          />
       </div>
    )
  }
}

export default App;

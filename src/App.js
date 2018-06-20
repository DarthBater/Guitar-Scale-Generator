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
    //and the notes in the current scale.
    this.state = {
      scale: 'Major',
      root: 'A',
      notes: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#']
    };

    this.setScale = this.setScale.bind(this);
    this.setRoot = this.setRoot.bind(this);
    this.updateNotesInScale = this.updateNotesInScale.bind(this);
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
             scales={scales}
             notes={notes}
            />
        </div>
        <Fretboard
          scale={this.state.scale}
          root={this.state.root}
          notesInScale={this.state.notes}
          />
       </div>
    )
  }
}

export default App;

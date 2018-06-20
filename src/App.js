import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormSelect from './FormSelect.js';
import Fretboard from './Fretboard.js';

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

const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      scale: 'Major',
      root: 'A',
      notes: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#']
    };

    this.setScale = this.setScale.bind(this);
    this.setRoot = this.setRoot.bind(this);
    this.updateNotesInScale = this.updateNotesInScale.bind(this);
  }

  setScale(scale){
    this.setState({scale: scale});
    this.updateNotesInScale(this.state.root, scale);
  }

  setRoot(root){
    this.setState({root: root});
    this.updateNotesInScale(root, this.state.scale);
  }

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

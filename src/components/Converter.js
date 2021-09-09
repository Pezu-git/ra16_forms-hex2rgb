/* eslint-disable no-unreachable */
import Form from './Form'
import { Component } from 'react'
class Converter extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      rgb: '', 
      output: 'rgb'
    }
    this.updateInputState = this.updateInputState.bind(this);
    this.outputText = this.outputText.bind(this)
  }
  
  
  hexToRGB = (hex) => {
    let  result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);  
    return result 
      ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
  }

  outputText = (val) => {
      if(val.length === 7 && this.hexToRGB(val) !== null) {
        return this.hexToRGB(val)
       }
       else if(val.length === 7 && this.hexToRGB(val) === null) {
        return 'Error'
       } 
  }
  
  
  updateInputState = (val) => {
    let outputState = this.outputText(val)
    this.setState({
      input: val.trim(),
      rgb: val.length === 7 ? this.hexToRGB(val) : '',
      output: val.length === 7 ? `${outputState}` : 'rgb'
    })
    if(this.outputText(val) === 'Error') {
      this.setState({
        rgb: 'rgb(212, 17, 62)'
      })
    }
  }  
  render() {
    return (
      <div className="App" style={{background:this.state.rgb}}>
        <Form onChange={this.updateInputState} 
              value={this.state.input} 
              rgb={this.state.rgb}
              output={this.state.output} />
      </div>
    )
  }
}

export default Converter
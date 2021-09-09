import { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
      this.updateInput = this.updateInput.bind(this)
    }
      
  updateInput = (evt) => {
      this.props.onChange(evt.target.value)
    }  
    
    render() {    
      return (
        <div className="form">
          <div className="control">
            <input 
              className="input" 
              type="text" 
              placeholder="Hello"
              maxLength="7"
              onChange={this.updateInput} 
              value={this.props.value}>
            </input>
          </div>
          <p className="rgbOutput" style={{background: this.props.rgb}}>{this.props.output}</p>
        </div>
      )    
    }
  }

  export default Form
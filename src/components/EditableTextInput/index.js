import {Component} from 'react'
import './index.css'

class EditableTextInput extends Component {
  state = {display: true, textValue: ''}

  onChangeInput = event => {
    this.setState({textValue: event.target.value})
  }

  onButton = () => {
    const {display} = this.state
    this.setState({display: !display})
  }

  renderInputElement = () => {
    const {textValue} = this.state
    return (
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          value={textValue}
          onChange={this.onChangeInput}
        />
        <button type="button" className="button" onClick={this.onButton}>
          Save
        </button>
      </div>
    )
  }

  renderParaGraphElement = () => {
    const {textValue} = this.state
    return (
      <div className="input-container">
        <p className="text">{textValue}</p>
        <button type="button" className="button" onClick={this.onButton}>
          Edit
        </button>
      </div>
    )
  }

  render() {
    const {display} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1>Editable Text Input</h1>
          <div>
            {display
              ? this.renderInputElement()
              : this.renderParaGraphElement()}
          </div>
        </div>
      </div>
    )
  }
}

export default EditableTextInput

import React from 'react'
import classnames from 'classnames'
import {HOC as FormsyElement} from 'formsy-react'

const cls = elem => `Input-${elem}`

class Input extends React.Component {
  static propTypes = {
    setValue: React.PropTypes.func,
    getValue: React.PropTypes.func,
    textArea: React.PropTypes.bool,
    placeHolder: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
  }

  state = {
    value: '',
  }

  _onChange (e) {
    this.props.setValue(e.currentTarget.value)
  }

  _getValue () {
    return this.props.getValue() || this.state.value
  }

  _getInput () {
    const element = this.props.textArea ? 'textarea' : 'input'
    return React.createElement(element, {
      className: cls('field'),
      value: this._getValue(),
      onChange: this._onChange.bind(this),
      placeholder: this.props.placeHolder,
    })
  }

  _shouldShowErrors () {
    return (
      this.props.isFormSubmitted() &&
      this.props.showError()
    )
  }

  _getErrors () {
    if (!this._shouldShowErrors()) {
      return null
    }
    const {validationError} = this.props
    let error = 'This field is invalid'
    if (typeof validationError === 'string') {
      error = validationError
    }
    return (
      <div className={cls('error')}>
        {error}
      </div>
    )
  }

  render () {
    const {name} = this.props
    const className = classnames('Input', {
      [`Input-${name}`]: name,
    }, this.props.className)
    return (
      <div className={className} >
        {this._getInput()}
        {this._getErrors()}
      </div>
    )
  }
}

export default FormsyElement(Input)

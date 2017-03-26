import React from 'react'
import classnames from 'classnames'

const cls = elm => `FlipCard-${elm}`

export default class FlipCard extends React.Component {
  static propTypes = {
    front: React.PropTypes.object,
    back: React.PropTypes.object,
  }

  state = {}

  _onToggle = () =>
    this.setState(prevState => ({isFlipped: !prevState.isFlipped}))

  render () {
    const {front, back} = this.props
    const className = classnames('FlipCard', this.props.className, {
      'FlipCard--flip': this.state.isFlipped,
    })
    return (
      <div className={className}>
        <div className={cls('container')}>
          <div className={cls('front')}>
            {front}
            <div className={cls('footer')} onClick={this._onToggle}>
              see description
            </div>
          </div>
          <div className={cls('back')}>
            {back}
            <div className={cls('footer')} onClick={this._onToggle}>
              back
            </div>
          </div>
        </div>
      </div>
    )
  }
}

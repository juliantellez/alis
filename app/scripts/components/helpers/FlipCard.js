import React from 'react'
import classnames from 'classnames'

const cls = elm => `FlipCard-${elm}`

export default class FlipCard extends React.Component {
  static propTypes = {
    front: React.PropTypes.object,
    back: React.PropTypes.object,
    frontLabel: React.PropTypes.node,
    backLabel: React.PropTypes.node,
  }

  static defaultProps = {
    frontLabel: 'see description',
    backLabel: 'back',
  }

  state = {}

  _onToggle = () =>
    this.setState(prevState => ({isFlipped: !prevState.isFlipped}))

  render () {
    const {front, back, frontLabel, backLabel} = this.props
    const className = classnames('FlipCard', this.props.className, {
      'FlipCard--flip': this.state.isFlipped,
    })
    return (
      <div className={className}>
        <div className={cls('container')}>
          <div className={cls('front')}>
            {front}
            <div className={cls('footer')} onClick={this._onToggle}>
              {frontLabel}
            </div>
          </div>
          <div className={cls('back')}>
            {back}
            <div className={cls('footer')} onClick={this._onToggle}>
              {backLabel}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

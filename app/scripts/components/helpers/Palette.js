import _ from 'lodash'
import React from 'react'

const cls = elem => `Palette-${elem}`

export default class Palette extends React.Component {
  static propTypes = {
    palette: React.PropTypes.object.isRequired,
  }

  _getColours () {
    const {palette} = this.props
    return palette.map(colour => (
      <div key={colour} className={cls('colour')} style={{backgroundColor: colour}} />
    ))
  }

  render () {
    const {palette} = this.props
    if (_.isNil(palette)) {
      return null
    }
    return (
      <div className='Palette'>
        {this._getColours()}
      </div>
    )
  }
}

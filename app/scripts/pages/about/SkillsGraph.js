import React from 'react'
import {
  Legend,
  Tooltip,
  RadialBar,
  RadialBarChart,
} from 'Recharts'

const cls = elm => `SkillsGraph-${elm}`

export default class SkillsGraph extends React.Component {
  static contextTypes = {
    env: React.PropTypes.object,
  }

  state = {}

  data = [
    {name: 'UX', uv: 85, pv: 2400, fill: '#8884d8'},
    {name: 'UI', uv: 82, pv: 1398, fill: '#8dd1e1'},
    {name: 'Visual Design', uv: 80, pv: 9800, fill: '#82ca9d'},
    {name: 'Product Thinking', uv: 78, pv: 3908, fill: '#a4de6c'},
    {name: 'Research', uv: 76, pv: 4800, fill: '#d0ed57'},
    {name: 'Prototyping', uv: 74, pv: 4800, fill: '#ffc658'},
  ]

  componentDidMount () {
    if (this.context.env.isBrowser()) {
      this.setState({canRender: true})
    }
  }

  _getChart () {
    return (
      <RadialBarChart
        cx={150}
        cy={150}
        width={500}
        barSize={10}
        height={150}
        innerRadius={20}
        outerRadius={140}
        data={this.data}
        className={cls('chart')}
      >
        <RadialBar
          label
          background
          dataKey='uv'
          minAngle={15}
          clockWise={true}
        />
        <Legend
          height={140}
          iconSize={10}
          layout='vertical'
          verticalAlign='middle'
        />
        <Tooltip offset={-150}/>
      </RadialBarChart>
    )
  }

  render () {
    if (!this.state.canRender) {
      return null
    }
    return (
      <div className='SkillsGraph'>
        <div className={cls('title')}>My Skills</div>
        {this._getChart()}
      </div>
    )
  }
}

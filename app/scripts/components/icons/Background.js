/* eslint-disable max-len */
import React from 'react'

export default class Background extends React.Component {
  render () {
    return (
      <svg viewBox='0 0 1440 1024'>
        <defs>
          <linearGradient id='a' x1='50%' x2='50%' y1='0%' y2='100%'>
            <stop stopColor='#ABE7DD' offset='0%'/>
            <stop stopColor='#FFF' offset='100%'/>
          </linearGradient>
        </defs>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#a)' d='M7.92 1.997C7.92.894 8.814 0 9.917 0H1443.94c1.1 0 1.99.887 1.99 2.003v1019.994a1.998 1.998 0 0 1-1.995 2.003H1.995a1.976 1.976 0 0 1-1.97-2.01L7.92 1.998z' transform='translate(-6)'/>
          <path stroke='#EFFFFC' strokeWidth='7' d='M1.99 163.953S238.18 93.93 368.302 93.93s289.69 54.438 503.938 70.022c214.25 15.583 230.296-54.78 370.484-51.57 140.186 3.215 197.276 51.57 197.276 51.57' strokeLinecap='round' strokeLinejoin='round' strokeDasharray='30 60'/>
          <path fill='#F0FFFD' d='M1.99 0H1440v134.44s-161.563-67.376-374.502-12.95c-212.94 54.427-413.61-7.008-533.098-28.82C303.585 50.897 1.99 134.44 1.99 134.44V0z'/>
        </g>
      </svg>
    )
  }
}

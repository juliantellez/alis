/* eslint-disable max-len */
import React from 'react'

const Logo = props => (
  <svg { ...props } viewBox='0 0 266 103'>
    <defs>
      <filter id='a' width='200%' height='200%' x='-50%' y='-50%' filterUnits='objectBoundingBox'>
        <feOffset dx='20' in='SourceAlpha' result='shadowOffsetOuter1'/>
        <feGaussianBlur stdDeviation='5' in='shadowOffsetOuter1' result='shadowBlurOuter1'/>
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.584918478 0' in='shadowBlurOuter1' result='shadowMatrixOuter1'/>
        <feMerge>
          <feMergeNode in='shadowMatrixOuter1'/>
          <feMergeNode in='SourceGraphic'/>
        </feMerge>
      </filter>
    </defs>
    <g fill='none' fillRule='evenodd' stroke='#000' strokeWidth='4' filter='url(#a)' transform='translate(2 12)'>
      <path d='M21.37 36.956h28.19-28.19zM78.017 6.282L77.883 61.3m14.335-48.65L92.17 61.3M.228.562L35.593 61.54 70.7.562m21.08 67.042c3.342-.1 6.794 2.73 6.847 5.723.054 2.994-3.29 6.04-6.637 6.138-3.348.098-6.814-2.75-6.868-5.74-.053-2.99 3.313-6.023 6.657-6.12zm14.317-54.992V61.3l21.58-18.466'/>
      <path d='M113.295 42.794l20.875 18.312.074-48.625m6.93 48.82L176.41.44l35.237 60.86m-49.33-36.22h28.19m21.14 54.478l21.142-42.602-21.145 42.602zm10.518-24.14l-15.45-24.244'/>
    </g>
  </svg>
)

export default Logo

/* eslint-disable max-len */
import React from 'react'

const Logo = props => (
    <svg { ...props } viewBox='0 0 146 79'>
    <defs>
      <filter id='a' width='200%' height='200%' x='-50%' y='-50%' filterUnits='objectBoundingBox'>
        <feOffset dx='7' in='SourceAlpha' result='shadowOffsetOuter1'/>
        <feGaussianBlur stdDeviation='3' in='shadowOffsetOuter1' result='shadowBlurOuter1'/>
        <feColorMatrix values='0 0 0 0 0.308832908 0 0 0 0 0.308832908 0 0 0 0 0.308832908 0 0 0 0.443500906 0' in='shadowBlurOuter1' result='shadowMatrixOuter1'/>
        <feMerge>
          <feMergeNode in='shadowMatrixOuter1'/>
          <feMergeNode in='SourceGraphic'/>
        </feMerge>
      </filter>
    </defs>
    <g fill='none' fillRule='evenodd' stroke='#F6F1EA' filter='url(#a)' transform='translate(0 7)'>
      <path strokeWidth='5' d='M54.023 25.07v27.24M64.1 25.07v27.86'/>
      <path strokeWidth='3' d='M64.606 57.878c1.66-.056 3.374 1.566 3.4 3.285.027 1.718-1.632 3.465-3.295 3.522-1.66.056-3.38-1.578-3.405-3.294-.027-1.712 1.644-3.452 3.304-3.51z'/>
      <path strokeWidth='5' d='M73.502 25.17v23.01L87.087 37.3'/>
      <path strokeWidth='5' d='M77.155 37.374l12.902 10.762.043-22.802m5.445 26.243l9.694-20.95c.23-.505.602-.515.84 0l9.693 20.95m-16.488-7.502h13.04m5.328 19.23l13.327-27.4-13.326 27.4zm6.41-12.315l-8.477-18.18'/>
      <path strokeWidth='7' d='M0 12.226h61.647H0zM5.73 0l24.864 48.014c.255.492.664.497.92 0L56.194 0'/>
    </g>
    </svg>
)

export default Logo

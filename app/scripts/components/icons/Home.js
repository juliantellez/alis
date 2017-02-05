/* eslint-disable max-len */
import React from 'react'

const Home = props => (
  <svg { ...props } viewBox="0 0 382 370">
    <defs>
      <path id="b" d="M112.233 136.328c41.664-30.383 109.946-43.126 142.915-13.796 32.97 29.33 18.75 98.142-17.988 124.935-36.74 26.792-109.17 15.257-138.487-10.824-29.318-26.08-28.104-69.93 13.56-100.315z"/>
      <filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox">
        <feMorphology radius=".5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/>
        <feOffset dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
        <feMorphology radius="1" in="SourceAlpha" result="shadowInner"/>
        <feOffset dy="2" in="shadowInner" result="shadowInner"/>
        <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"/>
        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.296846694 0" in="shadowBlurOuter1"/>
      </filter>
      <path id="d" d="M124.777 133.504c35.272-26.525 107.546-27.68 135.152-1.173 27.6 26.51 8.61 80.26-25.83 106.15-34.43 25.9-91.87 31.38-120.5 3.89-28.63-27.49-24.1-82.34 11.17-108.86zM79.67 162.93c10.257-53.734 84.704-90.522 135.573-86.558 50.87 3.965 97.62 44.084 86.212 103.842-11.407 59.757-73.24 115.685-127.315 111.47-54.075-4.213-104.73-75.02-94.47-128.754z"/>
      <filter id="c" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox">
        <feMorphology radius=".5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/>
        <feOffset dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
        <feMorphology radius="1" in="SourceAlpha" result="shadowInner"/>
        <feOffset dy="2" in="shadowInner" result="shadowInner"/>
        <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"/>
        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.296195652 0" in="shadowBlurOuter1"/>
      </filter>
      <path id="f" d="M138.968 131.413c-46.322 26.795-46.906 51.132-26.433 85.306 20.474 34.17 66.424 39.67 109.47 14.77 43.048-24.9 52.195-44.62 30.052-81.58s-66.768-45.3-113.09-18.5z"/>
      <filter id="e" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox">
        <feMorphology radius=".5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/>
        <feOffset dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
        <feMorphology radius="1" in="SourceAlpha" result="shadowInner"/>
        <feOffset dy="2" in="shadowInner" result="shadowInner"/>
        <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"/>
        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.295572917 0" in="shadowBlurOuter1"/>
      </filter>
      <path id="h" d="M76.48 64.088c58.662-55.903 183.478-44.044 238.11 12.32 54.63 56.366 44.457 165.117-13.033 219.902-57.49 54.786-162.94 63.964-221.474 3.573-58.533-60.39-62.267-179.89-3.604-235.795zM339.165 185.88c7.73-71.172-79.245-151.234-152.624-153.315-73.38-2.08-139.98 74.054-147.67 144.8-7.68 70.748 33.04 148.165 115.6 150.505 82.56 2.347 176.97-70.81 184.7-141.99z"/>
      <filter id="g" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox">
        <feMorphology radius=".5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/>
        <feOffset dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
        <feMorphology radius="1" in="SourceAlpha" result="shadowInner"/>
        <feOffset dy="2" in="shadowInner" result="shadowInner"/>
        <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"/>
        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.299762228 0" in="shadowBlurOuter1"/>
      </filter>
      <path id="j" d="M199.172 9.56c81.397 3.528 157.927 92.576 153.68 178.11-4.245 85.536-87.826 166.565-170.61 162.977-82.785-3.588-163.546-91.47-159.287-177.274C27.215 87.57 117.775 6.033 199.172 9.56z"/>
      <filter id="i" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox">
        <feMorphology radius="1.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/>
        <feOffset dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
        <feMorphology radius="1.5" in="SourceAlpha" result="shadowInner"/>
        <feOffset dy="2" in="shadowInner" result="shadowInner"/>
        <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"/>
        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.301375679 0" in="shadowBlurOuter1"/>
      </filter>
      <path id="l" d="M243.842 30.112c-83.63-.115-228.656 31.442-228.656 118.904 0 87.46 56.216 203.14 140.148 203.253 83.932.11 201.215-87.29 201.215-173.54 0-86.25-29.08-148.51-112.71-148.63zm-151.24 0C152.648-20.303 247.914-3.55 300.858 52.667c52.944 56.218 47.437 195.365-10.88 244.326-58.32 48.962-184.987 55.357-237.12 0C.726 241.636 32.553 80.526 92.6 30.113zM69.43 92.706c43.617-60.737 178.406-112.747 237.99-69.9 59.584 42.85 49.17 179.218 3.146 243.307-46.025 64.09-148.233 88.056-209.775 43.8S25.82 153.443 69.43 92.706zm122.076-72.29c81.102 4.212 156.778 93.286 155.165 170.72-1.61 77.434-79.61 151.76-161.79 147.49-82.18-4.27-161.26-85.066-159.61-164.188C26.92 95.318 110.41 16.2 191.51 20.415zm-138.194 86.35c29.684-77.284 124.88-130.385 188.063-82.62 63.182 47.767 77.944 196.953 52.117 264.196-25.828 67.242-104.807 84.29-167.703 36.74-62.9-47.546-102.17-141.028-72.48-218.312zm312.76-9.042c32.985 70.32-50.977 224.946-117.938 256.46-66.96 31.512-209.062-46.328-240.57-113.494C-23.94 173.526 51.794 72.12 118.127 40.9 184.46 9.684 333.087 27.406 366.07 97.726zM73.645 109.372c-31.43 59.343-43.39 209.354 7.585 241.368 50.975 32.014 179.275-44.542 210.86-104.177 31.582-59.635 23.706-146.67-33.325-182.488-57.03-35.817-153.69-14.046-185.12 45.297zm174.7-56.705C175.41 36.447 78.13 98.674 52.86 155.887c-25.273 57.213 12.09 136.9 82.5 152.56 70.41 15.657 202.05 3.596 228.43-56.12 26.377-59.717-42.51-183.44-115.445-199.66zM70.407 26.533c67.274-31.266 205.366 33.278 241.086 89.65 35.72 56.374-1.448 157.59-62.592 186.005-61.14 28.417-155.68-18.58-187.98-69.55-32.29-50.97-57.78-174.84 9.49-206.105zm158.96 32.257c-72.753-12.053-150.34 16.56-174.86 77.857-24.524 61.3 5.745 152.743 77.833 164.686 72.088 11.942 170.156-70.078 190.237-120.274 20.08-50.2-20.46-110.22-93.21-122.27zm-138.97 57.342c47.205-48.598 113.99-79.05 160.89-38.042 46.9 41.007 54.46 145.266 11.88 189.105-42.583 43.84-147.59 21.615-184.88-10.993-37.295-32.608-35.09-91.473 12.11-140.07zm81.415-38.542c46.902-19.646 109.055-7.775 121.125 54.24 12.07 62.015-29.244 141.95-78.895 162.748-49.65 20.798-123.298-17.06-134.274-73.455C68.792 164.726 124.91 97.236 171.812 77.59zm-93.184 68.528c38.8-49.517 125.857-77.468 172.498-57.05 46.64 20.42 63.867 99.46 28.237 144.93-35.63 45.47-91.128 105.775-140.864 84-49.74-21.773-98.68-122.363-59.88-171.88zm41.355-47.29c63.402-12.5 142.877 3.428 164.364 46.957 21.488 43.53-25.07 116.047-78.682 126.616-53.613 10.57-119.792-47.87-137.613-83.97-17.82-36.1-11.47-77.1 51.93-89.59zm34.94-22.73c55.548-1.1 127.215 78.463 122.13 124.01-5.084 45.55-103.313 68.725-143.737 69.525-40.423.8-75.887-4.622-69.112-65.315 6.776-60.694 35.17-127.122 90.718-128.22zm-65.906 64.4c15.347-43.71 110.633-55.103 150.765-45.38 40.13 9.724 63.042 41.05 44.88 92.78-18.162 51.73-8.06 88.738-108.61 88.738-100.553 0-102.38-92.428-87.035-136.14z"/>
      <filter id="k" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox">
        <feMorphology radius=".5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/>
        <feOffset dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
        <feMorphology radius="1" in="SourceAlpha" result="shadowInner"/>
        <feOffset dy="2" in="shadowInner" result="shadowInner"/>
        <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"/>
        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.299790534 0" in="shadowBlurOuter1"/>
      </filter>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <g transform="rotate(-1 317.177 -54.53)">
        <use fill="#000" filter="url(#a)" xlink:href="#b"/>
        <use stroke="#565151" xlink:href="#b"/>
      </g>
      <g transform="rotate(-1 317.177 -54.53)">
        <use fill="#000" filter="url(#c)" xlink:href="#d"/>
        <use stroke="#565151" xlink:href="#d"/>
      </g>
      <g transform="rotate(-1 317.177 -54.53)">
        <use fill="#000" filter="url(#e)" xlink:href="#f"/>
        <use stroke="#565151" xlink:href="#f"/>
      </g>
      <g transform="rotate(-1 317.177 -54.53)">
        <use fill="#000" filter="url(#g)" xlink:href="#h"/>
        <use stroke="#565151" xlink:href="#h"/>
      </g>
      <g transform="rotate(-1 317.177 -54.53)">
        <use fill="#000" filter="url(#i)" xlink:href="#j"/>
        <use stroke="#565151" stroke-opacity=".357" stroke-width="3" xlink:href="#j"/>
      </g>
      <g transform="rotate(-1 317.177 -54.53)">
        <use fill="#000" filter="url(#k)" xlink:href="#l"/>
        <use stroke="#565151" xlink:href="#l"/>
      </g>
      <path stroke="#565151" stroke-width="3" d="M179.83 113.647c-42.154-.923-82.86 42.582-84.978 72.8-2.12 30.218 30.097 57.562 75.768 58.562 45.672 1 95.297-20.12 97.726-54.77 2.43-34.65-46.363-75.68-88.517-76.6z"/>
      <text fill="#1D3600" transform="rotate(179 168.3 1.303)" font-family="AvenirNext-Regular, Avenir Next" font-size="48">
        <tspan x="86.932" y="196">Home</tspan>
      </text>
    </g>
  </svg>
)

export default Home

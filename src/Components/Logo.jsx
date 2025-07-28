import React from 'react'

function Logo({width='100px'}) {
  return (
<svg width="160" height="40" viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
  <text x="0" y="28"
        font-family="'Poppins', sans-serif"
        font-size="24"
        font-weight="600"
        fill="#4F46E5">
    Your
    <tspan fill="#10B981">Blog</tspan>
  </text>
</svg>


  )
}

export default Logo
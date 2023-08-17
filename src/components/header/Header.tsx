import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMiddle from './HeaderMiddle'
import HeaderBottom from './HeaderBottom'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      <HeaderTop/>
      <div className=' flex flex-row gap-2 items-center'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M11.25 3L5.25 9L11.25 15" stroke="#879FA8" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
<p className=' text-base12 font-normal'>Home</p>

</div> 
      <HeaderMiddle/>
      <HeaderBottom/>
      </div>
  )
}

export default Header
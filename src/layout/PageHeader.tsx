import React from 'react'

import Logo from '../assets/Logo.png'
import { Menu } from 'lucide-react'

export default function PageHeader() {
  return (
    <div className='flex gap-10 lg:gap-20 justify-between'>
        <div className='flex gap-4 items-center flex-shrink-0'>
            <button>
                <Menu />
            </button>
            <a href="/">
                <img src={Logo} className='h-6' alt="" />
            </a>
        </div>
        <div>2</div>
        <div>3</div>
    </div>
  )
}

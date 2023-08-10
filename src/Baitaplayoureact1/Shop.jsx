import React from 'react'
import Header from './Header'
import Banner from './Banner'
import ShopItem from './ShopItem'
import Promotion from './Promotion'

export default function Shop() {
  return (
    <div  className='bg-light'>
        <Header/>
        <Banner/>
        <ShopItem/>
        <Promotion/>
    </div>
  )
}

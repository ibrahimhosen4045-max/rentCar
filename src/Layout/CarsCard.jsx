import React from 'react'
import Cars from '../Component2/Cars'
import CarsHero from '../Component2/CarsHero'

import CarsB from '../Component2/CarsB'

const CarsCard = () => {
  return (
    <div className='bg-black/5'>
      <CarsHero></CarsHero>
      <Cars></Cars>
      <CarsB></CarsB>
    </div>
  )
}

export default CarsCard

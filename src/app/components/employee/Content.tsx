import React from 'react'
import Releases from './Releases'
import Tasklist from './Tasklist'

export default function Content() {
  return (
    <div className='flex justify-between'>
      <Releases />
      <Tasklist />
    </div>
  )
}

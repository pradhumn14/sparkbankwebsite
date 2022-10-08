import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='flex flex-col w-80 h-screen p-2 bg-gray-600'>
        <Link to='/assignment'>Assignments</Link>
        <Link to='/lecture'>Lectures</Link>
    </div>
  )
}

export default Sidebar;
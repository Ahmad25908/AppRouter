import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div className='bg-slate-600'>

<div><h1 ><i>My Home Page </i></h1>
     <ul>
       <li><Link href='/board'><h1 className='flex flex-justice-center'>Board</h1></Link></li>
        <li><Link href='/dashboard'><h1>Dashboard</h1></Link></li>
        <li><Link href='/link'><h1>Link</h1></Link></li>
        <li><Link href='/UseRouter'><h1>Setting</h1></Link></li>
        <li><Link href='/profile'><h1>Profile </h1></Link></li>
        
     </ul></div>
    </div>
  )
}

export default page


import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div>
<h1 >My Link Page</h1>      
   <Link href='/'><h1 className='text-3xl'>Home Page</h1></Link>
    </div>
  )
}

export default page
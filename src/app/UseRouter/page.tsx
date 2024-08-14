
'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <>
    <button type="button" onClick={() => router.push('/')}>
      <h1 className='text-bold text-2xl text-black'>Home</h1>
    </button>
  </>)
}
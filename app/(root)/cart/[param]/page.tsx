'use client'
import useCart from '@/hooks/useCart'
import { useRouter } from 'next/navigation'
import React from 'react'

const PageCart = (param:any) => {
    console.log(param)
    const {removeAll} = useCart()
    const router = useRouter()
    if(param === "success=1")
    {
        removeAll()
        router.push("/")
    }
  return 
}

export default PageCart

"use client"

import Header from "@/components/Header"
import { Metadata } from "next"
import { useRouter } from "next/navigation"

export const metadata: Metadata = {
  title: 'My application main title',
  description: 'This is the main description of the application'
}

export default function Page() {
  const router = useRouter()
  const name = "Guilaume"
  return <main> 
  <Header name={name} />  
    
  <ul>
  <li onClick={() => router.push("/profile/1")}>Profile 1</li>
  <li onClick={() => router.push("/profile/2")}>Profile 2</li>
  <li onClick={() => router.push("/profile/3")}>Profile 3</li>
</ul></main>
}
"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Profile() {
  const router = useRouter()

  return <div>
    my list of profiles 
  <ul>
    <Link href="/profile/1">Profile 1</Link>
    <Link href="/profile/2">Profile 2</Link>
    <Link 
      prefetch={true}
      href={{
      pathname: "/profile/3",
      query: {
        userName: "Guilaume",
        userId: 12,
        person: JSON.stringify({age: 18})
      }
    }}>Profile 3</Link>
    {/* <li onClick={() => router.push("/profile/1")}>Profile 1</li>
    <li onClick={() => router.push("/profile/2")}>Profile 2</li>
    <li onClick={() => router.push("/profile/3")}>Profile 3</li> */}
  </ul>
  </div>
}
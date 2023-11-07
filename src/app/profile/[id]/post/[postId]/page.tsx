"use client"

import { useParams } from "next/navigation"

export default function ProfileIDPostIDPost() {
  const params = useParams()
  console.log('params.id', params.id)
  console.log('params.postId', params.postId)
  return <div>my id profile's post page post</div>
}
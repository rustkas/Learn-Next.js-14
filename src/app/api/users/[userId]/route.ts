import { NextResponse } from "next/server";
import data from '@/data.json'

interface Info {
  id: number
}
export async function GET(request: Request, context: any) {
  const {params} = context
  const user = data.filter(x => params.userId === x.id.toString())

   return NextResponse.json({
    user
  })
}

export async function POST(request: Request, context: any) {
  const {params} = context
  const user = data.filter(x => params.userId === x.id.toString())

   return NextResponse.json({
    user
  })
}
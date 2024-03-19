import { GPTDescription } from '@/entities/Hero'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: Request) {
    const body = (await req.json()) as GPTDescription
    return NextResponse.json('Good!')
}

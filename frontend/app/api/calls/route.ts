import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/db/prisma";

export async function GET() {
  try {
    const calls = await prisma.call.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        lead: true,
      },
    });

    return NextResponse.json({
      success: true,
      calls,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch calls",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const call = await prisma.call.create({
      data: {
        phoneNumber: body.phoneNumber,
        customerName: body.customerName,
        direction: body.direction,
        status: body.status,
        duration: body.duration || 0,
      },
    });

    return NextResponse.json({
      success: true,
      call,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to create call",
      },
      {
        status: 500,
      }
    );
  }
}
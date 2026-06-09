import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db/prisma";

export async function PATCH(
  req: NextRequest,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    const { id } = await context.params;

    const body = await req.json();

    const updatedCall =
      await prisma.call.update({
        where: {
          id,
        },
        data: body,
      });

    return NextResponse.json({
      success: true,
      call: updatedCall,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to update call",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    const { id } = await context.params;

    await prisma.call.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to delete call",
      },
      {
        status: 500,
      }
    );
  }
}
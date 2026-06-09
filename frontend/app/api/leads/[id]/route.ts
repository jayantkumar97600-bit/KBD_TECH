import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db/prisma";
import { z } from "zod";
import { leadUpdateSchema, leadStatusSchema } from "../../../../lib/validation/lead";

export async function GET() {
  // Not used but required for completeness
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function PUT(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();
    if (!id) {
      return NextResponse.json({ error: "Missing lead ID" }, { status: 400 });
    }
    const body = await req.json();
    const parsed = leadUpdateSchema.parse(body);
    const updatedLead = await prisma.lead.update({
      where: { id },
      data: {
        name: parsed.name,
        email: parsed.email,
        phone: parsed.phone,
        // status may be omitted in full update
        ...(parsed.status && { status: parsed.status }),
      },
    });
    return NextResponse.json({ success: true, lead: updatedLead });
  } catch (error) {
    console.error(error);
    const message = error instanceof z.ZodError ? error.issues.map(e => e.message).join(", ") : "Failed to update lead";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

// Partial updates, e.g., status change
export async function PATCH(req: NextRequest) {
  try {
    const url = new URL(req.url);

    const rawId = url.pathname.split("/").pop();

    if (!rawId) {
      return NextResponse.json(
        { error: "Missing lead ID" },
        { status: 400 }
      );
    }

    const id = rawId;

    const body = await req.json();

    const parsed = leadStatusSchema.parse(body);

    const updatedLead = await prisma.lead.update({
      where: {
        id: id,
      },
      data: {
        status: parsed.status,
      },
    });

    return NextResponse.json({
      success: true,
      lead: updatedLead,
    });
  } catch (error) {
    console.error(error);

    const message =
      error instanceof z.ZodError
        ? error.issues.map((e) => e.message).join(", ")
        : "Failed to update status";

    return NextResponse.json(
      { error: message },
      { status: 400 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();
    if (!id) {
      return NextResponse.json({ error: "Missing lead ID" }, { status: 400 });
    }
    await prisma.lead.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to delete lead" }, { status: 500 });
  }
}

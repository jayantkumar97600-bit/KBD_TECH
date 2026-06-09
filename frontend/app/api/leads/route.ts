import { NextResponse } from "next/server";
import prisma from "../../../lib/db/prisma";
import { z } from "zod";
import { leadCreateSchema } from "../../../lib/validation/lead";

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(leads);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = leadCreateSchema.parse(body);
    const lead = await prisma.lead.create({
      data: {
        name: parsed.name,
        email: parsed.email,
        phone: parsed.phone,
        status: parsed.status ?? "NEW",
        organization: { create: { name: "Default Organization" } },
      },
    });
    return NextResponse.json(lead);
  } catch (error) {
    console.error(error);
    const message = error instanceof z.ZodError ? error.issues.map(e => e.message).join(", ") : "Failed to create lead";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

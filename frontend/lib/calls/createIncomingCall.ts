import prisma from "../db/prisma";

interface IncomingCallData {
  phoneNumber: string;
}

export async function createIncomingCall(
  data: IncomingCallData
) {
  const existingLead =
    await prisma.lead.findFirst({
      where: {
        phone: data.phoneNumber,
      },
    });

  let leadId: string | undefined =
    existingLead?.id;

  // AUTO CREATE LEAD
  if (!existingLead) {
    const newLead =
      await prisma.lead.create({
        data: {
          name: data.phoneNumber,
          email: `${Date.now()}@temp.com`,
          phone: data.phoneNumber,
          status: "NEW",
        },
      });

    leadId = newLead.id;
  }

  const call = await prisma.call.create({
  data: {
    phoneNumber: data.phoneNumber,

    direction: "INBOUND",

    status: "IN_PROGRESS",

    startedAt: new Date(),

    ...(leadId && {
      lead: {
        connect: {
          id: leadId,
        },
      },
    }),
  },
});

  return call;
}
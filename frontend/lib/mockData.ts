// Mock data for UI components – used during development only.

export const leads = [
  {
    id: 1,
    name: "John Doe",
    company: "Acme Corp",
    phone: "(555) 123‑4567",
    email: "john.doe@acme.com",
    status: "New",
    assignedAgentId: 1,
    lastContact: "2024-09-02T10:15:00Z",
    source: "Website",
    notes: [
      { id: 1, author: "Receptionist‑A", content: "Initial inquiry received.", timestamp: "2024-09-01T09:00:00Z" },
    ],
    activities: [
      { id: 1, type: "call", description: "Phone call scheduled.", timestamp: "2024-09-02T10:15:00Z" },
    ],
    createdAt: "2024-09-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "Beta LLC",
    phone: "(555) 987‑6543",
    email: "jane.smith@beta.com",
    status: "Contacted",
    assignedAgentId: 2,
    lastContact: "2024-09-06T14:30:00Z",
    source: "Referral",
    notes: [],
    activities: [],
    createdAt: "2024-09-05",
  },
  {
    id: 3,
    name: "Bob Lee",
    company: "Gamma Inc",
    phone: "(555) 555‑1212",
    email: "bob.lee@gamma.com",
    status: "Qualified",
    assignedAgentId: 1,
    lastContact: "2024-09-08T09:45:00Z",
    source: "Ads",
    notes: [],
    activities: [],
    createdAt: "2024-09-07",
  },
];

export const conversations = [
  { id: 1, participant: "Acme Corp", lastMessage: "Thanks for the info!", timestamp: "2024-09-10T14:32:00Z", unread: false, status: "active" },
  { id: 2, participant: "Beta LLC", lastMessage: "Can we schedule a demo?", timestamp: "2024-09-11T09:15:00Z", unread: true, status: "pending" },
  { id: 3, participant: "Gamma Inc", lastMessage: "Looking forward to the proposal.", timestamp: "2024-09-12T11:45:00Z", unread: false, status: "escalated" },
];

export const appointments = [
  { id: 1, title: "Demo with Acme", time: "2024-09-15 10:00 AM", status: "Upcoming" },
  { id: 2, title: "Follow‑up Call", time: "2024-09-16 02:30 PM", status: "Upcoming" },
  { id: 3, title: "Strategy Meeting", time: "2024-09-18 09:00 AM", status: "Upcoming" },
];

export const aiAgents = [
  {
    id: 1,
    name: "Agent Alpha",
    businessName: "Acme Corp",
    industry: "Retail",
    provider: "ElevenLabs",
    status: "Active",
    callsHandled: 452,
    appointmentsBooked: 34,
    avgResponseTime: "1.2s",
    lastActive: "2024-09-12T15:30:00Z",
    avatarUrl: "",
    workflowSettings: {
      appointmentBooking: true,
      leadQualification: false,
      smsFollowUp: true,
      whatsappIntegration: false,
      voicemailHandling: true,
      callTransfer: false,
    },
  },
  {
    id: 2,
    name: "Agent Beta",
    businessName: "Beta LLC",
    industry: "Healthcare",
    provider: "OpenAI",
    status: "Paused",
    callsHandled: 128,
    appointmentsBooked: 12,
    avgResponseTime: "2.0s",
    lastActive: "2024-09-10T10:12:00Z",
    avatarUrl: "",
    workflowSettings: {
      appointmentBooking: true,
      leadQualification: true,
      smsFollowUp: false,
      whatsappIntegration: true,
      voicemailHandling: false,
      callTransfer: true,
    },
  },
  {
    id: 3,
    name: "Agent Gamma",
    businessName: "Gamma Inc",
    industry: "Finance",
    provider: "Azure",
    status: "Active",
    callsHandled: 300,
    appointmentsBooked: 25,
    avgResponseTime: "1.5s",
    lastActive: "2024-09-11T08:45:00Z",
    avatarUrl: "",
    workflowSettings: {
      appointmentBooking: false,
      leadQualification: true,
      smsFollowUp: true,
      whatsappIntegration: true,
      voicemailHandling: true,
      callTransfer: false,
    },
  },
];

export const notifications = [
  { id: 1, message: "New lead from Acme Corp", time: "5m ago" },
  { id: 2, message: "AI Agent Receptionist‑A handled a call", time: "12m ago" },
  { id: 3, message: "Appointment scheduled with Beta LLC", time: "30m ago" },
];

export const revenueData = [
  { date: "2024-09-01", revenue: 1200 },
  { date: "2024-09-02", revenue: 1500 },
  { date: "2024-09-03", revenue: 1700 },
  { date: "2024-09-04", revenue: 1300 },
  { date: "2024-09-05", revenue: 1900 },
];

export const calls = [
  { id: 1, caller: "John Doe", duration: "00:02:15", status: "completed", sentiment: "positive", agent: "Agent Alpha", timestamp: "2024-09-10T14:32:00Z" },
  { id: 2, caller: "Jane Smith", duration: "00:01:05", status: "missed", sentiment: "negative", agent: "Agent Beta", timestamp: "2024-09-10T15:10:00Z" },
  { id: 3, caller: "Bob Lee", duration: "00:03:45", status: "escalated", sentiment: "neutral", agent: "Agent Gamma", timestamp: "2024-09-10T16:20:00Z" },
];

// Mock messages per conversation
export const messages = [
  { id: 1, conversationId: 1, sender: "Acme Corp", content: "Thanks for the info!", timestamp: "2024-09-10T14:33:00Z", sentiment: "positive" },
  { id: 2, conversationId: 2, sender: "Beta LLC", content: "Can we schedule a demo?", timestamp: "2024-09-11T09:16:00Z", sentiment: "neutral" },
  { id: 3, conversationId: 3, sender: "Gamma Inc", content: "Looking forward to the proposal.", timestamp: "2024-09-12T11:46:00Z", sentiment: "positive" },
];

export const callAnalytics = [
  { hour: "08", calls: 5 },
  { hour: "09", calls: 9 },
  { hour: "10", calls: 12 },
  { hour: "11", calls: 7 },
  { hour: "12", calls: 4 },
];

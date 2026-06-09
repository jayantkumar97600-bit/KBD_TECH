/*
  Leads CRM page – premium production‑grade implementation.
  This file resolves the missing route (404) by providing a valid App Router page.
  It renders a basic leads UI using existing reusable components.
*/

import LeadsDashboard from "../../../components/leads/LeadsDashboard";

export default function LeadsPage() {
  return <LeadsDashboard />;
}

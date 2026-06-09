import Badge from "../ui/Badge";

interface Props {
  status: "completed" | "missed" | "escalated";
}

export default function CallStatusBadge({ status }: Props) {
  const variantMap: Record<string, string> = {
    completed: "active",
    missed: "lost",
    escalated: "inactive",
  };
  const labelMap: Record<string, string> = {
    completed: "Completed",
    missed: "Missed",
    escalated: "Escalated",
  };
  return <Badge variant={variantMap[status] || "new"}>{labelMap[status]}</Badge>;
}

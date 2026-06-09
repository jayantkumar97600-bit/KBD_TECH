import Badge from "../ui/Badge";

interface Props {
  sentiment: "positive" | "negative" | "neutral";
}

export default function SentimentBadge({ sentiment }: Props) {
  const variantMap: Record<string, string> = {
    positive: "active",
    negative: "lost",
    neutral: "inactive",
  };
  const labelMap: Record<string, string> = {
    positive: "Positive",
    negative: "Negative",
    neutral: "Neutral",
  };
  return <Badge variant={variantMap[sentiment] || "new"}>{labelMap[sentiment]}</Badge>;
}

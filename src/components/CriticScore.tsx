import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color =
    score > 80
      ? "green"
      : score > 60
      ? "yellow"
      : score >= 40
      ? "orange"
      : score < 40
      ? "red"
      : "";
  return (
    <Badge px={2} borderRadius="4px" fontSize="sm" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;

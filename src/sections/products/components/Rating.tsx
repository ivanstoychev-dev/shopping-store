import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

type RatingProps = {
  value: number;
  max?: number;
  min?: number;
  size?: "small" | "medium" | "large";
};

export default function Rating({
  value,
  max = 5,
  min = 0,
  size = "medium",
}: RatingProps) {
  const clampedValue = Math.max(min, Math.min(value, max));

  const stars = Array.from({ length: max }, (_, i) =>
    i < clampedValue ? 1 : 0,
  );

  return (
    <div className="flex gap-1 items-center">
      {stars.map((filled, idx) =>
        filled ? (
          <StarIcon key={idx} fontSize={size} className="text-yellow-500" />
        ) : (
          <StarBorderIcon key={idx} fontSize={size} className="text-gray-300" />
        ),
      )}
    </div>
  );
}

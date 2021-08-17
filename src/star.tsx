import { FC } from "react";
import { FaStar } from "react-icons/fa";

interface StarProps {
  selected?: boolean;
  onSelect?: () => void;
}

export const Star: FC<StarProps> = ({ onSelect, selected = false }) => {
  return <FaStar onClick={onSelect} color={selected ? "orange" : "gray"} />;
};

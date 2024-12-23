import type { TaskBoxProps } from "../../utils/types";

export default function TaskBox({
  name,
  priority,
  points,
  asignee,
  dueDate,
}: TaskBoxProps) {
  const formattedDate = new Date(dueDate).toLocaleDateString();

  return (
    <li
      className={`border-accent mb-3 flex h-9 w-3/4 items-center justify-between rounded-lg border px-2 ${
        priority === "Low"
          ? "bg-low hover:bg-[#bfebb2]"
          : priority === "Medium"
            ? "bg-mid hover:bg-[#ffed9c]"
            : priority === "High"
              ? "bg-high hover:bg-[#ffb3b3]"
              : priority === "Urgent"
                ? "text-#B91C1C border-black bg-[#a62a3f]"
                : ""
      }`}
    >
      <h3 className="w-1/4 text-left font-bold">{name}</h3>
      <p className="w-1/4 text-center"> {points}</p>
      <p className="w-1/4 text-center"> {asignee}</p>
      <p className="w-1/4 text-right"> {formattedDate}</p>
    </li>
  );
}

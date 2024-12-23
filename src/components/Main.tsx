import Dialog from "./ui/Dialog";
import Form from "./Form";
import { useState, useEffect, useId } from "react";
import { getFromLocalStorage } from "../utils/localStorage";
import TaskBox from "./ui/TaskBox";
import type { Task } from "../utils/types";

export default function Main() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const id = useId();

  const openDialog = () => {
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const localStorageTasks = getFromLocalStorage("tasks");

  return (
    <main className="bg-whiteDefault flex flex-col items-center">
      <div className="border-accent mb-4 flex h-20 w-3/4 items-center justify-between border-b">
        <h2 className="text-blueDefault flex cursor-default items-center text-4xl">
          Home
        </h2>
        <button
          onClick={openDialog}
          className="bg-accent h-10 w-10 rounded-full text-xl"
        >
          +
        </button>
      </div>
      <ul className="flex w-full flex-col items-center">
        <li className="border-accent mb-4 flex w-3/4 items-center justify-between px-2 font-semibold">
          <div className="w-1/4 text-left">Task</div>
          <div className="w-1/4 text-center">Story Points</div>
          <div className="w-1/4 text-center">Assignee</div>
          <div className="w-1/4 text-right">Due Date</div>
        </li>
        {localStorageTasks
          .sort((a: Task, b: Task) => (a.priority === "Urgent" ? -1 : 1))
          .map((task: Task, index: number) => (
            <TaskBox
              key={`${id}-${index}`}
              name={task.taskName}
              priority={task.priority}
              points={task.storyPoints}
              asignee={task.asignee}
              dueDate={task.dueDate}
            />
          ))}
      </ul>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog} title="Add New Task">
        <Form onClose={closeDialog} />
      </Dialog>
    </main>
  );
}

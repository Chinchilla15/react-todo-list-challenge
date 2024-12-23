import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import taskSchema from "../utils/zodSchema";
import { z } from "zod";
import FormField from "./ui/FormField";
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useEffect } from "react";

type Task = z.infer<typeof taskSchema>;

export default function Form({ onClose }: { onClose: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Task>({
    resolver: zodResolver(taskSchema),
  });

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  const onSubmit: SubmitHandler<Task> = (data) => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(data);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    reset();
    onClose();
  };

  const onCancel = () => {
    reset();
    onClose();
  };

  const priorityOptions = [
    { value: "Urgent", label: "Urgent" },
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-center justify-center gap-4"
    >
      <FormField
        label="Task Name"
        id="name"
        type="text"
        register={register}
        name="taskName"
        error={errors.taskName}
        placeholder="e.g. Fix the bug"
      />
      <FormField
        label="Priority"
        id="priority"
        type="select"
        register={register}
        name="priority"
        error={errors.priority}
        options={priorityOptions}
      />
      <FormField
        label="Story Points"
        id="points"
        type="number"
        register={register}
        name="storyPoints"
        error={errors.storyPoints}
        placeholder="1-10"
      />
      <FormField
        label="Assignee"
        id="asignee"
        type="text"
        register={register}
        name="asignee"
        error={errors.asignee}
        placeholder="e.g. John Doe"
      />
      <FormField
        label="Due Date"
        id="dueDate"
        type="date"
        register={register}
        name="dueDate"
        error={errors.dueDate}
      />

      <div className="m-2 flex gap-8">
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          className="rounded-full bg-green-600 p-2 text-3xl text-white"
        >
          <FaCheck />
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-full bg-red-600 p-2 text-3xl text-white"
        >
          <FaXmark />
        </button>
      </div>
    </form>
  );
}

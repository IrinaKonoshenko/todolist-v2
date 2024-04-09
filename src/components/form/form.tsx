import { useState } from "react";

interface FormProps {
  onSave: (text: string) => void;
}

export function Form({ onSave }: FormProps) {
  const [value, setValue] = useState("");
  return (
    <div className="mt-0.5 flex justify-between items-center gap-2 py-2 px-2">
      <input
        placeholder="write your plane here"
        className="grow border border-blue-300 rounded-md p-3 font-normal text-lg text-gray-900"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          if (value.trim() === "") {
            return;
          }
          onSave(value);
          setValue("");
        }}
        className="border border-blue-300 rounded-md p-3 font-medium text-lg text-gray-600"
      >
        Add task
      </button>
    </div>
  );
}

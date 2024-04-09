import { useEffect, useState } from "react";

interface InputProps {
  text: string;
  checked: boolean;
  onChange?: (text: string, checked: boolean) => void;
}

export function Input({ text, checked, onChange }: InputProps) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(text);

  useEffect(() => {
    setValue(text);
  }, [text]);

  function onClick() {
    setEdit(!edit);

    if (!edit) {
      return;
    }

    onChange?.(value, checked);
  }

  return (
    <div className="mt-0.5 flex justify-between items-center gap-2 py-2 px-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange?.(text, !checked)}
      />
      {edit ? (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="write your plane here"
          className="grow border border-blue-300 rounded-md p-3 font-normal text-lg text-gray-900"
        />
      ) : (
        <p className="grow border border-blue-300 rounded-md p-3 font-normal text-lg text-gray-900">
          {text}
        </p>
      )}
      <button
        onClick={onClick}
        className="border border-blue-300 rounded-md p-3 font-medium text-lg text-gray-600"
      >
        {edit ? "Ok" : "Edit"}
      </button>
    </div>
  );
}

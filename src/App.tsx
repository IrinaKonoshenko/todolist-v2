import { useEffect, useState } from "react";
import "./App.css";
import { Form, Input } from "./components";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [items, setItems] = useState<
    {
      id: number;
      text: string;
      checked: boolean;
    }[]
  >([]);

  useEffect(() => {
    const data = localStorage.getItem("task");

    if (data) {
      setItems(JSON.parse(data));
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("task", JSON.stringify(items));
    }
  }, [items]);

  function onChange(id: number, text: string, checked: boolean) {
    const newItems = items.map((a) => {
      if (a.id === id) {
        return {
          ...a,
          text,
          checked,
        };
      } else {
        return a;
      }
    });

    setItems(newItems);
  }

  return (
    <div className="bg-slate-100 max-w-lg mx-auto border border-blue-900 rounded-xl overflow-hidden">
      <h3 className="py-4 border-b border-b-blue-900 rounded-b-xl bg-slate-400 flex justify-center items-center font-bold text-xl text-gray-900">
        ToDoList v2.0
      </h3>
      <Form
        onSave={(text) =>
          setItems([
            ...items,
            { id: items.length + 1, text: text, checked: false },
          ])
        }
      />
      {isLoaded ? (
        <div>
          {items.map((item) => (
            <Input
              checked={item.checked}
              text={item.text}
              key={item.id}
              onChange={(t, c) => onChange(item.id, t, c)}
            />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;

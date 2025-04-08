"use client";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function doing() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  async function listTodos() {
    const result = await client.models.Todo.list({});
    setTodos(result.data);
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    const content = window.prompt("Todo content");
    if (content) {
      client.models.Todo.create({ content }).then(() => listTodos());
    }
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id }).then(() => listTodos());
  }

  return (
    <div>
      <h2>Jemal's todos</h2>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
            {todo.content}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "20px" }}>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a
          href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Review next steps of this tutorial.
        </a>
      </div>
    </div>
  );
}

/**
 * Prompts used:
 * - "Guide-moi étape par étape pour mettre en place le devoir."
 * - "Écris la fonction fetchAndFilterTodos qui utilise fetch, vérifie res.ok,
 *    parse le JSON, filtre completed:true, log le nombre et les titres,
 *    et gère les erreurs avec try...catch."
 */

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

export async function fetchAndFilterTodos(): Promise<Todo[]> {
  try {
    const res = await fetch(TODOS_URL);

    if (!res.ok) {
      console.log("Network response was not ok");
      return [];
    }

    const data: Todo[] = await res.json();
    const completed = data.filter((t) => t.completed === true);

    console.log("Number of completed tasks:", completed.length);
    console.log("Titles of completed tasks:", completed.map((t) => t.title));

    return completed;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.log("Network call failed:", message);
    return [];
  }
}

fetchAndFilterTodos();

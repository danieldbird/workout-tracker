export async function addExercise() {}

export async function getAll() {
  const res = await fetch("http://localhost:3001/api/v1/exercises/getAll");
  const data = await res.json();
  return data;
}

export async function create(form) {
  console.log(form);
  const res = await fetch("http://localhost:3001/api/v1/exercises/create");
  const data = await res.json();
  return data;
}

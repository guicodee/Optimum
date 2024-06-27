export async function api(id?: number) {
  const url = `http://localhost:3000/cars?/${id}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}
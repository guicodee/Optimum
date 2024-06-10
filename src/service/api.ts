export async function api() {
  const response = await fetch('http://localhost:3000/cars');
  const data = await response.json();

  return data;
}
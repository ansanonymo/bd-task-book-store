export async function getAllBooks() {
  const url = "http://localhost:3000/books";

  const response = await fetch(url);
  const books = await response.json();
  return books;
}

export async function getBook(id) {
  const url = "http://localhost:3000/books?id=" + id;
  const response = await fetch(url);
  const book = await response.json();
  return book[0];
}

export async function postBook(data) {
  const url = "http://localhost:3000/books";
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const body = JSON.stringify(data);

  const response = await fetch(url, {
    method: "POST",
    body: body,
    headers: headers,
  });

  const book = await response.json();
  return book;
}

export async function deleteBook(id) {
  const url = "http://localhost:3000/books/" + id;
  const response = await fetch(url, {
    method: "DELETE",
  });

  const data = await response.json();
  return data;
}

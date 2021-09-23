const filter = document.getElementById("filter");
const postsContainer = document.querySelector(".post-container");
const loader = document.querySelector(".loader");

let limit = 3;
let page = 1;

async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const data = await res.json();
  return data;
}

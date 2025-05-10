const gallery = document.getElementById("gallery");
const loader = document.getElementById("loader");

let start = 0;
const limit = 10;
let isLoading = false;

async function fetchPhotos(startIndex, limitCount) {
  try {
    isLoading = true;
    loader.style.display = "block";

    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${startIndex}&_limit=${limitCount}`);
    if (!response.ok) {
      throw new Error("Failed to fetch photos");
    }

    const photos = await response.json();
    renderPhotos(photos);

    isLoading = false;
    loader.style.display = "none";
  } catch (error) {
    console.error("Error fetching photos:", error);
    loader.textContent = "Something went wrong!";
  }
}

function renderPhotos(photos) {
  photos.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo.url;
    img.alt = photo.title;
    gallery.appendChild(img);
  });
}

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (!isLoading && scrollTop + clientHeight >= scrollHeight - 100) {
    start += limit;
    fetchPhotos(start, limit);
  }
});

fetchPhotos(start, limit);

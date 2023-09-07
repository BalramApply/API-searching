const searchInput = document.getElementById('search-input');
const photoList = document.getElementById('photo-list');

// Function to fetch and display photos
function fetchAndDisplayPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(photos => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredPhotos = photos.filter(photo => photo.title.toLowerCase().includes(searchTerm));

            // Clear previous results
            photoList.innerHTML = '';

            // Display filtered photos
            filteredPhotos.forEach(photo => {
                const listItem = document.createElement('li');
                listItem.classList.add('photo-item');
                listItem.textContent = photo.title;
                photoList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching photos:', error));
}

// Event listener for search input
searchInput.addEventListener('input', fetchAndDisplayPhotos);

// Initial load
fetchAndDisplayPhotos();

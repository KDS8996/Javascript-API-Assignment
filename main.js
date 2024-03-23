// Function to fetch artwork data based on ID
const getArtworkData = async (artworkId) => {
    const response = await fetch(`https://api.artic.edu/api/v1/artworks/${artworkId}`);
    const data = await response.json();
    console.log(data);
    console.log(data.data.artist_title);
    console.log(data.data.description); 

    // Display artwork data in a pop-up or modal
    alert(`Artwork: ${data.data.artist_title}\n\nDescription: ${data.data.description}`);
};

// Function to attach event listeners after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get all artwork elements
    const artworkElements = document.querySelectorAll('.artwork');

    // Iterate over each artwork element and attach event listener
    artworkElements.forEach(artworkElement => {
        artworkElement.addEventListener('click', () => {
            const artworkId = artworkElement.id;
            getArtworkData(artworkId);
        });
    });
});

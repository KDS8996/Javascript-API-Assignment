// Function to fetch artwork data based on ID
function getArtworkData(artworkId) {
    // Dummy data for demonstration
    const artworkData = {
        title: "Title of Artwork",
        artist: "Artist Name",
        description: "Description of Artwork"
    };

    // Display artwork data in a pop-up or modal
    alert(`Artwork: ${artworkData.title}\nArtist: ${artworkData.artist}\nDescription: ${artworkData.description}`);
}

// Get all artwork elements
const artworkElements = document.querySelectorAll('.artwork');

// Iterate over each artwork element and attach event listener
artworkElements.forEach(artworkElement => {
    artworkElement.addEventListener('click', () => {
        const artworkId = artworkElement.id;
        getArtworkData(artworkId);
    });
});

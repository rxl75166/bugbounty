function search() {
  const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultsContainer = document.getElementById('resultsContainer');
  resultsContainer.innerHTML = '';

  if (searchInput === '') {
    return;
  }

  const dataUrl = 'YOUR_EXTERNAL_DATA_URL'; // Replace this with the URL of your text file

  // Fetch data from the URL
  fetch(dataUrl)
    .then(response => response.text())
    .then(data => {
      const bugBountyData = parseData(data);
      const matchingData = bugBountyData.filter(item => {
        const title = item.title.toLowerCase();
        const description = item.description.toLowerCase();
        return title.includes(searchInput) || description.includes(searchInput);
      });

      if (matchingData.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
      } else {
        matchingData.forEach(item => {
          const resultElement = document.createElement('div');
          resultElement.innerHTML = `<h2>${item.title}</h2><p>${item.description}</p>`;
          resultsContainer.appendChild(resultElement);
        });
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      resultsContainer.innerHTML = '<p>An error occurred while fetching data.</p>';
    });
}

function parseData(data) {
  // Implement your parsing logic here
  // The data should be parsed into an array of objects with properties 'title' and 'description'
  // For example:
  /*
  const parsedData = data.split('\n').map(line => {
    const [title, description] = line.split('|');
    return { title, description };
  });
  return parsedData;
  */

  // Replace the above example parsing logic with your own custom parsing logic for your text data
}

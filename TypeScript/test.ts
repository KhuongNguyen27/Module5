async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

fetchData().then(data => console.log('Data:', data)).catch(error => console.log('Error:', error));
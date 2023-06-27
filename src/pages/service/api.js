// api.js

const BASE_URL = 'https://raw.githubusercontent.com/unaivan22/openJson/main/rumahsubsidi.json'; // Replace with your API base URL

export const fetchItems = async () => {
  try {
    const response = await fetch(`${BASE_URL}`);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const fetchItemById = async (itemId) => {
  try {
    const response = await fetch(`${BASE_URL}/${itemId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default { fetchItems, fetchItemById };

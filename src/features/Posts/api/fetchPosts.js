const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async (page = 1, limit = 10) => {
  const response = await fetch(`${API_URL}?_page=${page}&_limit=${limit}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

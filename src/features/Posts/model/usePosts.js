import { useState, useEffect } from 'react';
import { fetchPosts } from '../api/fetchPosts';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const newPosts = await fetchPosts(page);
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Не удалось загрузить посты');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [page]);

  return { posts, loading, setPage, error };
};

export default usePosts;

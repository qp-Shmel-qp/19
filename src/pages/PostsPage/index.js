import React from 'react';
import usePosts from '../../features/Posts/model/usePosts';
import PostsList from '../../features/Posts/ui/PostsList';
import Button from '../../shared/ui/Button';
import styles from './PostsPage.module.css'; 

const PostsPage = () => {
  const { posts, loading, setPage } = usePosts();

  return (
    <div className={styles.container}>
      <h1>Посты</h1>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <PostsList posts={posts} />
      )}
      <Button onClick={() => setPage(prevPage => prevPage + 1)} disabled={loading}>
        {loading ? 'Загрузка...' : 'Загрузить ещё'}
      </Button>
    </div>
  );
};

export default PostsPage;
console.log(posts);
{error && <p style={{ color: 'red' }}>{error}</p>} {}


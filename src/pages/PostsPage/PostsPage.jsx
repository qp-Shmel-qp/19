import React from 'react';
import usePosts from '../features/Posts/model/usePosts';
import PostsList from '../features/Posts/ui/PostsList';
import Button from '../shared/ui/Button';

const PostsPage = () => {
  const { posts, loading, setPage, error } = usePosts();

  const loadMorePosts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1>Posts</h1>
      {error && <p>{error}</p>}
      <PostsList posts={posts} />
      {loading && <p>Loading...</p>}
      {!loading && <Button onClick={loadMorePosts}>Load More</Button>}
    </div>
  );
};

export default PostsPage;

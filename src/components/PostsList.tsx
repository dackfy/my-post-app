import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../api/api';

export const PostsList = () => {
  const { data, isLoading, isError } = useQuery<any>('posts', fetchPosts, {
    staleTime: Infinity,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  if (!Array.isArray(data)) return <div>Data is not an array</div>;

  return (
    <div>
      {data.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body.slice(0, 100)}...</p>
          <Link to={`/post/${post.id}`}>Просмотреть</Link>
        </div>
      ))}
    </div>
  );
};

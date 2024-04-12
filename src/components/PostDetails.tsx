import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchPost } from '../api';

export const PostDetails = () => {
  const { postId } = useParams();
  const { data, isLoading, isError } = useQuery(['post', postId], () =>
    fetchPost(postId)
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      <Link to="/">Назад</Link>
    </div>
  );
};

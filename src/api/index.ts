export const fetchPosts = async ({ pageParam = 1 }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const posts = await response.json();
  return { posts };
};

export const fetchPost = async (postId: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

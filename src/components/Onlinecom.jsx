import React from 'react';
import { useFetchBlogapi } from '../api/blogapi/useFetchBlogapi';

const Onlinecom = () => {
  const { data: blogs, isError, isLoading } = useFetchBlogapi();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching blog data.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      {blogs && blogs.length > 0 ? (
        <div>
          {blogs.map((blog) => (
            <div key={blog.id} className="mb-6 flex items-center">
              <div className="w-[1000px] h-[300px]">
                <img
                  src={`http://localhost:5000${blog.imageUrl}`}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                <p className="text-lg">{blog.content}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No blog posts found.</div>
      )}
    </div>
  );
};

export default Onlinecom;

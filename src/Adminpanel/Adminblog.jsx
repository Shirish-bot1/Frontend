import React, { useState } from "react";
import { useFetchBlogapi } from "../api/blogapi/useFetchBlogapi";
import { useCreateBlog } from "../api/blogapi/useCreateBlog";
import { useQueryClient } from "react-query";
import { useDeleteBlogapi } from "../api/blogapi/useDeleteBlogapi";

const AdminBlog = () => {
  const { data: blogs, isLoading, isError } = useFetchBlogapi();
  const { mutate: createBlog } = useCreateBlog();
  const { mutate: deleteBlog } = useDeleteBlogapi();
  const queryClient = useQueryClient();

  const handleDeleteBlog = (blogId) => {
    deleteBlog(blogId, {
      onSuccess: () => queryClient.invalidateQueries("allblogs"),
    });
  };

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleCreateBlog = (e) => {
    e.preventDefault();
    const newBlogForm = new FormData();
    newBlogForm.append("title", formData.title);
    newBlogForm.append("content", formData.content);
    newBlogForm.append("file", formData.file);

    createBlog(newBlogForm, {
      onSuccess: () => {
        queryClient.invalidateQueries("allblogs");
        setFormData({ title: "", content: "", file: null });
        document.getElementById("file-input").value = "";
      },
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        Error fetching blogs!
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden mb-4 p-3 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">{blog.title}</h3>
              <p className="text-xs text-gray-600">{blog.content}</p>
              <p className="text-blue-500 text-xs mt-1">
                <a
                  href={`http://localhost:5000${blog.imageUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Blog
                </a>
              </p>
            </div>
            <button
              onClick={() => handleDeleteBlog(blog.id)}
              className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded text-xs mt-2 self-end"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <form onSubmit={handleCreateBlog} className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
          <h2 className="text-lg font-semibold mb-4">Create a New Blog</h2>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Title:</label>
            <input 
              type="text" 
              name="title" 
              value={formData.title} 
              onChange={handleInputChange} 
              required 
              className="border p-2 w-full text-sm rounded" 
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Content:</label>
            <textarea 
              name="content" 
              value={formData.content} 
              onChange={handleInputChange} 
              required 
              className="border p-2 w-full text-sm rounded" 
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Image:</label>
            <input 
              type="file" 
              id="file-input" 
              name="imageUrl" 
              onChange={handleFileChange} 
              required 
              className="border p-2 w-full text-sm rounded" 
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm w-full"
          >
            Add
            Blog
            </button>
                </form>
                  </div>
                       </div>
                              );
                                    };

                              export default AdminBlog; 
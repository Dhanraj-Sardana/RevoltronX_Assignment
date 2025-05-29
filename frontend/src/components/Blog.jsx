import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [status, setStatus] = useState('draft');

  const fetchBlogs = async () => {
    try {
      const res = await fetch('http://localhost:3000/blogs', {
        credentials: 'include',
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        
        setBlogs(data.blogs);
      } else {
        toast.error('Failed to fetch blogs.');
      }
    } catch (err) {
      toast.error('Error loading blogs.');
    }
  };

  const startEditing = (blog) => {
    setEditingBlog(blog);
    setTitle(blog.title);
    setContent(blog.content);
    setTags(blog.tags.join(', '));
    setStatus(blog.status);
  };

  const handleUpdate = async () => {
    const updatedBlog = {
      title,
      content,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
      status
    };

    try {
      const res = await fetch(`http://localhost:3000/blogs/${editingBlog._id}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(updatedBlog)
      });

      if (res.ok) {
        toast.success('Blog updated!');
        setEditingBlog(null);
        fetchBlogs();
      } else {
        toast.error('Failed to update blog.');
      }
    } catch (err) {
      toast.error('Error updating blog.');
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  let publishedBlogs="";
  let draftBlogs='';
  console.log(blogs.length);
  

   publishedBlogs = blogs.filter(blog => blog.status === 'published');
   draftBlogs = blogs.filter(blog => blog.status === 'draft');

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Toaster position="bottom-center" />
      <h1 className="bg-[#f5f8fa] p-4 w-full text-3xl font-bold mb-6">Your Blogs</h1>

      {editingBlog && (
        <div className="mb-10 p-6 bg-yellow-100 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Editing: {editingBlog.title}</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md h-40"
            />
            <input
              type="text"
              placeholder="Tags (comma-separated)"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
            <div className="flex gap-4">
              <button
                onClick={handleUpdate}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md"
              >
                Update
              </button>
              <button
                onClick={() => setEditingBlog(null)}
                className="bg-gray-300 hover:bg-gray-400 text-black font-semibold px-6 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Published Blogs</h2>
        {publishedBlogs.length > 0 ? (
          publishedBlogs.map(blog => (
            <div key={blog._id} className="bg-white p-4 mb-4 rounded shadow">
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <p className="text-gray-700">{blog.content.slice(0, 100)}...</p>
              <p className="text-sm text-gray-500">Tags: {blog.tags.join(', ')}</p>
              <button
                onClick={() => startEditing(blog)}
                className="mt-2 text-blue-600 hover:underline"
              >
                Edit
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No published blogs.</p>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Drafts</h2>
        {draftBlogs.length > 0 ? (
          draftBlogs.map(blog => (
            <div key={blog._id} className="bg-gray-100 p-4 mb-4 rounded shadow">
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <p className="text-gray-700">{blog.content.slice(0, 100)}...</p>
              <p className="text-sm text-gray-500">Tags: {blog.tags.join(', ')}</p>
              <button
                onClick={() => startEditing(blog)}
                className="mt-2 text-blue-600 hover:underline"
              >
                Edit Draft
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No drafts yet.</p>
        )}
      </section>
    </div>
  );
}

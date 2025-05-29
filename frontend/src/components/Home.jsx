import Nav from './Nav';
import { useEffect, useState, useRef, useCallback } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import _ from 'lodash';

export default function Home() {
  const [username, setUserName] = useState('');
  const [userFlag, setUserFlag] = useState(false);
  const [errorFlag, setErrorFlag] = useState(false);
  const [error, setError] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [userID, setUserID] = useState(0);
  const lastSavedDraftRef = useRef(null);


  <input
    value={tags}
    onChange={(e) => {
      setTags(e.target.value);
      debouncedSaveDraft();
    }}
  />


  const typingTimerRef = useRef(null);
  const intervalRef = useRef(null);

  const handleUnauthorized = () => {
    toast.error('Session expired. Please log in again.');
    setTimeout(() => {
      window.location.href = '/login';
    }, 2000);
  };

  const saveDraft = useCallback(async (showToast = true) => {
    const currentDraft = {
      title: title.trim(),
      content: content.trim(),
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
    };

    if (
      currentDraft.title === '' &&
      currentDraft.content === '' &&
      currentDraft.tags.length === 0
    ) return;

    console.log("Comparing drafts...");
    console.log("Current:", currentDraft);
    console.log("Last saved:", lastSavedDraftRef.current);
    console.log("Is Equal?", _.isEqual(currentDraft, lastSavedDraftRef.current));

    if (lastSavedDraftRef.current && _.isEqual(currentDraft, lastSavedDraftRef.current)) {
      return;
    }

    const fullDraftToSave = {
      ...currentDraft,
      author: userID,
      status: 'draft'
    };

    try {
      const res = await fetch('http://localhost:3000/blogs/save-draft', {
        method: 'POST',
        credentials: 'include',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(fullDraftToSave),
      });

      if (res.status === 200) {
        lastSavedDraftRef.current = _.cloneDeep(currentDraft);
        if (showToast) toast.success('Draft auto-saved');
        console.log('Auto-saved:', fullDraftToSave);
      }
    } catch (error) {
      console.error("Error while saving draft:", error);
    }
  }, [title, content, tags, userID]);
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      title,
      content,
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
      author: userID,
      status: 'published'
    };

    const res = await fetch('http://localhost:3000/blogs/publish', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(blogData)
    });

    if (res.status === 200) {
      console.log('Published Blog:', blogData);
      setSubmitted(true);
      toast.success('Blog published successfully!');
      setTitle('');
      setContent('');
      setTags('');
    }
  };

  const handleServerRes = async () => {
    try {
      setErrorFlag(false);
      setUserFlag(false);
      const res = await fetch('http://localhost:3000/auth/home', {
        credentials: 'include',
      });

      if (res.status === 200) {
        const data = await res.json();
        setUserFlag(true);

        setUserName(data.userName);
        setUserID(data.userID);
      } else if (res.status === 404) {
        setErrorFlag(true);
        setError('Not Found');
      } else if (res.status === 401) {
        setErrorFlag(true);
        setError('No token provided');
        handleUnauthorized();
      } else if (res.status === 500) {
        setErrorFlag(true);
        setError('Internal server error');
      }
    } catch (err) {
      setErrorFlag(true);
      setError('Something went wrong');
    }
  };

  useEffect(() => {
    handleServerRes();
  }, []);


  useEffect(() => {
    if (userFlag) {
      if (intervalRef.current) clearInterval(intervalRef.current); // Clear previous interval

      intervalRef.current = setInterval(() => saveDraft(false), 30000);
      return () => clearInterval(intervalRef.current); // Cleanup on unmount
    }
  }, [userFlag])


  const handleTyping = (setter) => (e) => {
    setter(e.target.value);
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    typingTimerRef.current = setTimeout(() => saveDraft(true), 5000);
  };

  return (
    <>
      <Toaster position="bottom-center" />
      <Nav userFlag={userFlag} />

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        {userFlag ? (
          <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg pt-4 p-8 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Create a New Blog Post</h1>
              <div className="text-md text-gray-600 font-medium">Welcome, {username}</div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-lg font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  id="title"
                  className="mt-1 w-full border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={title}
                  onChange={handleTyping(setTitle)}
                  required
                  placeholder="Enter blog title"
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-lg font-medium text-gray-700">Content</label>
                <textarea
                  id="content"
                  className="mt-1 w-full border border-gray-300 p-3 rounded-md h-48 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={content}
                  onChange={handleTyping(setContent)}
                  required
                  placeholder="Write your blog content here..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="tags" className="block text-lg font-medium text-gray-700">
                  Tags <span className="text-sm text-gray-400">(optional, comma-separated)</span>
                </label>
                <input
                  type="text"
                  id="tags"
                  className="mt-1 w-full border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={tags}
                  onChange={handleTyping(setTags)}
                  placeholder="e.g. tech, react, programming"
                />

              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-4">
                <button
                  type="button"
                  onClick={() => saveDraft(true)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-3 rounded-md transition shadow-md"
                >
                  Save as Draft
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition shadow-md"
                >
                  Publish
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-gray-500 text-xl">You are not logged in.</div>
        )}
      </div>
    </>
  );
}

import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // for spinner
  const [error, setError] = useState(null); // for error message

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 font-semibold p-6 bg-red-50 rounded-md">
        ⚠️ Error: {error}
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Latest Posts (API Demo)
      </h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-2">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

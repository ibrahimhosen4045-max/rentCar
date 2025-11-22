
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function Blog({ jsonPath = '/Blog.json' }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetch(jsonPath)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${jsonPath} (status ${res.status})`);
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        setPosts(data);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message);
      })
      .finally(() => mounted && setLoading(false));

    return () => { mounted = false; };
  }, [jsonPath]);

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (error) return <div className="p-6 text-center text-red-600">{error}</div>;

  return (
    <section className="p-6 container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Latest Blog Cars</h2>

      {/* Grid: 1col mobile, 2col tablet, 3col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
            <div className="relative  lg:h-70 w-full">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="object-cover w-full h-full"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400?text=No+Image'; }}
              />

              <div className="absolute top-3 left-3 bg-gray-900/70 text-white text-xs font-semibold rounded-full px-3 py-1">${post.pricePerDay}/day</div>
            </div>

            <div className="p-5 flex-1 flex flex-col gap-2">
              <h3 className="text-[20px] font-bold mb-1 font-jalano">{post.title}</h3>
              <p className="text-lg text-gray-600 mb-6 flex-1">{post.excerpt}</p>

              <div className="flex items-center justify-between mt-3">
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((t, i) => (
                    <span key={i} className="text-xs bg-yellow-500/80 text-white font-semibold px-2 py-1 rounded-full">{t}</span>
                  ))}
                  <Link
                  to={`/blog/${post.id}`}
                  className="px-2 bg-yellow-500 rounded-full text-white text-[14px] hover:text-yellow-500 hover:bg-white cursor-pointer"
                  >
                    More →
                  </Link>
                </div>

                <time className="text-xs text-gray-500">{formatDate(post.date)}</time>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function formatDate(d) {
  try {
    const dt = new Date(d);
    // e.g. Nov 01, 2025
    return dt.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
  } catch (e) {
    return d;
  }
}



import React from 'react';
import img1 from "../assets/1.png";
import img2 from "../assets/image.jpg";
import img3 from "../assets/Subscribe.png";

export default function Blog() {
  const blog = [
    { 
      id: 1,
      type: "Podcast",
      img: img1,
      category: "Marketing",
      date: "September 4, 2020",
      duration: "36 min",
      title: "What is traffic arbitrage and does it really make money?",
      description: "Phasellus ullamcorper lacus vitae porttitor ...",
      action: "Listen",
      color: "bg-blue-200",
    },
    {
      id: 2,
      type: "Article",
      img: img1,
      category: "Development",
      date: "September 1, 2020",
      title: "How to choose the first programming language for a beginner",
      description: "Turpis sed at magna laoreet gravida ...",
      action: "Read",
      color: "bg-gray-100",
    },
    {
      id: 3,
      type: "Video",
      img: img1,
      category: "Design",
      date: "August 8, 2020",
      duration: "40 min",
      title: "Should you choose a creative profession if you are attracted to creativity?",
      description: "Curabitur nisl tincidunt ...",
      action: "Watch",
      color: "bg-yellow-100",
    },
    {
      id: 4,
      type: "Video",
      img: img2,
      category: "Design",
      date: "August 8, 2020",
      duration: "40 min",
      title: "Should you Should you choose a creative profession if you are attracted to creativity? a creative profession if you are attracted to creativity?",
      description: "Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium... nisl tincidunt ...",
      action: "Watch",
      color: "bg-yellow-100",
    },
    {
      id: 5,
      type: "Video",
      img: img1,
      category: "Design",
      date: "August 8, 2020",
      duration: "40 min",
      title: "Should you choose a creative profession if you are attracted to creativity?",
      description: "Curabitur nisl tincidunt ...",
      action: "Watch",
      color: "bg-yellow-100",
    },
    
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-2 text-center">
        Createx School Journal
      </h2>
      <p className="text-center mb-8 text-gray-500">OUR BLOG</p>

      {/* Blog cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blog.map((post) => (
          <div
            key={post.id}
            className={`
              rounded-lg shadow-md overflow-hidden p-4 flex flex-col
              ${post.color}
              ${post.id === 4 ? "lg:col-span-2" : ""}
              h-[420px]
            `}
          >
            <img
              src={post.img}
              alt=""
              className="w-full h-[180px] object-cover rounded-md mb-3"
            />

            <span className="text-xs font-semibold mb-1">
              {post.type}
            </span>

            <span className="text-sm text-gray-500 mb-2">
              {post.category} • {post.date}
              {post.duration && ` • ${post.duration}`}
            </span>

            <h3 className="font-bold text-lg mb-2 line-clamp-2">
              {post.title}
            </h3>

            <p className="text-gray-700 mb-4 text-sm line-clamp-3">
              {post.description}
            </p>

            <button className="mt-auto text-blue-600 font-semibold hover:underline">
              {post.action} →
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-2 text-gray-500">
        <button className="px-3 py-1 rounded hover:bg-gray-200">1</button>
        <button className="px-3 py-1 rounded hover:bg-gray-200">2</button>
        <button className="px-3 py-1 rounded hover:bg-gray-200">3</button>
        <button className="px-3 py-1 rounded hover:bg-gray-200">4 →</button>
      </div>

      <img src={img3} alt="" />
    </div>
  );
}

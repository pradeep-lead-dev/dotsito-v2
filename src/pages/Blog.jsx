import React, { useState, useEffect } from 'react';
import { Typography, Button, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import '../css/BlogContent.css'; // Custom styles
import Ai from '../assets/img/Ai.png';
import fG from '../assets/img/5G.png';
import cyber from '../assets/img/cyber.png';
import Footer from '../components/Footer';

const { Title, Text } = Typography;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Static trending blog content
  const trendingBlogs = [
    {
      id: 1,
      title: "AI in 2024: The Next Evolution",
      description: "Discover how AI is evolving and the trends to look for in 2024.",
      image: Ai,
    },
    {
      id: 2,
      title: "5G Networks: Revolutionizing Connectivity",
      description: "Learn how 5G is transforming industries with faster connectivity.",
      image: fG,
    },
    {
      id: 3,
      title: "Cybersecurity in the Modern World",
      description: "Explore the latest advancements in cybersecurity to protect data.",
      image: cyber,
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setBlogs(trendingBlogs);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Skeleton active />;
  }

  return (
    <div className="blog-page">
      {/* Banner Section */}
      <section className="blog-banner">
        <div className="banner-content">
          <Title level={1} className="banner-title">Explore Our Latest Blogs</Title>
          <Text className="banner-text">Get insights on trending technologies, innovations, and expert opinions.</Text>
        </div>
      </section>

      {/* Blog Content */}
      <div className="blog-container">
        <div className="left-side">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-item">
              <img src={blog.image} alt={blog.title} className="related-image" />
              <Title level={3}>{blog.title}</Title>
              <Text>{blog.description.slice(0, 100)}...</Text>
              <Link to={`/blog/${blog.id}`}>
                <Button type="primary">Read More</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default Blog;

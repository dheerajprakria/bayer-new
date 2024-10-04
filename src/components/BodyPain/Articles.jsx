"use client";
import React, { useState } from "react";

// Reusable ArticleCard component
const ArticleCard = ({ image, title, description }) => (
  <div className="col-lg-4">
    <div className="card mt-4" style={{ width: "100%" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body text-start">
        <h5 className="card-title pt-3">{title}</h5>
        <p className="card-text py-2">{description}</p>

        <div className="d-flex align-items-center">
          <img
            src="/images/dr.jpeg"
            className="rounded-circle me-3"
            width="30px"
            alt=""
          />
          <div className="blog-meta">
            <b>Dr. Uma Narang</b>
            <p>June 22 2024</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function Articles() {
  // Data array for articles
  const articles = [
    {
      image: "/images/headache.jpg",
      title: "Understanding different types of Body Aches",
      description:
        "The surprising benefits of gut health extend beyoond digestion, influencing immunity, mo...",
    },
    {
      image: "/images/headache.jpg",
      title: "Top 10 Natural remedies to relieve Body aches",
      description:
        "The surprising benefits of gut health extend beyoond digestion, influencing immunity, mo...",
    },
    {
      image: "/images/headache.jpg",
      title: "The Sleep solution: Importance of rest for women's health",
      description:
        "The surprising benefits of gut health extend beyoond digestion, influencing immunity, mo...",
    },
    {
      image: "/images/headache.jpg",
      title: "Gut Health 101: Why it matters more than you think",
      description:
        "The surprising benefits of gut health extend beyoond digestion, influencing immunity, mo...",
    },
    {
      image: "/images/headache.jpg",
      title: "Mastering mensturation: Your guide to healthy periods",
      description:
        "The surprising benefits of gut health extend beyoond digestion, influencing immunity, mo...",
    },
    {
      image: "/images/headache.jpg",
      title: "The Sleep solution: Importance of rest for women's health",
      description:
        "The surprising benefits of gut health extend beyoond digestion, influencing immunity, mo...",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  // Calculate the total number of pages
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Get the articles for the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container py-5 mt-5">
      <div className="heading-box d-flex justify-content-between align-items-center">
        <h2>Articles</h2>
        <button type="button" className="btn btn-secondary">
          Sort By
        </button>
      </div>

      <div className="row mt-4">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            image={article.image}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination d-flex justify-content-center mt-4">
        <button
          className="btn btn-primary me-2"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`btn btn-secondary mx-1 ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="btn btn-primary ms-2"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Articles;

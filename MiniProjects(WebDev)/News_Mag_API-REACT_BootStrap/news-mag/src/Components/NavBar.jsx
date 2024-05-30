import { useState } from "react";

const NavBar = ({ setCategory, setCountry }) => {
  const [activeCategory, setActiveCategory] = useState("general");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setCategory(category);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge text-dark bg-light fs-4">NEWS MAG</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={{ cursor: "pointer" }}>
              <li className="nav-item">
                <div
                  className={
                    activeCategory === "general"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  onClick={() => {
                    handleCategoryClick("general");
                  }}
                >
                  General
                </div>
              </li>
              <li className="nav-item">
                <div
                  className={
                    activeCategory === "business"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  onClick={() => {
                    handleCategoryClick("business");
                  }}
                >
                  Business
                </div>
              </li>
              <li className="nav-item">
                <div
                  className={
                    activeCategory === "entertainment"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  onClick={() => {
                    handleCategoryClick("entertainment");
                  }}
                >
                  Entertainment
                </div>
              </li>
              <li className="nav-item">
                <div
                  className={
                    activeCategory === "health" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => {
                    handleCategoryClick("health");
                  }}
                >
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div
                  className={
                    activeCategory === "science"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  onClick={() => {
                    handleCategoryClick("science");
                  }}
                >
                  Science
                </div>
              </li>
              <li className="nav-item">
                <div
                  className={
                    activeCategory === "sports" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => {
                    handleCategoryClick("sports");
                  }}
                >
                  Sports
                </div>
              </li>
              <li className="nav-item">
                <div
                  className={
                    activeCategory === "technology"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  onClick={() => {
                    handleCategoryClick("technology");
                  }}
                >
                  Technology
                </div>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Country
            </button>
            <ul className="dropdown-menu" style={{ cursor: "pointer" }}>
              <li>
                <a className="dropdown-item" onClick={() => setCountry("in")}>
                  India
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={() => setCountry("us")}>
                  USA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

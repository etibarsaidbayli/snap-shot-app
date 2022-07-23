import React from "react";

function Nav({ handleTagClick, tag }) {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <button
            className={tag.includes("mountain") ? "nav-btn active" : "nav-btn"}
            onClick={() => handleTagClick("mountain")}
          >
            Mountain
          </button>
        </li>
        <li>
          <button
            className={tag.includes("beaches") ? "nav-btn active" : "nav-btn"}
            onClick={() => handleTagClick("beaches")}
          >
            Beaches
          </button>
        </li>
        <li>
          <button
            className={tag.includes("bird") ? "nav-btn active" : "nav-btn"}
            onClick={() => handleTagClick("bird")}
          >
            Birds
          </button>
        </li>
        <li>
          <button
            onClick={() => handleTagClick("food")}
            className={tag.includes("food") ? "nav-btn active" : "nav-btn"}
            aria-current="page"
            href="#/SnapScout/food"
          >
            Food
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

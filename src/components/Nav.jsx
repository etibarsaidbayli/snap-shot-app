import React from "react";

function Nav({ handleTagClick }) {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <button
            className="nav-btn "
            onClick={() => handleTagClick("mountain")}
          >
            Mountain
          </button>
        </li>
        <li>
          <button className="nav-btn" onClick={() => handleTagClick("beaches")}>
            Beaches
          </button>
        </li>
        <li>
          <button className="nav-btn" onClick={() => handleTagClick("bird")}>
            Birds
          </button>
        </li>
        <li>
          <button
            onClick={() => handleTagClick("food")}
            className="nav-btn"
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

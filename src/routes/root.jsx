import { Link } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router </h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">Search</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                
                <Link to="creditos">Creditos</Link>
              </li>
              
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }
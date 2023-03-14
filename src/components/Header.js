import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg w-100">
        <div className="container">
          <Link className="navbar-brand fw-bold" to={"/Movies-App"}>Movies</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to={"/watchlist"}>Watch List</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to={"/watched"}>Watched</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold btn btn-outline-success" style={{ lineHeight: 1 }} to={"/Movies-App"}>Add</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

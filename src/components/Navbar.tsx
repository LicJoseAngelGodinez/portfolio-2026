import { Link, useLocation } from 'react-router-dom'

export function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Portfolio 2026</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

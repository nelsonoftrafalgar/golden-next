import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <div className="nav-container">
      <div className="nav-section home">
        <div className="btn-h">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </div>
      </div>
      <div className="nav-section about">
        <div className="btn-h">
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
        </div>
      </div>
      <div className="nav-section portfolio">
        <div className="btn-v">
          <Link href="/portfolio">
            <a className="nav-link left">Portfolio</a>
          </Link>
        </div>
      </div>
      {children}
      <div className="nav-section gallery">
        <div className="btn-v">
          <Link href="/gallery">
            <a className="nav-link right">Gallery</a>
          </Link>
        </div>
      </div>
      <div className="nav-section contact">
        <div className="btn-h">
          <Link href="/contact">
            <a className="nav-link">Contact</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Layout

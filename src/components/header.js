import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="bg-pink-400">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
        <Link to="/" className="flex items-center no-underline text-white">
          <span className="text-xl mt-1 mr-1">👁</span>
          <span className="font-bold text-xl tracking-tight">{siteTitle}</span>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <div className="text-sm">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white"
            >
              Home
            </Link>

            <Link
              to="/contact"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
            >
              Contact
            </Link>

            <a
              href="https://www.facebook.com/pg/authenticbrooklyn/events/"
              className="block md:inline-block mt-4 md:mt-0 no-underline text-white"
            >
              Events
              <svg
                className="fill-current text-white inline w-4 h-4 ml-1 mb-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

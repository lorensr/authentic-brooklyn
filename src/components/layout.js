import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col font-sans min-h-screen text-gray-900">
          <Header siteTitle={data.site.siteMetadata.title} />

          <main className="flex flex-col flex-1 md:justify-center mx-auto px-4 py-8 md:p-8 w-full">
            {children}
          </main>

          <footer className="bg-blue-400">
            <nav className="flex justify-center max-w-4xl mx-auto p-4 md:p-8 text-sm">
              <p className="text-white">
                <a
                  href="https://github.com/taylorbryant/gatsby-starter-tailwind"
                  className="no-underline"
                >
                  {`Suggest edits to this site on `}
                  <span className="font-bold">GitHub</span>
                </a>
              </p>
            </nav>
          </footer>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

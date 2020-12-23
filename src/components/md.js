import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

export default ({ children }) => (
  <ReactMarkdown
    plugins={[gfm]}
    renderers={{
      link: ({ children, href }) => (
        <a href={href} className="text-blue-400 whitespace-no-wrap">
          {children}
        </a>
      ),
      paragraph: ({ children }) => <p className="mt-6 mb-6">{children}</p>,
    }}
    children={children}
  />
)

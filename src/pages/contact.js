import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contact"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section className="text-center">
        <a className="font-mono text-2xl" href="mailto:hello@authentic.earth">
          hello@authentic.earth
        </a>
      </section>
    </Layout>
  )
}

export default ContactPage

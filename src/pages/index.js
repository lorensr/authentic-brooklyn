import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section>
        <div className="text-center mx-auto md:w-1/3">
          <h1 className="text-center text-3xl font-bold my-8 p-3">
            Authentic Relating
          </h1>

          <p className="mb-8">
            {`Authentic relating (AR) is a mode of relating in which we notice and
            share our inner world—our sensations, feelings, impulses, thoughts, motivations, and
            perceptions. `}
            <a
              className="text-blue-400 whitespace-no-wrap"
              href="https://medium.com/@ness.sara/the-authentic-self-why-you-cant-just-be-you-and-what-to-do-about-it-a95fd04e5c1b"
            >
              More info
            </a>
            .
          </p>

          <p>
            {`There are a couple common ways of practicing authentic relating: `}
            <span className="whitespace-no-wrap">AR games and circling.</span>
          </p>
        </div>

        <div className="text-center mx-auto md:w-1/3">
          <h2 className="text-center text-3xl my-8 p-3">AR Games</h2>

          <p className="mb-8">
            {`AR games are group activities (pairs, small groups, large group) 
            for practicing noticing and sharing what's going on inside ourselves. `}
            <a
              className="text-blue-400 whitespace-no-wrap"
              href="https://gumroad.com/l/AR-Games"
            >
              Games manual
            </a>
            .
          </p>
        </div>

        <div className="text-center mx-auto md:w-1/3">
          <h2 className="text-center text-3xl my-8 p-3">Circling</h2>

          <p className="mb-8">
            Circling is also know as interpersonal meditation. It is a type of
            meditation in that it has a point of focus that we bring our
            attention back to. It's relational in that the focus is not on our
            independent selves, but on what it's like to be in connection with
            others—how it is to be in the same room, to hear what they say, to
            meet their gaze.
          </p>

          <p className="mb-8">
            {`Circling has `}
            <a
              className="text-blue-400"
              href="https://circlingeurope.com/tag/the-five-principles-of-circling/"
            >
              five principles
            </a>
            .
          </p>

          <p>
            In addition to{' '}
            <a
              className="text-blue-400 whitespace-no-wrap"
              href="https://www.facebook.com/pg/authenticbrooklyn/events/"
            >
              Brooklyn events
            </a>
            , there is circling{' '}
            <a
              className="text-blue-400 whitespace-no-wrap"
              href="https://theconnectionmovement.com/circling/"
            >
              every Monday in Manhattan
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MD from '../components/md'

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Authentic Brooklyn"
        keywords={[`authentic`, `relating`, `circling`, `brooklyn`]}
      />

      <section>
        <div className="mx-auto max-w-112">
          <h1 className="text-center text-3xl font-bold my-8 p-3">
            Authentic Relating
          </h1>

          <MD>
            Authentic relating (AR) is a mode of relating in which we notice and
            share our inner world—our sensations, feelings, impulses, thoughts,
            motivations, and perceptions. [More
            info](https://medium.com/@ness.sara/the-authentic-self-why-you-cant-just-be-you-and-what-to-do-about-it-a95fd04e5c1b)
            and [full
            lexicon](https://docs.google.com/document/d/1ELhGwpar0_c-4zjIDbv9Qq4Sn2axQOxEbDhkKQwbJa8/edit).
          </MD>

          <p>
            {`There are a couple common ways of practicing authentic relating: `}
            <span className="whitespace-no-wrap">AR games and circling.</span>
          </p>
        </div>

        <div className="mx-auto max-w-112">
          <h2 className="text-center text-3xl my-8 p-3">AR games</h2>

          <MD>
            {`
AR games are group activities (pairs, small groups, or large group)
for practicing noticing and sharing what’s going on inside
ourselves. There’s a [games manual](https://gumroad.com/l/AR-Games) and a book: [Conflict = Energy](https://authenticrelating.co/book/).

We can do AR games online via the [COnnect platform](https://www.authrev.org/connect). Courses for learning AR include [ALP](https://authenticrelating.co/authentic-leadership-program/) and various options from [Authentic Revolution](https://www.authrev.org/).
            `}
          </MD>
        </div>

        <div className="mx-auto max-w-112">
          <h2 className="text-center text-3xl my-8 p-3">Circling</h2>

          <p className="mb-6">
            Circling is also know as <b>relational meditation</b>. It is a type
            of <b>meditation</b> in that it has a point of focus that we bring
            our attention back to. It’s <b>relational</b> in that the focus is
            not on our independent selves, but on what it’s like to be in
            connection with others—how it is to be in the same room, to hear
            what they say, to meet their gaze. And we share what we notice.
          </p>

          <section className="mb-6">
            {`Circling has `}
            <a
              className="text-blue-400"
              href="https://circlingeurope.com/tag/the-five-principles-of-circling/"
            >
              five principles
            </a>
            . There are a few types of circling:
            <ul className="list-inside list-disc mt-1">
              <li>Birthday: focus on one person</li>
              <li>Organic: facilitator guides focus</li>
              <li>
                <a
                  className="text-blue-400"
                  href="https://circlingeurope.com/2017/02/what-is-surrendered-leadership-a-first-look/"
                >
                  Surrendered leadership
                </a>
                : everyone surrenders and leads
              </li>
              <li>Topical: focus on a topic</li>
              <li>
                <a
                  className="text-blue-400"
                  href="http://circlingguide.com/developmental-circling/"
                >
                  Developmental
                </a>
                : topical circle on personal development and clearing
                developmental trauma
              </li>
              <li>Self: by yourself</li>
              <li>
                <a
                  className="text-blue-400"
                  href="http://circlingguide.com/offers/"
                >
                  Guerilla
                </a>
                : outside of shared context
              </li>
              <li>Corporate: in a workshop/training for a company</li>
            </ul>
          </section>

          <MD>
            {`
The original circling book is [The Art of Circling](https://www.amazon.com/Art-Circling-1st-Bryan-Bayer/dp/B07211BDWV/). A more recent book is [Circling and Authentic Relating Practice Guide](http://circlingguide.com/).

In addition to [our Brooklyn events](https://www.facebook.com/pg/authenticbrooklyn/events/), there is circling [every Monday in Manhattan](https://theconnectionmovement.com/circling/). We can circle online via [Circle Anywhere](https://www.circleanywhere.com/) or [COnnect](https://www.authrev.org/connect). 

There are [3 schools of circling](https://integralcentered.com/3-schools-circling/). There are practitioner trainings from [Circling Europe](https://www.circlingeurope.com/online-course), [The Connection Institute](https://www.theconnectioninstitute.net/onlinecirclingtraining), and [Art of Circling](https://circlinginstitute.com/art-of-circling-practitioner/). Leadership trainings include [SAS](https://www.circlingeurope.com/leadership-training), [T3](https://integralcentered.com/t3/), [AoC Facilitator Training](https://circlinginstitute.com/art-of-circling-facilitator/), and [The Connection Institute](https://www.theconnectioninstitute.net/onlinecirclingtraining).
          `}
          </MD>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

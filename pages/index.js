import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Aspiring CS undergraduate in National University of Singapore.</p>
        <p>
          This site is built with{' '}
          <a href="https://nextjs.org/learn"> Next.js</a>
        </p>
      </section>
    </Layout>
  )
}

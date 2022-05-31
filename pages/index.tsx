import type { NextPage } from 'next'
import Head from 'next/head'
import PostBox from '../components/PostBox'

const Home: NextPage = () => {
  return (
    <div className="app my-5 mx-auto max-w-5xl">
      <Head>
        <title>Reddit - 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* PostBox */}
      <PostBox />
      <div>{/* Feed */}</div>
    </div>
  )
}

export default Home

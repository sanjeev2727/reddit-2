import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
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
      <div className="feed">
        <Feed />
      </div>
    </div>
  )
}

export default Home

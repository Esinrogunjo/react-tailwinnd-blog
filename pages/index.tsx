import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget } from '../components'
const posts = [
  { title: 'React Testing', excerpt: 'Learn React testing' },
  { title: 'JS Testing', excerpt: 'Learn js testing' },
  { title: 'PHP Testing', excerpt: 'Learn PHP testing' },
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto mb-8 px-10 ">
      <Head>
        <title>Agastech CMS BLOG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 ">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
      </div>
      <div className="col-span-1 lg:col-span-4 ">
        <div className="relative top-8 lg:sticky">
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  )
}

export default Home

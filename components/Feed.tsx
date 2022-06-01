import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_POSTS } from '../graphql/queries'
import Post from './Post'

function Feed() {
  const { data, error } = useQuery(GET_ALL_POSTS)

  const posts: Post[] = data?.getPostList || []
  console.log('posts: ', posts, error)
  return (
    <div className="flex flex-col">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Feed

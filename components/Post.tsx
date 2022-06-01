import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from '@heroicons/react/solid'
import React from 'react'
import Avatar from './Avatar'
import TimeAgo from 'timeago-react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  post: Post
}

function Post({ post }: Props) {
  return (
    <div className="post flex cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm hover:border hover:border-gray-600 mt-3">
      {/* Left */}
      <div className="postLeft flex flex-col items-center justify-start space-y-1 rounded-md bg-gray-50 text-gray-400">
        <ArrowUpIcon className="voteButton hover:text-red-400 cursor-pointer" />
        <p className="text-black font-bold text-xs">0</p>
        <ArrowDownIcon className="voteButton hover:text-blue-400 cursor-pointer" />
      </div>
      <div className="postContent p-3">
        {/* Header */}
        <div className="header flex items-center space-x-2">
          <Avatar seed={post.subreddit[0]?.topic} />
          <p className="text-xs text-gray-500">
            <Link href={`/subreddit/${post.subreddit[0]?.topic}`}>
              <span className="font-bold text-black hover:text-blue-400 hover:underline">
                {post.subreddit[0]?.topic}
              </span>
            </Link>{' '}
            Posted by {post.username} {''}
            <TimeAgo datetime={post.created_at} />
          </p>
        </div>
        {/* Body */}
        <div className="postContent py-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="mt-2 text-sm font-light">{post.body}</p>

          {/* Image */}
          {post.image && post.image !== '' && (
            <img className="w-full" src={post.image} alt={post.title} />
          )}
        </div>
        {/* Footer */}
        <div className="footer flex space-x-4 text-gray-400">
          <div className="postButton">
            <ChatIcon className="h-6 w-6" />
            <p className="">{post.comments.length} Comments</p>
          </div>
          <div className="postButton">
            <GiftIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Award</p>
          </div>
          <div className="postButton">
            <ShareIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Share</p>
          </div>
          <div className="postButton">
            <BookmarkIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Save</p>
          </div>
          <div className="postButton">
            <DotsHorizontalIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post

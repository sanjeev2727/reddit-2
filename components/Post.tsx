import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid'
import React from 'react'
import Avatar from './Avatar'
import TimeAgo from 'timeago-react'

type Props = {
  post: Post
}

function Post({ post }: Props) {
  return (
    <div className="post flex cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm hover:border hover:border-gray-600">
      {/* Left */}
      <div className="postLeft flex flex-col align-center justify-start space-y-1 rounded-md bg-gray-50 text-gray-400">
        <ArrowUpIcon className="voteButton hover:text-red-400 cursor-pointer" />
        <p className="text-black font-bold text-xs">0</p>
        <ArrowDownIcon className="voteButton hover:text:blue-400 cursor-pointer" />
      </div>
      <div className="postContent p-3">
        {/* Header */}
        <div className="header flex items-center space-x-2">
          <Avatar seed={post.subreddit[0]?.topic} />
          <p className="text-xs text-gray-500">
            <span className="font-bold text-black hover:text-blue-400 hover:underline">
              {post.subreddit[0]?.topic}
            </span>{' '}
            Posted by {post.username}
            <TimeAgo datetime={post.created_at} />
          </p>
        </div>
        {/* Body */}
        <div className="postContent"></div>
        {/* Footer */}
        <div className="footer"></div>
      </div>
    </div>
  )
}

export default Post

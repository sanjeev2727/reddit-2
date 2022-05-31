import Image from 'next/image'
import React from 'react'
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  GlobeIcon,
  HomeIcon,
  MenuIcon,
  PlusIcon,
  SearchIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from '@heroicons/react/solid'

import UserImage from '../styles/images/user.png'
import { useSession, signIn, signOut } from 'next-auth/react'

const Header = () => {
  const { data: session } = useSession()
  return (
    <div className="flex sticky top-0 z-10 p-2 bg-white">
      <div className="relative h-10 w-20">
        <Image
          objectFit="contain"
          src="https://www.redditinc.com/assets/images/site/logo.svg"
          alt="reddit-logo"
          layout="fill"
        />
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="w-5 h-5" />
        <p className="flex-1">Home</p>
        <ChevronDownIcon className="w-5 h-5" />
      </div>

      {/* Search */}
      <form className="flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 py-1 px-3">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          className="flex-1 bg-transparent outline-none"
          placeholder="Search"
        />
        <input hidden type="submit" />
      </form>

      <div className="lg:inline-flex space-x-2 text-gray-500 mx-5 hidden items-center">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>

      <div className="flex items-center ml-5 lg:hidden">
        <MenuIcon className="icon" />
      </div>

      {/* Sign In/Sign Out */}

      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden cursor-pointer item-center space-x-2 border border-gray-100 p-2 lg:flex"
        >
          <div className="relative w-5 h-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src={UserImage}
              alt="user image"
              layout="fill"
            />
          </div>
          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">Sign out</p>
          </div>
          <ChevronDownIcon className="h-5 text-gray-400 flex-shrink-0" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden cursor-pointer item-center space-x-2 border border-gray-100 p-2 lg:flex"
        >
          <div className="relative w-5 h-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src={UserImage}
              alt="user image"
              layout="fill"
            />
          </div>
          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </div>
  )
}

export default Header

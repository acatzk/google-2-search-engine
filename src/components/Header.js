import Avatar from './Avatar'
import { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import HeaderOptions from './HeaderOptions'
import { XIcon, MicrophoneIcon, SearchIcon, ViewGridIcon } from '~/utils/Icons'

export default function Header () {
  const router = useRouter()
  const searchInputRef = useRef(router.query.term)

  const search = e => {
    e.preventDefault()

    const term = searchInputRef.current.value

    if (!term) return;
    
    router.push(`/search?term=${term}`)
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <div className="flex items-center flex-grow space-x-6">
          <Image 
            src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            height={40}
            width={120}
            onClick={() => router.push('/')}
            className="cursor-pointer"
          />
          <form className="flex flex-grow px-6 py-3 ml-10 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
            <input 
              type="text" 
              ref={searchInputRef} 
              className="flex-grow w-full focus:outline-none" 
            />
            <XIcon 
              onClick={() => (searchInputRef.current.value = "")}
              className="fill-current h-5 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" 
            />
            <MicrophoneIcon 
              className="mr-3 h-6 hidden sm:inline-flex"
            />
            <SearchIcon 
              className="fill-current mr-3 h-6 text-[#4285f4] hidden sm:inline-flex"
            />
            <button 
              hidden 
              type="submit"
              onClick={search}
            >
              Search
            </button>
          </form>
        </div>
        <div className="flex items-center space-x-3">
          <a href="#" className="rounded-full p-2 hover:bg-gray-100 transition ease-in-out duration-150">
            <ViewGridIcon className="w-6 h-6 fill-current text-gray-600" />
          </a>
          <a href="#">
            <Avatar url="https://lh3.googleusercontent.com/ogw/ADGmqu-wtrrv3pDxiBDOaI2ll2KsOQAQigVuLg2Uzfd_=s32-c-mo" />
          </a>
        </div>
      </div>
      <HeaderOptions />
    </header>
  )
}
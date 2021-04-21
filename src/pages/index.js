import Head from 'next/head'
import Image from 'next/image'
import Avatar from '~/components/Avatar'
import { SearchIcon, ViewGridIcon, MicrophoneIcon } from '~/utils/Icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Google</title>
      </Head>

      {/* Header */}
      <header className="flex items-center justify-between text-xs text-gray-800 py-4 px-4">
        <div></div>
        <div className="flex items-center space-x-6">
          <a href="#" className="link">Gmail</a>
          <a href="#" className="link">Images</a>
          <a href="#">
            <ViewGridIcon className="w-6 h-6 fill-current text-gray-600" />
          </a>
          <Avatar url="https://avatars.githubusercontent.com/u/38458781?v=4" />
        </div>
      </header>
      
      {/* Body */}
      <form className="flex flex-col items-center mt-40 flex-grow space-y-7 px-4">
        <Image 
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={90}
          width={270}
        />
        <div className="flex items-center w-full hover:shadow-lg focus-within:shadow-lg max-w-md sm:max-w-xl px-4 py-2.5 rounded-full border border-gray-200">
          <SearchIcon className="h-5 w-5 text-gray-400 fill-current" />
          <input type="text" className="pl-3 focus:outline-none flex-grow" />
          <MicrophoneIcon className="h-5 w-5" />
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={(e) => e.preventDefault()}
            className="btn"
          >
            Google Search
          </button>
          <button 
            onClick={(e) => e.preventDefault()}
            className="btn"
          >
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}
    </>
  )
}

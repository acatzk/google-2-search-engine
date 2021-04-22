import Head from 'next/head'
import Image from 'next/image'
import Avatar from '~/components/Avatar'
import { SearchIcon, ViewGridIcon, MicrophoneIcon } from '~/utils/Icons'

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Head>
        <title>Google</title>
      </Head>

      {/* Header */}
      <header className="flex items-center justify-between text-xs text-gray-800 py-2.5 px-5">
        <div></div>
        <div className="flex items-center space-x-4">
          <a href="#" className="link">Gmail</a>
          <a href="#" className="link">Images</a>
          <a href="#" className="rounded-full p-2 hover:bg-gray-100 transition ease-in-out duration-150">
            <ViewGridIcon className="w-6 h-6 fill-current text-gray-600" />
          </a>
          <a>
            <Avatar url="https://lh3.googleusercontent.com/ogw/ADGmqu-wtrrv3pDxiBDOaI2ll2KsOQAQigVuLg2Uzfd_=s32-c-mo" />
          </a>
        </div>
      </header>
      
      {/* Body */}
      <div className="mb-40">
        <form className="flex flex-col items-center flex-grow space-y-7 px-4">
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
          <div className="flex text-xs space-x-2">
            <span className="text-[#70757a]">Google offered in: </span>
            <a className="link text-[#1a0dab] hover:underline">Filipino</a>
            <a className="link text-[#1a0dab] hover:underline">Cebuano</a>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="bg-[#f2f2f2] divide-y divide-gray-300 text-sm text-[#70757a]">
        <div className="py-3.5 px-8">
          <span>Philippines</span>
        </div>
        <div className="flex items-center justify-between py-3.5 px-8">
          <div>
            <ul className="flex space-x-7">
              <li className="link">About</li>
              <li className="link">Advertising</li>
              <li className="link">Business</li>
              <li className="link">How Search works</li>
            </ul>
          </div>
          <div>
            <ul className="flex space-x-7">
              <li className="link">Privacy</li>
              <li className="link">Terms</li>
              <li className="link">Settings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

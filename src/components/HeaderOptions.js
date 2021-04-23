import HeaderOption from './HeaderOption'
import { headerOptions } from '~/constants'

export default function HeaderOptions () {
  return (
    <div className="flex items-center w-full text-gray-700 justify-evenly text-sm lg:justify-start lg:space-x-20 lg:pl-52 border-b">
      {/* Left */}
      <div className="flex space-x-3 max-w-xl">
        {headerOptions.map(({ icon, title, isSelected }, i) => <HeaderOption key={i} Icon={icon} title={title} isSelected={isSelected} />)}
      </div>
      {/* Right */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  )
}
export default function Footer () {
  return (
    <footer className="bg-[#f2f2f2] divide-y divide-gray-300 text-sm text-[#70757a]">
      <div className="py-3.5 px-8">
        <span>Philippines</span>
      </div>
      <div className="flex flex-wrap items-center justify-between py-3.5 px-8">
        <div className="py-2 sm:py-0">
          <ul className="flex space-x-7">
            {['About', 'Advertising', 'Business', 'How Search works'].map((item, i) => <li key={i} className="link">{ item }</li>)}
          </ul>
        </div>
        <div className="py-2 sm:py-0">
          <ul className="flex space-x-7">
            {['Privacy', 'Terms', 'Settings'].map((item, i) => <li key={i} className="link">{ item }</li>)}
          </ul>
        </div>
      </div>
    </footer>
  )
}
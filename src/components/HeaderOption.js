export default function HeaderOption ({ Icon, title, isSelected }) {
  return (
    <div className={
      `flex items-center space-x-1 border-b-4 p-3 border-transparent
       hover:border-blue-500 hover:text-blue-500 cursor-pointer
       ${isSelected && 'text-blue-500 border-blue-500'}
      `}>
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  )
}
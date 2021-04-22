export default function Avatar ({ url }) {
  return (
    <img 
      src={url} 
      loading="lazy" 
      alt="profile pic" 
      className="w-8 h-8 rounded-full cursor-pointer transition duration-150 ring-4 ring-transparent hover:ring-gray-200"
    />
  )
}
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'

export default function PaginationButtons () {
  const router = useRouter()

  const startIndex = Number(router.query.start) || 0
  return (
    <div className="flex justify-between text-blue-700 max-w-lg mb-10">
      {startIndex >= 10 && (
        <Link href={`/search?term=${router.query}&start=${startIndex - 10}`}>
          <a className="flex flex-grow flex-col items-center hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </a>
        </Link>
      )}
      <Link href={`/search?term=${router.query}&start=${startIndex + 10}`}>
        <a className="flex flex-grow flex-col items-center hover:underline">
          <ChevronRightIcon className="h-5" />
          <p>Previous</p>
        </a>
      </Link>
    </div>
  )
}
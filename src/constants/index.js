import { 
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon
} from '@heroicons/react/outline'

export const headerOptions = [
  {
    icon: SearchIcon,
    title: 'All',
    isSelected: true
  },
  {
    icon: PhotographIcon,
    title: 'Images',
    isSelected: false
  },
  {
    icon: PlayIcon,
    title: 'Videos',
    isSelected: false
  },
  {
    icon: NewspaperIcon,
    title: 'News',
    isSelected: false
  },
  {
    icon: MapIcon,
    title: 'Maps',
    isSelected: false
  },
  {
    icon: DotsVerticalIcon,
    title: 'More',
    isSelected: false
  }
]
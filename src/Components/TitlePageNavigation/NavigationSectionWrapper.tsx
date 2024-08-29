import './Navigation.css'
import { ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

export default function NavigationSectionWrapper({ children }: PropsType) {
  return <div className='navigation-section-wrapper'>{children}</div>
}

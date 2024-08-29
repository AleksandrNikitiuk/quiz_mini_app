import { ReactNode } from 'react'
import './Title.css'

interface PropsType {
  children: ReactNode
}

export default function TitlePageSectionWrapper({ children }: PropsType) {
  return (
    <div className='title-page-section-wrapper'>
      {children}
    </div>
  )
}

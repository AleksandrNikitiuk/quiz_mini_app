import { ReactNode } from 'react'
import './FinishPage.css'

interface PropsType {
  children: ReactNode
}

export default function FinishPageSectionWrapper({ children }: PropsType) {
  return (
    <div className='finish-page-section-wrapper'>
      {children}
    </div>
  )
}

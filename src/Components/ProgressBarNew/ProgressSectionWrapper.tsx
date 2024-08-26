import './ProgressBar.css'
import { ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

export default function ProgressSectionWrapper({ children }: PropsType) {
  return <div className='progress-section-wrapper'>{children}</div>
}

import './ProgressBar.css'
import { ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

export default function ProgressBarWrapper({ children }: PropsType) {
  return <div className='progress-bar-wrapper'>{children}</div>
}

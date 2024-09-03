import './ProgressBar.css'
import { ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

export default function ProgressBarAndDataWrapper({ children }: PropsType) {
  return <div className='progress-bar-and-data-wrapper'>{children}</div>
}

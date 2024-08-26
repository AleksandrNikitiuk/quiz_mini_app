import { ReactNode } from 'react'
import './ProgressBar.css'

interface PropsType {
  children: ReactNode
}

export default function ProgressBarData({ children }: PropsType) {
  return <div className='progress-bar-data'>{children}</div>
}

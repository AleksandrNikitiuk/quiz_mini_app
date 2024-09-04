import './ProgressBar.css'
import { ReactNode } from 'react'
import WebApp from '@twa-dev/sdk'

interface PropsType {
  children: ReactNode
}

export default function ProgressBarWrapper({ children }: PropsType) {
  return <div className={WebApp.colorScheme === 'light'? 'progress-bar-wrapper': 'progress-bar-wrapper-dark'}>{children}</div>
}

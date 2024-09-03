import { ReactNode } from 'react'
import './FinishPage.css'
import WebApp from '@twa-dev/sdk'

interface PropsType {
  children: ReactNode
}

export default function FinishText({ children }: PropsType) {
  return (
    <div className={WebApp.colorScheme === 'light'? 'finish-text': 'finish-text-dark'}>
      {children}
    </div>
  )
}
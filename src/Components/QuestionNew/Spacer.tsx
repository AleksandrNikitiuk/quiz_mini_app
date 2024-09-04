import { ReactNode } from 'react'
import './Question.css'
import WebApp from '@twa-dev/sdk'

interface PropsType {
  children: ReactNode
}

export default function Spacer({ children }: PropsType) {
  return (
    <div className={WebApp.colorScheme === 'light'? 'spacer': 'spacer-dark'}>
      {children}
    </div>
  )
}
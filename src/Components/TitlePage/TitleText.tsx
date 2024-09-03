import { ReactNode } from 'react'
import './Title.css'
import WebApp from '@twa-dev/sdk'

interface PropsType {
  children: ReactNode
}

export default function TitleText({ children }: PropsType) {
  return (
    <div className={WebApp.colorScheme === 'light'? 'title-text': 'title-text-dark'}>
      Test: <br/>
      {children}
    </div>
  )
}
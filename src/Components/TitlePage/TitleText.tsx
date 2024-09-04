import { ReactNode } from 'react'
import './Title.css'
import WebApp from '@twa-dev/sdk'

interface PropsType {
  children: ReactNode
}

export default function TitleText({ children }: PropsType) {
  return (
    <div className={WebApp.colorScheme === 'light'? 'title-text': 'title-text-dark'}>
      <div className={WebApp.colorScheme === 'light'? 'word': 'word-dark'}>Test:</div> <br/>
      {children}
    </div>
  )
}
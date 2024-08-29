import { ReactNode } from 'react'
import './Title.css'

interface PropsType {
  children: ReactNode
}

export default function TitleText({ children }: PropsType) {
  return (
    <div className='title-text'>
      Test: <br/>
      {children}
    </div>
  )
}
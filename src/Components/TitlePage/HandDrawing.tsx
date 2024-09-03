import { ReactNode } from 'react'
import './Title.css'

interface PropsType {
  children: ReactNode
}


export default function HandDrawing({ children }: PropsType) {
  return (
    <div className='hand-drawing'>
      {children}
    </div>
  )
}

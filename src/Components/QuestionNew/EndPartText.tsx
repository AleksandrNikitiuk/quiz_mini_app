import { ReactNode } from 'react'
import './Question.css'

interface PropsType {
  children: ReactNode
}

export default function FirstPartText({ children }: PropsType) {
  return (
    <div className='first-part-text'>
      { children }
    </div>
  )
}

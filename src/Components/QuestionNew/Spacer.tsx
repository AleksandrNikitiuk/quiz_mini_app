import { ReactNode } from 'react'
import './Question.css'

interface PropsType {
  children: ReactNode
}

export default function Spacer({ children }: PropsType) {
  return (
    <div className='spacer'>
      {children}
    </div>
  )
}
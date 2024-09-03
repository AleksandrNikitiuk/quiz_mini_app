import { ReactNode } from 'react'
import './Question.css'

interface PropsType {
  children: ReactNode
}

export default function QuestionText({ children }: PropsType) {
  return (
    <div className='question-text'>
      {children}
    </div>
  )
}
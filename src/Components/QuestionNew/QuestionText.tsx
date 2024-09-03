import { ReactNode } from 'react'
import './Question.css'
import WebApp from '@twa-dev/sdk'

interface PropsType {
  children: ReactNode
}

export default function QuestionText({ children }: PropsType) {
  return (
    <div className={WebApp.colorScheme === 'light'? 'question-text': 'question-text-dark'}>
      {children}
    </div>
  )
}
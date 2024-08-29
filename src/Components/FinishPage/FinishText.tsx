import { ReactNode } from 'react'
import './FinishPage.css'

interface PropsType {
  children: ReactNode
}

export default function FinishText({ children }: PropsType) {
  return (
    <div className='finish-text'>
      {children}
    </div>
  )
}
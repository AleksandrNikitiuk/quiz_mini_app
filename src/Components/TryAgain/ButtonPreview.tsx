import './TryAgain.css'
import { ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

export default function ButtonPreview({ children }: PropsType) {
  return <div className='button-preview'>{children}</div>
}

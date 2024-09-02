import './TryAgain.css'
import { ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

export default function TextWrapper({ children }: PropsType) {
  return <div className='text-wrapper'>{children}</div>
}

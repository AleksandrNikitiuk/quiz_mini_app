import './TryAgain.css'
import { ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

export default function TextAndButtonWrapper({ children }: PropsType) {
  return <div className='text-and-button-wrapper'>{children}</div>
}

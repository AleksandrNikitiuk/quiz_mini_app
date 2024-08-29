import './TryAgain.css'
import { ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

export default function TryAgainButtonWrapper({ children }: PropsType) {
  return <div className='start_test-button-wrapper'>{children}</div>
}

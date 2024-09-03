import './TryAgain.css'
import { ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

export default function TryAgainSectionWrapper({ children }: PropsType) {
  return <div className='try-again-section-wrapper'>{children}</div>
}

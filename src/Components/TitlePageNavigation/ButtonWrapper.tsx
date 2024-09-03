import './Navigation.css'
import { ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

export default function ButtonWrapper({ children }: PropsType) {
  return <div className='button-wrapper'>{children}</div>
}

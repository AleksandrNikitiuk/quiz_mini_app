import { ReactNode } from 'react'
import './MainWindow.css'

interface PropsType {
  children: ReactNode
}

export default function MainWindow({ children }: PropsType) {
  return <div className='main-window'>{children}</div>
}

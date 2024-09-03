import './TryAgain.css'
import { ReactNode } from 'react'
import WebApp from '@twa-dev/sdk'

interface PropsType {
  children: ReactNode
}

export default function ButtonPreview({ children }: PropsType) {
  return <div className={WebApp.colorScheme === 'light'? 'button-preview': 'button-preview-dark'}>{children}</div>
}

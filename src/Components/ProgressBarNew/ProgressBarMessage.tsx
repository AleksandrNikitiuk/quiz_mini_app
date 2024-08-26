import './ProgressBar.css'

interface PropsType {
  children: string
}

export default function ProgressBarMessage({ children }: PropsType) {
  return <p className='progress-bar-message'>{children}</p>
}

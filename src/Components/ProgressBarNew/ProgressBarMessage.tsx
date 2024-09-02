import './ProgressBar.css'

interface PropsType {
  children: string
}

export default function ProgressBarMessage({ children }: PropsType) {
  return <div className='progress-bar-message'>{children}</div>
}

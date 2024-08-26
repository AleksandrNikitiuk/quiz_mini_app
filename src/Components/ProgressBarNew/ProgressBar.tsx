import './ProgressBar.css'

interface PropsType {
  style: {
    width: string
  }
}

export default function ProgressBar({ ...restProps }: PropsType) {
  return <div className='progress-bar' {...restProps}></div>
}

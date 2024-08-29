import './TryAgain.css'

interface PropsType {
  children: string
  onClick?: () => void
  className?: string
}

export default function TryAgainButton({ children, ...restProps }: PropsType) {
  return <button {...restProps}>{children}</button>
}

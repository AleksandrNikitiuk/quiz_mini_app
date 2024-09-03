import './TryAgain.css'

interface PropsType {
  children: string
  className?: string
}

export default function TryAgainWords({ children, ...restProps }: PropsType) {
  return <div {...restProps}>{children}</div>
}

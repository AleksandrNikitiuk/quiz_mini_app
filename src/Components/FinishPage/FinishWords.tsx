import './FinishPage.css'

interface PropsType {
  children: string
  className?: string
}

export default function FinishWords({ children, ...restProps }: PropsType) {
  return <div {...restProps}>{children}</div>
}

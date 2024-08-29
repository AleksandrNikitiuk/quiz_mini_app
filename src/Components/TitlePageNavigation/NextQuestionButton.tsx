import './Navigation.css'

interface PropsType {
  children: string
  onClick?: () => void
  className?: string
}

export default function NextQuestionButton({ children, ...restProps }: PropsType) {
  return <button {...restProps}>{children}</button>
}

import './Question.css'

interface PropsType {
  children: string
  className?: string
}

export default function QuestionWords({ children, ...restProps }: PropsType) {
  return <div {...restProps}>{children}</div>
}

import './Title.css'

interface PropsType {
  children: string
  className?: string
}

export default function TitleWords({ children, ...restProps }: PropsType) {
  return <div {...restProps}>{children}</div>
}

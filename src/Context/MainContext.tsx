import { createContext, useState, ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

interface ContextInterface {
  currentQuestion: number
  setCurrentQuestion?: (arg0: number) => void
  showAnswerResult: string
  setShowAnswerResult?: (arg0: string) => void
  correctAnswersNumber: number
  setCorrectAnswersNumber?: (arg0: number) => void
  wrongAnswersNumber: number
  setWrongAnswersNumber?: (arg0: number) => void
  finishMessage: string
  setFinishMessage?: (arg0: string) => void
  answerResult: string
  setAnswerResult?: (arg0: string) => void
  helloPage: boolean
  setHelloPage?: (arg0: boolean) => void
  finishPage: boolean
  setFinishPage?: (arg0: boolean) => void
}

export const MainContext = createContext<ContextInterface>({
  currentQuestion: 1,
  showAnswerResult: '',
  correctAnswersNumber: 0,
  wrongAnswersNumber: 0,
  finishMessage: '',
  answerResult: '',
  finishPage: false,
  helloPage: true,
})

export const MainContextProvider = ({ children }: PropsType) => {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [showAnswerResult, setShowAnswerResult] = useState('')
  const [correctAnswersNumber, setCorrectAnswersNumber] = useState(0)
  const [wrongAnswersNumber, setWrongAnswersNumber] = useState(0)
  const [finishMessage, setFinishMessage] = useState('')
  const [answerResult, setAnswerResult] = useState('')
  const [helloPage, setHelloPage] = useState(true)
  const [finishPage, setFinishPage] = useState(false)

  return (
    <MainContext.Provider
      value={{
        currentQuestion,
        setCurrentQuestion,
        showAnswerResult,
        setShowAnswerResult,
        correctAnswersNumber,
        setCorrectAnswersNumber,
        wrongAnswersNumber,
        setWrongAnswersNumber,
        finishMessage,
        setFinishMessage,
        answerResult,
        setAnswerResult,
        helloPage,
        setHelloPage,
        finishPage,
        setFinishPage,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}

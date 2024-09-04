import { useContext, useState } from 'react'
import QuestionsData from '../Data/question_new.json'
import AnswerButton from '../Components/AnswerNew/AnswerButton'
import AnswerButtonsWrapper from '../Components/AnswerNew/AnswerButtonsWrapper'
{/*import AnswerSectionWrapper from '../Components/AnswerNew/AnswerSectionWrapper'*/}
import NextQuestionButton from '../Components/AnswerNew/NextQuestionButton'
import NextQuestionButtonWrapper from '../Components/AnswerNew/NextQuestionButtonWrapper'
import FinishMessage from '../Components/AnswerNew/FinishMessage'
import FinishMessageOverlay from '../Components/AnswerNew/FinishMessageOverlay'
import { MainContext } from '../Context/MainContext'
import axios from 'axios'
import WebApp from '@twa-dev/sdk'

export default function AnswerCompound() {
  const {
    currentQuestion,
    setCurrentQuestion,
    setShowAnswerResult,
    correctAnswersNumber,
    setCorrectAnswersNumber,
    wrongAnswersNumber,
    setWrongAnswersNumber,
    setFinishMessage,
    answerResult,
    setAnswerResult,
    setFinishPage,
  } = useContext(MainContext)
  const [finalResult, setFinalResult] = useState('')
  const [showFinishMessage, setShowFinishMessage] = useState(false)
  const [wrongClickedAnswer, setWrongClickedAnswer] = useState('')

  const answersArray = QuestionsData[currentQuestion - 1].answers
  const correctAnswer = QuestionsData[currentQuestion - 1].correct_answer

  function checkAnswer(answer: string) {
    if (answer === correctAnswer) {
      setShowAnswerResult!('Correct Answer!')
      setFinalResult('correct')
      setWrongClickedAnswer('')
      setAnswerResult!(correctAnswer)
    }
    if (answer !== correctAnswer) {
      setShowAnswerResult!('Wrong Answer!')
      setFinalResult('wrong')
      setWrongClickedAnswer(answer)
      setAnswerResult!(correctAnswer)
    }
  }

  function changeButtonColor(answer: string) {
    if (answer === correctAnswer) {
      return 'green-button'
    }
    if (answer === wrongClickedAnswer) {
      return 'red-button'
    } else {
      return WebApp.colorScheme === 'light'? 'answer-button': 'answer-button-dark'
    }
  }

  function doButtonClickActions() {
    if (currentQuestion === QuestionsData.length) {
      if (finalResult === 'correct') {
        setCorrectAnswersNumber!(correctAnswersNumber + 1)
      }
      if (finalResult === 'wrong') {
        setWrongAnswersNumber!(wrongAnswersNumber + 1)
      }
      async function fetch_data() {
        const base_url = "http://127.0.0.1:5000/finish_message?correct_answers_number="
        const response = await axios.get(`${base_url}${correctAnswersNumber}`)
        setFinishMessage!(response.data.message)
      }
      fetch_data()
      setFinalResult('')
      setFinishPage!(true)
      return setShowFinishMessage(true)
    }

    setCurrentQuestion!(currentQuestion + 1)
    setShowAnswerResult!('')

    if (finalResult === 'correct') {
      setCorrectAnswersNumber!(correctAnswersNumber + 1)
    }
    if (finalResult === 'wrong') {
      setWrongAnswersNumber!(wrongAnswersNumber + 1)
    }
    setFinalResult('')
    setAnswerResult!('')
  }

  return (
    <>
      {/*<AnswerSectionWrapper>*/}
        <AnswerButtonsWrapper>
          {answersArray.map((answer: string, index: number) => (
            <AnswerButton
              key={index}
              disabled={answerResult !== ''}
              onClick={() => checkAnswer(answer)}
              className={
                finalResult === '' ? WebApp.colorScheme === 'light'? 'answer-button': 'answer-button-dark' : changeButtonColor(answer)
              }
            >
              {decodeURIComponent(answer)}
            </AnswerButton>
          ))}
        </AnswerButtonsWrapper>
        {/* <AnswerResult>{showAnswerResult}</AnswerResult> */}
        <NextQuestionButtonWrapper>
            <NextQuestionButton
                disabled={answerResult === ''}
                onClick={doButtonClickActions}
                className={
                    answerResult === '' ? WebApp.colorScheme === 'light'? 'inactive-next-question-button': 'inactive-next-question-button-dark' : 'next-question-button'
                    }
            >
                Next
            </NextQuestionButton>
        </NextQuestionButtonWrapper>
      {/*</AnswerSectionWrapper>*/}
      {showFinishMessage ? (
        <FinishMessageOverlay>
          <FinishMessage />
        </FinishMessageOverlay>
      ) : null}
    </>
  )
}

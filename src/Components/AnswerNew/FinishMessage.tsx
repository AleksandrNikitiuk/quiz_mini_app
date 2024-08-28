import './Answer.css'
import { useContext } from 'react'
import { MainContext } from '../../Context/MainContext'

export default function FinishMessage() {
  const { correctAnswersNumber, wrongAnswersNumber, finishMessage } = useContext(MainContext)
  const totalQuestions = correctAnswersNumber + wrongAnswersNumber

  return (
    <div className='finish-message'>
      Your result is {correctAnswersNumber} out of {totalQuestions}.
      <br />
      {finishMessage}
      <br />
    </div>
  )
}

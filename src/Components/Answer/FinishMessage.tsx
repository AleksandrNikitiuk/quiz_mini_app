import './Answer.css'
import { useContext } from 'react'
import MessagesData from '../../Data/finishMessages.json'
import { MainContext } from '../../Context/MainContext'

export default function FinishMessage() {
  const { correctAnswersNumber } = useContext(MainContext)
  const totalQuestions = MessagesData.length

  return (
    <div className='finish-message'>
      <p>Your result {correctAnswersNumber} from {totalQuestions}. {decodeURIComponent(MessagesData[correctAnswersNumber === 0 ? 1 : correctAnswersNumber - 1].message)}</p>
    </div>
  )
}

import './Answer.css'
import { useContext } from 'react'
import MessagesData from '../../Data/finishMessages.json'
import { MainContext } from '../../Context/MainContext'

export default function FinishMessage() {
  const { correctAnswersNumber } = useContext(MainContext)

  return (
    <div className='finish-message'>
      {decodeURIComponent(MessagesData[correctAnswersNumber - 1].message)}
    </div>
  )
}

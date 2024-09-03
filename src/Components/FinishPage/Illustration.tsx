import { useContext } from 'react'
import './FinishPage.css'
import accent from '/accent.svg'
import stars from '/stars.svg'
import { MainContext } from '../../Context/MainContext'


export default function Illustration() {
  const { correctAnswersNumber, wrongAnswersNumber } = useContext(MainContext)

  return (
    <div className='finish-illustration'>
      {correctAnswersNumber + wrongAnswersNumber === correctAnswersNumber
        ? <img src={stars} alt="Stars" />
        : <img src={accent} alt="Accent" />
      }
    </div>
  )
}

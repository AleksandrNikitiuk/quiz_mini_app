import { useContext } from 'react'
import './FinishPage.css'
import accent from '/accent.svg'
import stars from '/stars.svg'
import { MainContext } from '../../Context/MainContext'
import LazyLoad from 'react-lazy-load'


export default function Illustration() {
  const { correctAnswersNumber, wrongAnswersNumber } = useContext(MainContext)

  return (
    <div className='finish-illustration'>
      {correctAnswersNumber + wrongAnswersNumber === correctAnswersNumber
        ? <LazyLoad> <img src={stars} alt="Stars" /> </LazyLoad>
        : <LazyLoad> <img src={accent} alt="Accent" /> </LazyLoad>
      }
    </div>
  )
}

import { useContext } from 'react'
import './FinishPage.css'
import WebApp from '@twa-dev/sdk'
import { MainContext } from '../../Context/MainContext'


export default function Illustration() {
  const { correctAnswersNumber, wrongAnswersNumber } = useContext(MainContext)

  return (
    <div className='finish-illustration'>
      {correctAnswersNumber + wrongAnswersNumber === correctAnswersNumber
        ? <img src={WebApp.colorScheme === 'light'? '/public/stars.svg': '/public/stars-dark.svg' } alt="Stars" />
        : <img src={WebApp.colorScheme === 'light'? '/public/accent.svg': '/public/accent-dark.svg' } alt="Accent" />
      }
    </div>
  )
}

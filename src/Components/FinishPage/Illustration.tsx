import { useContext } from 'react'
import './FinishPage.css'
import accent from '/public/accent.svg'
import accent_dark from '/public/accent-dark.svg'
import stars from '/public/stars.svg'
import stars_dark from '/public/stars-dark.svg'
import WebApp from '@twa-dev/sdk'
import { MainContext } from '../../Context/MainContext'


export default function Illustration() {
  const { correctAnswersNumber, wrongAnswersNumber } = useContext(MainContext)

  return (
    <div className='finish-illustration'>
      {correctAnswersNumber + wrongAnswersNumber === correctAnswersNumber
        ? <img src={WebApp.colorScheme === 'light'? stars: stars_dark } alt="Stars" />
        : <img src={WebApp.colorScheme === 'light'? accent: accent_dark } alt="Accent" />
      }
    </div>
  )
}

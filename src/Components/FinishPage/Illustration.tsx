import { useContext } from 'react'
import './FinishPage.css'
import accent from '/accent.svg'
import accent_dark from '/accent-dark.svg'
import stars from '/stars.svg'
import stars_dark from '/stars-dark.svg'
import WebApp from '@twa-dev/sdk'
import { MainContext } from '../../Context/MainContext'


export default function Illustration() {
  const { correctAnswersNumber, wrongAnswersNumber } = useContext(MainContext)

  return (
    <div className='finish-illustration'>
      {correctAnswersNumber + wrongAnswersNumber === correctAnswersNumber
        ? <img rel="preload" src={WebApp.colorScheme === 'light'? stars: stars_dark } alt="Stars" />
        : <img src={WebApp.colorScheme === 'light'? '/accent.svg': accent_dark } alt="Accent" />
      }
    </div>
  )
}

import { useContext } from 'react'
import './FinishPage.css'
import accent from '/accent.svg'
import stars from '/stars.svg'
import stars_dark from '/stars-dark.svg'
import accent_dark from '/accent-dark.svg'
import WebApp from '@twa-dev/sdk'
import { MainContext } from '../../Context/MainContext'
import LazyLoad from 'react-lazy-load'


export default function Illustration() {
  const { correctAnswersNumber, wrongAnswersNumber } = useContext(MainContext)

  return (
    <div className='finish-illustration'>
      {correctAnswersNumber + wrongAnswersNumber === correctAnswersNumber
        ? <LazyLoad><img src={WebApp.colorScheme === 'light'? stars: stars_dark } alt="Stars" /></LazyLoad>
        : <LazyLoad><img src={WebApp.colorScheme === 'light'? accent: accent_dark } alt="Accent" /></LazyLoad>
      }
    </div>
  )
}

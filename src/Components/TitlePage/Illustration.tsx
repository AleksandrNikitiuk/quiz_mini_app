import './Title.css'
import star from '/star.svg'
import star_dark from '/star-dark.svg'
import WebApp from '@twa-dev/sdk'


export default function Illustration() {
  return (
    <div className='illustration'>
      <img src={WebApp.colorScheme === 'light'? star: star_dark} alt="Star" />
    </div>
  )
}

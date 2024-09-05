import './Title.css'
import WebApp from '@twa-dev/sdk'


export default function Illustration() {
  return (
    <div className='illustration'>
      <img src={WebApp.colorScheme === 'light'? '/public/star.svg': '/public/star-dark.svg'} alt="Star" />
    </div>
  )
}

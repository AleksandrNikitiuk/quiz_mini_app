import './Title.css'
import WebApp from '@twa-dev/sdk'


export default function HandDrawingIllustration() {
  return (
    <div className='hand-drawing-illustration'>
      <img src={WebApp.colorScheme === 'light'? '/public/handdrawing@2x.png': '/public/handdrawing@2x-dark.svg'} alt="Hand Drawing" />
    </div>
  )
}

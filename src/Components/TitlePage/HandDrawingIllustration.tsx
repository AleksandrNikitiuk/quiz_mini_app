import './Title.css'
import handdrawing from '/public/handdrawing@2x.png'
import handdrawing_dark from '/public/handdrawing@2x-dark.svg'
import WebApp from '@twa-dev/sdk'


export default function HandDrawingIllustration() {
  return (
    <div className='hand-drawing-illustration'>
      <img src={WebApp.colorScheme === 'light'? handdrawing: handdrawing_dark} alt="Hand Drawing" />
    </div>
  )
}

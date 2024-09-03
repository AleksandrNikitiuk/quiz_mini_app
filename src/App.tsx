import QuizCompound from './Compounds/QuizCompound'
import { useEffect, useRef } from 'react'

export default function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const app = appRef.current;

    const handleFullscreen = () => {
      if (app.requestFullscreen) {
        app.requestFullscreen();
      } else if (app.mozRequestFullScreen) {
        app.mozRequestFullScreen();
      } else if (app.webkitRequestFullscreen) {
        app.webkitRequestFullscreen();
      }
    };

    // Проверяем, загрузилась ли страница полностью
    window.addEventListener('load', handleFullscreen);

    return () => {
      window.removeEventListener('load', handleFullscreen);
    };
  }, []);
  
  return (
    <div ref={appRef}>
      <QuizCompound />
    </div>
  )
}
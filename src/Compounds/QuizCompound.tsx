import { useContext } from 'react'
import TitlePageCompound from './TitlePageCompound'
import NavigationCompound from './NavigationCompound'
import AnswerNewCompound from './AnswerNewCompound'
import ProgressBarNewCompound from './ProgressBarNewCompound'
import QuestionNewCompound from './QuestionNewCompound'
import FinishPageCompound from './FinishPageCompound'
import TryAgainCompound from './TryAgainCompound'
import { MainContext } from '../Context/MainContext'

export default function QuizCompound() {
    
  const { helloPage, finishPage } = useContext(MainContext)
  
  return (
    <>
      {helloPage === true? (
        <>
          <TitlePageCompound />
          <NavigationCompound />
        </>
        ):
        finishPage === false? (
          <>
            <ProgressBarNewCompound />
            <QuestionNewCompound />
            <AnswerNewCompound />
          </>
        ):
          <>
            <FinishPageCompound />
            <TryAgainCompound />
          </>
      }
    </>
  )
}

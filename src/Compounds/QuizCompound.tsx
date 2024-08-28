import { React, useContext } from 'react'
import ProgressBar from '../Components/ProgressBar/ProgressBar'
import AnswerCompound from './AnswerCompound'
import AnswerNewCompound from './AnswerNewCompound'
import ProgressBarNewCompound from './ProgressBarNewCompound'
import QuestionCompound from './QuestionCompound'
import QuestionNewCompound from './QuestionNewCompound'
import ScoreBarCompound from './ScoreBarCompound'
import { MainContext } from '../Context/MainContext'

export default function QuizCompound() {
    
  const showAnswerResult = useContext(MainContext)
  
  return (
    <>
      {!showAnswerResult? (
        null
        ): 
        <>
          <ProgressBarNewCompound />
          <QuestionNewCompound />
          <AnswerNewCompound />
        </>}
      
    </>
  )
}

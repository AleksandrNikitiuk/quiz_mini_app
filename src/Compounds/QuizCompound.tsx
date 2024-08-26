import ProgressBar from '../Components/ProgressBar/ProgressBar'
import AnswerCompound from './AnswerCompound'
import ProgressBarNewCompound from './ProgressBarNewCompound'
import QuestionCompound from './QuestionCompound'
import QuestionNewCompound from './QuestionNewCompound'
import ScoreBarCompound from './ScoreBarCompound'

export default function QuizCompound() {

  return (
    <>
      <ProgressBarNewCompound />
      <QuestionNewCompound />
      <AnswerCompound />
      <ScoreBarCompound />
      
    </>
  )
}

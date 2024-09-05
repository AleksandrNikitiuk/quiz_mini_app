import { useContext } from 'react'
import QuestionsData from '../Data/questions.json'
import MessagesData from '../Data/messages.json'
import ProgressBarData from '../Components/ProgressBarNew/ProgressBarData'
import ProgressBarWrapper from '../Components/ProgressBarNew/ProgressBarWrapper'
import ProgressBarAndDataWrapper from '../Components/ProgressBarNew/ProgressBarAndDataWrapper'
import ProgressSectionWrapper from '../Components/ProgressBarNew/ProgressSectionWrapper'
import ProgressBar from '../Components/ProgressBarNew/ProgressBar'
import ProgressBarMessage from '../Components/ProgressBarNew/ProgressBarMessage'
import { MainContext } from '../Context/MainContext'

export default function ProgressBarNewCompound() {
  const { currentQuestion, showAnswerResult } = useContext(MainContext)
  const totalQuestions = QuestionsData.length

  return (
    <>
      <ProgressSectionWrapper>
        <ProgressBarMessage>
            {showAnswerResult === ''
                ? ''
                : showAnswerResult === 'Correct Answer!'
                    ?  `${MessagesData[Math.floor(Math.random() * (9 - 4 + 1)) + 4].message}`
                    : `${MessagesData[Math.floor(Math.random() * (3 - 0 + 1)) + 0].message}`}
        </ProgressBarMessage>
        <ProgressBarAndDataWrapper>
          <ProgressBarWrapper>
              <ProgressBar style={showAnswerResult === ''
                ? { width: `${((currentQuestion - 1) / totalQuestions) * 100}%` }
                : { width: `${((currentQuestion) / totalQuestions) * 100}%` }} />
          </ProgressBarWrapper>
          <ProgressBarData>
            {showAnswerResult === ''? currentQuestion - 1: currentQuestion}/{totalQuestions}
          </ProgressBarData>
        </ProgressBarAndDataWrapper>
      </ProgressSectionWrapper>
    </>
  )
}

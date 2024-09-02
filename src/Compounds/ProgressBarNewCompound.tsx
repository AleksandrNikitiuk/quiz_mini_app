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
  const widthPercentage = ((currentQuestion) / totalQuestions) * 100

  return (
    <>
      <ProgressSectionWrapper>
        <ProgressBarMessage>
            {showAnswerResult === ''
                ? ''
                : showAnswerResult === 'Correct Answer!'
                    ?  `${MessagesData[Math.floor(Math.random() * (5 - 3 + 1)) + 3].message}`
                    : `${MessagesData[Math.floor(Math.random() * (2 - 0 + 1)) + 0].message}`}
        </ProgressBarMessage>
        <ProgressBarAndDataWrapper>
          <ProgressBarWrapper>
              <ProgressBar style={{ width: `${widthPercentage}%` }} />
          </ProgressBarWrapper>
          <ProgressBarData>
            {currentQuestion}/{totalQuestions}
          </ProgressBarData>
        </ProgressBarAndDataWrapper>
      </ProgressSectionWrapper>
    </>
  )
}

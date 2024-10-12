import { useContext } from 'react'
import QuestionSectionWrapper from '../Components/QuestionNew/QuestionSectionWrapper'
import QuestionText from '../Components/QuestionNew/QuestionText'
import WebApp from '@twa-dev/sdk'

import QuestionsData from '../Data/questions.json'
import { MainContext } from '../Context/MainContext'
import QuestionWords from '../Components/QuestionNew/QuestionWords'

export default function QuestionNewCompound() {
    const { currentQuestion, answerResult } = useContext(MainContext)
    const questionWords = QuestionsData[currentQuestion - 1].question

    return (
    <>
      <QuestionSectionWrapper>  
        <QuestionText>

            {questionWords.map((word: string, index: number) => (
                <QuestionWords
                key={index}
                className={
                    word  === 'answer' || word === 'Answer' ? answerResult === ''? WebApp.colorScheme === 'light'? 'spacer': 'spacer-dark': 'answer-in-question': 'text'
                }
                >
                {word  === 'answer' || word === 'Answer'?  answerResult ===''? word : word  === 'answer'? answerResult.toLowerCase(): answerResult : word}
                </QuestionWords>
            ))}
        </QuestionText>
      </QuestionSectionWrapper>
    </>
  )
}

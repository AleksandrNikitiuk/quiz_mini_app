import { useContext } from 'react'
import QuestionSectionWrapper from '../Components/QuestionNew/QuestionSectionWrapper'
import QuestionText from '../Components/QuestionNew/QuestionText'

import QuestionsData from '../Data/question_new.json'
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
                    word  === 'answer' ? answerResult === ''? 'spacer': 'answer-in-question': 'text'
                }
                >
                {word  === 'answer'?  answerResult ===''? word : answerResult : word}
                </QuestionWords>
            ))}
        </QuestionText>
      </QuestionSectionWrapper>
    </>
  )
}

import { useContext } from 'react'
import TitlePageSectionWrapper from '../Components/TitlePage/TitlePageSectionWrapper'
import Illustration from '../Components/TitlePage/Illustration'
import TitleText from '../Components/TitlePage/TitleText'
import TitleWords from '../Components/TitlePage/TitleWords'
import QuestionsData from '../Data/question_new.json'
import { MainContext } from '../Context/MainContext'


export default function QuestionNewCompound() {
    const { currentQuestion } = useContext(MainContext)
    const titleWords = QuestionsData[currentQuestion - 1].category

    return (
    <>
      <TitlePageSectionWrapper>
        
        <Illustration /> 

        <TitleText>
            {titleWords.map((word: string, index: number) => (
                <TitleWords
                key={index}
                className={
                    'word'
                }
                >
                {word}
                </TitleWords>
            ))}
        </TitleText>       

      </TitlePageSectionWrapper>
    </>
  )
}

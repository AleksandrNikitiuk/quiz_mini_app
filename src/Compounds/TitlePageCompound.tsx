import { useContext } from 'react'
import TitlePageSectionWrapper from '../Components/TitlePage/TitlePageSectionWrapper'
import Illustration from '../Components/TitlePage/Illustration'
import TitleText from '../Components/TitlePage/TitleText'
import TitleWords from '../Components/TitlePage/TitleWords'
import HandDrawing from '../Components/TitlePage/HandDrawing'
import HandDrawingIllustration from '../Components/TitlePage/HandDrawingIllustration.tsx'
//import QuestionsData from '../Data/question_new.json'
import TestData from '../Data/test_data.json'
//import { MainContext } from '../Context/MainContext'
import WebApp from '@twa-dev/sdk'


export default function QuestionNewCompound() {
    //const { currentQuestion } = useContext(MainContext)
    //const titleWords = QuestionsData[currentQuestion - 1].category
    const titleWords = TestData

    return (
    <>
      <TitlePageSectionWrapper>
        
        <Illustration /> 

        <TitleText>
            {titleWords.map((word: string, index: number) => (
                <TitleWords
                key={index}
                className={
                    WebApp.colorScheme === 'light'? 'word': 'word-dark'
                }
                >
                {word}
                </TitleWords>
            ))}
        </TitleText>

        <HandDrawing>
          <HandDrawingIllustration />
        </HandDrawing>     

      </TitlePageSectionWrapper>
    </>
  )
}

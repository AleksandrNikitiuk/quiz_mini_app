import { useContext } from 'react'
import QuestionsData from '../Data/question_new.json'
import NavigationSectionWrapper from '../Components/TitlePageNavigation/NavigationSectionWrapper'
import TextAndButtonWrapper from '../Components/TitlePageNavigation/TextAndButtonWrapper'
import ButtonPreview from '../Components/TitlePageNavigation/ButtonPreview'
import NextQuestionButtonWrapper from '../Components/TitlePageNavigation/NextQuestionButtonWrapper'
import NextQuestionButton from '../Components/TitlePageNavigation/NextQuestionButton'

import { MainContext } from '../Context/MainContext'

export default function NavigationCompound() {
  const { setHelloPage } = useContext(MainContext)
  const difficulty = QuestionsData[0].difficulty

  function doButtonClickActions() {
    setHelloPage!(false)
  }

  return (
    <>
      <NavigationSectionWrapper>
        
        <TextAndButtonWrapper>
            
            <ButtonPreview>
              level <br />
              {difficulty}
            </ButtonPreview>
            
            <NextQuestionButtonWrapper>
                <NextQuestionButton
                    onClick={ doButtonClickActions }
                    className={'start_test-button'}
                >
                    Go
                </NextQuestionButton>
            </NextQuestionButtonWrapper>

      </TextAndButtonWrapper>
    
    </NavigationSectionWrapper>
      
    </>
  )
}

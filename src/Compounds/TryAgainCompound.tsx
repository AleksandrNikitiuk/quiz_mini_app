import { useContext } from 'react'
import QuestionsData from '../Data/question_new.json'
import TryAgainSectionWrapper from '../Components/TryAgain/TryAgainSectionWrapper'
import TextAndButtonWrapper from '../Components/TryAgain/TextAndButtonWrapper'
import ButtonPreview from '../Components/TryAgain/ButtonPreview'
import NextQuestionButtonWrapper from '../Components/TryAgain/TryAgainButtonWrapper'
import NextQuestionButton from '../Components/TryAgain/TryAgainButton'

import { MainContext } from '../Context/MainContext'

export default function TryAgainCompound() {
  const { setHelloPage } = useContext(MainContext)
  const difficulty = QuestionsData[0].difficulty

  function doButtonClickActions() {
    setHelloPage!(false)
  }

  return (
    <>
      <TryAgainSectionWrapper>
        
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
                    Try again
                </NextQuestionButton>
            </NextQuestionButtonWrapper>

      </TextAndButtonWrapper>
    
    </TryAgainSectionWrapper>
      
    </>
  )
}

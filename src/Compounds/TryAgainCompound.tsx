import FinishMessages from '../Data/newFinishMessages.json'
import TryAgainSectionWrapper from '../Components/TryAgain/TryAgainSectionWrapper'
import TextAndButtonWrapper from '../Components/TryAgain/TextAndButtonWrapper'
import ButtonPreview from '../Components/TryAgain/ButtonPreview'
import TryAgainWords from '../Components/TryAgain/TryAgainWords'
import NextQuestionButtonWrapper from '../Components/TryAgain/TryAgainButtonWrapper'
import NextQuestionButton from '../Components/TryAgain/TryAgainButton'

export default function TryAgainCompound() {
  const finishWords = FinishMessages[0].message

  function doButtonClickActions() {
    window.location.href = 'https://localhost:5173/';
  }

  return (
    <>
      <TryAgainSectionWrapper>
        
        <TextAndButtonWrapper>
            
            <ButtonPreview>
              {finishWords.map((word: string, index: number) => (
                  <TryAgainWords
                  key={index}
                  className={
                    'message'
                }
                >
                {word}
                  </TryAgainWords>
              ))}
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

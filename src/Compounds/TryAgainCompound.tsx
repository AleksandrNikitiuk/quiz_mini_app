import { useContext } from 'react'
import FinishMessages from '../Data/newFinishMessages.json'
{/*import TryAgainSectionWrapper from '../Components/TryAgain/TryAgainSectionWrapper'
import TextAndButtonWrapper from '../Components/TryAgain/TextAndButtonWrapper'*/}
import TextWrapper from '../Components/TryAgain/TextWrapper'
import ButtonWrapper from '../Components/TryAgain/ButtonWrapper'
import ButtonPreview from '../Components/TryAgain/ButtonPreview'
import TryAgainWords from '../Components/TryAgain/TryAgainWords'
import NextQuestionButtonWrapper from '../Components/TryAgain/TryAgainButtonWrapper'
import NextQuestionButton from '../Components/TryAgain/TryAgainButton'
import { MainContext } from '../Context/MainContext'

export default function TryAgainCompound() {
  const {correctAnswersNumber} = useContext(MainContext)
  const finishWords = FinishMessages[correctAnswersNumber === 0? 0: correctAnswersNumber - 1].message

  function doButtonClickActions(isAllAnswersCorrect: boolean) {
    isAllAnswersCorrect
      ? window.location.href = 'https://aleksandrnikitiuk.github.io/quiz_mini_app/'
      :window.location.href = 'https://t.me/homeoflanguages_perm/75';
  }

  return (
    <>
      <TextWrapper>
            
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

      </TextWrapper>

      <ButtonWrapper>
            
            <NextQuestionButtonWrapper>
                <NextQuestionButton
                    onClick={ () => doButtonClickActions(correctAnswersNumber !== 10) }
                    className={'start_test-button'}
                >
                    {correctAnswersNumber !== 10
                      ? 'Try again'
                      : 'Share'}
                </NextQuestionButton>
            </NextQuestionButtonWrapper>

      </ButtonWrapper>      
    </>
  )
}

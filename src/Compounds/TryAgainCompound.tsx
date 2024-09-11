import { useContext } from 'react'
import FinishMessages from '../Data/newFinishMessages.json'
import TryAgainButtonWrapper from '../Components/TryAgain/TryAgainButtonWrapper'
import TextWrapper from '../Components/TryAgain/TextWrapper'
import ButtonWrapper from '../Components/TryAgain/ButtonWrapper'
import ButtonPreview from '../Components/TryAgain/ButtonPreview'
import TryAgainWords from '../Components/TryAgain/TryAgainWords'
import TryAgainButton from '../Components/TryAgain/TryAgainButton'
import { MainContext } from '../Context/MainContext'

export default function TryAgainCompound() {
  const {correctAnswersNumber} = useContext(MainContext)
  const finishWords = FinishMessages[correctAnswersNumber === 0? 0: correctAnswersNumber - 1].message

  function doButtonClickActions(correctAnswersNumber: number) {
    correctAnswersNumber < 6
      ? window.location.href = 'https://aleksandrnikitiuk.github.io/quiz_mini_app/'
      : correctAnswersNumber !== 10
      ? window.open(`https://t.me/share/url?url=https://t.me/homeoflanguagesbot&text=My%20result%20is%20${correctAnswersNumber}%20out%20of%2010!%20Try%20to%20score%20more!`, '_blank')
      : window.open(`https://t.me/share/url?url=https://t.me/homeoflanguagesbot&text=My%20result%20is%20${correctAnswersNumber}%20out%20of%2010!%20Try%20to%20get%20a%20better%20result!`, '_blank')
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
            
            <TryAgainButtonWrapper>
                <TryAgainButton
                    onClick={ () => doButtonClickActions(correctAnswersNumber) }
                    className={'try-again-button'}
                >
                    {correctAnswersNumber < 6
                      ? 'Try again'
                      : 'Share'}
                </TryAgainButton>
            </TryAgainButtonWrapper>

      </ButtonWrapper>      
    </>
  )
}

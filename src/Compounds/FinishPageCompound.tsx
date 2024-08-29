import FinishPageSectionWrapper from '../Components/FinishPage/FinishPageSectionWrapper'
import Illustration from '../Components/FinishPage/Illustration'
import FinishText from '../Components/FinishPage/FinishText'
import FinishWords from '../Components/FinishPage/FinishWords'
import FinishMessages from '../Data/newFinishMessages.json'


export default function FinishPageCompound() {
    const finishWords = FinishMessages[0].message

    return (
    <>
      <FinishPageSectionWrapper>
        
        <Illustration /> 

        <FinishText>
            {finishWords.map((word: string, index: number) => (
                <FinishWords
                key={index}
                className={'word'}
                >
                {word}
                </FinishWords>
            ))}
        </FinishText>       

      </FinishPageSectionWrapper>
    </>
  )
}

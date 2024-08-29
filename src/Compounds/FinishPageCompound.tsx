import { useContext } from 'react'
import FinishPageSectionWrapper from '../Components/FinishPage/FinishPageSectionWrapper'
import Illustration from '../Components/FinishPage/Illustration'
import FinishText from '../Components/FinishPage/FinishText'
import { MainContext } from '../Context/MainContext'


export default function FinishPageCompound() {
    const { correctAnswersNumber, wrongAnswersNumber } = useContext(MainContext)

    return (
    <>
      <FinishPageSectionWrapper>
        
        <Illustration /> 

        <FinishText>
          {correctAnswersNumber} out of {correctAnswersNumber + wrongAnswersNumber}
        </FinishText>       

      </FinishPageSectionWrapper>
    </>
  )
}

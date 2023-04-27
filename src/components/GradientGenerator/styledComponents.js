import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Heading = styled.h1`
  color: #ededed;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const ChooseHeading = styled.p`
  color: #ededed;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const CustomButtonContainer = styled.ul`
  margin: 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const ColorPickerContainer = styled.div`
  margin: 12px;
  display: flex;
`
export const SpecificColorContainer = styled.div`
  padding: 12px;
`
export const ColorCode = styled(ChooseHeading)`
  font-size: 14px;
`
export const InputColor = styled.input`
  outline: none;
  border-width: 0px;
  background-color: transparent;
  cursor: pointer;
  border: none;
`

export const CustomButton = styled.button`
  background-color: #00c9b7;
  color: #014f7b;
  width: 140px;
  border-radius: 8px;
  border-width: 0px;
  height: 30px;
`
export const CustomButtonForColor = styled.button`
  background-color: ${props => props.bgColor};
  border-width: 0px;
`

import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  Heading,
  ChooseHeading,
  CustomButtonContainer,
  ColorPickerContainer,
  SpecificColorContainer,
  ColorCode,
  InputColor,
  CustomButton,
  CustomButtonForColor,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    color1Input: '#8ae323',
    color2Input: '#014f7b',
  }

  updatedActiveDirection = value => {
    this.setState({activeDirection: value})
  }

  updateColor1 = event => {
    this.setState({color1Input: event.target.value})
  }

  updateColor2 = event => {
    this.setState({color2Input: event.target.value})
  }

  updateBackgroundImg = () => {
    const {color1Input, color2Input} = this.state
    this.setState({color1: color1Input, color2: color2Input})
  }

  render() {
    const {
      activeDirection,
      color1,
      color2,
      color1Input,
      color2Input,
    } = this.state
    return (
      <GradientGeneratorContainer
        direction={activeDirection}
        color1={color1}
        color2={color2}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <ChooseHeading>Choose Direction</ChooseHeading>
        <CustomButtonContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              item={each}
              active={activeDirection}
              updatedActiveDirection={this.updatedActiveDirection}
            />
          ))}
        </CustomButtonContainer>
        <ChooseHeading>Pick the Colors</ChooseHeading>
        <ColorPickerContainer>
          <SpecificColorContainer>
            <ColorCode>{color1Input}</ColorCode>
            <CustomButtonForColor bgColor={color1Input}>
              <InputColor
                type="color"
                onChange={this.updateColor1}
                value={color1Input}
              />
            </CustomButtonForColor>
          </SpecificColorContainer>
          <SpecificColorContainer>
            <ColorCode>{color2Input}</ColorCode>
            <CustomButtonForColor bgColor={color2Input}>
              <InputColor
                type="color"
                value={color2Input}
                onChange={this.updateColor2}
              />
            </CustomButtonForColor>
          </SpecificColorContainer>
        </ColorPickerContainer>
        <CustomButton onClick={this.updateBackgroundImg}>Generate</CustomButton>
      </GradientGeneratorContainer>
    )
  }
}
export default GradientGenerator

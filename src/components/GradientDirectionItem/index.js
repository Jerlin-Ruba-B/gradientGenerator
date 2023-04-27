import {
  ListContainer,
  CustomButton,
  CustomButtonActive,
} from './styledComponents'

const GradientDirectionItem = props => {
  const {item, active, updatedActiveDirection} = props

  const updateDirection = () => {
    updatedActiveDirection(item.value)
  }

  if (active === item.value) {
    return (
      <ListContainer>
        <CustomButtonActive type="button" onClick={updateDirection}>
          {item.displayText}
        </CustomButtonActive>
      </ListContainer>
    )
  }

  return (
    <ListContainer>
      <CustomButton type="button" onClick={updateDirection}>
        {item.displayText}
      </CustomButton>
    </ListContainer>
  )
}
export default GradientDirectionItem

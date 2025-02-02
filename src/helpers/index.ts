import { BREAK_POINTS } from "@/constants"

export const getScreenWidth = () => {
  const screenWidth = window.innerWidth
  const breakPointArr = Object.values(BREAK_POINTS)
  const breakPointKeys = Object.keys(BREAK_POINTS)
  const valueIndex = breakPointArr.indexOf(breakPointArr.filter((value) => value >= screenWidth)[0])
  const breakPointType = breakPointKeys[valueIndex]

  return {
    width: screenWidth,
    type: breakPointType
  }
}
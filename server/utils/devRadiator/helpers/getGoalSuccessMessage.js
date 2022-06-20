function getGoalSuccessMessage(currentValue, goal) {
  if (goal.type === '=') {
    if (currentValue === goal.value) {
      return { emoji: ':white_check_mark:', message: '' }
    }
    return { emoji: ':x:', message: ` \`Should be ${goal.type} ${goal.value}\`` }
  }
  if (goal.type === '>') {
    if (currentValue >= goal.value) {
      return { emoji: ':white_check_mark:', message: '' }
    }
    return { emoji: ':x:', message: ` \`Should be ${goal.type} ${goal.value}\`` }
  }
  if (goal.type === '<') {
    if (currentValue <= goal.value) {
      return { emoji: ':white_check_mark:', message: '' }
    }
    return { emoji: ':x:', message: ` \`Should be ${goal.type} ${goal.value}\`` }
  }
  return { emoji: '', message: '' }
}

module.exports = { getGoalSuccessMessage }

const movementValidation = {
  validate(input) {
    if (input === 'U' || input === 'D') {
      return input;
    }
    throw new Error('[ERROR]: U 와 D 중 하나를 입력해주세요.');
  },
};
export default movementValidation;

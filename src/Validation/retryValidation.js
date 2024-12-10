const retryValidation = {
  validate(input) {
    if (input === 'R' || input === 'Q') {
      return input;
    }
    throw new Error('[ERROR]: R 와 Q 중 하나를 입력해주세요.');
  },
};
export default retryValidation;

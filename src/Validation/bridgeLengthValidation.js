const bridgeLengthValidation = {
  validate(bridgeLength) {
    const parsedLength = Number(bridgeLength);
    if (Number.isNaN(parsedLength)) {
      throw new Error('[ERROR]: 다리의 길이는 숫자여야 합니다.');
    }

    if (parsedLength < 0) {
      throw new Error('[ERROR]: 3 이상 숫자만 입력이 가능합니다.');
    }
    if (parsedLength < 3 || parsedLength > 20) {
      throw new Error('[ERROR]: 숫자는 3에서 20사이의 숫자여야합니다.');
    }
    return parsedLength;
  },
};
export default bridgeLengthValidation;

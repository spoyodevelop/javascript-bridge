/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i++) {
      const number = generateRandomNumber();
      if (number === 0) bridge.push('U');
      if (number === 1) bridge.push('D');
    }
    return bridge;
  },
};

export default BridgeMaker;

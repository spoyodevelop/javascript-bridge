import { Console } from '@woowacourse/mission-utils';
import bridgeLengthValidation from './Validation/bridgeLengthValidation.js';
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  async getBridgeLengthFromUser() {
    while (true) {
      const bridgeLength =
        await Console.readLineAsync('다리의 길이를 입력해주세요.');
      try {
        const parsedLength = bridgeLengthValidation.validate(bridgeLength);
        if (parsedLength) {
          return parsedLength;
        }
      } catch (e) {
        Console.print(e.message);
      }
    }
  },
};

export default InputView;

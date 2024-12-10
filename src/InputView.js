import { Console } from '@woowacourse/mission-utils';
import bridgeLengthValidation from './Validation/bridgeLengthValidation.js';
import movementValidation from './Validation/movementValidation.js';
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
  async getMovementFromUser() {
    while (true) {
      const movement = await Console.readLineAsync(
        '이동할 칸을 선택해주세요. (위: U, 아래: D)',
      );
      try {
        console.log(movement);
        const parsedInput = movementValidation.validate(movement);
        if (parsedInput) {
          return parsedInput;
        }
      } catch (e) {
        Console.print(e.message);
      }
    }
  },
};

export default InputView;

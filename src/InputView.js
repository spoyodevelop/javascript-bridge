import { Console } from '@woowacourse/mission-utils';
import bridgeLengthValidation from './Validation/bridgeLengthValidation.js';
import movementValidation from './Validation/movementValidation.js';
import retryValidation from './Validation/retryValidation.js';
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  async readBridgeSize() {
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
  async readMoving() {
    while (true) {
      const movement = await Console.readLineAsync(
        '이동할 칸을 선택해주세요. (위: U, 아래: D)',
      );
      try {
        const parsedInput = movementValidation.validate(movement);
        if (parsedInput) {
          return parsedInput;
        }
      } catch (e) {
        Console.print(e.message);
      }
    }
  },
  async readGameCommand() {
    while (true) {
      const input = await Console.readLineAsync(
        '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
      );
      try {
        const parsedInput = retryValidation.validate(input);
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

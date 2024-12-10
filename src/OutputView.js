import { Console } from '@woowacourse/mission-utils';

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printMap(bridge) {
    Console.print(`[ ${bridge.join(' | ')} ]`);
  },

  printResult(upBridge, downBridge) {
    Console.print('최종 게임 결과');
    Console.print(`[ ${upBridge.join(' | ')} ]`);
    Console.print(`[ ${downBridge.join(' | ')} ]`);
  },
};

export default OutputView;

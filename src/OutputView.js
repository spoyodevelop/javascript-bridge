import { Console } from '@woowacourse/mission-utils';

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printIntro() {
    Console.print(`다리 건너기 게임을 시작합니다.\n`);
  },
  printMap(bridge) {
    Console.print(`[ ${bridge.join(' | ')} ]`);
  },

  printResult(gameResult, gameCount, upBridge, downBridge) {
    Console.print('최종 게임 결과');
    Console.print(`[ ${upBridge.join(' | ')} ]`);
    Console.print(`[ ${downBridge.join(' | ')} ]\n`);
    if (gameResult) Console.print(`게임 성공 여부: 성공`);
    if (!gameResult) Console.print(`게임 성공 여부: 실패`);
    Console.print(`총 시도한 횟수: ${gameCount}`);
  },
};

export default OutputView;

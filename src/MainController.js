import { Console } from '@woowacourse/mission-utils';
import BridgeGame from './BridgeGame.js';
import BridgeMaker from './BridgeMaker.js';
import BridgeRandomNumberGenerator from './BridgeRandomNumberGenerator.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';

export default class MainController {
  async startProgram() {
    function makeUpDownBridge(bridge) {
      const upBridge = [];
      const downBridge = [];
      bridge.forEach((place) => {
        if (place === 'U') {
          upBridge.push('O');
          downBridge.push('X');
        }
        if (place === 'D') {
          downBridge.push('O');
          upBridge.push('X');
        }
      });

      return { upBridge, downBridge };
    }

    const bridgeLength = await InputView.readBridgeSize();

    const bridge = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate,
    );
    const { upBridge, downBridge } = makeUpDownBridge(bridge);
    const bridgeGame = new BridgeGame();

    async function playGame() {
      for (let i = 1; i < bridgeLength + 1; i++) {
        const movement = await InputView.readMoving();
        const isPassed = bridgeGame.move(movement, upBridge, downBridge, i);
        if (!isPassed) return false;
      }
      return true;
    }
    async function playGames() {
      let didWin = false;
      let playCount = 0;
      while (true) {
        didWin = await playGame();
        playCount++;
        if (!didWin) {
          const retry = await bridgeGame.retry();

          if (!retry) break;
        }
        if (didWin) break;
      }

      return { didWin, playCount };
    }
    const { didWin, playCount } = await playGames();
  }
}

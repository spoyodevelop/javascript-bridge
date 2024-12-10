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

    // const retry = await InputView.readGameCommand();

    const bridge = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate,
    );
    const { upBridge, downBridge } = makeUpDownBridge(bridge);
    const bridgeGame = new BridgeGame();

    async function playGame() {
      let isPassed = true;
      for (let i = 1; i < bridgeLength + 1; i++) {
        const movement = await InputView.readMoving();
        isPassed = bridgeGame.move(movement, upBridge, downBridge, i);
        if (!isPassed) break;
      }
      if (!isPassed) return isPassed;
    }
  }
}

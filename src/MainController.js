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
    OutputView.printIntro();
    const bridgeLength = await InputView.readBridgeSize();

    const bridge = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate,
    );
    console.log(bridge);
    const bridgeGame = new BridgeGame();

    async function playGame() {
      const upBridgeList = [];
      const downBridgeList = [];

      for (let i = 0; i < bridgeLength; i++) {
        const movement = await InputView.readMoving();

        const { isPassed, upBridge, downBridge } = bridgeGame.move(
          movement,
          bridge,
          i,
        );
        upBridgeList.push(upBridge);
        downBridgeList.push(downBridge);
        OutputView.printMap(upBridgeList);
        OutputView.printMap(downBridgeList);
        if (!isPassed) break;
      }
      const isPassed = upBridgeList.length === bridgeLength;
      return { isPassed, upBridgeList, downBridgeList };
    }

    async function playGames() {
      let isPassedFinal = false;
      let upBridgeListForDisplay = [];
      let downBridgeListForDisplay = [];
      let playCount = 0;
      while (true) {
        const { isPassed, upBridgeList, downBridgeList } = await playGame();
        console.log();
        isPassedFinal = isPassed;
        upBridgeListForDisplay = upBridgeList;
        downBridgeListForDisplay = downBridgeList;
        playCount++;
        if (!isPassed) {
          const retry = await bridgeGame.retry();

          if (!retry) break;
        }
        if (isPassed) break;
      }

      return {
        isPassedFinal,
        playCount,
        upBridgeListForDisplay,
        downBridgeListForDisplay,
      };
    }

    const {
      isPassedFinal,
      playCount,
      upBridgeListForDisplay,
      downBridgeListForDisplay,
    } = await playGames();

    OutputView.printResult(
      isPassedFinal,
      playCount,
      upBridgeListForDisplay,
      downBridgeListForDisplay,
    );
  }
}

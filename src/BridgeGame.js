import OutputView from './OutputView.js';

class BridgeGame {
  move(movement, upBridge, downBridge, currentPos) {
    let isPassed = false;
    const currUpBridge = upBridge.slice(0, currentPos);
    const currDownBridge = downBridge.slice(0, currentPos);
    const currUpBridgeStatus = currUpBridge[currUpBridge.length - 1];
    const currDownBridgeStatus = currDownBridge[currDownBridge.length - 1];
    if ((movement === 'U') & (currUpBridgeStatus === 'O')) isPassed = true;
    if ((movement === 'D') & (currDownBridgeStatus === 'O')) isPassed = true;

    OutputView.printMap(currUpBridge);
    OutputView.printMap(currDownBridge);
    return isPassed;
  }

  retry() {}
}
export default BridgeGame;

import InputView from './InputView.js';
import OutputView from './OutputView.js';

class BridgeGame {
  move(movement, bridge, currentPos) {
    let isPassed = false;
    let upBridge = '';
    let downBridge = '';
    const currentBridge = bridge[currentPos];
    console.log(currentBridge);
    if (movement === currentBridge) {
      if (movement === 'U') {
        upBridge = 'O';
        downBridge = ' ';
        isPassed = true;
      }
      if (movement === 'D') {
        downBridge = 'O';
        upBridge = ' ';
        isPassed = true;
      }
    }
    if (movement !== currentBridge) {
      if (movement === 'U') {
        upBridge = 'X';
        downBridge = ' ';
        isPassed = false;
      }
      if (movement === 'D') {
        downBridge = 'X';
        upBridge = ' ';
        isPassed = false;
      }
    }
    return { isPassed, upBridge, downBridge };
  }

  async retry() {
    const retryInput = await InputView.readGameCommand();
    if (retryInput === 'R') {
      return true;
    }

    if (retryInput === 'Q') return false;
  }
}
export default BridgeGame;

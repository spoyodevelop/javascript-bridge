import BridgeMaker from './BridgeMaker.js';
import BridgeRandomNumberGenerator from './BridgeRandomNumberGenerator.js';
import InputView from './InputView.js';

export default class MainController {
  async startProgram() {
    const bridgeLength = await InputView.readBridgeSize();
    // const movement = await InputView.readMoving();
    // const retry = await InputView.readGameCommand();

    const bridge = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate,
    );
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
  }
}

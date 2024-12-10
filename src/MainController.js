import BridgeRandomNumberGenerator from './BridgeRandomNumberGenerator.js';
import InputView from './InputView.js';

export default class MainController {
  async startProgram() {
    // const bridgeLength = await InputView.readBridgeSize();
    // const movement = await InputView.readMoving();
    // const retry = await InputView.readGameCommand();
    console.log(BridgeRandomNumberGenerator.generate());
  }
}

import InputView from './InputView.js';

export default class MainController {
  async startProgram() {
    // const bridgeLength = await InputView.getBridgeLengthFromUser();

    // const movement = await InputView.getMovementFromUser();

    const retry = await InputView.getRetryFromUser();

    console.log(retry);
  }
}

import InputView from './InputView.js';

export default class MainController {
  async startProgram() {
    const coaches = await InputView.getBridgeLengthFromUser();
  }
}

import MainController from './MainController.js';

class App {
  async play() {
    new MainController().startProgram();
  }
}

export default App;

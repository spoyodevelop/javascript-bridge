import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

afterEach(() => jest.clearAllMocks());

describe('다리 건너기 테스트', () => {
  test('사용자가 올바른 입력을 통해 다리를 성공적으로 건너는 경우', async () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]); // 다리 패턴
    mockQuestions(['3', 'U', 'D', 'U']); // 사용자 입력
    const expectedLogs = [
      '최종 게임 결과',
      '[ O |   | O ]',
      '[   | O |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 1',
    ];
    const app = new App();
    await app.play();

    const actualLogs = logSpy.mock.calls.map((call) => call[0]);
    expect(actualLogs).toEqual(expectedLogs);
  });

  test('잘못된 입력으로 예외가 발생하는 경우', async () => {
    mockQuestions(['a']);
    const app = new App();
    await expect(app.play()).rejects.toThrow(); // 올바른 예외 발생 확인
  });
});

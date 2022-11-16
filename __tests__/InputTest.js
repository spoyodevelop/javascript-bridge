const { validateBridgeSize } = require("../src/errorHandling");

describe("다리 길이 입력에 대한 유효성 검사", () => {
  test("다리의 길이가 3이상 20이하인가?", () => {
    expect(() => {
      validateBridgeSize("1");
    }).toThrow("[ERROR]");
  });

  test("다리 길이 입력의 숫자 이외의 것이 있는가?", () => {
    expect(() => {
      validateBridgeSize("10.");
    }).toThrow("[ERROR]");
  });
});
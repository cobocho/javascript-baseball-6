import { TargetBall } from '../../../src/domain';

describe('TargetBall 예외 테스트', () => {
  it.each([
    { input: '1' },
    { input: null },
    { input: undefined },
    { input: 1234567890123456789012345678901234567890n },
    { input: true },
    { input: {} },
    { input: [] },
  ])('입력받은 값이 숫자가 아닐 경우 에러를 발생시킨다. (input: $input)', ({ input }) => {
    expect(() => {
      new TargetBall(input);
    }).toThrow('[ERROR] 숫자를 입력해주세요!');
  });

  it.each([{ input: 4.1 }, { input: 1.3 }])(
    '입력받은 값이 정수가 아닐 경우 에러를 발생시킨다. (input: $input)',
    ({ input }) => {
      expect(() => {
        new TargetBall(input);
      }).toThrow('[ERROR] 정수를 입력해주세요!');
    },
  );

  it.each([{ input: 0 }, { input: 10 }, { input: 99 }])(
    '입력받은 값이 범위 내 숫자가 아닐 경우 에러를 발생시킨다. (input: $input)',
    ({ input }) => {
      expect(() => {
        new TargetBall(input);
      }).toThrow(`[ERROR] ${TargetBall.MIN} 이상 ${TargetBall.MAX} 이하의 값을 입력해주세요!`);
    },
  );
});

import { AnswerBalls, TargetBall } from '../../../src/domain';

describe('AnswerBalls 예외 테스트', () => {
  it.each([
    { input: 1 },
    { input: '1' },
    { input: null },
    { input: undefined },
    { input: true },
    { input: {} },
  ])('`contains` 메서드의 인자가 `TargetBall`가 아니라면 에러를 발생시킨다.', ({ input }) => {
    expect(() => {
      const answer = new AnswerBalls([1, 2, 3]);
      answer.contains(input);
    }).toThrow('[ERROR] contains의 인자에 TargetBall을 입력해주세요!');
  });

  it.each([
    { input: 1 },
    { input: '1' },
    { input: null },
    { input: undefined },
    { input: true },
    { input: {} },
  ])(
    '`match` 메서드의 `targetBall` 인자가 `TargetBall`이 아니라면 에러를 발생시킨다.',
    ({ input }) => {
      expect(() => {
        const answer = new AnswerBalls([1, 2, 3]);
        answer.match(input);
      }).toThrow('[ERROR] match의 첫번째 인자에 TargetBall을 입력해주세요!');
    },
  );

  it.each([
    { input: -1 },
    { input: '1' },
    { input: null },
    { input: undefined },
    { input: true },
    { input: {} },
  ])(
    '`match` 메서드의 `index` 인자가 올바른 index값이 아니라면 에러를 발생시킨다.',
    ({ input }) => {
      expect(() => {
        const answer = new AnswerBalls([1, 2, 3]);
        const ball = TargetBall.valueOf(1);
        answer.match(ball, input);
      }).toThrow('[ERROR] match의 두번째 인자에 올바른 index값을 입력해주세요!');
    },
  );
});

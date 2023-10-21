import { isOutOfRange } from '../../src/utils/validator';

describe('유효성 검사 함수 테스트', () => {
  it.each([
    { input: 1, min: 0, max: 3, result: false },
    { input: 3, min: 2, max: 3, result: false },
    { input: 2, min: 2, max: 2, result: false },
    { input: 1, min: -1, max: 1, result: false },
    { input: 4, min: 0, max: 3, result: true },
    { input: 1, min: 2, max: 3, result: true },
    { input: 3, min: 2, max: 2, result: true },
    { input: -2, min: -1, max: 1, result: true },
  ])('범위 외 숫자 확인', ({ input, min, max, result }) => {
    expect(isOutOfRange(input, min, max)).toBe(result);
  });
});
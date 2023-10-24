import { Console } from '@woowacourse/mission-utils';

export const inputView = Object.freeze({
  async readLine(query) {
    const answer = await Console.readLineAsync(query);
    return answer;
  },
});

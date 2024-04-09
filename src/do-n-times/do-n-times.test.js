import {doNTimes} from './do-n-times';

describe('doNTimes', () => {

  it('calls function 3 times', () => {
    // arrange
    const fn = jest.fn();

    // act
    doNTimes(fn, 3);

    // assert
    expect(fn).toHaveBeenCalledTimes(3);
  });
})
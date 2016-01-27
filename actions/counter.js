export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  }
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState()

    if (counter % 2 === 0) {
      return
    }

    dispatch(increment())
  }
}

export function incrementIfPrime() {
  return (dispatch, getState) => {
    const { counter } = getState()

    // If counter is less than 2 or not an integer, then it simply can't be a prime number
    if (counter < 2 ) { return false }
    if (counter != Math.round(counter) ) { return false }

    // Now let's assume that counter is a prime number, and then prove it
    var isPrime = true;

    for (let i = 2; i <= Math.sqrt(counter); i++) {
      if (counter % i == 0) {
        isPrime = false
      }
    }

    // Now we return whether counter is a prime number or not
    return isPrime;
    dispatch(increment())
  }
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}

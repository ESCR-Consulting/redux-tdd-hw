export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export function increment() {
  return {
    type: POSITIVE_ONE
  }
}

export function decrement() {
  return {
    type: NEGATIVE_ONE
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

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}

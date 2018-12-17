import { useState, useMemo } from 'react'

const RATINGS = [1, 2, 3, 4, 5]

function useRatingsFilter(items) {
  const [state, setState] = useState(RATINGS)
  const toggleFilter = item => {
    if (state.find(el => el === item))
      setState(state => state.filter(rating => rating !== item))
    else setState(state => [...state, item])
  }
  const applyRatingsFilter = item => state.find(el => el === item.rating)
  const filterResults = useMemo(
    () => items && items.filter(applyRatingsFilter),
    [items, state]
  )

  return {
    options: RATINGS,
    active: state,
    toggleFilter,
    filterResults,
  }
}

export default useRatingsFilter

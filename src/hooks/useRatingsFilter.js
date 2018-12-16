import { useState } from 'react'

const RATINGS = [1, 2, 3, 4, 5]

function useRatingsFilter() {
  const [state, setState] = useState(RATINGS)
  const toggleFilter = item => {
    if (state.find(el => el === item))
      setState(state => state.filter(rating => rating !== item))
    else setState(state => [...state, item])
  }
  const applyRatingFilter = (item, activeRatings) =>
    activeRatings.find(el => el === item.rating)

  return {
    options: RATINGS,
    activeFilters: state,
    toggleFilter,
    applyRatingFilter,
  }
}

export default useRatingsFilter

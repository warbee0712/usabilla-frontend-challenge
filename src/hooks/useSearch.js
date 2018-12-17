import { useState, useMemo } from 'react'

function useSearch(items) {
  const [value, setValue] = useState('')
  const query = value.length > 2 ? value : ''
  const applySearchFilter = item => !!item.comment.match(query)
  const searchResults = useMemo(
    () => items && items.filter(applySearchFilter),
    [items, query]
  )

  return {
    value,
    onChange: e => setValue(e.target.value),
    searchResults,
  }
}

export default useSearch

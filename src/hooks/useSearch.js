import { useState } from 'react'

function useSearch() {
  const [query, setQuery] = useState('')
  const applyQueryFilter = (item, search) => !!item.comment.match(search)

  return {
    query,
    onQueryChange: e => setQuery(e.target.value),
    applyQueryFilter,
  }
}

export default useSearch

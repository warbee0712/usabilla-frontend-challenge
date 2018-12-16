import { useState, useEffect } from 'react'

function getDevice(viewport) {
  if (viewport < 768) return 'Mobile'
  else if (viewport < 1024) return 'Tablet'
  else return 'Desktop'
}

function useData() {
  const [data, setData] = useState(null)
  const fetchData = async () => {
    const response = await fetch(
      'https://static.usabilla.com/recruitment/apidemo.json'
    )
    setData(await response.json())
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    data &&
    data.items.map(item => ({
      id: item.id,
      comment: item.comment,
      computed_browser: item.computed_browser,
      rating: item.rating,
      device: getDevice(item.viewport),
    }))
  )
}

export default useData

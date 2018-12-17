import { useState, useEffect, useMemo } from 'react'

function getDevice(viewport) {
  if (viewport < 768) return 'Mobile'
  else if (viewport < 1024) return 'Tablet'
  else return 'Desktop'
}

function parsePlatform(platform) {
  switch (true) {
    case /Mac/.test(platform):
      return platform.replace('Mac', 'Mac ')
    case /Win/.test(platform):
      return platform.replace('Win', 'Win ')
    default:
      return platform
  }
}

function useData() {
  const [state, setState] = useState({ loading: true, error: null, data: null })
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://static.usabilla.com/recruitment/apidemo.json'
      )
      const data = await response.json()
      setState({
        loading: false,
        data,
      })
    } catch (error) {
      setState({ loading: false, error })
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return {
    ...state,
    data: useMemo(
      () =>
        state.data &&
        state.data.items.map(item => ({
          id: item.id,
          comment: item.comment,
          computed_browser: {
            ...item.computed_browser,
            Platform: parsePlatform(item.computed_browser.Platform),
          },
          computed_location: item.computed_location,
          geo: item.geo,
          rating: item.rating,
          device: getDevice(item.viewport),
        })),
      [state.data]
    ),
  }
}

export default useData

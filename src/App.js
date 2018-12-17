import React, { useState, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'
import intersection from 'lodash.intersection'

// Global Styles
import 'reset.css'
import GlobalStyle from './GlobalStyle'

// Elements
import Box from './elements/Box'
import Flex from './elements/Flex'

// Components
import Loading from './components/Loading'
import Input from './components/Input'
import PageHeader from './components/PageHeader'
import RatingsFilter from './components/RatingsFilter'
import TableList from './components/TableList'
import Map from './components/Map'
import Button from './components/Button'

// Hooks
import useData from './hooks/useData'
import useRatingsFilter from './hooks/useRatingsFilter'
import useSearch from './hooks/useSearch'

// Theme
import theme from './theme'

function App({ mock }) {
  const { loading, error, data } = mock || useData()
  // throws to error boundary
  if (error) throw error
  const { filterResults, ...filterProps } = useRatingsFilter(data)
  const { searchResults, ...inputProps } = useSearch(data)
  const items = useMemo(() => intersection(filterResults, searchResults), [
    filterResults,
    searchResults,
  ])
  const [showMap, toggleMap] = useState(false)
  const contentSwitch = () => {
    if (showMap) return <Map items={items} />
    return <TableList items={items} />
  }

  return (
    <ThemeProvider theme={theme}>
      <Flex as="main" flexDirection="column" minHeight="100vh">
        <GlobalStyle />
        <PageHeader />
        <Box bg="light4" px="xl" py="l" flex="1">
          <Flex
            flexDirection={['column', 'row']}
            alignItems={['flex-start', 'center']}
            mb="l"
          >
            <Input
              {...inputProps}
              width={['100%', 300]}
              aria-label="search"
              placeholder="Search here..."
            />
            <Flex
              pt={['m', 0]}
              pl={[0, 'm']}
              width="100%"
              justifyContent="space-between"
            >
              <RatingsFilter {...filterProps} />
              <Button
                onClick={() => toggleMap(state => !state)}
                data-testid="toggle-map-table"
              >
                {showMap ? 'Show Table' : 'Show Map'}
              </Button>
            </Flex>
          </Flex>
          {/* this is a strong case for a router, but I'm gonna improvise here a bit. */}
          {loading ? <Loading /> : contentSwitch()}
        </Box>
      </Flex>
    </ThemeProvider>
  )
}

export default App

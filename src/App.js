import React, { useMemo } from 'react'
import { ThemeProvider } from 'styled-components'

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

// Hooks
import useData from './hooks/useData'
import useRatingsFilter from './hooks/useRatingsFilter'
import useSearch from './hooks/useSearch'

// Theme
import theme from './theme'

function App() {
  const { query, onQueryChange, applyQueryFilter } = useSearch()
  const rawItems = useData()
  const {
    activeFilters,
    options,
    toggleFilter,
    applyRatingFilter,
  } = useRatingsFilter()
  const items = useMemo(
    () =>
      rawItems &&
      rawItems
        .filter(item => applyRatingFilter(item, activeFilters))
        .filter(item => applyQueryFilter(item, query)),
    [rawItems, activeFilters, query]
  )

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
              value={query}
              onChange={onQueryChange}
              aria-label="search"
              placeholder="Search here..."
            />
            <Box pt={['m', 0]} pl={[0, 'm']}>
              <RatingsFilter
                active={activeFilters}
                options={options}
                toggleFilter={toggleFilter}
              />
            </Box>
          </Flex>
          {!rawItems ? <Loading /> : <TableList items={items} />}
        </Box>
      </Flex>
    </ThemeProvider>
  )
}

export default App

import React, { useMemo } from 'react'
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

// Hooks
import useData from './hooks/useData'
import useRatingsFilter from './hooks/useRatingsFilter'
import useSearch from './hooks/useSearch'

// Theme
import theme from './theme'

function App() {
  const rawItems = useData()
  const { filterResults, ...filterProps } = useRatingsFilter(rawItems)
  const { searchResults, ...inputProps } = useSearch(rawItems)
  const items = useMemo(() => intersection(filterResults, searchResults), [
    filterResults,
    searchResults,
  ])

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
              aria-label="search"
              placeholder="Search here..."
            />
            <Box pt={['m', 0]} pl={[0, 'm']}>
              <RatingsFilter {...filterProps} />
            </Box>
          </Flex>
          {!rawItems ? <Loading /> : <TableList items={items} />}
        </Box>
      </Flex>
    </ThemeProvider>
  )
}

export default App

import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
// Elements
import Flex from '../elements/Flex'
import Text from '../elements/Text'
import theme from '../theme'
import GlobalStyle from '../GlobalStyle'
import PageHeader from './PageHeader'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  componentDidCatch(e) {
    // Update state so the next render will show the fallback UI.
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ThemeProvider theme={theme}>
          <Flex as="main" flexDirection="column" minHeight="100vh">
            <GlobalStyle />
            <PageHeader />
            <Flex
              flexDirection="column"
              bg="light4"
              px="xl"
              py="l"
              flex="1"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize={100}>
                <span role="img" aria-label="crying face emoji">
                  😢
                </span>
              </Text>
              <Text fontSize="l" lineHeight="l" textAlign="center">
                Oops, it appears that the request for the json failed. Maybe
                reloading will help. I&apos;m sorry about that, unless this is
                part of the test, then shame on you, you&apos;re not going to
                get me.{' '}
                <span role="img" aria-label="crying face emoji">
                  😂
                </span>
              </Text>
            </Flex>
          </Flex>
        </ThemeProvider>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

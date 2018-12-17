import React from 'react'
import PropTypes from 'prop-types'
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from 'react-simple-maps'
import { scaleLinear } from 'd3-scale'
import { ThemeConsumer } from 'styled-components'
import Box from '../elements/Box'
import Text from '../elements/Text'
import map from './map.json'
import { transparentize } from 'polished'

const scale = scaleLinear()
  .domain([0, 50])
  .range([1, 25])

export const parseLocations = items => {
  const cities = items.reduce((acc, item) => {
    const city = item.computed_location || item.geo.country
    if (!acc[city])
      acc[city] = {
        count: 1,
        coordinates: [item.geo.lon, item.geo.lat],
      }
    else acc[city].count++
    return acc
  }, {})
  return Object.keys(cities).map(name => ({ ...cities[name], name }))
}

const BubblesMap = ({ items }) => {
  // prepare data to map
  let cities = parseLocations(items)
  return (
    <Box width="100%" maxWidth={980} m="0 auto" data-testid="map">
      <Text>Amount of feedback by city</Text>
      <ComposableMap
        projectionConfig={{ scale: 205 }}
        width={980}
        height={551}
        style={{
          width: '100%',
          height: 'auto',
        }}
      >
        <ZoomableGroup center={[0, 20]} disablePanning>
          <Geographies geography={map}>
            {(geographies, projection) =>
              geographies.map(
                geography =>
                  geography.id !== 'ATA' && (
                    <ThemeConsumer key={geography.id}>
                      {theme => {
                        const mapStyle = {
                          fill: theme.colors.light4,
                          stroke: theme.colors.light1,
                          strokeWidth: 0.75,
                          outline: 'none',
                        }
                        return (
                          <Geography
                            geography={geography}
                            projection={projection}
                            style={{
                              default: mapStyle,
                              hover: mapStyle,
                              pressed: mapStyle,
                            }}
                          />
                        )
                      }}
                    </ThemeConsumer>
                  )
              )
            }
          </Geographies>
          <Markers>
            {cities.map(city => (
              <Marker key={city.name} marker={city}>
                <ThemeConsumer>
                  {theme => (
                    <circle
                      cx={0}
                      cy={0}
                      r={scale(city.count)}
                      fill={transparentize(0.2, theme.colors.blue1)}
                      data-testid="map-location"
                    />
                  )}
                </ThemeConsumer>
              </Marker>
            ))}
          </Markers>
        </ZoomableGroup>
      </ComposableMap>
    </Box>
  )
}

BubblesMap.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      computed_location: PropTypes.string.isRequired,
      geo: PropTypes.shape({
        country: PropTypes.string.isRequired,
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default BubblesMap

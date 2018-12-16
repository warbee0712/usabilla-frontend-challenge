import React from 'react'
import PropTypes from 'prop-types'
// Components
import Row from './Row'
import RoundButton from './RoundButton'

function RatingsFilter({ options, active, toggleFilter }) {
  return (
    <Row gutter="s">
      {options.map(item => (
        <RoundButton
          key={item}
          onClick={() => toggleFilter(item)}
          active={!!active.find(el => el === item)}
        >
          {item}
        </RoundButton>
      ))}
    </Row>
  )
}

RatingsFilter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  active: PropTypes.arrayOf(PropTypes.number).isRequired,
  toggleFilter: PropTypes.func.isRequired,
}

export default RatingsFilter

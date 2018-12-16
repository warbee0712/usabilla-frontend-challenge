import React from 'react'
import PropTypes from 'prop-types'
// Elements
import Flex from '../../elements/Flex'
// Components
import Header from './Header'
import TableItem from './Item'

// WARNING: THIS COMPONENT IS NOT GENERIC
// due to time constraints, this components is tightly couple
// width the given layout. To have a true generic table list
// it'd be needed more props to accept the fields, it sizes and
// and probably a render prop for the item. That is unecessary
// for this one task though.

function TableList({ items, renderItem }) {
  return (
    <Flex
      flexDirection="column"
      boxShadow="default"
      bg="white"
      data-testid="table-list"
    >
      <Header fields={['rating', 'comment', 'browser', 'device', 'platform']} />
      {items.map(renderItem)}
    </Flex>
  )
}

TableList.defaultProps = {
  // eslint-disable-next-line react/display-name
  renderItem: item => <TableItem key={item.id} data={item} />,
}

TableList.propTypes = {
  items: PropTypes.arrayOf(TableItem.propTypes.data).isRequired,
  renderItem: PropTypes.func,
}

export default TableList

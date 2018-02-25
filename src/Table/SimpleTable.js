import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getProps, defaultProps } from '../utils/proptypes'
import Colgroup from './Colgroup'
import Thead from './Thead'
import Tbody from './Tbody'

class SimpleTable extends PureComponent {
  render() {
    const {
      children, columns, colgroup, data, width, ...other
    } = this.props

    if (!columns) {
      return <table style={{ width }}>{children}</table>
    }

    return (
      <table style={{ width }}>
        <Colgroup columns={columns} colgroup={colgroup} />
        <Thead columns={columns} {...other} />
        { data && <Tbody index={0} columns={columns} data={data} /> }
        {children}
      </table>
    )
  }
}

SimpleTable.propTypes = {
  ...getProps('size', 'type', 'kengen'),
  children: PropTypes.any,
  colgroup: PropTypes.array,
  columns: PropTypes.array,
  data: PropTypes.array,
  width: PropTypes.number,
}

SimpleTable.defaultProps = {
  ...defaultProps,
}

export default SimpleTable


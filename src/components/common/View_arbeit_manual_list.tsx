import React from 'react'
import Header from './Header'
import Div_arbeit_manual_parts from './Div_arbeit_manual_parts'
import Div_position from './Div_position'

const View_arbeit_manual_list = () => {
  return (
    <div>
      <Header />
      <Div_position position={'レジ'} />
      <Div_arbeit_manual_parts />
    </div>
  )
}

export default View_arbeit_manual_list

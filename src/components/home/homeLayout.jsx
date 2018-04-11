import React from 'react'
import './homeLayout.sass'

function HomeLayout (props) {
  return (
    <section className="HomeLayout">
      { props.children }
    </section>
  )
}

export default HomeLayout
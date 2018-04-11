import React from 'react'
import Category from './category'
import './categories.sass'
import SearchContainer from '@/components/search/searchContainer'


function Categories (props) {
  return (
    <div className="Categories">
      <SearchContainer />
      {
        props.categories.map( category => {
          return (
            <Category 
              key={ category.id } 
              {...category}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories 
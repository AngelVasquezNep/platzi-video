import React from 'react'
import Category from './category'
import './categories.sass'
import SearchContainer from '@/components/search/searchContainer'
import Media from '../media/media'


function Categories (props) {
  return (
    <div className="Categories">
      <SearchContainer />
      { props.search.length > 0 && <p className="Categoty-title" >Resultados de la busqueda</p>}
      {
        props.search.map( item=>{
          return <Media {...item} />
        })
      }
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
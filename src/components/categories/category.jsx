import React from 'react'
import PlayList from '@/components/playList/playList';
import './category.sass'

function Category (props) {
  return (
    <div className="Category">
      <p className="Categoty-description"> { props.description } </p> 
      <h2 className="Categoty-title"> { props.title } </h2>
      <PlayList key={ props.id } 
        handleOpenModal={props.handleOpenModal}
        playList={ props.playList }
      />
    </div>
  )
}

export default Category
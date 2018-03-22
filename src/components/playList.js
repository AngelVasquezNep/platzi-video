import React, { Component } from 'react'
import Media from './media'
import './general.sass'

class PlayList extends Component {
  render() {
    const playlist = this.props.data.categories[0].playlist
    console.log(this.props.data)
    return (
      <div className="PlayList centrar">
        {
          playlist.map(( item )=>{
            return <Media {...item} otro ="../src/images/covers/responsive.jpg" key={item.title} />
          })
        }
      </div>
    )
  }
}

export default PlayList
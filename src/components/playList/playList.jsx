import React from 'react'
import Media from '@/components/media/media.jsx'
import './playlist.sass'

function PlayList (props) {
    const playlist1 = props.data.categories[0].playlist
    const playlist2 = props.data.categories[1].playlist
    const playlist3 = props.data.categories[2].playlist
    return (
      <div>

        <div className="Playlist ">
          {
            playlist1.map(( item )=>{
              return <Media {...item} key={item.title} />
            })
          }
        </div>
      
        <div className="Playlist ">
          {
            playlist2.map(( item )=>{
              return <Media {...item} key={item.title} />
            })
          }
        </div>
      
        <div className="Playlist ">
          {
            playlist3.map(( item )=>{
              return <Media {...item} key={item.title} />
            })
          }
        </div>
      
      </div>
    )
}

export default PlayList
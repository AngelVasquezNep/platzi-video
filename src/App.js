import React, { Component } from 'react'
import HomeLayout from '@/components/home/homeLayout'
import Categories from '@/components/categories/categories'
import Related from '@/components/related/related'
import ModalContainer from '@/components/modal/modalContainer'
import Modal from '@/components/modal/modal'
import Error from '@/components/error/error'
import ReproductorContainer from '@/components/reproductor/reproductorContainer'


class App extends Component {
  state = {
    modalVisible: false,
    title: ''
  }
  
  handleOpenModal = (ev) => {
    this.setState({
      modalVisible: true,
      infoMedia: ev
    })
  }
 
  handleCloseModal = (ev) => {
    this.setState({
      modalVisible: false
    })
  }


  render() {
    return (
      <Error>
        <HomeLayout>

          <Related/>

          <ReproductorContainer/>
          
          <Categories 
            categories={this.props.data.categories} 
            handleOpenModal={this.handleOpenModal}
            />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal
                handleClick = { this.handleCloseModal }
                >
                <h2> { this.state.infoMedia.title } </h2>
                <p> { this.state.infoMedia.author } </p>
              </Modal>
            </ModalContainer> 
          }
        </HomeLayout>
      </Error>
    )
  }
}

export default App

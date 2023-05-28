import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import axios from 'axios'

import LogoPacote from '../../assets/logo-pacote.svg'
import Trash from '../../assets/trash-icon.svg'
import { Container, H1, Image, Button, ContainerItens, User } from './styles'

function Orders() {
  const [orders, setOrders] = useState([])
  const history = useHistory()
     
  useEffect(() => {
    async function fetchOrders(){
      
    const {data: checkOrders} = await axios.get("http://localhost:3001/order")
    setOrders(checkOrders)
  }

    fetchOrders()  

  }, [])

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`)
    const newOrders = orders.filter(order => order.id !== orderId)
    setOrders(newOrders)

  }

  function goBackPage(){
    history.push("/")
  }

  
  return (

    <Container>
      <Image alt='logo-principal' src={LogoPacote} />

      <H1>Pedidos</H1>

      <ContainerItens>
      <ul> {orders.map(order => (
          <User key={order.id}>
            <p> {order.Pedido} </p>
            <p> {order.Cliente} </p>
            <button onClick={() => deleteOrder(order.id)}>
              <img src={Trash} alt='trash-icon' />
            </button>
          </User>
        ))
        }
        </ul>

        <Button onClick={goBackPage}>
          Voltar
        </Button>

       
      </ContainerItens>
    </Container>



  )


}

export default Orders
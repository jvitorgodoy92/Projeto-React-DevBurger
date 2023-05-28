import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import axios from 'axios'

import LogoPrincipal from '../../assets/logo-principal.svg'

import { Container, H1, Image, InputLabel, Input, Button, ContainerItens } from './styles'

function App() {
  const [orders, setOrders] = useState([])
  const inputOrder = useRef()
  const inputClient = useRef()
  const history = useHistory()

  async function addNewOrder() {

    const { data: Neworder } = await axios.post("http://localhost:3001/order", { Pedido: inputOrder.current.value, Cliente: inputClient.current.value })
    console.log(Neworder)
    setOrders([...orders, Neworder])

    history.push("/pedidos")
    
  }
  
  
  return (

    <Container>
      <Image alt='logo-principal' src={LogoPrincipal} />

      <H1>Faça seu pedido!</H1>

      <ContainerItens>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder='Pedido ' />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputClient} placeholder='Nome do Cliente' />

        <Button onClick={addNewOrder}>
          Confirmar Pedido
        </Button>
    
      </ContainerItens>
    </Container>

  )


}

export default App
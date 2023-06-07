
import React from 'react';
import Navbar from '../components/Navbar';
import Announcement  from '../components/Announcement';
import Fotter from '../components/Fotter';
import styled from 'styled-components';

const Container = styled.div``;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        CART
        <Fotter/>
    </Container>
  )
}

export default Cart

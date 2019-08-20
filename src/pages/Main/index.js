import React from 'react';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { 
  Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 150000.000,50</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 500,00 recebida de Luis Gustavo hoje às 06:00h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  )
}
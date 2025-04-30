/*
import React, {useState, useEffect} from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";

const App = () => {
  const [value, setValue] = useState<'center' | 'flex-start'>('center');
  const {width} = useWindowDimensions();

    useEffect(() => {
      if (width < 1000)
        setValue("center");
      else
        setValue("flex-start");
    }, [width]);

  return (
    <View style={{flex: 1}}>
    <Container>
      <Row>
        <Col md={4} lg={6} style={{alignItems: value}}>
          <Text>Hello World {width}</Text>
        </Col>
        <Col md={4} lg={6} style={{alignItems: value}}>
          <Text>Hello World 2</Text>
        </Col>
        <Col md={4} lg={6} style={{alignItems: value}}>
          <Text>Hello World 2</Text>
        </Col>
      </Row>
    </Container>
    </View>
  );
};

export default App;
*/

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

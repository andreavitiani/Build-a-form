import { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';

export default function App() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/prices')
      .then(res => res.json())
      .then(setPrices)
      .catch(console.error);
  }, []);

  const renderItem = ({ item }) => (
    <Text>{`${item.product} - ${item.store}: €${item.price}`}</Text>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Offerte Supermercato</Text>
      <FlatList
        data={prices}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

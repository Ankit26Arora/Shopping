import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, Button } from 'react-native';
import apiService from '../Api-service';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiService.get('/endpoint');
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddItem = async () => {
    try {
      const newItem = { name: 'New Item' };
      const result = await apiService.post('/endpoint', newItem);
      setData([...data, result]);
    } catch (err) {
      setError(err);
    }
  };

  const handleUpdateItem = async (id) => {
    try {
      const updatedItem = { name: 'Updated Item' };
      const result = await apiService.put(`/endpoint/${id}`, updatedItem);
      setData(data.map(item => (item.id === id ? result : item)));
    } catch (err) {
      setError(err);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await apiService.delete(`/endpoint/${id}`);
      setData(data.filter(item => item.id !== id));
    } catch (err) {
      setError(err);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button title="Update" onPress={() => handleUpdateItem(item.id)} />
            <Button title="Delete" onPress={() => handleDeleteItem(item.id)} />
          </View>
        )}
      />
      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
};

export default MyComponent;

import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import axios from 'axios';

interface Country {
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  cca2:string;
}

const Notification = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get<Country[]>('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const renderCountry = ({ item }: { item: Country }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
      <Image
        source={{ uri: item.flags.png}}
        style={{ width: 50, height: 30, marginRight: 10 }}
      />
      <Text>{item.name.common}</Text>
    </View>
  );

  return (
    <FlatList
      data={countries}
      renderItem={renderCountry}
      keyExtractor={(item) => item.cca2}
    />
  );
};

export default Notification;

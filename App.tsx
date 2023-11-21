import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, FlatList } from 'react-native';

const App = () => {
  const [ad, setAd] = useState('');
  const [soyad, setSoyad] = useState('');
  const [numara, setNumara] = useState('');
  const [bolum, setBolum] = useState('');
  const [kayitlar, setKayitlar] = useState([]);
  const [hataMesaji, setHataMesaji] = useState('');

  const handleKaydet = () => {
    if (numara === '') {
      setHataMesaji('Numara girmek zorunludur.'); //numara doğrulamasını en başta yapıyor
    } else {
      setHataMesaji('');
      const yeniKayit = {
        ad,
        soyad,
        numara,
        bolum,
      };
      setKayitlar([...kayitlar, yeniKayit]);
      setAd('');
      setSoyad('');
      setNumara('');
      setBolum('');
      alert('Kayıt başarılı');
    }
  };

  const renderKayit = ({ item }) => ( 
    <View style={{ marginBottom: 10 }}>
      <Text>{`Ad: ${item.ad}, Soyad: ${item.soyad}, Numara: ${item.numara}, Bölüm: ${item.bolum}`}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ padding: 20, flex: 1 }}>
        <Text></Text>
        <TextInput
          value={ad}
          onChangeText={setAd}
          placeholder="Adınızı girin"
        />

        <Text></Text>
        <TextInput
          value={soyad}
          onChangeText={setSoyad}
          placeholder="Soyadınızı girin"
        />

        <Text></Text>
        <TextInput
          value={numara}
          onChangeText={setNumara}
          placeholder="Numaranızı girin"
          keyboardType="numeric"
        />
        {hataMesaji !== '' && <Text style={{ color: 'red' }}>{hataMesaji}</Text>}

        <Text></Text>
        <TextInput
          value={bolum}
          onChangeText={setBolum}
          placeholder="Bölümünüzü girin"
        />

        <Button title="Kaydet" onPress={handleKaydet} />
      </ScrollView>

      <View style={{ borderTopWidth: 1, borderTopColor: 'gray', padding: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Kayıtlı Kullanıcılar</Text>
        <FlatList
          data={kayitlar}
          renderItem={renderKayit}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default App;

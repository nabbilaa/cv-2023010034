import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/profile.jpeg')}
            style={styles.image}
          />
        </View>

        <Text style={styles.greeting}>
          Hello 👋
        </Text>

        <Text style={styles.name}>
           Nabila Istighfareta Agwitanty
        </Text>

        <Text style={styles.prodi}>
          D4 Rekayasa Perangkat Lunak
        </Text>

        <View style={styles.badge}>
          <Ionicons
            name="school"
            size={16}
            color="#2563eb"
          />

          <Text style={styles.badgeText}>
            Politeknik Balekambang
          </Text>
        </View>

        <Text style={styles.description}>
          Mobile Curriculum Vitae
          berbasis React Native
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/profile')}
        >
          <Text style={styles.buttonText}>
            Lihat Profile
          </Text>

          <Ionicons
            name="arrow-forward"
            size={20}
            color="white"
          />
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff6ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 30,
    padding: 30,
    alignItems: 'center',
    elevation: 8,
  },

  imageContainer: {
    backgroundColor: '#dbeafe',
    padding: 6,
    borderRadius: 100,
    marginBottom: 20,
  },

  image: {
    width: 160,
    height: 160,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#2563eb',
  },

  greeting: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 5,
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
  },

  prodi: {
    fontSize: 17,
    color: '#2563eb',
    marginTop: 8,
    fontWeight: '600',
    textAlign: 'center',
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dbeafe',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginTop: 18,
  },

  badgeText: {
    marginLeft: 8,
    color: '#2563eb',
    fontWeight: '600',
  },

  description: {
    marginTop: 20,
    fontSize: 15,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 24,
  },

  button: {
    marginTop: 30,
    backgroundColor: '#2563eb',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    elevation: 5,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
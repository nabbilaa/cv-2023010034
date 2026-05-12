import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        {/* FOTO */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/profile.jpeg')}
            style={styles.image}
          />
        </View>

        {/* NAMA */}
        <Text style={styles.name}>
          Nabila Istighfareta Agwitanty
        </Text>

        <Text style={styles.prodi}>
          D4 Rekayasa Perangkat Lunak
        </Text>

        {/* BADGE */}
        <View style={styles.badge}>
          <Ionicons
            name="school"
            size={16}
            color="#2563eb"
          />

          <Text style={styles.badgeText}>
            Semester 6
          </Text>
        </View>

      </View>

      {/* NAVBAR */}
      <View style={styles.navbar}>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push('/profile')}
        >
          <Ionicons name="person" size={20} color="white" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push('/biodata')}
        >
          <Ionicons name="document-text" size={20} color="white" />
          <Text style={styles.navText}>Biodata</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push('/pendidikan')}
        >
          <Ionicons name="school" size={20} color="white" />
          <Text style={styles.smallNavText}>
            Pendidikan
          </Text>        
          </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push('/skill')}
        >
          <Ionicons name="code-slash" size={20} color="white" />
          <Text style={styles.navText}>Skill</Text>
        </TouchableOpacity>

      </View>

      {/* ABOUT */}
      <View style={styles.card}>

        <View style={styles.cardTitleContainer}>
          <Ionicons
            name="person-circle"
            size={24}
            color="#2563eb"
          />

          <Text style={styles.title}>
            Tentang Saya
          </Text>
        </View>

        <Text style={styles.description}>
          Mahasiswa aktif semester 6 Program Studi
          Rekayasa Perangkat Lunak di Politeknik
          Balekambang Jepara yang memiliki minat
          dalam pemrograman dan pengembangan sistem.
          Memiliki pemahaman dalam pengembangan
          aplikasi Android, aplikasi web, serta
          pengelolaan basis data.
        </Text>

      </View>

      <View style={styles.card}>

        <View style={styles.cardTitleContainer}>
          <Ionicons
            name="information-circle"
            size={24}
            color="#2563eb"
          />

          <Text style={styles.title}>
            Informasi
          </Text>
        </View>

        <View style={styles.infoItem}>
          <Ionicons
            name="person"
            size={22}
            color="#2563eb"
          />

          <Text style={styles.infoText}>
            Nabila Istighfareta Agwitanty
          </Text>
        </View>

        <View style={styles.infoItem}>
          <Ionicons
            name="id-card"
            size={22}
            color="#2563eb"
          />

          <Text style={styles.infoText}>
            2023010034
          </Text>
        </View>

        <View style={styles.infoItem}>
          <Ionicons
            name="school"
            size={22}
            color="#2563eb"
          />

          <Text style={styles.infoText}>
            Rekayasa Perangkat Lunak
          </Text>
        </View>

        <View style={styles.infoItem}>
          <Ionicons
            name="book"
            size={22}
            color="#2563eb"
          />

          <Text style={styles.infoText}>
            Semester 6
          </Text>
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },

  header: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },

  imageContainer: {
    padding: 6,
    borderRadius: 100,
    backgroundColor: '#dbeafe',
    marginBottom: 20,
  },

  image: {
    width: 160,
    height: 160,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#2563eb',
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
  },

  prodi: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 8,
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dbeafe',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginTop: 15,
  },

  badgeText: {
    marginLeft: 8,
    color: '#2563eb',
    fontWeight: '600',
  },

  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginBottom: 25,
  },

  navButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    elevation: 4,
  },

  navText: {
    color: '#fff',
    fontSize: 11,
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginBottom: 25,
    padding: 22,
    borderRadius: 25,
    elevation: 5,
  },

  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#2563eb',
  },

  description: {
    fontSize: 15,
    lineHeight: 28,
    color: '#475569',
    textAlign: 'justify',
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eff6ff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },

  infoText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },

  smallNavText: {
  color: '#fff',
  fontSize: 10,
  marginTop: 5,
  fontWeight: 'bold',
  textAlign: 'center',
},
});
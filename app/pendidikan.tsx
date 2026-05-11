import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Pendidikan() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.subtitle}>
          Education Journey
        </Text>

        <Text style={styles.headerTitle}>
          Pendidikan
        </Text>
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
          style={styles.activeNavButton}
          onPress={() => router.push('/pendidikan')}
        >
          <Ionicons name="school" size={20} color="white" />
          <Text style={styles.navText}>Pendidikan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push('/skill')}
        >
          <Ionicons name="code-slash" size={20} color="white" />
          <Text style={styles.navText}>Skill</Text>
        </TouchableOpacity>

      </View>

      {/* CARD PENDIDIKAN */}
      <View style={styles.card}>

        {/* LOGO KAMPUS */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logo_kampus.png')}
            style={styles.logo}
          />
        </View>

        {/* ISI */}
        <View style={styles.timeline}>

          <View style={styles.dot} />

          <View style={styles.content}>

            <Text style={styles.year}>
              2023 - Sekarang
            </Text>

            <Text style={styles.school}>
              Politeknik Balekambang Jepara
            </Text>

            <Text style={styles.major}>
              D4 Rekayasa Perangkat Lunak
            </Text>

            <Text style={styles.description}>
              Mahasiswa aktif semester 6 dengan fokus
              pada pengembangan aplikasi web, mobile,
              dan basis data.
            </Text>

            <View style={styles.ipkBox}>
              <Ionicons
                name="star"
                size={18}
                color="#facc15"
              />

              <Text style={styles.ipk}>
                IPK : 3.81 / 4.00
              </Text>
            </View>

          </View>

        </View>

      </View>

      {/* MATA KULIAH */}
      <View style={styles.card}>

        <Text style={styles.sectionTitle}>
          Mata Kuliah Relevan
        </Text>

        <View style={styles.subjectItem}>
          <Ionicons
            name="globe"
            size={20}
            color="#2563eb"
          />

          <Text style={styles.subjectText}>
            Pemrograman Web
          </Text>
        </View>

        <View style={styles.subjectItem}>
          <Ionicons
            name="server"
            size={20}
            color="#2563eb"
          />

          <Text style={styles.subjectText}>
            Sistem Basis Data
          </Text>
        </View>

        <View style={styles.subjectItem}>
          <Ionicons
            name="phone-portrait"
            size={20}
            color="#2563eb"
          />

          <Text style={styles.subjectText}>
            Aplikasi Mobile
          </Text>
        </View>

        <View style={styles.subjectItem}>
          <Ionicons
            name="color-palette"
            size={20}
            color="#2563eb"
          />

          <Text style={styles.subjectText}>
            UI/UX Design
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
    marginTop: 50,
    alignItems: 'center',
    marginBottom: 25,
  },

  subtitle: {
    fontSize: 14,
    color: '#64748b',
    letterSpacing: 1,
  },

  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 5,
  },

  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginBottom: 25,
  },

  navButton: {
    backgroundColor: '#60a5fa',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
  },

  activeNavButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
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
    borderRadius: 25,
    padding: 20,
    elevation: 5,
    marginBottom: 25,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  logo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },

  timeline: {
    flexDirection: 'row',
  },

  dot: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#2563eb',
    marginTop: 5,
    marginRight: 15,
  },

  content: {
    flex: 1,
  },

  year: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 5,
  },

  school: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
  },

  major: {
    fontSize: 16,
    color: '#2563eb',
    marginTop: 5,
    marginBottom: 10,
    fontWeight: '600',
  },

  description: {
    fontSize: 15,
    lineHeight: 24,
    color: '#475569',
    textAlign: 'justify',
  },

  ipkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#fef9c3',
    padding: 10,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },

  ipk: {
    marginLeft: 8,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#92400e',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 20,
  },

  subjectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    backgroundColor: '#eff6ff',
    padding: 15,
    borderRadius: 15,
  },

  subjectText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
});
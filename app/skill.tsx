import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Skill() {
  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.subtitle}>
          My Experience & Ability
        </Text>

        <Text style={styles.headerTitle}>
          Skill & Project
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
          style={styles.navButton}
          onPress={() => router.push('/pendidikan')}
        >
          <Ionicons name="school" size={20} color="white" />
          <Text style={styles.smallNavText}>
            Pendidikan
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.activeNavButton}
          onPress={() => router.push('/skill')}
        >
          <Ionicons name="code-slash" size={20} color="white" />
          <Text style={styles.smallNavText}>
            Skill
          </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.card}>

        <Text style={styles.sectionTitle}>
          Skill Teknis
        </Text>

        <View style={styles.skillItem}>
          <Ionicons
            name="logo-javascript"
            size={24}
            color="#2563eb"
          />

          <Text style={styles.skillText}>
            JavaScript
          </Text>
        </View>

        <View style={styles.skillItem}>
          <Ionicons
            name="logo-web-component"
            size={24}
            color="#2563eb"
          />

          <Text style={styles.skillText}>
            PHP
          </Text>
        </View>

        <View style={styles.skillItem}>
          <Ionicons
            name="code-slash"
            size={24}
            color="#2563eb"
          />

          <Text style={styles.skillText}>
            Python
          </Text>
        </View>

        <View style={styles.skillItem}>
          <Ionicons
            name="logo-android"
            size={24}
            color="#2563eb"
          />

          <Text style={styles.skillText}>
            Java
          </Text>
        </View>

        <View style={styles.skillItem}>
          <Ionicons
            name="server"
            size={24}
            color="#2563eb"
          />

          <Text style={styles.skillText}>
            Laravel
          </Text>
        </View>

        <View style={styles.skillItem}>
          <Ionicons
            name="phone-portrait"
            size={24}
            color="#2563eb"
          />

          <Text style={styles.skillText}>
            Firebase
          </Text>
        </View>

        <View style={styles.skillItem}>
          <Ionicons
            name="albums"
            size={24}
            color="#2563eb"
          />

          <Text style={styles.skillText}>
            MySQL Database
          </Text>
        </View>

        <View style={styles.skillItem}>
          <Ionicons
            name="color-palette"
            size={24}
            color="#2563eb"
          />

          <Text style={styles.skillText}>
            UI/UX Design (Figma)
          </Text>
        </View>

      </View>

      <View style={styles.card}>

        <Text style={styles.sectionTitle}>
          Soft Skill
        </Text>

        <View style={styles.softItem}>
          <Ionicons
            name="bulb"
            size={22}
            color="#2563eb"
          />

          <Text style={styles.softText}>
            Problem Solving
          </Text>
        </View>

        <View style={styles.softItem}>
          <Ionicons
            name="people"
            size={22}
            color="#2563eb"
          />

          <Text style={styles.softText}>
            Team Work
          </Text>
        </View>

        <View style={styles.softItem}>
          <Ionicons
            name="chatbubbles"
            size={22}
            color="#2563eb"
          />

          <Text style={styles.softText}>
            Komunikasi
          </Text>
        </View>

      </View>

      <View style={styles.card}>

        <Text style={styles.sectionTitle}>
          Pengalaman Organisasi
        </Text>

        <View style={styles.organizationBox}>
          <Text style={styles.organization}>
            Staff Humas — HIMA RPL
          </Text>

          <Text style={styles.year}>
            2024 - 2025
          </Text>

          <Text style={styles.description}>
            Menjalin komunikasi dengan pihak internal
            dan eksternal serta membantu koordinasi
            kegiatan organisasi.
          </Text>
        </View>

        <View style={styles.organizationBox}>
          <Text style={styles.organization}>
            Bendahara — HIMA RPL
          </Text>

          <Text style={styles.year}>
            2025 - 2026
          </Text>

          <Text style={styles.description}>
            Mengelola pencatatan dan pelaporan
            keuangan organisasi secara terstruktur.
          </Text>
        </View>

      </View>

      <View style={styles.card}>

        <Text style={styles.sectionTitle}>
          Project
        </Text>

        <View style={styles.projectItem}>
          <Image
            source={require('../assets/images/company_profile.png')}
            style={styles.projectImage}
          />

          <View style={styles.projectContent}>
            <Text style={styles.projectTitle}>
              Website Company Profile
            </Text>

            <Text style={styles.projectDesc}>
              Website company profile modern
              menggunakan HTML, CSS, dan Bootstrap.
            </Text>
          </View>
        </View>

        <View style={styles.projectItem}>
          <Image
            source={require('../assets/images/ayna.png')}
            style={styles.projectImage}
          />

          <View style={styles.projectContent}>
            <Text style={styles.projectTitle}>
              Website E-Commerce
            </Text>

            <Text style={styles.projectDesc}>
              Sistem toko online dengan fitur
              katalog dan checkout WhatsApp.
            </Text>
          </View>
        </View>

        <View style={styles.projectItem}>
          <Image
            source={require('../assets/images/absensi.png')}
            style={styles.projectImage}
          />

          <View style={styles.projectContent}>
            <Text style={styles.projectTitle}>
              Aplikasi Absensi Android
            </Text>

            <Text style={styles.projectDesc}>
              Aplikasi absensi QR Code menggunakan
              Java dan Firebase.
            </Text>
          </View>
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
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 25,
    borderRadius: 25,
    padding: 20,
    elevation: 5,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 20,
  },

  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    backgroundColor: '#eff6ff',
    padding: 15,
    borderRadius: 15,
  },

  skillText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },

  softItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    backgroundColor: '#eff6ff',
    padding: 15,
    borderRadius: 15,
  },

  softText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },

  organizationBox: {
    backgroundColor: '#eff6ff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },

  organization: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0f172a',
  },

  year: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 5,
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
    textAlign: 'justify',
  },

  projectItem: {
    marginBottom: 20,
    backgroundColor: '#eff6ff',
    borderRadius: 20,
    overflow: 'hidden',
  },

  projectImage: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
  },

  projectContent: {
    padding: 15,
  },

  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 8,
  },

  projectDesc: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 22,
  },

  footer: {
    alignItems: 'center',
    marginBottom: 40,
  },

  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563eb',
  },

  smallNavText: {
  color: '#fff',
  fontSize: 9,
  marginTop: 5,
  fontWeight: 'bold',
  textAlign: 'center',
},
});
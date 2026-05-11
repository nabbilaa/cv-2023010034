import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';

import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Biodata() {
  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.subtitle}>
          Personal Information
        </Text>

        <Text style={styles.title}>
          Biodata
        </Text>

        <View style={styles.badge}>
          <Ionicons
            name="sparkles"
            size={16}
            color="#2563eb"
          />

          <Text style={styles.badgeText}>
            Active Student
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
          style={styles.activeNavButton}
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

      {/* BIODATA */}
      <View style={styles.card}>

        <View style={styles.item}>
          <View style={styles.iconBox}>
            <Ionicons
              name="calendar"
              size={22}
              color="#2563eb"
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.label}>
              Tempat, Tanggal Lahir
            </Text>

            <Text style={styles.value}>
              Jepara, 09 Agustus 2004
            </Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconBox}>
            <Ionicons
              name="location"
              size={22}
              color="#2563eb"
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.label}>
              Alamat
            </Text>

            <Text style={styles.value}>
              Jepara, Jawa Tengah
            </Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconBox}>
            <Ionicons
              name="mail"
              size={22}
              color="#2563eb"
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.label}>
              Email
            </Text>

            <Text style={styles.value}>
              nistighfareta@gmail.com
            </Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconBox}>
            <Ionicons
              name="call"
              size={22}
              color="#2563eb"
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.label}>
              Nomor HP
            </Text>

            <Text style={styles.value}>
              +62 895-3256-10300
            </Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconBox}>
            <Ionicons
              name="heart"
              size={22}
              color="#2563eb"
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.label}>
              Hobi
            </Text>

            <Text style={styles.value}>
              Coding, UI/UX Design, Membaca Teknologi
            </Text>
          </View>
        </View>

      </View>

      {/* SOCIAL MEDIA */}
      <View style={styles.card}>

        <Text style={styles.sectionTitle}>
          Social Media
        </Text>

        {/* LINKEDIN */}
        <TouchableOpacity
          style={styles.socialItem}
          onPress={() =>
            Linking.openURL(
              'https://linkedin.com/in/nabilaistighfareta'
            )
          }
        >
          <Ionicons
            name="logo-linkedin"
            size={22}
            color="#2563eb"
          />

          <Text style={styles.socialText}>
            nabilaistighfareta
          </Text>

        </TouchableOpacity>

        {/* INSTAGRAM */}
        <TouchableOpacity
          style={styles.socialItem}
          onPress={() =>
            Linking.openURL(
              'https://instagram.com/nb.laa_'
            )
          }
        >
          <Ionicons
            name="logo-instagram"
            size={22}
            color="#2563eb"
          />

          <Text style={styles.socialText}>
            @nb.laa_
          </Text>

        </TouchableOpacity>

        {/* GITHUB */}
        <TouchableOpacity
          style={styles.socialItem}
          onPress={() =>
            Linking.openURL(
              'https://github.com/nabbilaa'
            )
          }
        >
          <Ionicons
            name="logo-github"
            size={22}
            color="#2563eb"
          />

          <Text style={styles.socialText}>
            github.com/nabbilaa
          </Text>

        </TouchableOpacity>

      </View>

      <View style={styles.card}>

        <Text style={styles.sectionTitle}>
          Interest
        </Text>

        <View style={styles.interestContainer}>

          <View style={styles.interestBox}>
            <Ionicons
              name="globe"
              size={20}
              color="#2563eb"
            />

            <Text style={styles.interestText}>
              Web Development
            </Text>
          </View>

          <View style={styles.interestBox}>
            <Ionicons
              name="phone-portrait"
              size={20}
              color="#2563eb"
            />

            <Text style={styles.interestText}>
              Mobile App
            </Text>
          </View>

          <View style={styles.interestBox}>
            <Ionicons
              name="color-palette"
              size={20}
              color="#2563eb"
            />

            <Text style={styles.interestText}>
              UI/UX Design
            </Text>
          </View>

        </View>

      </View>

      <View style={styles.quoteCard}>
        <Ionicons
          name="sparkles"
          size={24}
          color="#2563eb"
        />

        <Text style={styles.quote}>
          “Terus belajar dan berkembang
          dalam dunia teknologi.”
        </Text>
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

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 5,
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dbeafe',
    paddingVertical: 8,
    paddingHorizontal: 15,
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

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  iconBox: {
    width: 55,
    height: 55,
    backgroundColor: '#dbeafe',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  content: {
    flex: 1,
  },

  label: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 5,
  },

  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    lineHeight: 24,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 20,
  },

  socialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eff6ff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },

  socialText: {
    marginLeft: 15,
    fontSize: 15,
    fontWeight: '600',
    color: '#0f172a',
  },

  openIcon: {
    marginLeft: 'auto',
  },

  interestContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  interestBox: {
    width: '30%',
    backgroundColor: '#eff6ff',
    padding: 15,
    borderRadius: 18,
    alignItems: 'center',
  },

  interestText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
    fontWeight: '600',
    color: '#0f172a',
  },

  quoteCard: {
    backgroundColor: '#dbeafe',
    marginHorizontal: 20,
    marginBottom: 40,
    padding: 25,
    borderRadius: 25,
    alignItems: 'center',
  },

  quote: {
    marginTop: 15,
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#1e293b',
    lineHeight: 26,
  },
});
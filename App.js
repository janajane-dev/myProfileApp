import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const myPhoto = require('./assets/profile.jpg');

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to My Profile</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.profileCard}>
          <Image
            style={styles.profileImage}
            source={myPhoto}
          />
          <Text style={styles.name}>Jana Jane Mancenido</Text>
          <Text style={styles.role}>BS Information Technology</Text>

          <View style={styles.divider} />

          <Text style={styles.introText}>
            Hi! I'm a 4th year college student passionate about web and mobile development. 
            I enjoy building applications, exploring new technologies, and turning ideas into useful and meaningful projects.
          </Text>
        </View>

        <View style={styles.interestsCard}>
          <Text style={styles.interestsTitle}>My Interests</Text>

          <View style={styles.interestRow}>
            <View style={styles.bullet} />
            <Text style={styles.interestItem}>Web and mobile app development</Text>
          </View>

          <View style={styles.interestRow}>
            <View style={styles.bullet} />
            <Text style={styles.interestItem}>Learning programming</Text>
          </View>

          <View style={styles.interestRow}>
            <View style={styles.bullet} />
            <Text style={styles.interestItem}>Problem-solving</Text>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
}

const ACCENT = '#7C9CFF';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0F1115',
  },

  header: {
    paddingTop: 40,
    paddingBottom: 32,
    paddingHorizontal: 24,
  },
  welcomeText: {
    color: '#F2F3F7',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.3,
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  profileCard: {
    backgroundColor: '#1A1D24',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2A2E38',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: ACCENT,
    marginBottom: 14,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#F2F3F7',
    marginBottom: 4,
  },
  role: {
    fontSize: 13,
    fontWeight: '500',
    color: ACCENT,
    marginBottom: 16,
  },
  divider: {
    width: 36,
    height: 2,
    backgroundColor: '#2A2E38',
    borderRadius: 2,
    marginBottom: 16,
  },
  introText: {
    fontSize: 14,
    color: '#9BA0AC',
    textAlign: 'center',
    lineHeight: 20,
  },

  interestsCard: {
    backgroundColor: '#1A1D24',
    borderRadius: 20,
    padding: 22,
    borderWidth: 1,
    borderColor: '#2A2E38',
  },
  interestsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F2F3F7',
    marginBottom: 14,
  },
  interestRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: ACCENT,
    marginRight: 12,
  },
  interestItem: {
    fontSize: 15,
    color: '#D4D6DC',
    fontWeight: '500',
  },
});
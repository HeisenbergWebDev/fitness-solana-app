import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [watchScale] = useState(new Animated.Value(1));
  const [walletScale] = useState(new Animated.Value(1));

  const fitnessCards = [
    {
      id: 1,
      title: 'Edzés Programok',
      description: 'Személyre szabott edzésprogramok',
      icon: '💪',
    },
    {
      id: 2,
      title: 'Táplálkozás',
      description: 'Egészséges étrend tervezés',
      icon: '🥗',
    },
    {
      id: 3,
      title: 'Fogyás',
      description: 'Hatékony fogyás programok',
      icon: '⚖️',
    },
    {
      id: 4,
      title: 'Izomnövelés',
      description: 'Erőnlét fejlesztés',
      icon: '🏋️',
    },
    {
      id: 5,
      title: 'Personal Edző',
      description: 'Személyi edzők szolgáltatásai',
      icon: '👨‍🏫',
    },
  ];

  const animateButton = (scale) => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleWatchPress = () => {
    animateButton(watchScale);
    console.log('Watch pressed');
    // TODO: Implement watch connection
  };

  const handleWalletPress = () => {
    animateButton(walletScale);
    console.log('Wallet pressed');
    // TODO: Implement wallet connection
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Animated.View style={{ transform: [{ scale: watchScale }] }}>
          <TouchableOpacity 
            style={styles.iconButton} 
            onPress={handleWatchPress}
            activeOpacity={0.7}
          >
            <Ionicons name="watch" size={24} color="#14F195" />
          </TouchableOpacity>
        </Animated.View>
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>Solana Fitness</Text>
          <Text style={styles.headerSubtitle}>Your Personal Fitness Journey</Text>
        </View>
        <Animated.View style={{ transform: [{ scale: walletScale }] }}>
          <TouchableOpacity 
            style={styles.iconButton} 
            onPress={handleWalletPress}
            activeOpacity={0.7}
          >
            <Ionicons name="wallet" size={24} color="#14F195" />
          </TouchableOpacity>
        </Animated.View>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.cardsContainer}>
          {fitnessCards.map((card) => (
            <TouchableOpacity
              key={card.id}
              style={styles.card}
              onPress={() => console.log(`Pressed ${card.title}`)}
            >
              <Text style={styles.cardIcon}>{card.icon}</Text>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardDescription}>{card.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#14F195',
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#14F195',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#14F195',
  },
  scrollView: {
    flex: 1,
  },
  cardsContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#14F195',
  },
  cardIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#14F195',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
  },
});

export default HomeScreen; 
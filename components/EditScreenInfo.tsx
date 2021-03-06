import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { shouldUseActivityState } from 'react-native-screens';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';

export default function EditScreenInfo({ }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
        </View>
        <TouchableOpacity onPress={appointeddMemberOnpress} style={styles.helpLink}>
        <Text
          style={styles.getStartedText} lightColor={Colors.light.tint}
          darkColor="rgba(255,255,255,0.8)">    
          BOOK NOW
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


function appointeddMemberOnpress() {
  WebBrowser.openBrowserAsync(
    'https://dime-studios.appointedd.com/app/6057da058b910b07154d2a16'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    marginTop: -190,
    fontSize: 17,
    lineHeight: 200,
    textAlign: 'center',
  }, 
  servicesText: {
    marginTop: -190,
    fontSize: 17,
    lineHeight: 200,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});

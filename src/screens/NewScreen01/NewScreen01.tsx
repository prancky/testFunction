import React from 'react';
import { AppColumn, AppContainer } from '@/components/shared';
import { useNavigation } from '@react-navigation/native';

import { color } from '@/assets';

import { StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { useClearHeaderActions } from '@/utils/screen.effects';

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const NewScreen01: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-462579'}
      testID={'227b515d-b42a-4c3a-959e-f487c743abf5'}
      style={styles.aSContainerStyle}
    >
      <AppColumn
        widgetId={'mainContainer'}
        style={sharedStyles.createQuoteContainerColumn4}
      />
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  aSContainerStyle: {
    height: '100%',
    width: '100%',
    backgroundColor: color.surface.default,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

export default NewScreen01;

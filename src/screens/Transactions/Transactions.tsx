import React from 'react';
import {
  AppAppBar,
  AppColumn,
  AppContainer,
  AppImage,
  AppListView,
  AppRow,
  AppStack,
  AppText,
} from '@/components/shared';
import { useNavigation } from '@react-navigation/native';

import { imageSources, space, text } from '@/assets';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const Transactions: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  const renderItem_Transactions_List = ({ item }) => (
    <AppColumn
      widgetId={'Transactions_Container_Column_3'}
      style={sharedStyles.bankAccountContainerColumn2}
    >
      <AppRow
        widgetId={'Transactions_Container_RowWrapper_Row'}
        spacing={space['2']}
        style={sharedStyles.bankAccountContainerRowWrapperRow}
      >
        <AppRow
          widgetId={'Transactions_Container_Row_2'}
          spacing={15}
          style={sharedStyles.analyticsContainerRow2}
        >
          <AppImage
            widgetId={'group630'}
            source={item['group630']}
            style={sharedStyles.group15978827261}
          />
          <AppColumn
            widgetId={'Transactions_Container_Column_4'}
            style={sharedStyles.bankAccountContainerColumn3}
          >
            <AppText
              widgetId={'transfered'}
              numberOfLines={0}
              style={[
                text.label.medium,
                sharedStyles.marketsLabelCurrentPriceText,
              ]}
              accessibilityLabel={
                STRINGS.Transactions.transfered.accessibilityLabel
              }
            >
              {String(
                item['transfered'] ??
                  STRINGS.Transactions.transfered.accessibilityLabel,
              )}
            </AppText>
            <AppText
              widgetId={'aug1920231'}
              numberOfLines={0}
              style={[text.label.medium, sharedStyles.aug1920231]}
              accessibilityLabel={
                STRINGS.Transactions.aug1920231.accessibilityLabel
              }
            >
              {String(
                item['aug1920231'] ??
                  STRINGS.Transactions.aug1920231.accessibilityLabel,
              )}
            </AppText>
          </AppColumn>
        </AppRow>
        <AppText
          widgetId={'text1'}
          style={[text.label.medium, sharedStyles.text1]}
          accessibilityLabel={STRINGS.Transactions.text1.accessibilityLabel}
        >
          {String(
            item['text1'] ?? STRINGS.Transactions.text1.accessibilityLabel,
          )}
        </AppText>
      </AppRow>
    </AppColumn>
  );

  return (
    <AppContainer
      widgetId={'ASContainer-168534'}
      testID={'6f64bafa-39d8-4216-9de2-b019824556d1'}
      style={styles.aSContainerStyle}
    >
      <AppAppBar
        widgetId={'Transactions_AppBar_SyntheticAppBar_AppBar'}
        style={sharedStyles.analyticsAppBarSyntheticAppBarAppBar}
      >
        <AppRow
          widgetId={'Transactions_Container_AppBarCustomCentre_Row'}
          spacing={space['2']}
          style={sharedStyles.analyticsContainerAppBarCustomCentreRow}
        >
          <AppRow
            widgetId={'Transactions_Container_Row'}
            spacing={space['2']}
            style={sharedStyles.myBalanceContainerRow}
          >
            <AppImage
              widgetId={'Transactions_Image'}
              resizeMode={'cover'}
              source={imageSources.image__vl31}
              style={sharedStyles.iphone15BlueImage}
            />
            <AppText
              widgetId={'Transactions_Title_HiEsaaa_Text'}
              numberOfLines={0}
              style={[
                text.label.medium,
                sharedStyles.myBalanceTitleHiEsaaaText,
              ]}
              accessibilityLabel={
                STRINGS.Transactions.Transactions_Title_HiEsaaa_Text
                  .accessibilityLabel
              }
            >
              {STRINGS.Transactions.Transactions_Title_HiEsaaa_Text.label}
            </AppText>
          </AppRow>
          <AppStack
            widgetId={'Transactions_Container_Stack'}
            style={sharedStyles.iphone15BlueContainerStack}
          >
            <AppImage
              widgetId={'Transactions_Image_2'}
              source={imageSources.image__ery9k}
              style={sharedStyles.iphone15BlueImage2}
            />
            <AppColumn
              widgetId={'Transactions_Container_Column'}
              style={sharedStyles.iphone15BlueContainerColumn2}
            >
              <AppImage
                widgetId={'Transactions_Image_3'}
                resizeMode={'stretch'}
                source={imageSources.image__w4lmu}
                style={sharedStyles.iphone15BlueImage3}
              />
              <AppImage
                widgetId={'Transactions_Image_4'}
                source={imageSources.image__0c2w3}
                style={sharedStyles.iphone15BlueImage4}
              />
            </AppColumn>
            <AppImage
              widgetId={'Transactions_Image_5'}
              source={imageSources.image__g6s8x}
              style={sharedStyles.iphone15BlueImage5}
            />
            <AppImage
              widgetId={'Transactions_Image_6'}
              source={imageSources.image__kjyk}
              style={sharedStyles.iphone15BlueImage6}
            />
          </AppStack>
        </AppRow>
      </AppAppBar>
      <AppStack
        widgetId={'Transactions_Container_Transactions_Stack'}
        style={sharedStyles.analyticsContainerAnalyticsStack}
      >
        <AppColumn
          widgetId={'Transactions_Container_Column_2'}
          style={styles.transactionsContainerColumn2Style}
        >
          <AppListView
            widgetId={'Transactions_List'}
            style={sharedStyles.bankAccountList}
            renderItem={renderItem_Transactions_List}
            data={[
              {
                text: '$123.00',
                group630:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/a12a4a04-401b-403e-ad3c-a8803e1190b2-1_660.png',
                transfered: 'Transfered',
                aug1920231: 'Aug 19, 2023',
              },
              {
                text: '$12.00',
                group630:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/0f4abe5a-cf0f-458d-b6e0-526016b60270-1_673.png',
                transfered: 'Transfered',
                aug1920231: 'Jul 20, 2023',
              },
              {
                text: '$234.00',
                group630:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/e38f8250-0c7f-4b04-b1b7-82be6376abe3-1_683.png',
                transfered: 'Refund',
                aug1920231: 'May 08, 2023',
              },
              {
                text: '$15.00',
                group630:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/2dad15c2-2887-41c6-9079-1851395b54f6-1_697.png',
                transfered: 'Refund',
                aug1920231: 'Feb 29, 2023',
              },
              {
                text: '-$92.00',
                group630:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/bef81cad-f9c0-4568-b66d-4d3f9484daa2-1_710.png',
                transfered: 'Transaction',
                aug1920231: 'Jan 25, 2023',
              },
              {
                text: '-$20.00',
                group630:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/a94d0bf5-ff0f-4968-b234-420c20466444-1_720.png',
                transfered: 'Transaction',
                aug1920231: 'Jan 16, 2023',
              },
            ]}
          />
        </AppColumn>
        <AppRow
          widgetId={'Transactions_Container_Row_3'}
          spacing={20}
          style={sharedStyles.iphone15BlueContainerRow3}
        >
          <AppText
            widgetId={'Transactions_Label_UserName_Text_2'}
            style={[
              text.label.medium,
              sharedStyles.transactionsLabelUserNameText2,
            ]}
            accessibilityLabel={
              STRINGS.Transactions.Transactions_Label_UserName_Text_2
                .accessibilityLabel
            }
          >
            {STRINGS.Transactions.Transactions_Label_UserName_Text_2.label}
          </AppText>
          <AppText
            widgetId={'Transactions_Label_UserName_Text_3'}
            style={[
              text.label.medium,
              sharedStyles.iphone15BlueLabelUserNameText2,
            ]}
            accessibilityLabel={
              STRINGS.Transactions.Transactions_Label_UserName_Text_3
                .accessibilityLabel
            }
          >
            {STRINGS.Transactions.Transactions_Label_UserName_Text_3.label}
          </AppText>
          <AppText
            widgetId={'Transactions_Label_UserName_Text_4'}
            style={[
              text.label.medium,
              styles.transactionsLabelUserNameText4Style,
            ]}
            accessibilityLabel={
              STRINGS.Transactions.Transactions_Label_UserName_Text_4
                .accessibilityLabel
            }
          >
            {STRINGS.Transactions.Transactions_Label_UserName_Text_4.label}
          </AppText>
        </AppRow>
        <AppText
          widgetId={'Transactions_Label_UserName_Text_5'}
          style={[
            text.label.medium,
            styles.transactionsLabelUserNameText5Style,
          ]}
          accessibilityLabel={
            STRINGS.Transactions.Transactions_Label_UserName_Text_5
              .accessibilityLabel
          }
        >
          {STRINGS.Transactions.Transactions_Label_UserName_Text_5.label}
        </AppText>
      </AppStack>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  aSContainerStyle: {
    backgroundColor: '#efedfd',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  transactionsContainerColumn2Style: {
    top: '33.7%',
    position: 'absolute',
    width: '89.3%',
    left: '5.3%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  transactionsLabelUserNameText4Style: {
    color: '#151521',
    fontWeight: 500,
    fontSize: 12,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    lineHeight: 15,
    width: 76,
    letterSpacing: -0.24,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  transactionsLabelUserNameText5Style: {
    fontWeight: 500,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    left: '5.3%',
    color: '#151521',
    top: '24.6%',
    letterSpacing: -0.7000000000000001,
    position: 'absolute',
    lineHeight: 44,
    fontSize: 35,
    width: 222,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
});

export default Transactions;

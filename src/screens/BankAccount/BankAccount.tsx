import React from 'react';
import {
  AppAppBar,
  AppColumn,
  AppContainer,
  AppImage,
  AppListTile,
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

const BankAccount: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  const renderItem_BankAccount_List = ({ item }) => (
    <AppColumn
      widgetId={'BankAccount_Container_Column_2'}
      style={sharedStyles.bankAccountContainerColumn2}
    >
      <AppRow
        widgetId={'BankAccount_Container_RowWrapper_Row'}
        spacing={space['2']}
        style={sharedStyles.bankAccountContainerRowWrapperRow}
      >
        <AppRow
          widgetId={'BankAccount_Container_Row'}
          spacing={15}
          style={sharedStyles.analyticsContainerRow2}
        >
          <AppImage
            widgetId={'group15978827261'}
            source={item['group15978827261']}
            style={sharedStyles.group15978827261}
          />
          <AppColumn
            widgetId={'BankAccount_Container_Column_3'}
            style={sharedStyles.bankAccountContainerColumn3}
          >
            <AppText
              widgetId={'sl'}
              numberOfLines={0}
              style={[
                text.label.medium,
                sharedStyles.marketsLabelCurrentPriceText,
              ]}
              accessibilityLabel={STRINGS.BankAccount.sl.accessibilityLabel}
            >
              {String(item['sl'] ?? STRINGS.BankAccount.sl.accessibilityLabel)}
            </AppText>
            <AppText
              widgetId={'solana'}
              numberOfLines={0}
              style={[text.label.medium, sharedStyles.aug1920231]}
              accessibilityLabel={STRINGS.BankAccount.solana.accessibilityLabel}
            >
              {String(
                item['solana'] ?? STRINGS.BankAccount.solana.accessibilityLabel,
              )}
            </AppText>
          </AppColumn>
        </AppRow>
        <AppText
          widgetId={'text2'}
          style={[text.label.medium, sharedStyles.text1]}
          accessibilityLabel={STRINGS.BankAccount.text2.accessibilityLabel}
        >
          {String(
            item['text2'] ?? STRINGS.BankAccount.text2.accessibilityLabel,
          )}
        </AppText>
      </AppRow>
    </AppColumn>
  );

  return (
    <AppContainer
      widgetId={'ASContainer-764212'}
      testID={'708beece-3167-469e-95a2-98123eeebb11'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'BankAccount_AppBar_SyntheticAppBar_AppBar'}
        style={sharedStyles.analyticsAppBarSyntheticAppBarAppBar}
      >
        <AppRow
          widgetId={'BankAccount_Container_AppBarCustomCentre_Row'}
          spacing={space['2']}
          style={sharedStyles.analyticsContainerAppBarCustomCentreRow}
        >
          <AppStack
            widgetId={'BankAccount_Container_Stack'}
            style={sharedStyles.analyticsContainerStack}
          >
            <AppImage
              widgetId={'BankAccount_Image'}
              resizeMode={'stretch'}
              source={imageSources.image__9ia3b}
              style={sharedStyles.analyticsImage}
            />
            <AppImage
              widgetId={'BankAccount_Image_2'}
              source={imageSources.image__mm1k0}
              style={sharedStyles.analyticsImage2}
            />
          </AppStack>
          <AppImage
            widgetId={'BankAccount_Image_3'}
            resizeMode={'cover'}
            source={imageSources.image__7zo9}
            style={sharedStyles.analyticsImage3}
          />
        </AppRow>
      </AppAppBar>
      <AppImage
        widgetId={'BankAccount_Background_Image'}
        source={imageSources.image__9ahp}
        resizeMode={'cover'}
        style={sharedStyles.analyticsBackgroundImage}
      />
      <AppStack
        widgetId={'BankAccount_Container_BankAccount_Stack'}
        style={sharedStyles.analyticsContainerAnalyticsStack}
      >
        <AppColumn
          widgetId={'BankAccount_Container_Column'}
          spacing={20}
          style={styles.bankAccountContainerColumnStyle}
        >
          <AppText
            widgetId={'BankAccount_Label_UserName_Text'}
            style={[
              text.label.medium,
              styles.bankAccountLabelUserNameTextStyle,
            ]}
            accessibilityLabel={
              STRINGS.BankAccount.BankAccount_Label_UserName_Text
                .accessibilityLabel
            }
          >
            {STRINGS.BankAccount.BankAccount_Label_UserName_Text.label}
          </AppText>
          <AppListView
            widgetId={'BankAccount_List'}
            style={sharedStyles.bankAccountList}
            renderItem={renderItem_BankAccount_List}
            data={[
              {
                text: '$12,094.08',
                group15978827261:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/5b9996ce-860f-4165-92f9-8ff696584a41-1_924.png',
                sl: 'SL',
                solana: 'Solana',
              },
              {
                text: '$17,238.11',
                group15978827261:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/3db0f45d-3c6c-4fe2-961c-fe5ed916993d-1_937.png',
                sl: 'BTC',
                solana: 'Bitcoin',
              },
              {
                text: '$8,200.00',
                group15978827261:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/d0a8c2dd-c90b-42ba-a561-8fdd7138b6a2-1_947.png',
                sl: 'ETH',
                solana: 'Ethereum',
              },
              {
                text: '-$92.00',
                group15978827261:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/5bc7b887-63aa-4066-ad74-0c5f726cffaf-1_963.png',
                sl: 'Transaction',
                solana: 'Jan 25, 2023',
              },
              {
                text: '-$12.00',
                group15978827261:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/e366e2b7-b037-44c7-971b-2f7b67dc7dbd-1_973.png',
                sl: 'Transfered',
                solana: 'Jul 20, 2023',
              },
              {
                text: '-$15.00',
                group15978827261:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/c9c490b6-3df0-4ade-b683-e0629328dfd6-1_983.png',
                sl: 'Refund',
                solana: 'Feb 29, 2023',
              },
            ]}
          />
        </AppColumn>
        <AppStack
          widgetId={'BankAccount_Container_Stack_2'}
          style={styles.bankAccountContainerStack2Style}
        >
          <AppColumn
            widgetId={'BankAccount_Container_Column_4'}
            style={styles.bankAccountContainerColumn4Style}
          />
          <AppImage
            widgetId={'BankAccount_Image_5'}
            source={imageSources.image__d9twv}
            style={styles.bankAccountImage5Style}
          />
        </AppStack>
        <AppColumn
          widgetId={'BankAccount_Container_Column_5'}
          style={sharedStyles.analyticsContainerColumn5}
        >
          <AppListTile
            widgetId={'BankAccount_Item_ListItem'}
            titleStyle={{
              color: '#151521',
              fontSize: 35,
              textAlign: 'left',
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
              lineHeight: 44.099998474121094,
              letterSpacing: -0.7000000000000001,
            }}
            trailing={
              'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/10b578fc-46b1-4e97-aaef-270585b52455-1_1044.png'
            }
            style={sharedStyles.analyticsItemListItem}
            title={STRINGS.BankAccount.BankAccount_Item_ListItem.title}
          />
        </AppColumn>
        <AppColumn
          widgetId={'BankAccount_Container_Large_Column'}
          style={styles.bankAccountContainerLargeColumnStyle}
        >
          <AppStack
            widgetId={'BankAccount_Container_Large_Stack'}
            style={styles.bankAccountContainerLargeStackStyle}
          >
            <AppImage
              widgetId={'BankAccount_Image_6'}
              source={imageSources.image__lb8c}
              style={sharedStyles.bankAccountImage6}
            />
            <AppImage
              widgetId={'BankAccount_Image_7'}
              source={imageSources.image__tkmt}
              style={sharedStyles.bankAccountImage7}
            />
            <AppColumn
              widgetId={'BankAccount_Container_Column_6'}
              style={sharedStyles.bankAccountContainerColumn6}
            >
              <AppImage
                widgetId={'BankAccount_Image_8'}
                resizeMode={'stretch'}
                source={imageSources.image__l6lf}
                style={sharedStyles.bankAccountImage8}
              />
            </AppColumn>
            <AppImage
              widgetId={'BankAccount_Image_9'}
              source={imageSources.image__dmzl}
              style={sharedStyles.bankAccountImage9}
            />
            <AppRow
              widgetId={'BankAccount_Container_ExpireDate_Row'}
              spacing={3.6913182735443115}
              style={sharedStyles.bankAccountContainerExpireDateRow}
            >
              <AppText
                widgetId={'BankAccount_Label_UserName_Text_3'}
                style={[
                  text.label.medium,
                  sharedStyles.bankAccountLabelUserNameText3,
                ]}
                accessibilityLabel={
                  STRINGS.BankAccount.BankAccount_Label_UserName_Text_3
                    .accessibilityLabel
                }
              >
                {STRINGS.BankAccount.BankAccount_Label_UserName_Text_3.label}
              </AppText>
              <AppText
                widgetId={'BankAccount_Label_Text'}
                style={[text.label.medium, sharedStyles.bankAccountLabelText]}
                accessibilityLabel={
                  STRINGS.BankAccount.BankAccount_Label_Text.accessibilityLabel
                }
              >
                {STRINGS.BankAccount.BankAccount_Label_Text.label}
              </AppText>
            </AppRow>
            <AppText
              widgetId={'BankAccount_Label_UserName_Text_4'}
              style={[
                text.label.medium,
                styles.bankAccountLabelUserNameText4Style,
              ]}
              accessibilityLabel={
                STRINGS.BankAccount.BankAccount_Label_UserName_Text_4
                  .accessibilityLabel
              }
            >
              {STRINGS.BankAccount.BankAccount_Label_UserName_Text_4.label}
            </AppText>
            <AppText
              widgetId={'BankAccount_Label_Text_2'}
              style={[text.label.medium, sharedStyles.bankAccountLabelText2]}
              accessibilityLabel={
                STRINGS.BankAccount.BankAccount_Label_Text_2.accessibilityLabel
              }
            >
              {STRINGS.BankAccount.BankAccount_Label_Text_2.label}
            </AppText>
            <AppImage
              widgetId={'BankAccount_Image_10'}
              source={imageSources.image__obwe0}
              style={sharedStyles.bankAccountImage10}
            />
          </AppStack>
        </AppColumn>
      </AppStack>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  bankAccountContainerColumnStyle: {
    top: '54.4%',
    height: '64.4%',
    position: 'absolute',
    left: '5.3%',
    width: '89.3%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  bankAccountLabelUserNameTextStyle: {
    alignSelf: 'flex-start',
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    color: '#000000',
    fontWeight: 500,
    letterSpacing: -0.36,
    width: 66,
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  bankAccountContainerStack2Style: {
    top: '28.2%',
    height: '22.5%',
    position: 'absolute',
    left: '84.5%',
    width: '10.1%',
  },
  bankAccountContainerColumn4Style: {
    borderColor: '#000000',
    borderWidth: 0.5,
    borderRadius: 15,
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    left: '0%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  bankAccountImage5Style: {
    width: '39.5%',
    left: '31.6%',
    height: '38.8%',
    position: 'absolute',
    top: '30.6%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  bankAccountContainerLargeColumnStyle: {
    width: '76.5%',
    height: '22.5%',
    left: '5.3%',
    position: 'absolute',
    top: '28.2%',
    overflow: 'hidden',
    borderRadius: 18,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  bankAccountContainerLargeStackStyle: {
    shadowRadius: 59.061092376708984,
    shadowSpread: 11.073954582214355,
    borderRadius: 17,
    height: '100%',
    backgroundColor: '#37d6a3',
    shadowColor: 'rgba(17,54,129,0.08)',
    alignSelf: 'stretch',
    overflow: 'hidden',
    position: 'relative',
    shadowOffset: { width: 9.22829532623291, height: 36.91318130493164 },
  },
  bankAccountLabelUserNameText4Style: {
    textAlignVertical: 'center',
    position: 'absolute',
    fontFamily: 'Montserrat-600-normal',
    letterSpacing: -0.2408333206176758,
    fontSize: 12.041666030883789,
    top: '19.5%',
    fontWeight: 600,
    lineHeight: 15,
    width: 94,
    color: '#111b21',
    left: '34.8%',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
});

export default BankAccount;

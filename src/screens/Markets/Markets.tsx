import React from 'react';
import {
  AppAppBar,
  AppButton,
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

const Markets: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  const renderItem_Markets_List = ({ item }) => (
    <AppColumn
      widgetId={'Markets_Container_Column_2'}
      style={sharedStyles.bankAccountContainerColumn2}
    >
      <AppRow
        widgetId={'Markets_Container_RowWrapper_Row'}
        spacing={space['2']}
        style={sharedStyles.bankAccountContainerRowWrapperRow}
      >
        <AppRow
          widgetId={'Markets_Container_Row_2'}
          spacing={15}
          style={sharedStyles.analyticsContainerRow2}
        >
          <AppImage
            widgetId={'group15978827264'}
            source={item['group15978827264']}
            style={sharedStyles.group15978827261}
          />
          <AppColumn
            widgetId={'Markets_Container_Column_3'}
            style={sharedStyles.bankAccountContainerColumn3}
          >
            <AppText
              widgetId={'sl1'}
              numberOfLines={0}
              style={[
                text.label.medium,
                sharedStyles.marketsLabelCurrentPriceText,
              ]}
              accessibilityLabel={STRINGS.Markets.sl1.accessibilityLabel}
            >
              {String(item['sl1'] ?? STRINGS.Markets.sl1.accessibilityLabel)}
            </AppText>
            <AppText
              widgetId={'solana1'}
              numberOfLines={0}
              style={[text.label.medium, sharedStyles.aug1920231]}
              accessibilityLabel={STRINGS.Markets.solana1.accessibilityLabel}
            >
              {String(
                item['solana1'] ?? STRINGS.Markets.solana1.accessibilityLabel,
              )}
            </AppText>
          </AppColumn>
        </AppRow>
        <AppText
          widgetId={'text4'}
          style={[text.label.medium, sharedStyles.text1]}
          accessibilityLabel={STRINGS.Markets.text4.accessibilityLabel}
        >
          {String(item['text4'] ?? STRINGS.Markets.text4.accessibilityLabel)}
        </AppText>
      </AppRow>
    </AppColumn>
  );

  return (
    <AppContainer
      widgetId={'ASContainer-303010'}
      testID={'90611c41-b517-45e6-b82b-41ee83fcbe13'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'Markets_AppBar_SyntheticAppBar_AppBar'}
        style={sharedStyles.analyticsAppBarSyntheticAppBarAppBar}
      >
        <AppRow
          widgetId={'Markets_Container_AppBarCustomCentre_Row'}
          spacing={space['2']}
          style={sharedStyles.analyticsContainerAppBarCustomCentreRow}
        >
          <AppStack
            widgetId={'Markets_Container_Stack'}
            style={sharedStyles.analyticsContainerStack}
          >
            <AppImage
              widgetId={'Markets_Image'}
              source={imageSources.image__gkxh}
              resizeMode={'stretch'}
              style={sharedStyles.analyticsImage}
            />
            <AppImage
              widgetId={'Markets_Image_2'}
              source={imageSources.image__hwr96}
              style={sharedStyles.analyticsImage2}
            />
          </AppStack>
          <AppImage
            widgetId={'Markets_Image_3'}
            source={imageSources.image__ozly}
            resizeMode={'cover'}
            style={sharedStyles.analyticsImage3}
          />
        </AppRow>
      </AppAppBar>
      <AppImage
        widgetId={'Markets_Background_Image'}
        source={imageSources.image__ywwfm}
        resizeMode={'cover'}
        style={sharedStyles.analyticsBackgroundImage}
      />
      <AppStack
        widgetId={'Markets_Container_Markets_Stack'}
        style={sharedStyles.analyticsContainerAnalyticsStack}
      >
        <AppColumn
          widgetId={'Markets_Container_Column'}
          spacing={20}
          style={styles.marketsContainerColumnStyle}
        >
          <AppRow
            widgetId={'Markets_Container_Row'}
            spacing={space['2']}
            style={sharedStyles.marketsContainerRow}
          >
            <AppText
              widgetId={'Markets_Label_UserName_Text'}
              style={[text.label.medium, styles.marketsLabelUserNameTextStyle]}
              accessibilityLabel={
                STRINGS.Markets.Markets_Label_UserName_Text.accessibilityLabel
              }
            >
              {STRINGS.Markets.Markets_Label_UserName_Text.label}
            </AppText>
            <AppText
              widgetId={'Markets_Label_SeeAll_Text'}
              style={[text.label.medium, styles.marketsLabelSeeAllTextStyle]}
              accessibilityLabel={
                STRINGS.Markets.Markets_Label_SeeAll_Text.accessibilityLabel
              }
            >
              {STRINGS.Markets.Markets_Label_SeeAll_Text.label}
            </AppText>
          </AppRow>
          <AppListView
            widgetId={'Markets_List'}
            style={sharedStyles.bankAccountList}
            renderItem={renderItem_Markets_List}
            data={[
              {
                text: '$12,094.08',
                group15978827264:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/6b060306-5e24-4448-bcd5-0dafcb790776-1_1642.png',
                sl1: 'SL',
                solana1: 'Solana',
              },
              {
                text: '$17,238.11',
                group15978827264:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/481536bc-2428-4a04-aa3c-09a1645a4094-1_1655.png',
                sl1: 'BTC',
                solana1: 'Bitcoin',
              },
              {
                text: '$8,200.00',
                group15978827264:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/1fd7b902-1d72-45c5-b099-96745561df14-1_1665.png',
                sl1: 'ETH',
                solana1: 'Ethereum',
              },
              {
                text: '-$92.00',
                group15978827264:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/a413c4ed-b021-4230-a7d4-7faffbd92533-1_1681.png',
                sl1: 'Transaction',
                solana1: 'Jan 25, 2023',
              },
              {
                text: '-$12.00',
                group15978827264:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/f601d280-0e17-4956-851d-ac667781eed0-1_1691.png',
                sl1: 'Transfered',
                solana1: 'Jul 20, 2023',
              },
              {
                text: '-$15.00',
                group15978827264:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/d197a72a-a655-450f-82fd-4e1b0923e891-1_1701.png',
                sl1: 'Refund',
                solana1: 'Feb 29, 2023',
              },
            ]}
          />
        </AppColumn>
        <AppText
          widgetId={'Markets_Label_UserName_Text_3'}
          style={[text.label.medium, styles.marketsLabelUserNameText3Style]}
          accessibilityLabel={
            STRINGS.Markets.Markets_Label_UserName_Text_3.accessibilityLabel
          }
        >
          {STRINGS.Markets.Markets_Label_UserName_Text_3.label}
        </AppText>
        <AppRow
          widgetId={'Markets_Container_Row_3'}
          spacing={space['2']}
          style={styles.marketsContainerRow3Style}
        >
          <AppRow
            widgetId={'Markets_Container_Row_4'}
            spacing={15}
            style={sharedStyles.analyticsContainerRow2}
          >
            <AppImage
              widgetId={'Markets_Image_5'}
              source={imageSources.image__369e}
              style={sharedStyles.group15978827261}
            />
            <AppColumn
              widgetId={'Markets_Container_Column_4'}
              style={styles.marketsContainerColumn4Style}
            >
              <AppText
                widgetId={'Markets_Label_CurrentPrice_Text'}
                numberOfLines={0}
                style={[
                  text.label.medium,
                  sharedStyles.marketsLabelCurrentPriceText,
                ]}
                accessibilityLabel={
                  STRINGS.Markets.Markets_Label_CurrentPrice_Text
                    .accessibilityLabel
                }
              >
                {STRINGS.Markets.Markets_Label_CurrentPrice_Text.label}
              </AppText>
              <AppText
                widgetId={'Markets_Label_Text'}
                numberOfLines={0}
                style={[text.label.medium, styles.marketsLabelTextStyle]}
                accessibilityLabel={
                  STRINGS.Markets.Markets_Label_Text.accessibilityLabel
                }
              >
                {STRINGS.Markets.Markets_Label_Text.label}
              </AppText>
            </AppColumn>
          </AppRow>
          <AppButton
            widgetId={'Markets_Cta_Action_Button'}
            accessibilityLabel={''}
            style={sharedStyles.analyticsCtaActionButton}
            textStyle={[
              text.label.medium,
              sharedStyles.analyticsCtaActionButtonText,
            ]}
            label={''}
          />
        </AppRow>
        <AppRow
          widgetId={'Markets_Container_Row_5'}
          spacing={space['2']}
          style={styles.marketsContainerRow5Style}
        >
          <AppText
            widgetId={'Markets_Label_TimeAgo_Text'}
            style={[text.label.medium, styles.marketsLabelTimeAgoTextStyle]}
            accessibilityLabel={
              STRINGS.Markets.Markets_Label_TimeAgo_Text.accessibilityLabel
            }
          >
            {STRINGS.Markets.Markets_Label_TimeAgo_Text.label}
          </AppText>
          <AppText
            widgetId={'Markets_Label_TimeAgo_Text_2'}
            style={[text.label.medium, styles.marketsLabelTimeAgoText2Style]}
            accessibilityLabel={
              STRINGS.Markets.Markets_Label_TimeAgo_Text_2.accessibilityLabel
            }
          >
            {STRINGS.Markets.Markets_Label_TimeAgo_Text_2.label}
          </AppText>
          <AppText
            widgetId={'Markets_Label_TimeAgo_Text_3'}
            style={[text.label.medium, styles.marketsLabelTimeAgoText3Style]}
            accessibilityLabel={
              STRINGS.Markets.Markets_Label_TimeAgo_Text_3.accessibilityLabel
            }
          >
            {STRINGS.Markets.Markets_Label_TimeAgo_Text_3.label}
          </AppText>
          <AppColumn
            widgetId={'Markets_Container_Column_5'}
            style={styles.marketsContainerColumn5Style}
          >
            <AppText
              widgetId={'Markets_Label_TimeAgo_Text_4'}
              style={[text.label.medium, styles.marketsLabelTimeAgoText4Style]}
              accessibilityLabel={
                STRINGS.Markets.Markets_Label_TimeAgo_Text_4.accessibilityLabel
              }
            >
              {STRINGS.Markets.Markets_Label_TimeAgo_Text_4.label}
            </AppText>
          </AppColumn>
          <AppText
            widgetId={'Markets_Label_TimeAgo_Text_5'}
            style={[text.label.medium, styles.marketsLabelTimeAgoText5Style]}
            accessibilityLabel={
              STRINGS.Markets.Markets_Label_TimeAgo_Text_5.accessibilityLabel
            }
          >
            {STRINGS.Markets.Markets_Label_TimeAgo_Text_5.label}
          </AppText>
          <AppText
            widgetId={'Markets_Label_TimeAgo_Text_6'}
            style={[text.label.medium, styles.marketsLabelTimeAgoText6Style]}
            accessibilityLabel={
              STRINGS.Markets.Markets_Label_TimeAgo_Text_6.accessibilityLabel
            }
          >
            {STRINGS.Markets.Markets_Label_TimeAgo_Text_6.label}
          </AppText>
          <AppText
            widgetId={'Markets_Label_TimeAgo_Text_7'}
            style={[text.label.medium, styles.marketsLabelTimeAgoText7Style]}
            accessibilityLabel={
              STRINGS.Markets.Markets_Label_TimeAgo_Text_7.accessibilityLabel
            }
          >
            {STRINGS.Markets.Markets_Label_TimeAgo_Text_7.label}
          </AppText>
        </AppRow>
        <AppColumn
          widgetId={'Markets_Container_Column_6'}
          style={styles.marketsContainerColumn6Style}
        >
          <AppColumn
            widgetId={'Markets_Container_Column_7'}
            style={styles.marketsContainerColumn7Style}
          >
            <AppColumn
              widgetId={'Markets_Divider'}
              style={styles.marketsDividerStyle}
            />
            <AppColumn
              widgetId={'Markets_Divider_2'}
              style={styles.marketsDivider2Style}
            />
            <AppColumn
              widgetId={'Markets_Divider_3'}
              style={styles.marketsDivider3Style}
            />
            <AppColumn
              widgetId={'Markets_Divider_4'}
              style={styles.marketsDivider4Style}
            />
            <AppColumn
              widgetId={'Markets_Divider_5'}
              style={styles.marketsDivider5Style}
            />
          </AppColumn>
          <AppColumn
            widgetId={'Markets_Container_Column_8'}
            style={styles.marketsContainerColumn8Style}
          />
          <AppColumn
            widgetId={'Markets_Container_Column_9'}
            style={styles.marketsContainerColumn9Style}
          />
          <AppColumn
            widgetId={'Markets_Container_Column_10'}
            style={styles.marketsContainerColumn10Style}
          />
          <AppColumn
            widgetId={'Markets_Container_Column_11'}
            style={styles.marketsContainerColumn11Style}
          />
          <AppColumn
            widgetId={'Markets_Container_Column_12'}
            style={styles.marketsContainerColumn12Style}
          />
          <AppColumn
            widgetId={'Markets_Container_Column_13'}
            style={styles.marketsContainerColumn13Style}
          />
          <AppColumn
            widgetId={'Markets_Container_Column_14'}
            style={styles.marketsContainerColumn14Style}
          />
          <AppColumn
            widgetId={'Markets_Container_Column_15'}
            style={styles.marketsContainerColumn15Style}
          />
          <AppColumn
            widgetId={'Markets_Container_Column_16'}
            style={styles.marketsContainerColumn16Style}
          />
          <AppColumn
            widgetId={'Markets_Container_Column_17'}
            style={styles.marketsContainerColumn17Style}
          />
          <AppColumn
            widgetId={'Markets_Container_Column_18'}
            style={styles.marketsContainerColumn18Style}
          />
          <AppRow
            widgetId={'Markets_Container_Row_6'}
            spacing={space['2']}
            style={styles.marketsContainerRow6Style}
          >
            <AppColumn
              widgetId={'Markets_Container_Column_19'}
              style={sharedStyles.iphone15BlueContainerRow2}
            >
              <AppText
                widgetId={'Markets_Label_Price_Text_2'}
                numberOfLines={0}
                style={[text.label.medium, styles.marketsLabelPriceText2Style]}
                accessibilityLabel={
                  STRINGS.Markets.Markets_Label_Price_Text_2.accessibilityLabel
                }
              >
                {STRINGS.Markets.Markets_Label_Price_Text_2.label}
              </AppText>
              <AppButton
                widgetId={'Markets_Cta_Action_Button_2'}
                style={styles.marketsCtaActionButton2Style}
                textStyle={[
                  text.label.medium,
                  styles.marketsCtaActionButton2TextStyle,
                ]}
                label={STRINGS.Markets.Markets_Cta_Action_Button_2.label}
                accessibilityLabel={
                  STRINGS.Markets.Markets_Cta_Action_Button_2.accessibilityLabel
                }
              />
              <AppText
                widgetId={'Markets_Label_Price_Text_3'}
                numberOfLines={0}
                style={[text.label.medium, styles.marketsLabelPriceText3Style]}
                accessibilityLabel={
                  STRINGS.Markets.Markets_Label_Price_Text_3.accessibilityLabel
                }
              >
                {STRINGS.Markets.Markets_Label_Price_Text_3.label}
              </AppText>
              <AppText
                widgetId={'Markets_Label_Price_Text_4'}
                numberOfLines={0}
                style={[text.label.medium, styles.marketsLabelPriceText4Style]}
                accessibilityLabel={
                  STRINGS.Markets.Markets_Label_Price_Text_4.accessibilityLabel
                }
              >
                {STRINGS.Markets.Markets_Label_Price_Text_4.label}
              </AppText>
              <AppText
                widgetId={'Markets_Label_Price_Text_5'}
                numberOfLines={0}
                style={[text.label.medium, styles.marketsLabelPriceText5Style]}
                accessibilityLabel={
                  STRINGS.Markets.Markets_Label_Price_Text_5.accessibilityLabel
                }
              >
                {STRINGS.Markets.Markets_Label_Price_Text_5.label}
              </AppText>
            </AppColumn>
            <AppColumn
              widgetId={'Markets_Container_Column_20'}
              style={styles.marketsContainerColumn20Style}
            />
          </AppRow>
          <AppColumn
            widgetId={'Markets_Container_Column_21'}
            style={styles.marketsContainerColumn21Style}
          />
          <AppRow
            widgetId={'Markets_Container_Row_7'}
            spacing={space['2']}
            style={styles.marketsContainerRow7Style}
          >
            <AppText
              widgetId={'Markets_Label_Text_2'}
              style={[text.label.medium, styles.marketsLabelText2Style]}
              accessibilityLabel={
                STRINGS.Markets.Markets_Label_Text_2.accessibilityLabel
              }
            >
              {STRINGS.Markets.Markets_Label_Text_2.label}
            </AppText>
            <AppText
              widgetId={'Markets_Label_Text_3'}
              style={[text.label.medium, styles.marketsLabelText3Style]}
              accessibilityLabel={
                STRINGS.Markets.Markets_Label_Text_3.accessibilityLabel
              }
            >
              {STRINGS.Markets.Markets_Label_Text_3.label}
            </AppText>
            <AppText
              widgetId={'Markets_Label_Text_4'}
              style={[text.label.medium, styles.marketsLabelText4Style]}
              accessibilityLabel={
                STRINGS.Markets.Markets_Label_Text_4.accessibilityLabel
              }
            >
              {STRINGS.Markets.Markets_Label_Text_4.label}
            </AppText>
            <AppText
              widgetId={'Markets_Label_Text_5'}
              style={[text.label.medium, styles.marketsLabelText5Style]}
              accessibilityLabel={
                STRINGS.Markets.Markets_Label_Text_5.accessibilityLabel
              }
            >
              {STRINGS.Markets.Markets_Label_Text_5.label}
            </AppText>
            <AppText
              widgetId={'Markets_Label_Text_6'}
              style={[text.label.medium, styles.marketsLabelText6Style]}
              accessibilityLabel={
                STRINGS.Markets.Markets_Label_Text_6.accessibilityLabel
              }
            >
              {STRINGS.Markets.Markets_Label_Text_6.label}
            </AppText>
            <AppText
              widgetId={'Markets_Label_Text_7'}
              style={[text.label.medium, styles.marketsLabelText7Style]}
              accessibilityLabel={
                STRINGS.Markets.Markets_Label_Text_7.accessibilityLabel
              }
            >
              {STRINGS.Markets.Markets_Label_Text_7.label}
            </AppText>
            <AppText
              widgetId={'Markets_Label_Text_8'}
              style={[text.label.medium, styles.marketsLabelText8Style]}
              accessibilityLabel={
                STRINGS.Markets.Markets_Label_Text_8.accessibilityLabel
              }
            >
              {STRINGS.Markets.Markets_Label_Text_8.label}
            </AppText>
          </AppRow>
        </AppColumn>
        <AppColumn
          widgetId={'Markets_Container_Column_22'}
          style={styles.marketsContainerColumn22Style}
        />
        <AppRow
          widgetId={'Markets_Container_Row_8'}
          spacing={space['2']}
          style={styles.marketsContainerRow8Style}
        >
          <AppButton
            widgetId={'Markets_Cta_Sell_Button'}
            style={styles.marketsCtaSellButtonStyle}
            textStyle={[
              text.label.medium,
              sharedStyles.codeCtaContinueButtonText,
            ]}
            label={STRINGS.Markets.Markets_Cta_Sell_Button.label}
            accessibilityLabel={
              STRINGS.Markets.Markets_Cta_Sell_Button.accessibilityLabel
            }
          />
          <AppButton
            widgetId={'Markets_Cta_Buy_Button'}
            style={styles.marketsCtaBuyButtonStyle}
            textStyle={[
              text.label.medium,
              sharedStyles.codeCtaContinueButtonText,
            ]}
            label={STRINGS.Markets.Markets_Cta_Buy_Button.label}
            accessibilityLabel={
              STRINGS.Markets.Markets_Cta_Buy_Button.accessibilityLabel
            }
          />
        </AppRow>
      </AppStack>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  marketsContainerColumnStyle: {
    position: 'absolute',
    width: '89.3%',
    left: '5.3%',
    top: '69.3%',
    height: '64.4%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsLabelUserNameTextStyle: {
    lineHeight: 23,
    fontSize: 18,
    fontWeight: 500,
    color: '#000000',
    letterSpacing: -0.36,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    textAlign: 'left',
    width: 69,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsLabelSeeAllTextStyle: {
    fontWeight: 400,
    fontSize: 12,
    textAlign: 'left',
    letterSpacing: -0.24,
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    width: 42,
    color: 'rgba(0,0,0,0.5)',
    lineHeight: 15,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsLabelUserNameText3Style: {
    top: '19.1%',
    color: '#151521',
    fontWeight: 500,
    fontSize: 35,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    position: 'absolute',
    width: 149,
    lineHeight: 44,
    left: '5.3%',
    letterSpacing: -0.7000000000000001,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsContainerRow3Style: {
    justifyContent: 'space-between',
    position: 'absolute',
    width: '89.3%',
    alignItems: 'center',
    height: '5.5%',
    top: '28.2%',
    left: '5.3%',
    flexShrink: 1,
  },
  marketsContainerColumn4Style: {
    width: 121,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsLabelTextStyle: {
    color: '#151521',
    fontSize: 15,
    fontWeight: 500,
    textAlignVertical: 'center',
    lineHeight: 19,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    marginTop: 7,
    letterSpacing: -0.3,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsContainerRow5Style: {
    height: '2.5%',
    alignItems: 'center',
    top: '37.4%',
    width: '80%',
    position: 'absolute',
    left: '10.1%',
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  marketsLabelTimeAgoTextStyle: {
    width: 18,
    letterSpacing: -0.22,
    textAlign: 'left',
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    lineHeight: 14,
    color: '#a0a0a0',
    fontWeight: 400,
    fontSize: 11,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsLabelTimeAgoText2Style: {
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    width: 21,
    fontWeight: 400,
    textAlign: 'left',
    color: '#a0a0a0',
    letterSpacing: -0.22,
    lineHeight: 14,
    fontSize: 11,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsLabelTimeAgoText3Style: {
    letterSpacing: -0.22,
    width: 21,
    color: '#a0a0a0',
    textAlign: 'left',
    fontSize: 11,
    fontWeight: 400,
    lineHeight: 14,
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsContainerColumn5Style: {
    justifyContent: 'center',
    backgroundColor: '#bfb7fd',
    borderRadius: 8,
    alignItems: 'center',
    height: 20,
    flexShrink: 1,
  },
  marketsLabelTimeAgoText4Style: {
    letterSpacing: -0.22,
    width: 19,
    lineHeight: 14,
    textAlign: 'left',
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    color: '#151521',
    fontSize: 11,
    fontWeight: 400,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsLabelTimeAgoText5Style: {
    fontWeight: 400,
    letterSpacing: -0.22,
    color: '#a0a0a0',
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    fontSize: 11,
    width: 21,
    lineHeight: 14,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsLabelTimeAgoText6Style: {
    color: '#a0a0a0',
    letterSpacing: -0.22,
    lineHeight: 14,
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    fontWeight: 400,
    textAlign: 'left',
    fontSize: 11,
    width: 20,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsLabelTimeAgoText7Style: {
    letterSpacing: -0.22,
    lineHeight: 14,
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    width: 17,
    textAlign: 'left',
    fontSize: 11,
    fontWeight: 400,
    color: '#a0a0a0',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsContainerColumn6Style: {
    overflow: 'hidden',
    top: '42.4%',
    borderRadius: 23,
    position: 'absolute',
    height: '23.3%',
    width: '106.4%',
    left: '5.3%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsContainerColumn7Style: {
    alignItems: 'center',
    top: '4.8%',
    left: '15.8%',
    position: 'absolute',
    borderRadius: 32,
    width: '73.2%',
    height: '80.4%',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  marketsDividerStyle: {
    left: '0%',
    height: '2%',
    width: '100%',
    alignSelf: 'stretch',
    position: 'absolute',
    top: '0%',
    backgroundColor: '#d0d0d3',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsDivider2Style: {
    height: '2%',
    backgroundColor: '#151521',
    position: 'absolute',
    width: '100%',
    alignSelf: 'stretch',
    top: '25%',
    left: '0%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsDivider3Style: {
    height: '2%',
    left: '0%',
    position: 'absolute',
    backgroundColor: '#d0d0d3',
    alignSelf: 'stretch',
    width: '100%',
    top: '50%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsDivider4Style: {
    left: '0%',
    position: 'absolute',
    alignSelf: 'stretch',
    top: '75%',
    width: '100%',
    backgroundColor: '#d0d0d3',
    height: '2%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsDivider5Style: {
    top: '100%',
    alignSelf: 'stretch',
    height: '2%',
    backgroundColor: '#d0d0d3',
    left: '0%',
    width: '100%',
    position: 'absolute',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsContainerColumn8Style: {
    backgroundColor: '#fd6251',
    width: 8,
    top: '29.6%',
    height: 41,
    borderRadius: 23,
    left: '15.8%',
    position: 'absolute',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsContainerColumn9Style: {
    height: 34,
    backgroundColor: '#fdb8d7',
    top: '47.1%',
    width: 8,
    left: '22.8%',
    position: 'absolute',
    borderRadius: 23,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsContainerColumn10Style: {
    width: 8,
    left: '29.6%',
    height: 26,
    position: 'absolute',
    top: '65.1%',
    borderRadius: 23,
    backgroundColor: '#fdb8d7',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsContainerColumn11Style: {
    position: 'absolute',
    backgroundColor: '#fd6251',
    borderRadius: 23,
    width: 8,
    left: '36.6%',
    height: 16,
    top: '39.7%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsContainerColumn12Style: {
    top: '23.3%',
    width: 8,
    borderRadius: 23,
    backgroundColor: '#fd6251',
    height: 45,
    position: 'absolute',
    left: '43.4%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsContainerColumn13Style: {
    left: '50.4%',
    width: 8,
    backgroundColor: '#fdb8d7',
    borderRadius: 23,
    top: '39.7%',
    height: 35,
    position: 'absolute',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsContainerColumn14Style: {
    width: 8,
    backgroundColor: '#fd6251',
    top: '11.1%',
    height: 38,
    borderRadius: 23,
    position: 'absolute',
    left: '57.1%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsContainerColumn15Style: {
    top: '18.5%',
    backgroundColor: '#fd6251',
    left: '64.2%',
    position: 'absolute',
    borderRadius: 23,
    height: 17,
    width: 8,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsContainerColumn16Style: {
    backgroundColor: '#fdb8d7',
    position: 'absolute',
    left: '70.9%',
    top: '25.9%',
    borderRadius: 23,
    height: 30,
    width: 8,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsContainerColumn17Style: {
    width: 8,
    backgroundColor: '#fd6251',
    height: 46,
    top: '37%',
    borderRadius: 23,
    position: 'absolute',
    left: '77.9%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsContainerColumn18Style: {
    position: 'absolute',
    backgroundColor: '#fd6251',
    height: 53,
    left: '84.7%',
    width: 8,
    borderRadius: 23,
    top: '45%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsContainerRow6Style: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    left: '0%',
    position: 'absolute',
    width: '100%',
    top: '0%',
    alignItems: 'stretch',
    flexShrink: 1,
  },
  marketsLabelPriceText2Style: {
    color: '#a0a0a0',
    fontSize: 10,
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    letterSpacing: -0.2,
    fontWeight: 400,
    lineHeight: 13,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsCtaActionButton2Style: {
    paddingBottom: 0,
    height: 21,
    backgroundColor: '#bfb7fd',
    textAlign: 'left',
    borderRadius: 8,
    paddingRight: 0,
    paddingLeft: 0,
    lineHeight: 12.600000381469727,
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  marketsCtaActionButton2TextStyle: {
    fontSize: 10,
    fontWeight: 400,
    letterSpacing: -0.2,
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    color: '#151521',
  },
  marketsLabelPriceText3Style: {
    color: '#a0a0a0',
    fontSize: 10,
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    lineHeight: 13,
    fontWeight: 400,
    letterSpacing: -0.2,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsLabelPriceText4Style: {
    lineHeight: 13,
    letterSpacing: -0.2,
    fontSize: 10,
    color: '#a0a0a0',
    textAlign: 'left',
    fontWeight: 400,
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsLabelPriceText5Style: {
    textAlign: 'left',
    color: '#a0a0a0',
    lineHeight: 13,
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    fontWeight: 400,
    letterSpacing: -0.2,
    fontSize: 10,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsContainerColumn20Style: {
    width: 6,
    backgroundColor: '#d9d9d9',
    height: 17,
    borderRadius: 23,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsContainerColumn21Style: {
    top: '52.4%',
    alignSelf: 'flex-end',
    borderRadius: 23,
    backgroundColor: '#d9d9d9',
    left: '91.7%',
    position: 'absolute',
    width: 6,
    height: 17,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsContainerRow7Style: {
    justifyContent: 'space-between',
    height: '6.9%',
    position: 'absolute',
    left: '15.8%',
    alignSelf: 'center',
    top: '93.1%',
    width: '75.9%',
    alignItems: 'center',
    flexShrink: 1,
  },
  marketsLabelText2Style: {
    fontSize: 10,
    fontWeight: 400,
    width: 36,
    letterSpacing: -0.2,
    lineHeight: 13,
    color: '#a0a0a0',
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsLabelText3Style: {
    lineHeight: 13,
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    fontSize: 10,
    fontWeight: 400,
    color: '#a0a0a0',
    letterSpacing: -0.2,
    width: 33,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsLabelText4Style: {
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    width: 32,
    fontWeight: 400,
    lineHeight: 13,
    letterSpacing: -0.2,
    color: '#a0a0a0',
    textAlign: 'left',
    fontSize: 10,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsLabelText5Style: {
    textAlign: 'left',
    width: 32,
    lineHeight: 13,
    fontWeight: 400,
    color: '#a0a0a0',
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    fontSize: 10,
    letterSpacing: -0.2,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsLabelText6Style: {
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    lineHeight: 13,
    fontSize: 10,
    color: '#a0a0a0',
    width: 32,
    textAlign: 'left',
    fontWeight: 400,
    letterSpacing: -0.2,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsLabelText7Style: {
    width: 32,
    lineHeight: 13,
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    letterSpacing: -0.2,
    fontSize: 10,
    fontWeight: 400,
    color: '#a0a0a0',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsLabelText8Style: {
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    width: 34,
    fontSize: 10,
    letterSpacing: -0.2,
    lineHeight: 13,
    textAlign: 'left',
    color: '#a0a0a0',
    fontWeight: 400,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketsContainerColumn22Style: {
    top: '86.6%',
    borderTopRightRadius: 32,
    height: '13.4%',
    left: '0%',
    gradientColors: ['rgba(255,255,255,0)', '#ffffff'],
    gradientStart: { x: 0.5013333129488922, y: -0.17889907965863325 },
    gradientType: 'linear',
    gradientStops: [0, 0.8602848052978516],
    gradientEnd: { x: 0.4999999796450322, y: 0.999999977219501 },
    position: 'absolute',
    borderTopLeftRadius: 32,
    width: '100%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  marketsContainerRow8Style: {
    height: '6.2%',
    top: '91.4%',
    width: '89.3%',
    justifyContent: 'space-between',
    position: 'absolute',
    alignItems: 'stretch',
    left: '5.3%',
    flexShrink: 1,
  },
  marketsCtaSellButtonStyle: {
    textAlign: 'left',
    height: 50,
    paddingRight: 19,
    lineHeight: 17.639999389648438,
    backgroundColor: '#fd6251',
    flex: 1,
    paddingBottom: 14,
    borderRadius: 32,
    paddingLeft: 19,
    paddingTop: 14,
    width: '47.8%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  marketsCtaBuyButtonStyle: {
    paddingTop: 14,
    width: '47.8%',
    textAlign: 'left',
    backgroundColor: '#bfb7fd',
    borderRadius: 32,
    height: 50,
    paddingLeft: 19,
    paddingRight: 19,
    flex: 1,
    paddingBottom: 14,
    lineHeight: 17.639999389648438,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
});

export default Markets;

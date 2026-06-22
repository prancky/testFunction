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

import { color, imageSources, space, text } from '@/assets';

import { ASIconButton } from '@/components';

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

const UpcomingBills: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  const renderItem_UpcomingBills_List = ({ item }) => (
    <AppColumn
      widgetId={'UpcomingBills_Container_Column_3'}
      style={sharedStyles.bankAccountContainerColumn2}
    >
      <AppRow
        widgetId={'UpcomingBills_Container_Row_2'}
        spacing={12}
        style={styles.upcomingBillsContainerRow2Style}
      >
        <AppImage
          widgetId={'group1597884430'}
          source={item['group1597884430']}
          style={styles.group1597884430Style}
        />
        <AppText
          widgetId={'adobeXd'}
          style={[text.label.medium, styles.adobeXdStyle]}
          accessibilityLabel={STRINGS.UpcomingBills.adobeXd.accessibilityLabel}
        >
          {String(
            item['adobeXd'] ?? STRINGS.UpcomingBills.adobeXd.accessibilityLabel,
          )}
        </AppText>
      </AppRow>
      <AppText
        widgetId={'text'}
        numberOfLines={0}
        style={[text.label.medium, styles.textStyle]}
        accessibilityLabel={STRINGS.UpcomingBills.text.accessibilityLabel}
      >
        {String(item['text'] ?? STRINGS.UpcomingBills.text.accessibilityLabel)}
      </AppText>
      <AppRow
        widgetId={'UpcomingBills_Container_RowWrapper_Row'}
        spacing={space['2']}
        style={sharedStyles.bankAccountContainerRowWrapperRow}
      >
        <AppText
          widgetId={'aug192023'}
          numberOfLines={0}
          style={[text.label.medium, styles.aug192023Style]}
          accessibilityLabel={
            STRINGS.UpcomingBills.aug192023.accessibilityLabel
          }
        >
          {String(
            item['aug192023'] ??
              STRINGS.UpcomingBills.aug192023.accessibilityLabel,
          )}
        </AppText>
        <AppText
          widgetId={'Month'}
          style={[text.label.medium, styles.monthStyle]}
          accessibilityLabel={STRINGS.UpcomingBills.Month.accessibilityLabel}
        >
          {String(
            item['Month'] ?? STRINGS.UpcomingBills.Month.accessibilityLabel,
          )}
        </AppText>
        <AppText
          widgetId={'subscriptions'}
          style={[text.label.medium, styles.subscriptionsStyle]}
          accessibilityLabel={
            STRINGS.UpcomingBills.subscriptions.accessibilityLabel
          }
        >
          {String(
            item['subscriptions'] ??
              STRINGS.UpcomingBills.subscriptions.accessibilityLabel,
          )}
        </AppText>
      </AppRow>
      <AppButton
        widgetId={'UpcomingBills_Cta_Pay_Button'}
        style={styles.upcomingBillsCtaPayButtonStyle}
        textStyle={[
          text.label.medium,
          sharedStyles.iphone15BlueCtaActionButtonText,
        ]}
        label={STRINGS.UpcomingBills.UpcomingBills_Cta_Pay_Button.label}
        accessibilityLabel={
          STRINGS.UpcomingBills.UpcomingBills_Cta_Pay_Button.accessibilityLabel
        }
      />
    </AppColumn>
  );

  return (
    <AppContainer
      widgetId={'ASContainer-678405'}
      testID={'791450d5-02d3-4da7-beba-418ff2b56ca3'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'UpcomingBills_AppBar_SyntheticAppBar_AppBar'}
        style={sharedStyles.analyticsAppBarSyntheticAppBarAppBar}
      >
        <AppRow
          widgetId={'UpcomingBills_Container_AppBarCustomCentre_Row'}
          spacing={space['2']}
          style={sharedStyles.analyticsContainerAppBarCustomCentreRow}
        >
          <AppRow
            widgetId={'UpcomingBills_Container_Row'}
            spacing={space['2']}
            style={sharedStyles.myBalanceContainerRow}
          >
            <AppImage
              widgetId={'UpcomingBills_Image'}
              resizeMode={'cover'}
              source={imageSources.image__s0hgy}
              style={sharedStyles.iphone15BlueImage}
            />
            <AppText
              widgetId={'UpcomingBills_Title_HiEsaaa_Text'}
              numberOfLines={0}
              style={[
                text.label.medium,
                sharedStyles.myBalanceTitleHiEsaaaText,
              ]}
              accessibilityLabel={
                STRINGS.UpcomingBills.UpcomingBills_Title_HiEsaaa_Text
                  .accessibilityLabel
              }
            >
              {STRINGS.UpcomingBills.UpcomingBills_Title_HiEsaaa_Text.label}
            </AppText>
          </AppRow>
          <AppStack
            widgetId={'UpcomingBills_Container_Stack'}
            style={sharedStyles.iphone15BlueContainerStack}
          >
            <AppImage
              widgetId={'UpcomingBills_Image_2'}
              source={imageSources.image__nlgl}
              style={sharedStyles.iphone15BlueImage2}
            />
            <AppColumn
              widgetId={'UpcomingBills_Container_Column'}
              style={sharedStyles.iphone15BlueContainerColumn2}
            >
              <AppImage
                widgetId={'UpcomingBills_Image_3'}
                source={imageSources.image__tkac}
                resizeMode={'stretch'}
                style={sharedStyles.iphone15BlueImage3}
              />
              <AppImage
                widgetId={'UpcomingBills_Image_4'}
                source={imageSources.image__kxf9a}
                style={sharedStyles.iphone15BlueImage4}
              />
            </AppColumn>
            <AppImage
              widgetId={'UpcomingBills_Image_5'}
              source={imageSources.image__cc2}
              style={sharedStyles.iphone15BlueImage5}
            />
            <AppImage
              widgetId={'UpcomingBills_Image_6'}
              source={imageSources.image__qojb}
              style={sharedStyles.iphone15BlueImage6}
            />
          </AppStack>
        </AppRow>
      </AppAppBar>
      <AppImage
        widgetId={'UpcomingBills_Background_Image'}
        resizeMode={'cover'}
        source={imageSources.image__vyzr}
        style={sharedStyles.analyticsBackgroundImage}
      />
      <AppStack
        widgetId={'UpcomingBills_Container_UpcomingBills_Stack'}
        style={sharedStyles.analyticsContainerAnalyticsStack}
      >
        <AppColumn
          widgetId={'UpcomingBills_Container_Column_2'}
          style={styles.upcomingBillsContainerColumn2Style}
        >
          <AppListView
            widgetId={'UpcomingBills_List'}
            style={sharedStyles.bankAccountList}
            renderItem={renderItem_UpcomingBills_List}
            data={[
              {
                group1597884430:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/65d62402-b44e-406a-9035-412874fabc21-1_405.png',
                adobeXd: 'Adobe XD',
                Month: '1 month',
                aug192023: 'Aug 19, 2023',
                subscriptions: 'Subscriptions',
                text: '$126.02',
              },
              {
                group1597884430:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/f722c9ad-7fed-489f-a805-41ff3c6c1b38-1_419.png',
                adobeXd: 'Netflix',
                Month: '1 years',
                aug192023: 'Jul 08, 2023',
                subscriptions: 'Subscriptions',
                text: '$932.53',
              },
              {
                group1597884430:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/56ed186d-a213-462e-a678-3261ad161fc7-1_441.png',
                adobeXd: 'Line Messenger',
                Month: '1 month',
                aug192023: '07/05/2023',
                subscriptions: 'Subscriptions',
                text: '$21.00',
              },
            ]}
          />
        </AppColumn>
        <AppRow
          widgetId={'UpcomingBills_Container_Row_3'}
          spacing={20}
          style={styles.upcomingBillsContainerRow3Style}
        >
          <AppText
            widgetId={'UpcomingBills_Label_UserName_Text_2'}
            style={[
              text.label.medium,
              sharedStyles.transactionsLabelUserNameText2,
            ]}
            accessibilityLabel={
              STRINGS.UpcomingBills.UpcomingBills_Label_UserName_Text_2
                .accessibilityLabel
            }
          >
            {STRINGS.UpcomingBills.UpcomingBills_Label_UserName_Text_2.label}
          </AppText>
          <AppText
            widgetId={'UpcomingBills_Label_UserName_Text_3'}
            style={[
              text.label.medium,
              styles.upcomingBillsLabelUserNameText3Style,
            ]}
            accessibilityLabel={
              STRINGS.UpcomingBills.UpcomingBills_Label_UserName_Text_3
                .accessibilityLabel
            }
          >
            {STRINGS.UpcomingBills.UpcomingBills_Label_UserName_Text_3.label}
          </AppText>
          <AppText
            widgetId={'UpcomingBills_Label_UserName_Text_4'}
            style={[
              text.label.medium,
              sharedStyles.iphone15BlueLabelUserNameText3,
            ]}
            accessibilityLabel={
              STRINGS.UpcomingBills.UpcomingBills_Label_UserName_Text_4
                .accessibilityLabel
            }
          >
            {STRINGS.UpcomingBills.UpcomingBills_Label_UserName_Text_4.label}
          </AppText>
        </AppRow>
        <AppText
          widgetId={'UpcomingBills_Label_UserName_Text_5'}
          numberOfLines={2}
          style={[
            text.label.medium,
            styles.upcomingBillsLabelUserNameText5Style,
          ]}
          accessibilityLabel={
            STRINGS.UpcomingBills.UpcomingBills_Label_UserName_Text_5
              .accessibilityLabel
          }
        >
          {STRINGS.UpcomingBills.UpcomingBills_Label_UserName_Text_5.label}
        </AppText>
        <AppRow
          widgetId={'UpcomingBills_Container_Row_4'}
          spacing={5}
          style={styles.upcomingBillsContainerRow4Style}
        >
          <AppColumn
            widgetId={'UpcomingBills_Container_Column_4'}
            style={styles.upcomingBillsContainerColumn4Style}
          >
            <ASIconButton
              iconColor={color.brand.primary}
              icon={
                'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/0f034d71-8476-45e6-848e-1add1191adac-1_470.png'
              }
              size={45}
              name={'UpcomingBills_Icon'}
              style={styles.upcomingBillsIconStyle}
              containerStyle={styles.upcomingBillsIconContainerStyle}
              iconStyles={styles.upcomingBillsIconIconStyles}
              testId={'UpcomingBills_Icon'}
            />
          </AppColumn>
          <AppImage
            widgetId={'UpcomingBills_Image_8'}
            source={imageSources.image__84yb}
            style={sharedStyles.profileImage3}
          />
          <AppImage
            widgetId={'UpcomingBills_Image_9'}
            source={imageSources.image__fxfw}
            style={sharedStyles.profileImage3}
          />
        </AppRow>
      </AppStack>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  upcomingBillsContainerColumn2Style: {
    top: '39.2%',
    position: 'absolute',
    width: '89.3%',
    left: '5.3%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  upcomingBillsContainerRow2Style: {
    alignSelf: 'flex-start',
    width: 122,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  group1597884430Style: {
    aspectRatio: 1,
    width: 40,
    height: 40,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  adobeXdStyle: {
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    fontSize: 15,
    letterSpacing: -0.3,
    fontWeight: 500,
    color: '#111b21',
    lineHeight: 21,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  textStyle: {
    flex: 1,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    textAlign: 'right',
    alignSelf: 'flex-start',
    letterSpacing: -0.3,
    lineHeight: 21,
    color: '#000000',
    fontWeight: 500,
    fontSize: 15,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  aug192023Style: {
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    color: '#000000',
    fontSize: 13,
    letterSpacing: -0.26,
    flex: 1,
    fontWeight: 500,
    lineHeight: 18,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  monthStyle: {
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    letterSpacing: -0.26,
    fontWeight: 500,
    lineHeight: 18,
    fontSize: 13,
    color: '#000000',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  subscriptionsStyle: {
    lineHeight: 18,
    color: '#000000',
    fontSize: 13,
    letterSpacing: -0.26,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    fontWeight: 500,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  upcomingBillsCtaPayButtonStyle: {
    paddingLeft: 19,
    paddingRight: 19,
    width: 295,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 32,
    lineHeight: 15.119999885559082,
    height: 50,
    textAlign: 'left',
    backgroundColor: '#bfb7fd',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  upcomingBillsContainerRow3Style: {
    left: '5.3%',
    position: 'absolute',
    justifyContent: 'space-between',
    top: '19.1%',
    width: '67.7%',
    alignItems: 'stretch',
    flexShrink: 1,
  },
  upcomingBillsLabelUserNameText3Style: {
    color: '#151521',
    width: 88,
    fontWeight: 500,
    letterSpacing: -0.24,
    fontSize: 12,
    lineHeight: 15,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  upcomingBillsLabelUserNameText5Style: {
    fontSize: 35,
    lineHeight: 44,
    fontWeight: 500,
    left: '5.3%',
    width: '46.7%',
    color: '#151521',
    position: 'absolute',
    top: '24.6%',
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    letterSpacing: -0.7000000000000001,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  upcomingBillsContainerRow4Style: {
    left: '56%',
    position: 'absolute',
    height: '5.5%',
    width: '38.7%',
    top: '29.9%',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexShrink: 1,
  },
  upcomingBillsContainerColumn4Style: {
    backgroundColor: '#e9e6f7',
    borderRadius: 23,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    flexShrink: 1,
  },
  upcomingBillsIconStyle: {
    height: '100%',
    paddingRight: 0,
    paddingLeft: 0,
    width: '100%',
    paddingTop: 14,
    paddingBottom: 0,
  },
  upcomingBillsIconContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  upcomingBillsIconIconStyles: { flexGrow: 0, flexShrink: 0 },
});

export default UpcomingBills;

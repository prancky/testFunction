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

const Profile: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  const renderItem_Profile_List = ({ item }) => (
    <AppColumn
      widgetId={'Profile_Container_Column_2'}
      style={sharedStyles.bankAccountContainerColumn2}
    >
      <AppRow
        widgetId={'Profile_Container_RowWrapper_Row'}
        spacing={space['2']}
        style={sharedStyles.bankAccountContainerRowWrapperRow}
      >
        <AppRow
          widgetId={'Profile_Container_Row_3'}
          spacing={15}
          style={sharedStyles.analyticsContainerRow2}
        >
          <AppImage
            widgetId={'group63011'}
            source={item['group63011']}
            style={sharedStyles.group15978827261}
          />
          <AppColumn
            widgetId={'Profile_Container_Column_3'}
            style={sharedStyles.bankAccountContainerColumn3}
          >
            <AppText
              widgetId={'transaction3'}
              numberOfLines={0}
              style={[
                text.label.medium,
                sharedStyles.marketsLabelCurrentPriceText,
              ]}
              accessibilityLabel={
                STRINGS.Profile.transaction3.accessibilityLabel
              }
            >
              {String(
                item['transaction3'] ??
                  STRINGS.Profile.transaction3.accessibilityLabel,
              )}
            </AppText>
            <AppText
              widgetId={'jan2520232'}
              numberOfLines={0}
              style={[text.label.medium, sharedStyles.aug1920231]}
              accessibilityLabel={STRINGS.Profile.jan2520232.accessibilityLabel}
            >
              {String(
                item['jan2520232'] ??
                  STRINGS.Profile.jan2520232.accessibilityLabel,
              )}
            </AppText>
          </AppColumn>
        </AppRow>
        <AppText
          widgetId={'text3'}
          style={[text.label.medium, sharedStyles.text1]}
          accessibilityLabel={STRINGS.Profile.text3.accessibilityLabel}
        >
          {String(item['text3'] ?? STRINGS.Profile.text3.accessibilityLabel)}
        </AppText>
      </AppRow>
    </AppColumn>
  );

  return (
    <AppContainer
      widgetId={'ASContainer-335871'}
      testID={'b009c2e0-77c3-4e06-a1b0-6d45bfcada36'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'Profile_AppBar_SyntheticAppBar_AppBar'}
        style={sharedStyles.analyticsAppBarSyntheticAppBarAppBar}
      >
        <AppRow
          widgetId={'Profile_Container_AppBarCustomCentre_Row'}
          spacing={space['2']}
          style={sharedStyles.analyticsContainerAppBarCustomCentreRow}
        >
          <AppStack
            widgetId={'Profile_Container_Stack'}
            style={sharedStyles.analyticsContainerStack}
          >
            <AppImage
              widgetId={'Profile_Image'}
              source={imageSources.image__vklxx}
              resizeMode={'stretch'}
              style={sharedStyles.analyticsImage}
            />
            <AppImage
              widgetId={'Profile_Image_2'}
              source={imageSources.image__p4v7}
              style={sharedStyles.analyticsImage2}
            />
          </AppStack>
          <AppRow
            widgetId={'Profile_Container_Row'}
            spacing={5}
            style={sharedStyles.profileContainerRow}
          >
            <AppImage
              widgetId={'Profile_Image_3'}
              source={imageSources.image__t6i8v}
              style={sharedStyles.profileImage3}
            />
            <AppImage
              widgetId={'Profile_Image_4'}
              source={imageSources.image__qkyr}
              style={sharedStyles.profileImage3}
            />
          </AppRow>
        </AppRow>
      </AppAppBar>
      <AppImage
        widgetId={'Profile_Background_Image'}
        resizeMode={'cover'}
        source={imageSources.image__ae9jl}
        style={sharedStyles.analyticsBackgroundImage}
      />
      <AppStack
        widgetId={'Profile_Container_Profile_Stack'}
        style={sharedStyles.analyticsContainerAnalyticsStack}
      >
        <AppColumn
          widgetId={'Profile_Container_Column'}
          spacing={20}
          style={styles.profileContainerColumnStyle}
        >
          <AppRow
            widgetId={'Profile_Container_Row_2'}
            spacing={space['2']}
            style={sharedStyles.marketsContainerRow}
          >
            <AppText
              widgetId={'Profile_Label_UserName_Text'}
              numberOfLines={0}
              style={[text.label.medium, styles.profileLabelUserNameTextStyle]}
              accessibilityLabel={
                STRINGS.Profile.Profile_Label_UserName_Text.accessibilityLabel
              }
            >
              {STRINGS.Profile.Profile_Label_UserName_Text.label}
            </AppText>
            <AppText
              widgetId={'Profile_Label_SeeAll_Text'}
              style={[text.label.medium, styles.profileLabelSeeAllTextStyle]}
              accessibilityLabel={
                STRINGS.Profile.Profile_Label_SeeAll_Text.accessibilityLabel
              }
            >
              {STRINGS.Profile.Profile_Label_SeeAll_Text.label}
            </AppText>
          </AppRow>
          <AppListView
            widgetId={'Profile_List'}
            style={sharedStyles.bankAccountList}
            renderItem={renderItem_Profile_List}
            data={[
              {
                text: '-$92.00',
                group63011:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/952d522a-fd21-42b9-b5c4-38bbf16c8f05-1_1240.png',
                transaction3: 'Transaction',
                jan2520232: 'Jan 25, 2023',
              },
              {
                text: '$15.00',
                group63011:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/3cc8aa60-83d5-40a2-ba70-dca8f24790a9-1_1250.png',
                transaction3: 'Refund',
                jan2520232: 'Feb 29, 2023',
              },
              {
                text: '-$12.00',
                group63011:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/819e9fa7-e71c-439f-a0a7-238652217dd6-1_1263.png',
                transaction3: 'Transfered',
                jan2520232: 'Jul 20, 2023',
              },
              {
                text: '-$123.00',
                group63011:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/38ffae42-7d18-414a-84a1-8374737f65fd-1_1273.png',
                transaction3: 'Transfered',
                jan2520232: 'Aug 19, 2023',
              },
              {
                text: '-$234.00',
                group63011:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/782a14f2-faac-4dbe-9c5d-0bf186cd685f-1_1286.png',
                transaction3: 'Refund',
                jan2520232: 'May 08, 2023',
              },
              {
                text: '-$20.00',
                group63011:
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/ed608177-7af5-497c-b675-bfeed6e7352a-1_1300.png',
                transaction3: 'Transfered',
                jan2520232: 'Jan 16, 2023',
              },
            ]}
          />
        </AppColumn>
        <AppRow
          widgetId={'Profile_Container_Row_4'}
          spacing={space['2']}
          style={styles.profileContainerRow4Style}
        >
          <AppRow
            widgetId={'Profile_Container_Row_5'}
            spacing={15}
            style={styles.profileContainerRow5Style}
          >
            <AppImage
              widgetId={'Profile_Image_6'}
              source={imageSources.image__65iv}
              resizeMode={'cover'}
              style={sharedStyles.iphone15BlueImage14}
            />
            <AppColumn
              widgetId={'Profile_Container_Column_4'}
              spacing={8}
              style={sharedStyles.iphone15BlueContainerRow5}
            >
              <AppText
                widgetId={'Profile_Label_UserName_Text_3'}
                numberOfLines={0}
                style={[
                  text.label.medium,
                  styles.profileLabelUserNameText3Style,
                ]}
                accessibilityLabel={
                  STRINGS.Profile.Profile_Label_UserName_Text_3
                    .accessibilityLabel
                }
              >
                {STRINGS.Profile.Profile_Label_UserName_Text_3.label}
              </AppText>
              <AppText
                widgetId={'Profile_Label_Text'}
                numberOfLines={0}
                style={[text.label.medium, styles.profileLabelTextStyle]}
                accessibilityLabel={
                  STRINGS.Profile.Profile_Label_Text.accessibilityLabel
                }
              >
                {STRINGS.Profile.Profile_Label_Text.label}
              </AppText>
            </AppColumn>
          </AppRow>
          <AppImage
            widgetId={'Profile_Image_7'}
            source={imageSources.image__v38n}
            style={sharedStyles.iphone15BlueImage19}
          />
        </AppRow>
        <AppColumn
          widgetId={'Profile_Container_Column_5'}
          spacing={20}
          style={styles.profileContainerColumn5Style}
        >
          <AppText
            widgetId={'Profile_Label_UserName_Text_4'}
            style={[text.label.medium, styles.profileLabelUserNameText4Style]}
            accessibilityLabel={
              STRINGS.Profile.Profile_Label_UserName_Text_4.accessibilityLabel
            }
          >
            {STRINGS.Profile.Profile_Label_UserName_Text_4.label}
          </AppText>
          <AppRow
            widgetId={'Profile_Container_Row_6'}
            spacing={12}
            style={styles.profileContainerRow6Style}
          >
            <AppColumn
              widgetId={'Profile_Container_Large_Column'}
              style={styles.profileContainerLargeColumnStyle}
            >
              <AppStack
                widgetId={'Profile_Container_Large_Stack'}
                style={styles.profileContainerLargeStackStyle}
              >
                <AppImage
                  widgetId={'Profile_Image_8'}
                  source={imageSources.image__7xqv}
                  style={sharedStyles.bankAccountImage6}
                />
                <AppImage
                  widgetId={'Profile_Image_9'}
                  source={imageSources.image__dtym}
                  style={sharedStyles.bankAccountImage7}
                />
                <AppColumn
                  widgetId={'Profile_Container_Column_6'}
                  style={sharedStyles.bankAccountContainerColumn6}
                >
                  <AppImage
                    widgetId={'Profile_Image_10'}
                    resizeMode={'stretch'}
                    source={imageSources.image__olm4}
                    style={sharedStyles.bankAccountImage8}
                  />
                </AppColumn>
                <AppImage
                  widgetId={'Profile_Image_11'}
                  source={imageSources.image__hez0}
                  style={sharedStyles.bankAccountImage9}
                />
                <AppRow
                  widgetId={'Profile_Container_ExpireDate_Row'}
                  spacing={3.6913182735443115}
                  style={sharedStyles.bankAccountContainerExpireDateRow}
                >
                  <AppText
                    widgetId={'Profile_Label_UserName_Text_5'}
                    style={[
                      text.label.medium,
                      sharedStyles.bankAccountLabelUserNameText3,
                    ]}
                    accessibilityLabel={
                      STRINGS.Profile.Profile_Label_UserName_Text_5
                        .accessibilityLabel
                    }
                  >
                    {STRINGS.Profile.Profile_Label_UserName_Text_5.label}
                  </AppText>
                  <AppText
                    widgetId={'Profile_Label_Text_2'}
                    style={[
                      text.label.medium,
                      sharedStyles.bankAccountLabelText,
                    ]}
                    accessibilityLabel={
                      STRINGS.Profile.Profile_Label_Text_2.accessibilityLabel
                    }
                  >
                    {STRINGS.Profile.Profile_Label_Text_2.label}
                  </AppText>
                </AppRow>
                <AppText
                  widgetId={'Profile_Label_UserName_Text_6'}
                  style={[
                    text.label.medium,
                    styles.profileLabelUserNameText6Style,
                  ]}
                  accessibilityLabel={
                    STRINGS.Profile.Profile_Label_UserName_Text_6
                      .accessibilityLabel
                  }
                >
                  {STRINGS.Profile.Profile_Label_UserName_Text_6.label}
                </AppText>
                <AppText
                  widgetId={'Profile_Label_Text_3'}
                  style={[
                    text.label.medium,
                    sharedStyles.bankAccountLabelText2,
                  ]}
                  accessibilityLabel={
                    STRINGS.Profile.Profile_Label_Text_3.accessibilityLabel
                  }
                >
                  {STRINGS.Profile.Profile_Label_Text_3.label}
                </AppText>
                <AppImage
                  widgetId={'Profile_Image_12'}
                  source={imageSources.image__760se}
                  style={sharedStyles.bankAccountImage10}
                />
              </AppStack>
            </AppColumn>
            <AppColumn
              widgetId={'Profile_Container_Large_Column_2'}
              style={styles.profileContainerLargeColumn2Style}
            >
              <AppStack
                widgetId={'Profile_Container_Large_Stack_2'}
                style={styles.profileContainerLargeStack2Style}
              >
                <AppImage
                  widgetId={'Profile_Image_13'}
                  source={imageSources.image__p2le0}
                  style={sharedStyles.bankAccountImage6}
                />
                <AppImage
                  widgetId={'Profile_Image_14'}
                  source={imageSources.image__cyfu}
                  style={sharedStyles.bankAccountImage7}
                />
                <AppColumn
                  widgetId={'Profile_Container_Column_7'}
                  style={sharedStyles.bankAccountContainerColumn6}
                >
                  <AppImage
                    widgetId={'Profile_Image_15'}
                    resizeMode={'stretch'}
                    source={imageSources.image__wgkw}
                    style={sharedStyles.bankAccountImage8}
                  />
                </AppColumn>
                <AppImage
                  widgetId={'Profile_Image_16'}
                  source={imageSources.image__84lrb}
                  style={sharedStyles.bankAccountImage9}
                />
                <AppRow
                  widgetId={'Profile_Container_ExpireDate_Row_2'}
                  spacing={3.6913182735443115}
                  style={sharedStyles.bankAccountContainerExpireDateRow}
                >
                  <AppText
                    widgetId={'Profile_Label_UserName_Text_7'}
                    style={[
                      text.label.medium,
                      sharedStyles.bankAccountLabelUserNameText3,
                    ]}
                    accessibilityLabel={
                      STRINGS.Profile.Profile_Label_UserName_Text_7
                        .accessibilityLabel
                    }
                  >
                    {STRINGS.Profile.Profile_Label_UserName_Text_7.label}
                  </AppText>
                  <AppText
                    widgetId={'Profile_Label_Text_4'}
                    style={[
                      text.label.medium,
                      sharedStyles.bankAccountLabelText,
                    ]}
                    accessibilityLabel={
                      STRINGS.Profile.Profile_Label_Text_4.accessibilityLabel
                    }
                  >
                    {STRINGS.Profile.Profile_Label_Text_4.label}
                  </AppText>
                </AppRow>
                <AppText
                  widgetId={'Profile_Label_UserName_Text_8'}
                  style={[
                    text.label.medium,
                    styles.profileLabelUserNameText8Style,
                  ]}
                  accessibilityLabel={
                    STRINGS.Profile.Profile_Label_UserName_Text_8
                      .accessibilityLabel
                  }
                >
                  {STRINGS.Profile.Profile_Label_UserName_Text_8.label}
                </AppText>
                <AppText
                  widgetId={'Profile_Label_Text_5'}
                  style={[text.label.medium, styles.profileLabelText5Style]}
                  accessibilityLabel={
                    STRINGS.Profile.Profile_Label_Text_5.accessibilityLabel
                  }
                >
                  {STRINGS.Profile.Profile_Label_Text_5.label}
                </AppText>
                <AppImage
                  widgetId={'Profile_Image_17'}
                  source={imageSources.image__x4ug}
                  style={sharedStyles.bankAccountImage10}
                />
              </AppStack>
            </AppColumn>
          </AppRow>
        </AppColumn>
        <AppColumn
          widgetId={'Profile_Container_Column_8'}
          style={sharedStyles.analyticsContainerColumn5}
        >
          <AppListTile
            widgetId={'Profile_Item_ListItem'}
            trailing={
              'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/421f6060-73cf-4f2a-90a9-93b4664ab00d-1_1426.png'
            }
            titleStyle={{
              color: '#151521',
              fontSize: 35,
              textAlign: 'left',
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
              lineHeight: 44.099998474121094,
              letterSpacing: -0.7000000000000001,
            }}
            style={sharedStyles.analyticsItemListItem}
            title={STRINGS.Profile.Profile_Item_ListItem.title}
          />
        </AppColumn>
      </AppStack>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  profileContainerColumnStyle: {
    position: 'absolute',
    top: '69.6%',
    height: '64.4%',
    left: '5.3%',
    width: '89.3%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  profileLabelUserNameTextStyle: {
    fontWeight: 500,
    fontSize: 18,
    color: '#000000',
    lineHeight: 23,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    flex: 1,
    letterSpacing: -0.36,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  profileLabelSeeAllTextStyle: {
    textAlign: 'right',
    lineHeight: 15,
    letterSpacing: -0.24,
    color: 'rgba(0,0,0,0.5)',
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    fontWeight: 400,
    fontSize: 12,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  profileContainerRow4Style: {
    height: '6.2%',
    alignItems: 'center',
    top: '28.2%',
    position: 'absolute',
    width: '89.3%',
    left: '5.3%',
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  profileContainerRow5Style: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  profileLabelUserNameText3Style: {
    alignSelf: 'flex-start',
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    fontWeight: 500,
    letterSpacing: -0.3,
    lineHeight: 19,
    fontSize: 15,
    color: '#151521',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  profileLabelTextStyle: {
    lineHeight: 15,
    color: 'rgba(21,21,33,0.5)',
    fontWeight: 400,
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    fontSize: 12,
    letterSpacing: -0.24,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  profileContainerColumn5Style: {
    width: '156.3%',
    left: '5.3%',
    height: '27.8%',
    position: 'absolute',
    top: '38.1%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  profileLabelUserNameText4Style: {
    letterSpacing: -0.36,
    lineHeight: 23,
    width: 99,
    fontWeight: 500,
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    alignSelf: 'flex-start',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  profileContainerRow6Style: {
    width: 586,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  profileContainerLargeColumnStyle: {
    minHeight: 183,
    overflow: 'hidden',
    width: 287,
    borderRadius: 18,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  profileContainerLargeStackStyle: {
    height: 185,
    alignSelf: 'stretch',
    shadowColor: 'rgba(17,54,129,0.08)',
    overflow: 'hidden',
    backgroundColor: '#fdb8d7',
    shadowSpread: 11.073954582214355,
    borderRadius: 17,
    shadowRadius: 59.061092376708984,
    position: 'relative',
    shadowOffset: { width: 9.22829532623291, height: 36.91318130493164 },
  },
  profileLabelUserNameText6Style: {
    top: '19.5%',
    fontFamily: 'Montserrat-600-normal',
    position: 'absolute',
    fontSize: 12.041666030883789,
    textAlignVertical: 'center',
    color: '#111b21',
    fontWeight: 600,
    lineHeight: 15,
    left: '36.2%',
    letterSpacing: -0.2408333206176758,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  profileContainerLargeColumn2Style: {
    overflow: 'hidden',
    borderRadius: 18,
    minHeight: 183,
    width: 287,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  profileContainerLargeStack2Style: {
    height: 185,
    shadowColor: 'rgba(17,54,129,0.08)',
    shadowSpread: 11.073954582214355,
    shadowRadius: 59.061092376708984,
    backgroundColor: '#bfb7fd',
    borderRadius: 17,
    overflow: 'hidden',
    alignSelf: 'stretch',
    position: 'relative',
    shadowOffset: { width: 9.22829532623291, height: 36.91318130493164 },
  },
  profileLabelUserNameText8Style: {
    fontFamily: 'Montserrat-600-normal',
    fontWeight: 600,
    letterSpacing: 0.36124998092651367,
    left: '37.6%',
    position: 'absolute',
    top: '19.5%',
    fontSize: 12.041666030883789,
    lineHeight: 15,
    color: '#111b21',
    textAlignVertical: 'center',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  profileLabelText5Style: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat-500-normal',
    color: '#111b21',
    position: 'absolute',
    width: 202,
    fontWeight: 500,
    top: '42.8%',
    left: '16.7%',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
});

export default Profile;

import React from 'react';
import {
  AppAppBar,
  AppButton,
  AppColumn,
  AppContainer,
  AppImage,
  AppRow,
  AppStack,
  AppText,
} from '@/components/shared';
import { useNavigation } from '@react-navigation/native';

import { imageSources, space, text } from '@/assets';

import { StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const Mybalance: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-234222'}
      testID={'a586eceb-a043-4bb3-bc4a-9be250938d65'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'MyBalance_AppBar_SyntheticAppBar_AppBar'}
        style={sharedStyles.analyticsAppBarSyntheticAppBarAppBar}
      >
        <AppRow
          widgetId={'MyBalance_Container_AppBarCustomCentre_Row'}
          spacing={space['2']}
          style={sharedStyles.analyticsContainerAppBarCustomCentreRow}
        >
          <AppRow
            widgetId={'MyBalance_Container_Row'}
            spacing={space['2']}
            style={sharedStyles.myBalanceContainerRow}
          >
            <AppImage
              widgetId={'MyBalance_Image'}
              resizeMode={'cover'}
              source={imageSources.image__hdpqf}
              style={sharedStyles.iphone15BlueImage}
            />
            <AppText
              widgetId={'MyBalance_Title_HiEsaaa_Text'}
              numberOfLines={0}
              style={[
                text.label.medium,
                sharedStyles.myBalanceTitleHiEsaaaText,
              ]}
              accessibilityLabel={
                STRINGS.Mybalance.MyBalance_Title_HiEsaaa_Text
                  .accessibilityLabel
              }
            >
              {STRINGS.Mybalance.MyBalance_Title_HiEsaaa_Text.label}
            </AppText>
          </AppRow>
          <AppStack
            widgetId={'MyBalance_Container_Stack'}
            style={sharedStyles.iphone15BlueContainerStack}
          >
            <AppImage
              widgetId={'MyBalance_Image_2'}
              source={imageSources.image__9435q}
              style={sharedStyles.iphone15BlueImage2}
            />
            <AppColumn
              widgetId={'MyBalance_Container_Column'}
              style={sharedStyles.iphone15BlueContainerColumn2}
            >
              <AppImage
                widgetId={'MyBalance_Image_3'}
                resizeMode={'stretch'}
                source={imageSources.image__qsc1}
                style={sharedStyles.iphone15BlueImage3}
              />
              <AppImage
                widgetId={'MyBalance_Image_4'}
                source={imageSources.image__09fy}
                style={sharedStyles.iphone15BlueImage4}
              />
            </AppColumn>
            <AppImage
              widgetId={'MyBalance_Image_5'}
              source={imageSources.image__6gw6e}
              style={sharedStyles.iphone15BlueImage5}
            />
            <AppImage
              widgetId={'MyBalance_Image_6'}
              source={imageSources.image__lnad}
              style={sharedStyles.iphone15BlueImage6}
            />
          </AppStack>
        </AppRow>
      </AppAppBar>
      <AppImage
        widgetId={'MyBalance_Background_Image'}
        resizeMode={'cover'}
        source={imageSources.image__udjta}
        style={sharedStyles.analyticsBackgroundImage}
      />
      <AppStack
        widgetId={'MyBalance_Container_MyBalance_Stack'}
        style={sharedStyles.analyticsContainerAnalyticsStack}
      >
        <AppRow
          widgetId={'MyBalance_Container_Row_2'}
          spacing={20}
          style={sharedStyles.iphone15BlueContainerRow3}
        >
          <AppText
            widgetId={'MyBalance_Label_UserName_Text'}
            style={[
              text.label.medium,
              sharedStyles.iphone15BlueLabelUserNameText,
            ]}
            accessibilityLabel={
              STRINGS.Mybalance.MyBalance_Label_UserName_Text.accessibilityLabel
            }
          >
            {STRINGS.Mybalance.MyBalance_Label_UserName_Text.label}
          </AppText>
          <AppText
            widgetId={'MyBalance_Label_UserName_Text_2'}
            style={[
              text.label.medium,
              sharedStyles.iphone15BlueLabelUserNameText2,
            ]}
            accessibilityLabel={
              STRINGS.Mybalance.MyBalance_Label_UserName_Text_2
                .accessibilityLabel
            }
          >
            {STRINGS.Mybalance.MyBalance_Label_UserName_Text_2.label}
          </AppText>
          <AppText
            widgetId={'MyBalance_Label_UserName_Text_3'}
            style={[
              text.label.medium,
              sharedStyles.iphone15BlueLabelUserNameText3,
            ]}
            accessibilityLabel={
              STRINGS.Mybalance.MyBalance_Label_UserName_Text_3
                .accessibilityLabel
            }
          >
            {STRINGS.Mybalance.MyBalance_Label_UserName_Text_3.label}
          </AppText>
        </AppRow>
        <AppRow
          widgetId={'MyBalance_Container_Row_3'}
          spacing={10}
          style={sharedStyles.iphone15BlueContainerRow4}
        >
          <AppColumn
            widgetId={'MyBalance_Container_Column_2'}
            spacing={10}
            style={sharedStyles.iphone15BlueContainerColumn3}
          >
            <AppColumn
              widgetId={'MyBalance_Container_Column_3'}
              style={sharedStyles.iphone15BlueContainerColumn4}
            >
              <AppRow
                widgetId={'MyBalance_Container_Row_4'}
                spacing={13}
                style={sharedStyles.iphone15BlueContainerRow5}
              >
                <AppImage
                  widgetId={'MyBalance_Image_7'}
                  source={imageSources.image__5gna}
                  style={sharedStyles.iphone15BlueImage7}
                />
                <AppText
                  widgetId={'MyBalance_Label_UserName_Text_4'}
                  style={[
                    text.label.medium,
                    sharedStyles.iphone15BlueLabelUserNameText4,
                  ]}
                  accessibilityLabel={
                    STRINGS.Mybalance.MyBalance_Label_UserName_Text_4
                      .accessibilityLabel
                  }
                >
                  {STRINGS.Mybalance.MyBalance_Label_UserName_Text_4.label}
                </AppText>
              </AppRow>
              <AppImage
                widgetId={'MyBalance_Image_8'}
                source={imageSources.image__p9plc}
                style={sharedStyles.iphone15BlueImage10}
              />
            </AppColumn>
          </AppColumn>
          <AppColumn
            widgetId={'MyBalance_Container_Column_4'}
            spacing={10}
            style={sharedStyles.iphone15BlueContainerColumn5}
          >
            <AppColumn
              widgetId={'MyBalance_Container_Column_5'}
              style={sharedStyles.iphone15BlueContainerColumn6}
            >
              <AppRow
                widgetId={'MyBalance_Container_Row_5'}
                spacing={13}
                style={sharedStyles.iphone15BlueContainerRow5}
              >
                <AppImage
                  widgetId={'MyBalance_Image_9'}
                  source={imageSources.image__2zto}
                  style={sharedStyles.iphone15BlueImage7}
                />
                <AppText
                  widgetId={'MyBalance_Label_UserName_Text_5'}
                  style={[
                    text.label.medium,
                    sharedStyles.iphone15BlueLabelUserNameText5,
                  ]}
                  accessibilityLabel={
                    STRINGS.Mybalance.MyBalance_Label_UserName_Text_5
                      .accessibilityLabel
                  }
                >
                  {STRINGS.Mybalance.MyBalance_Label_UserName_Text_5.label}
                </AppText>
              </AppRow>
              <AppImage
                widgetId={'MyBalance_Image_10'}
                source={imageSources.image__3c5i}
                style={sharedStyles.iphone15BlueImage10}
              />
            </AppColumn>
          </AppColumn>
          <AppColumn
            widgetId={'MyBalance_Container_Column_6'}
            spacing={10}
            style={sharedStyles.iphone15BlueContainerColumn7}
          >
            <AppColumn
              widgetId={'MyBalance_Container_Column_7'}
              style={sharedStyles.iphone15BlueContainerColumn8}
            >
              <AppRow
                widgetId={'MyBalance_Container_Row_6'}
                scrollable={true}
                spacing={15}
                style={sharedStyles.iphone15BlueContainerRow5}
              >
                <AppColumn
                  widgetId={'MyBalance_Divider'}
                  style={sharedStyles.iphone15BlueDivider}
                />
                <AppText
                  widgetId={'MyBalance_Label_UserName_Text_6'}
                  style={[
                    text.label.medium,
                    sharedStyles.iphone15BlueLabelUserNameText6,
                  ]}
                  accessibilityLabel={
                    STRINGS.Mybalance.MyBalance_Label_UserName_Text_6
                      .accessibilityLabel
                  }
                >
                  {STRINGS.Mybalance.MyBalance_Label_UserName_Text_6.label}
                </AppText>
              </AppRow>
              <AppColumn
                widgetId={'MyBalance_Divider_2'}
                style={sharedStyles.iphone15BlueDivider2}
              />
            </AppColumn>
          </AppColumn>
        </AppRow>
        <AppRow
          widgetId={'MyBalance_Container_Row_7'}
          spacing={space['2']}
          style={sharedStyles.iphone15BlueContainerRow8}
        >
          <AppColumn
            widgetId={'MyBalance_Container_Column_8'}
            spacing={10}
            style={sharedStyles.analyticsContainerRow2}
          >
            <AppText
              widgetId={'MyBalance_Label_UserName_Text_7'}
              numberOfLines={0}
              style={[
                text.label.medium,
                sharedStyles.iphone15BlueLabelUserNameText7,
              ]}
              accessibilityLabel={
                STRINGS.Mybalance.MyBalance_Label_UserName_Text_7
                  .accessibilityLabel
              }
            >
              {STRINGS.Mybalance.MyBalance_Label_UserName_Text_7.label}
            </AppText>
            <AppRow
              widgetId={'MyBalance_Container_Row_8'}
              spacing={10}
              style={sharedStyles.iphone15BlueContainerRow9}
            >
              <AppText
                widgetId={'MyBalance_Label_Price_Text'}
                numberOfLines={0}
                style={[
                  text.label.medium,
                  sharedStyles.iphone15BlueLabelPriceText,
                ]}
                accessibilityLabel={
                  STRINGS.Mybalance.MyBalance_Label_Price_Text
                    .accessibilityLabel
                }
              >
                {STRINGS.Mybalance.MyBalance_Label_Price_Text.label}
              </AppText>
              <AppButton
                widgetId={'MyBalance_Cta_Action_Button'}
                style={sharedStyles.iphone15BlueCtaActionButton}
                textStyle={[
                  text.label.medium,
                  sharedStyles.iphone15BlueCtaActionButtonText,
                ]}
                label={STRINGS.Mybalance.MyBalance_Cta_Action_Button.label}
                accessibilityLabel={
                  STRINGS.Mybalance.MyBalance_Cta_Action_Button
                    .accessibilityLabel
                }
              />
            </AppRow>
          </AppColumn>
          <AppColumn
            widgetId={'MyBalance_Container_Column_9'}
            style={sharedStyles.iphone15BlueContainerColumn10}
          >
            <AppRow
              widgetId={'MyBalance_Container_Row_9'}
              spacing={space['2']}
              style={sharedStyles.iphone15BlueContainerRow10}
            >
              <AppImage
                widgetId={'MyBalance_Image_11'}
                resizeMode={'cover'}
                source={imageSources.image__8biw7}
                style={sharedStyles.iphone15BlueImage11}
              />
              <AppImage
                widgetId={'MyBalance_Image_12'}
                source={imageSources.image__5ggv}
                style={sharedStyles.iphone15BlueImage12}
              />
            </AppRow>
          </AppColumn>
        </AppRow>
        <AppColumn
          widgetId={'MyBalance_Container_Column_10'}
          spacing={20}
          style={sharedStyles.iphone15BlueContainerColumn11}
        >
          <AppText
            widgetId={'MyBalance_Label_TransferList_Text'}
            style={[
              text.label.medium,
              sharedStyles.iphone15BlueLabelTransferListText,
            ]}
            accessibilityLabel={
              STRINGS.Mybalance.MyBalance_Label_TransferList_Text
                .accessibilityLabel
            }
          >
            {STRINGS.Mybalance.MyBalance_Label_TransferList_Text.label}
          </AppText>
          <AppRow
            widgetId={'MyBalance_Container_Row_10'}
            spacing={10}
            style={sharedStyles.iphone15BlueContainerRow11}
          >
            <AppImage
              widgetId={'MyBalance_Image_13'}
              source={imageSources.image__t3jr}
              style={sharedStyles.iphone15BlueImage13}
            />
            <AppImage
              widgetId={'MyBalance_Image_14'}
              source={imageSources.image__eq0}
              resizeMode={'cover'}
              style={sharedStyles.iphone15BlueImage14}
            />
            <AppImage
              widgetId={'MyBalance_Image_15'}
              source={imageSources.image__fmnbl}
              resizeMode={'cover'}
              style={sharedStyles.iphone15BlueImage14}
            />
            <AppImage
              widgetId={'MyBalance_Image_16'}
              resizeMode={'cover'}
              source={imageSources.image__z428n}
              style={sharedStyles.iphone15BlueImage14}
            />
            <AppImage
              widgetId={'MyBalance_Image_17'}
              source={imageSources.image__grmt}
              resizeMode={'cover'}
              style={sharedStyles.iphone15BlueImage14}
            />
            <AppImage
              widgetId={'MyBalance_Image_18'}
              resizeMode={'cover'}
              source={imageSources.image__ldvk}
              style={sharedStyles.iphone15BlueImage14}
            />
          </AppRow>
        </AppColumn>
        <AppColumn
          widgetId={'MyBalance_Container_Column_11'}
          spacing={24}
          style={sharedStyles.iphone15BlueContainerColumn12}
        >
          <AppRow
            widgetId={'MyBalance_Container_Row_11'}
            spacing={space['2']}
            style={sharedStyles.iphone15BlueContainerRow12}
          >
            <AppColumn
              widgetId={'MyBalance_Container_Column_12'}
              spacing={10}
              style={sharedStyles.analyticsContainerRow2}
            >
              <AppText
                widgetId={'MyBalance_Label_FinancialHealth_Text'}
                numberOfLines={0}
                style={[
                  text.label.medium,
                  sharedStyles.iphone15BlueLabelFinancialHealthText,
                ]}
                accessibilityLabel={
                  STRINGS.Mybalance.MyBalance_Label_FinancialHealth_Text
                    .accessibilityLabel
                }
              >
                {STRINGS.Mybalance.MyBalance_Label_FinancialHealth_Text.label}
              </AppText>
              <AppText
                widgetId={'MyBalance_Label_Latest7Days_Text'}
                numberOfLines={0}
                style={[
                  text.label.medium,
                  sharedStyles.iphone15BlueLabelLatest7DaysText,
                ]}
                accessibilityLabel={
                  STRINGS.Mybalance.MyBalance_Label_Latest7Days_Text
                    .accessibilityLabel
                }
              >
                {STRINGS.Mybalance.MyBalance_Label_Latest7Days_Text.label}
              </AppText>
            </AppColumn>
            <AppImage
              widgetId={'MyBalance_Image_19'}
              source={imageSources.image__olus}
              style={sharedStyles.iphone15BlueImage19}
            />
          </AppRow>
          <AppColumn
            widgetId={'MyBalance_Container_Column_13'}
            style={sharedStyles.iphone15BlueContainerColumn14}
          >
            <AppRow
              widgetId={'MyBalance_Container_Row_12'}
              spacing={17}
              style={sharedStyles.iphone15BlueContainerRow13}
            >
              <AppColumn
                widgetId={'MyBalance_Container_Column_14'}
                spacing={12}
                style={sharedStyles.iphone15BlueContainerColumn15}
              >
                <AppColumn
                  widgetId={'MyBalance_Container_Column_15'}
                  spacing={12}
                  style={sharedStyles.iphone15BlueContainerColumn16}
                >
                  <AppColumn
                    widgetId={'MyBalance_Divider_3'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_4'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_5'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_6'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_7'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_8'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_9'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_10'}
                    style={styles.myBalanceDivider10Style}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_11'}
                    style={styles.myBalanceDivider11Style}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_12'}
                    style={styles.myBalanceDivider12Style}
                  />
                </AppColumn>
                <AppText
                  widgetId={'MyBalance_Label_UserName_Text_8'}
                  style={[
                    text.label.medium,
                    sharedStyles.iphone15BlueLabelUserNameText8,
                  ]}
                  accessibilityLabel={
                    STRINGS.Mybalance.MyBalance_Label_UserName_Text_8
                      .accessibilityLabel
                  }
                >
                  {STRINGS.Mybalance.MyBalance_Label_UserName_Text_8.label}
                </AppText>
              </AppColumn>
              <AppColumn
                widgetId={'MyBalance_Container_Column_16'}
                spacing={12}
                style={sharedStyles.iphone15BlueContainerColumn15}
              >
                <AppColumn
                  widgetId={'MyBalance_Container_Column_17'}
                  spacing={12}
                  style={sharedStyles.iphone15BlueContainerColumn16}
                >
                  <AppColumn
                    widgetId={'MyBalance_Divider_13'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_14'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_15'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_16'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_17'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_18'}
                    style={sharedStyles.iphone15BlueDivider18}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_19'}
                    style={sharedStyles.iphone15BlueDivider18}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_20'}
                    style={sharedStyles.iphone15BlueDivider18}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_21'}
                    style={sharedStyles.iphone15BlueDivider18}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_22'}
                    style={sharedStyles.iphone15BlueDivider18}
                  />
                </AppColumn>
                <AppText
                  widgetId={'MyBalance_Label_UserName_Text_9'}
                  style={[
                    text.label.medium,
                    sharedStyles.iphone15BlueLabelUserNameText9,
                  ]}
                  accessibilityLabel={
                    STRINGS.Mybalance.MyBalance_Label_UserName_Text_9
                      .accessibilityLabel
                  }
                >
                  {STRINGS.Mybalance.MyBalance_Label_UserName_Text_9.label}
                </AppText>
              </AppColumn>
              <AppColumn
                widgetId={'MyBalance_Container_Column_18'}
                spacing={12}
                style={sharedStyles.iphone15BlueContainerColumn15}
              >
                <AppColumn
                  widgetId={'MyBalance_Container_Column_19'}
                  spacing={12}
                  style={sharedStyles.iphone15BlueContainerColumn16}
                >
                  <AppColumn
                    widgetId={'MyBalance_Divider_23'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_24'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_25'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_26'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_27'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_28'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_29'}
                    style={styles.myBalanceDivider29Style}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_30'}
                    style={styles.myBalanceDivider30Style}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_31'}
                    style={styles.myBalanceDivider31Style}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_32'}
                    style={styles.myBalanceDivider32Style}
                  />
                </AppColumn>
                <AppText
                  widgetId={'MyBalance_Label_UserName_Text_10'}
                  style={[
                    text.label.medium,
                    sharedStyles.iphone15BlueLabelUserNameText10,
                  ]}
                  accessibilityLabel={
                    STRINGS.Mybalance.MyBalance_Label_UserName_Text_10
                      .accessibilityLabel
                  }
                >
                  {STRINGS.Mybalance.MyBalance_Label_UserName_Text_10.label}
                </AppText>
              </AppColumn>
              <AppColumn
                widgetId={'MyBalance_Container_Column_20'}
                spacing={12}
                style={sharedStyles.iphone15BlueContainerColumn15}
              >
                <AppColumn
                  widgetId={'MyBalance_Container_Column_21'}
                  spacing={12}
                  style={sharedStyles.iphone15BlueContainerColumn16}
                >
                  <AppColumn
                    widgetId={'MyBalance_Divider_33'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_34'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_35'}
                    style={sharedStyles.iphone15BlueDivider18}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_36'}
                    style={sharedStyles.iphone15BlueDivider18}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_37'}
                    style={sharedStyles.iphone15BlueDivider18}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_38'}
                    style={sharedStyles.iphone15BlueDivider18}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_39'}
                    style={sharedStyles.iphone15BlueDivider18}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_40'}
                    style={sharedStyles.iphone15BlueDivider18}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_41'}
                    style={sharedStyles.iphone15BlueDivider18}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_42'}
                    style={sharedStyles.iphone15BlueDivider18}
                  />
                </AppColumn>
                <AppText
                  widgetId={'MyBalance_Label_UserName_Text_11'}
                  style={[
                    text.label.medium,
                    sharedStyles.iphone15BlueLabelUserNameText11,
                  ]}
                  accessibilityLabel={
                    STRINGS.Mybalance.MyBalance_Label_UserName_Text_11
                      .accessibilityLabel
                  }
                >
                  {STRINGS.Mybalance.MyBalance_Label_UserName_Text_11.label}
                </AppText>
              </AppColumn>
              <AppColumn
                widgetId={'MyBalance_Container_Column_22'}
                spacing={12}
                style={sharedStyles.iphone15BlueContainerColumn15}
              >
                <AppColumn
                  widgetId={'MyBalance_Container_Column_23'}
                  spacing={12}
                  style={sharedStyles.iphone15BlueContainerColumn16}
                >
                  <AppColumn
                    widgetId={'MyBalance_Divider_43'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_44'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_45'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_46'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_47'}
                    style={sharedStyles.iphone15BlueDivider13}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_48'}
                    style={sharedStyles.iphone15BlueDivider18}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_49'}
                    style={sharedStyles.iphone15BlueDivider18}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_50'}
                    style={sharedStyles.iphone15BlueDivider18}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_51'}
                    style={sharedStyles.iphone15BlueDivider18}
                  />
                  <AppColumn
                    widgetId={'MyBalance_Divider_52'}
                    style={sharedStyles.iphone15BlueDivider18}
                  />
                </AppColumn>
                <AppText
                  widgetId={'MyBalance_Label_UserName_Text_12'}
                  style={[
                    text.label.medium,
                    sharedStyles.iphone15BlueLabelUserNameText12,
                  ]}
                  accessibilityLabel={
                    STRINGS.Mybalance.MyBalance_Label_UserName_Text_12
                      .accessibilityLabel
                  }
                >
                  {STRINGS.Mybalance.MyBalance_Label_UserName_Text_12.label}
                </AppText>
              </AppColumn>
            </AppRow>
            <AppColumn
              widgetId={'MyBalance_Container_Column_24'}
              style={sharedStyles.iphone15BlueContainerColumn25}
            >
              <AppText
                widgetId={'MyBalance_Label_K_Text'}
                style={[text.label.medium, sharedStyles.iphone15BlueLabelKText]}
                accessibilityLabel={
                  STRINGS.Mybalance.MyBalance_Label_K_Text.accessibilityLabel
                }
              >
                {STRINGS.Mybalance.MyBalance_Label_K_Text.label}
              </AppText>
              <AppText
                widgetId={'MyBalance_Label_K_Text_2'}
                style={[text.label.medium, sharedStyles.iphone15BlueLabelKText]}
                accessibilityLabel={
                  STRINGS.Mybalance.MyBalance_Label_K_Text_2.accessibilityLabel
                }
              >
                {STRINGS.Mybalance.MyBalance_Label_K_Text_2.label}
              </AppText>
              <AppText
                widgetId={'MyBalance_Label_K_Text_3'}
                style={[text.label.medium, sharedStyles.iphone15BlueLabelKText]}
                accessibilityLabel={
                  STRINGS.Mybalance.MyBalance_Label_K_Text_3.accessibilityLabel
                }
              >
                {STRINGS.Mybalance.MyBalance_Label_K_Text_3.label}
              </AppText>
              <AppText
                widgetId={'MyBalance_Label_K_Text_4'}
                style={[text.label.medium, sharedStyles.iphone15BlueLabelKText]}
                accessibilityLabel={
                  STRINGS.Mybalance.MyBalance_Label_K_Text_4.accessibilityLabel
                }
              >
                {STRINGS.Mybalance.MyBalance_Label_K_Text_4.label}
              </AppText>
              <AppText
                widgetId={'MyBalance_Label_K_Text_5'}
                style={[
                  text.label.medium,
                  sharedStyles.iphone15BlueLabelKText5,
                ]}
                accessibilityLabel={
                  STRINGS.Mybalance.MyBalance_Label_K_Text_5.accessibilityLabel
                }
              >
                {STRINGS.Mybalance.MyBalance_Label_K_Text_5.label}
              </AppText>
            </AppColumn>
          </AppColumn>
        </AppColumn>
      </AppStack>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  myBalanceDivider10Style: {
    backgroundColor: '#bfb7fd',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    width: '100%',
    alignSelf: 'stretch',
    marginRight: 0,
    height: 8,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  myBalanceDivider11Style: {
    height: 8,
    marginTop: 0,
    backgroundColor: '#bfb7fd',
    alignSelf: 'stretch',
    width: '100%',
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  myBalanceDivider12Style: {
    width: '100%',
    marginLeft: 0,
    marginBottom: 0,
    marginTop: 0,
    backgroundColor: '#bfb7fd',
    alignSelf: 'stretch',
    marginRight: 0,
    height: 8,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  myBalanceDivider29Style: {
    alignSelf: 'stretch',
    marginRight: 0,
    backgroundColor: '#bfb7fd',
    height: 8,
    marginTop: 0,
    marginBottom: 0,
    width: '100%',
    marginLeft: 0,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  myBalanceDivider30Style: {
    marginBottom: 0,
    height: 8,
    alignSelf: 'stretch',
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0,
    width: '100%',
    backgroundColor: '#bfb7fd',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  myBalanceDivider31Style: {
    height: 8,
    marginRight: 0,
    marginBottom: 0,
    alignSelf: 'stretch',
    marginLeft: 0,
    width: '100%',
    marginTop: 0,
    backgroundColor: '#bfb7fd',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  myBalanceDivider32Style: {
    width: '100%',
    height: 8,
    backgroundColor: '#bfb7fd',
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 0,
    alignSelf: 'stretch',
    marginRight: 0,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

export default Mybalance;

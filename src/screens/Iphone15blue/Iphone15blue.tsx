import React from 'react';
import {
  AppAppBar,
  AppButton,
  AppColumn,
  AppContainer,
  AppImage,
  AppListTile,
  AppRow,
  AppStack,
  AppText,
} from '@/components/shared';
import { useNavigation } from '@react-navigation/native';

import { color, imageSources, space, text } from '@/assets';

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

const Iphone15blue: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-308130'}
      testID={'21046046-d23a-4bed-9d33-70cc70aac4b1'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'Iphone15Blue_AppBar_SyntheticAppBar_AppBar'}
        style={styles.iphone15BlueAppBarSyntheticAppBarAppBarStyle}
      >
        <AppRow
          widgetId={'Iphone15Blue_Container_AppBarCustomCentre_Row'}
          spacing={space['2']}
          style={styles.iphone15BlueContainerAppBarCustomCentreRowStyle}
        >
          <AppImage
            widgetId={'Iphone15Blue_Image_Btn_Image'}
            source={imageSources.image__euiga}
            style={styles.iphone15BlueImageBtnImageStyle}
          />
          <AppImage
            widgetId={'Iphone15Blue_Image_Btn_Image_2'}
            source={imageSources.image__ibd7}
            style={styles.iphone15BlueImageBtnImage2Style}
          />
        </AppRow>
      </AppAppBar>
      <AppStack
        widgetId={'Iphone15Blue_Container_Iphone15Blue_Stack'}
        style={styles.iphone15BlueContainerIphone15BlueStackStyle}
      >
        <AppStack
          widgetId={'Iphone15Blue_Container_TitaniumFrame_Stack'}
          style={styles.iphone15BlueContainerTitaniumFrameStackStyle}
        >
          <AppColumn
            widgetId={'Iphone15Blue_Container_ShadowOuter_Column'}
            style={styles.iphone15BlueContainerShadowOuterColumnStyle}
          />
          <AppColumn
            widgetId={'Iphone15Blue_Container_ShadowOuter_Column_2'}
            style={styles.iphone15BlueContainerShadowOuterColumn2Style}
          />
          <AppColumn
            widgetId={'Iphone15Blue_Container_ShadowInner_Column'}
            style={styles.iphone15BlueContainerShadowInnerColumnStyle}
          />
          <AppColumn
            widgetId={'Iphone15Blue_Container_HighlightInner_Column'}
            style={styles.iphone15BlueContainerHighlightInnerColumnStyle}
          />
        </AppStack>
        <AppColumn
          widgetId={'Iphone15Blue_Container_ScreenFrame_Column'}
          style={styles.iphone15BlueContainerScreenFrameColumnStyle}
        />
        <AppColumn
          widgetId={'Iphone15Blue_Container_SideButtons_Column'}
          style={styles.iphone15BlueContainerSideButtonsColumnStyle}
        >
          <AppImage
            widgetId={'Iphone15Blue_Image_Btn_Image_3'}
            source={imageSources.image__nzk9}
            style={styles.iphone15BlueImageBtnImage3Style}
          />
          <AppImage
            widgetId={'Iphone15Blue_Image_Btn_Image_4'}
            source={imageSources.image__61ddv}
            style={styles.iphone15BlueImageBtnImage4Style}
          />
        </AppColumn>
        <AppColumn
          widgetId={'Iphone15Blue_Container_ScreenHere_Column'}
          style={styles.iphone15BlueContainerScreenHereColumnStyle}
        >
          <AppStack
            widgetId={'Iphone15Blue_Container_MyBalance_Stack'}
            style={styles.iphone15BlueContainerMyBalanceStackStyle}
          >
            <AppImage
              widgetId={'Iphone15Blue_Background_Image'}
              resizeMode={'cover'}
              source={imageSources.image__y0m6q}
              style={sharedStyles.analyticsBackgroundImage}
            />
            <AppColumn
              widgetId={'Iphone15Blue_Container_Column'}
              style={styles.iphone15BlueContainerColumnStyle}
            >
              <AppListTile
                widgetId={'Iphone15Blue_Item_ListItem'}
                titleStyle={{
                  color: '#151521',
                  fontSize: 16.346155166625977,
                  textAlign: 'center',
                  fontFamily: 'SF Pro Text',
                  fontWeight: 600,
                  lineHeight: 19.506837844848633,
                  letterSpacing: -0.6538462066650391,
                }}
                trailing={
                  'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/735eb8bc-b116-4b63-a62f-7a9b6fadd404-1_2705.png'
                }
                style={sharedStyles.analyticsItemListItem}
                title={STRINGS.iPhone15Blue.Iphone15Blue_Item_ListItem.title}
              />
            </AppColumn>
            <AppRow
              widgetId={'Iphone15Blue_Container_Row'}
              spacing={space['2']}
              style={styles.iphone15BlueContainerRowStyle}
            >
              <AppRow
                widgetId={'Iphone15Blue_Container_Row_2'}
                spacing={space['2']}
                style={sharedStyles.iphone15BlueContainerRow2}
              >
                <AppImage
                  widgetId={'Iphone15Blue_Image'}
                  resizeMode={'cover'}
                  source={imageSources.image__77aa}
                  style={sharedStyles.iphone15BlueImage}
                />
                <AppText
                  widgetId={'Iphone15Blue_Label_HiEsaaa_Text'}
                  numberOfLines={0}
                  style={[
                    text.label.medium,
                    styles.iphone15BlueLabelHiEsaaaTextStyle,
                  ]}
                  accessibilityLabel={
                    STRINGS.iPhone15Blue.Iphone15Blue_Label_HiEsaaa_Text
                      .accessibilityLabel
                  }
                >
                  {STRINGS.iPhone15Blue.Iphone15Blue_Label_HiEsaaa_Text.label}
                </AppText>
              </AppRow>
              <AppStack
                widgetId={'Iphone15Blue_Container_Stack'}
                style={sharedStyles.iphone15BlueContainerStack}
              >
                <AppImage
                  widgetId={'Iphone15Blue_Image_2'}
                  source={imageSources.image__zp9th}
                  style={sharedStyles.iphone15BlueImage2}
                />
                <AppColumn
                  widgetId={'Iphone15Blue_Container_Column_2'}
                  style={sharedStyles.iphone15BlueContainerColumn2}
                >
                  <AppImage
                    widgetId={'Iphone15Blue_Image_3'}
                    source={imageSources.image__u6yh}
                    resizeMode={'stretch'}
                    style={sharedStyles.iphone15BlueImage3}
                  />
                  <AppImage
                    widgetId={'Iphone15Blue_Image_4'}
                    source={imageSources.image__x1yx4}
                    style={sharedStyles.iphone15BlueImage4}
                  />
                </AppColumn>
                <AppImage
                  widgetId={'Iphone15Blue_Image_5'}
                  source={imageSources.image__z1jn4}
                  style={sharedStyles.iphone15BlueImage5}
                />
                <AppImage
                  widgetId={'Iphone15Blue_Image_6'}
                  source={imageSources.image__pt40}
                  style={sharedStyles.iphone15BlueImage6}
                />
              </AppStack>
            </AppRow>
            <AppRow
              widgetId={'Iphone15Blue_Container_Row_3'}
              spacing={20}
              style={sharedStyles.iphone15BlueContainerRow3}
            >
              <AppText
                widgetId={'Iphone15Blue_Label_UserName_Text'}
                style={[
                  text.label.medium,
                  sharedStyles.iphone15BlueLabelUserNameText,
                ]}
                accessibilityLabel={
                  STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text
                    .accessibilityLabel
                }
              >
                {STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text.label}
              </AppText>
              <AppText
                widgetId={'Iphone15Blue_Label_UserName_Text_2'}
                style={[
                  text.label.medium,
                  sharedStyles.iphone15BlueLabelUserNameText2,
                ]}
                accessibilityLabel={
                  STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_2
                    .accessibilityLabel
                }
              >
                {STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_2.label}
              </AppText>
              <AppText
                widgetId={'Iphone15Blue_Label_UserName_Text_3'}
                style={[
                  text.label.medium,
                  sharedStyles.iphone15BlueLabelUserNameText3,
                ]}
                accessibilityLabel={
                  STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_3
                    .accessibilityLabel
                }
              >
                {STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_3.label}
              </AppText>
            </AppRow>
            <AppRow
              widgetId={'Iphone15Blue_Container_Row_4'}
              spacing={10}
              style={sharedStyles.iphone15BlueContainerRow4}
            >
              <AppColumn
                widgetId={'Iphone15Blue_Container_Column_3'}
                spacing={10}
                style={sharedStyles.iphone15BlueContainerColumn3}
              >
                <AppColumn
                  widgetId={'Iphone15Blue_Container_Column_4'}
                  style={sharedStyles.iphone15BlueContainerColumn4}
                >
                  <AppRow
                    widgetId={'Iphone15Blue_Container_Row_5'}
                    spacing={13}
                    style={sharedStyles.iphone15BlueContainerRow5}
                  >
                    <AppImage
                      widgetId={'Iphone15Blue_Image_7'}
                      source={imageSources.image__adrqe}
                      style={sharedStyles.iphone15BlueImage7}
                    />
                    <AppText
                      widgetId={'Iphone15Blue_Label_UserName_Text_4'}
                      style={[
                        text.label.medium,
                        sharedStyles.iphone15BlueLabelUserNameText4,
                      ]}
                      accessibilityLabel={
                        STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_4
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_4
                          .label
                      }
                    </AppText>
                  </AppRow>
                  <AppImage
                    widgetId={'Iphone15Blue_Image_8'}
                    source={imageSources.image__m13yk}
                    style={sharedStyles.iphone15BlueImage10}
                  />
                </AppColumn>
              </AppColumn>
              <AppColumn
                widgetId={'Iphone15Blue_Container_Column_5'}
                spacing={10}
                style={sharedStyles.iphone15BlueContainerColumn5}
              >
                <AppColumn
                  widgetId={'Iphone15Blue_Container_Column_6'}
                  style={sharedStyles.iphone15BlueContainerColumn6}
                >
                  <AppRow
                    widgetId={'Iphone15Blue_Container_Row_6'}
                    spacing={13}
                    style={sharedStyles.iphone15BlueContainerRow5}
                  >
                    <AppImage
                      widgetId={'Iphone15Blue_Image_9'}
                      source={imageSources.image__la7g}
                      style={sharedStyles.iphone15BlueImage7}
                    />
                    <AppText
                      widgetId={'Iphone15Blue_Label_UserName_Text_5'}
                      style={[
                        text.label.medium,
                        sharedStyles.iphone15BlueLabelUserNameText5,
                      ]}
                      accessibilityLabel={
                        STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_5
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_5
                          .label
                      }
                    </AppText>
                  </AppRow>
                  <AppImage
                    widgetId={'Iphone15Blue_Image_10'}
                    source={imageSources.image__06lv}
                    style={sharedStyles.iphone15BlueImage10}
                  />
                </AppColumn>
              </AppColumn>
              <AppColumn
                widgetId={'Iphone15Blue_Container_Column_7'}
                spacing={10}
                style={sharedStyles.iphone15BlueContainerColumn7}
              >
                <AppColumn
                  widgetId={'Iphone15Blue_Container_Column_8'}
                  style={sharedStyles.iphone15BlueContainerColumn8}
                >
                  <AppRow
                    widgetId={'Iphone15Blue_Container_Row_7'}
                    spacing={15}
                    scrollable={true}
                    style={sharedStyles.iphone15BlueContainerRow5}
                  >
                    <AppColumn
                      widgetId={'Iphone15Blue_Divider'}
                      style={sharedStyles.iphone15BlueDivider}
                    />
                    <AppText
                      widgetId={'Iphone15Blue_Label_UserName_Text_6'}
                      style={[
                        text.label.medium,
                        sharedStyles.iphone15BlueLabelUserNameText6,
                      ]}
                      accessibilityLabel={
                        STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_6
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_6
                          .label
                      }
                    </AppText>
                  </AppRow>
                  <AppColumn
                    widgetId={'Iphone15Blue_Divider_2'}
                    style={sharedStyles.iphone15BlueDivider2}
                  />
                </AppColumn>
              </AppColumn>
            </AppRow>
            <AppRow
              widgetId={'Iphone15Blue_Container_Row_8'}
              spacing={space['2']}
              style={sharedStyles.iphone15BlueContainerRow8}
            >
              <AppColumn
                widgetId={'Iphone15Blue_Container_Column_9'}
                spacing={10}
                style={sharedStyles.analyticsContainerRow2}
              >
                <AppText
                  widgetId={'Iphone15Blue_Label_UserName_Text_7'}
                  numberOfLines={0}
                  style={[
                    text.label.medium,
                    sharedStyles.iphone15BlueLabelUserNameText7,
                  ]}
                  accessibilityLabel={
                    STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_7
                      .accessibilityLabel
                  }
                >
                  {
                    STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_7
                      .label
                  }
                </AppText>
                <AppRow
                  widgetId={'Iphone15Blue_Container_Row_9'}
                  spacing={10}
                  style={sharedStyles.iphone15BlueContainerRow9}
                >
                  <AppText
                    widgetId={'Iphone15Blue_Label_Price_Text'}
                    numberOfLines={0}
                    style={[
                      text.label.medium,
                      sharedStyles.iphone15BlueLabelPriceText,
                    ]}
                    accessibilityLabel={
                      STRINGS.iPhone15Blue.Iphone15Blue_Label_Price_Text
                        .accessibilityLabel
                    }
                  >
                    {STRINGS.iPhone15Blue.Iphone15Blue_Label_Price_Text.label}
                  </AppText>
                  <AppButton
                    widgetId={'Iphone15Blue_Cta_Action_Button'}
                    style={sharedStyles.iphone15BlueCtaActionButton}
                    textStyle={[
                      text.label.medium,
                      sharedStyles.iphone15BlueCtaActionButtonText,
                    ]}
                    label={
                      STRINGS.iPhone15Blue.Iphone15Blue_Cta_Action_Button.label
                    }
                    accessibilityLabel={
                      STRINGS.iPhone15Blue.Iphone15Blue_Cta_Action_Button
                        .accessibilityLabel
                    }
                  />
                </AppRow>
              </AppColumn>
              <AppColumn
                widgetId={'Iphone15Blue_Container_Column_10'}
                style={sharedStyles.iphone15BlueContainerColumn10}
              >
                <AppRow
                  widgetId={'Iphone15Blue_Container_Row_10'}
                  spacing={space['2']}
                  style={sharedStyles.iphone15BlueContainerRow10}
                >
                  <AppImage
                    widgetId={'Iphone15Blue_Image_11'}
                    resizeMode={'cover'}
                    source={imageSources.image__sg3r}
                    style={sharedStyles.iphone15BlueImage11}
                  />
                  <AppImage
                    widgetId={'Iphone15Blue_Image_12'}
                    source={imageSources.image__71ovc}
                    style={sharedStyles.iphone15BlueImage12}
                  />
                </AppRow>
              </AppColumn>
            </AppRow>
            <AppColumn
              widgetId={'Iphone15Blue_Container_Column_11'}
              spacing={20}
              style={sharedStyles.iphone15BlueContainerColumn11}
            >
              <AppText
                widgetId={'Iphone15Blue_Label_TransferList_Text'}
                style={[
                  text.label.medium,
                  sharedStyles.iphone15BlueLabelTransferListText,
                ]}
                accessibilityLabel={
                  STRINGS.iPhone15Blue.Iphone15Blue_Label_TransferList_Text
                    .accessibilityLabel
                }
              >
                {
                  STRINGS.iPhone15Blue.Iphone15Blue_Label_TransferList_Text
                    .label
                }
              </AppText>
              <AppRow
                widgetId={'Iphone15Blue_Container_Row_11'}
                spacing={10}
                style={sharedStyles.iphone15BlueContainerRow11}
              >
                <AppImage
                  widgetId={'Iphone15Blue_Image_13'}
                  source={imageSources.image__2wd1}
                  style={sharedStyles.iphone15BlueImage13}
                />
                <AppImage
                  widgetId={'Iphone15Blue_Image_14'}
                  source={imageSources.image__f8}
                  resizeMode={'cover'}
                  style={sharedStyles.iphone15BlueImage14}
                />
                <AppImage
                  widgetId={'Iphone15Blue_Image_15'}
                  resizeMode={'cover'}
                  source={imageSources.image__3xxhx}
                  style={sharedStyles.iphone15BlueImage14}
                />
                <AppImage
                  widgetId={'Iphone15Blue_Image_16'}
                  resizeMode={'cover'}
                  source={imageSources.image__hdy6}
                  style={sharedStyles.iphone15BlueImage14}
                />
                <AppImage
                  widgetId={'Iphone15Blue_Image_17'}
                  source={imageSources.image__e0hra}
                  resizeMode={'cover'}
                  style={sharedStyles.iphone15BlueImage14}
                />
                <AppImage
                  widgetId={'Iphone15Blue_Image_18'}
                  resizeMode={'cover'}
                  source={imageSources.image__fa88e}
                  style={sharedStyles.iphone15BlueImage14}
                />
              </AppRow>
            </AppColumn>
            <AppColumn
              widgetId={'Iphone15Blue_Container_Column_12'}
              spacing={24}
              style={sharedStyles.iphone15BlueContainerColumn12}
            >
              <AppRow
                widgetId={'Iphone15Blue_Container_Row_12'}
                spacing={space['2']}
                style={sharedStyles.iphone15BlueContainerRow12}
              >
                <AppColumn
                  widgetId={'Iphone15Blue_Container_Column_13'}
                  spacing={10}
                  style={sharedStyles.analyticsContainerRow2}
                >
                  <AppText
                    widgetId={'Iphone15Blue_Label_FinancialHealth_Text'}
                    numberOfLines={0}
                    style={[
                      text.label.medium,
                      sharedStyles.iphone15BlueLabelFinancialHealthText,
                    ]}
                    accessibilityLabel={
                      STRINGS.iPhone15Blue
                        .Iphone15Blue_Label_FinancialHealth_Text
                        .accessibilityLabel
                    }
                  >
                    {
                      STRINGS.iPhone15Blue
                        .Iphone15Blue_Label_FinancialHealth_Text.label
                    }
                  </AppText>
                  <AppText
                    widgetId={'Iphone15Blue_Label_Latest7Days_Text'}
                    numberOfLines={0}
                    style={[
                      text.label.medium,
                      sharedStyles.iphone15BlueLabelLatest7DaysText,
                    ]}
                    accessibilityLabel={
                      STRINGS.iPhone15Blue.Iphone15Blue_Label_Latest7Days_Text
                        .accessibilityLabel
                    }
                  >
                    {
                      STRINGS.iPhone15Blue.Iphone15Blue_Label_Latest7Days_Text
                        .label
                    }
                  </AppText>
                </AppColumn>
                <AppImage
                  widgetId={'Iphone15Blue_Image_19'}
                  source={imageSources.image__j911}
                  style={sharedStyles.iphone15BlueImage19}
                />
              </AppRow>
              <AppColumn
                widgetId={'Iphone15Blue_Container_Column_14'}
                style={sharedStyles.iphone15BlueContainerColumn14}
              >
                <AppRow
                  widgetId={'Iphone15Blue_Container_Row_13'}
                  spacing={17}
                  style={sharedStyles.iphone15BlueContainerRow13}
                >
                  <AppColumn
                    widgetId={'Iphone15Blue_Container_Column_15'}
                    spacing={12}
                    style={sharedStyles.iphone15BlueContainerColumn15}
                  >
                    <AppColumn
                      widgetId={'Iphone15Blue_Container_Column_16'}
                      spacing={12}
                      style={sharedStyles.iphone15BlueContainerColumn16}
                    >
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_3'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_4'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_5'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_6'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_7'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_8'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_9'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_10'}
                        style={styles.iphone15BlueDivider10Style}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_11'}
                        style={styles.iphone15BlueDivider11Style}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_12'}
                        style={styles.iphone15BlueDivider12Style}
                      />
                    </AppColumn>
                    <AppText
                      widgetId={'Iphone15Blue_Label_UserName_Text_8'}
                      style={[
                        text.label.medium,
                        sharedStyles.iphone15BlueLabelUserNameText8,
                      ]}
                      accessibilityLabel={
                        STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_8
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_8
                          .label
                      }
                    </AppText>
                  </AppColumn>
                  <AppColumn
                    widgetId={'Iphone15Blue_Container_Column_17'}
                    spacing={12}
                    style={sharedStyles.iphone15BlueContainerColumn15}
                  >
                    <AppColumn
                      widgetId={'Iphone15Blue_Container_Column_18'}
                      spacing={12}
                      style={sharedStyles.iphone15BlueContainerColumn16}
                    >
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_13'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_14'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_15'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_16'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_17'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_18'}
                        style={sharedStyles.iphone15BlueDivider18}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_19'}
                        style={sharedStyles.iphone15BlueDivider18}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_20'}
                        style={sharedStyles.iphone15BlueDivider18}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_21'}
                        style={sharedStyles.iphone15BlueDivider18}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_22'}
                        style={sharedStyles.iphone15BlueDivider18}
                      />
                    </AppColumn>
                    <AppText
                      widgetId={'Iphone15Blue_Label_UserName_Text_9'}
                      style={[
                        text.label.medium,
                        sharedStyles.iphone15BlueLabelUserNameText9,
                      ]}
                      accessibilityLabel={
                        STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_9
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_9
                          .label
                      }
                    </AppText>
                  </AppColumn>
                  <AppColumn
                    widgetId={'Iphone15Blue_Container_Column_19'}
                    spacing={12}
                    style={sharedStyles.iphone15BlueContainerColumn15}
                  >
                    <AppColumn
                      widgetId={'Iphone15Blue_Container_Column_20'}
                      spacing={12}
                      style={sharedStyles.iphone15BlueContainerColumn16}
                    >
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_23'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_24'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_25'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_26'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_27'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_28'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_29'}
                        style={styles.iphone15BlueDivider29Style}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_30'}
                        style={styles.iphone15BlueDivider30Style}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_31'}
                        style={styles.iphone15BlueDivider31Style}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_32'}
                        style={styles.iphone15BlueDivider32Style}
                      />
                    </AppColumn>
                    <AppText
                      widgetId={'Iphone15Blue_Label_UserName_Text_10'}
                      style={[
                        text.label.medium,
                        sharedStyles.iphone15BlueLabelUserNameText10,
                      ]}
                      accessibilityLabel={
                        STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_10
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_10
                          .label
                      }
                    </AppText>
                  </AppColumn>
                  <AppColumn
                    widgetId={'Iphone15Blue_Container_Column_21'}
                    spacing={12}
                    style={sharedStyles.iphone15BlueContainerColumn15}
                  >
                    <AppColumn
                      widgetId={'Iphone15Blue_Container_Column_22'}
                      spacing={12}
                      style={sharedStyles.iphone15BlueContainerColumn16}
                    >
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_33'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_34'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_35'}
                        style={sharedStyles.iphone15BlueDivider18}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_36'}
                        style={sharedStyles.iphone15BlueDivider18}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_37'}
                        style={sharedStyles.iphone15BlueDivider18}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_38'}
                        style={sharedStyles.iphone15BlueDivider18}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_39'}
                        style={sharedStyles.iphone15BlueDivider18}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_40'}
                        style={sharedStyles.iphone15BlueDivider18}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_41'}
                        style={sharedStyles.iphone15BlueDivider18}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_42'}
                        style={sharedStyles.iphone15BlueDivider18}
                      />
                    </AppColumn>
                    <AppText
                      widgetId={'Iphone15Blue_Label_UserName_Text_11'}
                      style={[
                        text.label.medium,
                        sharedStyles.iphone15BlueLabelUserNameText11,
                      ]}
                      accessibilityLabel={
                        STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_11
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_11
                          .label
                      }
                    </AppText>
                  </AppColumn>
                  <AppColumn
                    widgetId={'Iphone15Blue_Container_Column_23'}
                    spacing={12}
                    style={sharedStyles.iphone15BlueContainerColumn15}
                  >
                    <AppColumn
                      widgetId={'Iphone15Blue_Container_Column_24'}
                      spacing={12}
                      style={sharedStyles.iphone15BlueContainerColumn16}
                    >
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_43'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_44'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_45'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_46'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_47'}
                        style={sharedStyles.iphone15BlueDivider13}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_48'}
                        style={sharedStyles.iphone15BlueDivider18}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_49'}
                        style={sharedStyles.iphone15BlueDivider18}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_50'}
                        style={sharedStyles.iphone15BlueDivider18}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_51'}
                        style={sharedStyles.iphone15BlueDivider18}
                      />
                      <AppColumn
                        widgetId={'Iphone15Blue_Divider_52'}
                        style={sharedStyles.iphone15BlueDivider18}
                      />
                    </AppColumn>
                    <AppText
                      widgetId={'Iphone15Blue_Label_UserName_Text_12'}
                      style={[
                        text.label.medium,
                        sharedStyles.iphone15BlueLabelUserNameText12,
                      ]}
                      accessibilityLabel={
                        STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_12
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.iPhone15Blue.Iphone15Blue_Label_UserName_Text_12
                          .label
                      }
                    </AppText>
                  </AppColumn>
                </AppRow>
                <AppColumn
                  widgetId={'Iphone15Blue_Container_Column_25'}
                  style={sharedStyles.iphone15BlueContainerColumn25}
                >
                  <AppText
                    widgetId={'Iphone15Blue_Label_K_Text'}
                    style={[
                      text.label.medium,
                      sharedStyles.iphone15BlueLabelKText,
                    ]}
                    accessibilityLabel={
                      STRINGS.iPhone15Blue.Iphone15Blue_Label_K_Text
                        .accessibilityLabel
                    }
                  >
                    {STRINGS.iPhone15Blue.Iphone15Blue_Label_K_Text.label}
                  </AppText>
                  <AppText
                    widgetId={'Iphone15Blue_Label_K_Text_2'}
                    style={[
                      text.label.medium,
                      sharedStyles.iphone15BlueLabelKText,
                    ]}
                    accessibilityLabel={
                      STRINGS.iPhone15Blue.Iphone15Blue_Label_K_Text_2
                        .accessibilityLabel
                    }
                  >
                    {STRINGS.iPhone15Blue.Iphone15Blue_Label_K_Text_2.label}
                  </AppText>
                  <AppText
                    widgetId={'Iphone15Blue_Label_K_Text_3'}
                    style={[
                      text.label.medium,
                      sharedStyles.iphone15BlueLabelKText,
                    ]}
                    accessibilityLabel={
                      STRINGS.iPhone15Blue.Iphone15Blue_Label_K_Text_3
                        .accessibilityLabel
                    }
                  >
                    {STRINGS.iPhone15Blue.Iphone15Blue_Label_K_Text_3.label}
                  </AppText>
                  <AppText
                    widgetId={'Iphone15Blue_Label_K_Text_4'}
                    style={[
                      text.label.medium,
                      sharedStyles.iphone15BlueLabelKText,
                    ]}
                    accessibilityLabel={
                      STRINGS.iPhone15Blue.Iphone15Blue_Label_K_Text_4
                        .accessibilityLabel
                    }
                  >
                    {STRINGS.iPhone15Blue.Iphone15Blue_Label_K_Text_4.label}
                  </AppText>
                  <AppText
                    widgetId={'Iphone15Blue_Label_K_Text_5'}
                    style={[
                      text.label.medium,
                      sharedStyles.iphone15BlueLabelKText5,
                    ]}
                    accessibilityLabel={
                      STRINGS.iPhone15Blue.Iphone15Blue_Label_K_Text_5
                        .accessibilityLabel
                    }
                  >
                    {STRINGS.iPhone15Blue.Iphone15Blue_Label_K_Text_5.label}
                  </AppText>
                </AppColumn>
              </AppColumn>
            </AppColumn>
          </AppStack>
        </AppColumn>
        <AppImage
          widgetId={'Iphone15Blue_Image_DynamicIsland_Image'}
          source={imageSources.image__srq49}
          style={styles.iphone15BlueImageDynamicIslandImageStyle}
        />
      </AppStack>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  iphone15BlueAppBarSyntheticAppBarAppBarStyle: {
    paddingTop: 61,
    borderColor: color.border.default,
    paddingLeft: space['3'],
    paddingRight: space['3'],
    borderBottomWidth: 0,
  },
  iphone15BlueContainerAppBarCustomCentreRowStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexShrink: 1,
  },
  iphone15BlueImageBtnImageStyle: {
    height: 64,
    width: 5,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  iphone15BlueImageBtnImage2Style: {
    width: 5,
    height: 99,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  iphone15BlueContainerIphone15BlueStackStyle: {
    width: '100%',
    marginTop: -101,
    flex: 1,
    position: 'relative',
  },
  iphone15BlueContainerTitaniumFrameStackStyle: {
    borderRadius: 68,
    height: '100%',
    left: '0%',
    width: '100%',
    top: '0%',
    backgroundColor: '#e4edf2',
    position: 'absolute',
    overflow: 'hidden',
  },
  iphone15BlueContainerShadowOuterColumnStyle: {
    borderColor: '#364348',
    left: '0%',
    borderWidth: 3,
    width: '100%',
    position: 'absolute',
    borderRadius: 68,
    height: '100%',
    top: '0%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  iphone15BlueContainerShadowOuterColumn2Style: {
    borderWidth: 1,
    left: '0%',
    position: 'absolute',
    height: '100%',
    borderColor: '#404d52',
    borderRadius: 68,
    width: '100%',
    top: '0%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  iphone15BlueContainerShadowInnerColumnStyle: {
    position: 'absolute',
    height: '98.7%',
    borderRadius: 63,
    borderWidth: 1,
    width: '97.6%',
    top: '0.6%',
    borderColor: '#ffffff',
    left: '1.2%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  iphone15BlueContainerHighlightInnerColumnStyle: {
    left: '1.5%',
    borderColor: '#ffffff',
    borderRadius: 62,
    height: '98.5%',
    position: 'absolute',
    width: '97.1%',
    borderWidth: 0.4000000059604645,
    top: '0.7%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  iphone15BlueContainerScreenFrameColumnStyle: {
    height: '98.5%',
    backgroundColor: '#000100',
    overflow: 'hidden',
    width: '97.1%',
    left: '1.5%',
    top: '0.7%',
    borderRadius: 62,
    position: 'absolute',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  iphone15BlueContainerSideButtonsColumnStyle: {
    height: 669,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  iphone15BlueImageBtnImage3Style: {
    width: 5,
    height: 31,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  iphone15BlueImageBtnImage4Style: {
    width: 5,
    height: 64,
    marginTop: -6,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  iphone15BlueContainerScreenHereColumnStyle: {
    overflow: 'hidden',
    backgroundColor: '#a2cefe',
    borderRadius: 50,
    position: 'absolute',
    top: '2.3%',
    left: '4.6%',
    width: '90.5%',
    height: '95.5%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  iphone15BlueContainerMyBalanceStackStyle: {
    width: '100%',
    borderRadius: 32,
    gradientEnd: { x: 0.5, y: 0.9999999999999999 },
    gradientStart: { x: 0.5, y: -3.0616171314629196e-17 },
    gradientColors: ['#dad5fb', '#ffffff'],
    overflow: 'hidden',
    gradientStops: [0, 0.42730990052223206],
    gradientType: 'linear',
    height: '100%',
    position: 'relative',
  },
  iphone15BlueContainerColumnStyle: {
    height: '2.5%',
    width: '86.7%',
    left: '6.7%',
    position: 'absolute',
    top: '2.5%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  iphone15BlueContainerRowStyle: {
    width: '89.3%',
    top: '9.9%',
    left: '5.3%',
    position: 'absolute',
    justifyContent: 'space-between',
    height: '5.5%',
    alignItems: 'stretch',
    flexShrink: 1,
  },
  iphone15BlueLabelHiEsaaaTextStyle: {
    letterSpacing: -0.3,
    flex: 1,
    fontWeight: 500,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    lineHeight: 19,
    color: '#151521',
    fontSize: 15,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  iphone15BlueDivider10Style: {
    height: 8,
    marginBottom: 0,
    marginLeft: 0,
    marginTop: 0,
    width: '100%',
    backgroundColor: '#fdb8d7',
    alignSelf: 'stretch',
    marginRight: 0,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  iphone15BlueDivider11Style: {
    height: 8,
    width: '100%',
    backgroundColor: '#fdb8d7',
    alignSelf: 'stretch',
    marginLeft: 0,
    marginBottom: 0,
    marginTop: 0,
    marginRight: 0,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  iphone15BlueDivider12Style: {
    marginLeft: 0,
    backgroundColor: '#fdb8d7',
    marginRight: 0,
    width: '100%',
    alignSelf: 'stretch',
    marginBottom: 0,
    height: 8,
    marginTop: 0,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  iphone15BlueDivider29Style: {
    marginRight: 0,
    height: 8,
    width: '100%',
    backgroundColor: '#fdb8d7',
    marginBottom: 0,
    marginLeft: 0,
    marginTop: 0,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  iphone15BlueDivider30Style: {
    marginBottom: 0,
    alignSelf: 'stretch',
    backgroundColor: '#fdb8d7',
    marginRight: 0,
    marginTop: 0,
    height: 8,
    width: '100%',
    marginLeft: 0,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  iphone15BlueDivider31Style: {
    marginRight: 0,
    width: '100%',
    marginLeft: 0,
    height: 8,
    alignSelf: 'stretch',
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: '#fdb8d7',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  iphone15BlueDivider32Style: {
    width: '100%',
    marginBottom: 0,
    height: 8,
    marginLeft: 0,
    backgroundColor: '#fdb8d7',
    marginTop: 0,
    marginRight: 0,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  iphone15BlueImageDynamicIslandImageStyle: {
    position: 'absolute',
    left: '35.5%',
    width: '29%',
    top: '3.4%',
    height: '4.2%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
});

export default Iphone15blue;

import React, { useRef } from 'react';
import {
  AppAppBar,
  AppColumn,
  AppContainer,
  AppImage,
  AppRow,
  AppStack,
  AppText,
} from '@/components/shared';

import { useNavigation } from '@react-navigation/native';

import { color, imageSources, space, text } from '@/assets';

import { ASForm, ASTextField } from '@/components';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type FormValues = {
  Send_Input_Field_Input?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const Send7: React.FC<ScreenProps> = ({ route }) => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-519772'}
      testID={'ff0a0833-021b-4ecd-bc38-c753b31deaea'}
      style={sharedStyles.container}
    >
      <ASForm
        enableReinitialize={true}
        name={'ASForm-169723'}
        validationSchema={Yup.object().shape({})}
        initialValues={{ Send_Input_Field_Input: '' }}
        innerRef={formikRef}
        testId={'ASForm-169723'}
      >
        {(formikProps: FormikProps<FormValues>) => {
          return (
            <>
              <AppAppBar
                widgetId={'Send_AppBar_SyntheticAppBar_AppBar1'}
                style={sharedStyles.analyticsAppBarSyntheticAppBarAppBar}
              >
                <AppRow
                  widgetId={'Send_Container_AppBarCustomCentre_Row1'}
                  spacing={space['2']}
                  style={sharedStyles.analyticsContainerAppBarCustomCentreRow}
                >
                  <AppStack
                    widgetId={'Send_Container_Stack1'}
                    style={sharedStyles.analyticsContainerStack}
                  >
                    <AppImage
                      widgetId={'Send_Image1'}
                      resizeMode={'stretch'}
                      source={imageSources.image__7na31}
                      style={sharedStyles.analyticsImage}
                    />
                    <AppImage
                      widgetId={'Send_Image_21'}
                      source={imageSources.image__ml09}
                      style={sharedStyles.analyticsImage2}
                    />
                  </AppStack>
                  <AppRow
                    widgetId={'Send_Container_Row1'}
                    spacing={5}
                    style={sharedStyles.profileContainerRow}
                  >
                    <AppImage
                      widgetId={'Send_Image_31'}
                      source={imageSources.image__trn6y}
                      style={sharedStyles.profileImage3}
                    />
                    <AppImage
                      widgetId={'Send_Image_41'}
                      source={imageSources.image__vdo3}
                      style={sharedStyles.profileImage3}
                    />
                  </AppRow>
                </AppRow>
              </AppAppBar>
              <AppImage
                widgetId={'Send_Background_Image1'}
                resizeMode={'cover'}
                source={imageSources.image__joj}
                style={sharedStyles.analyticsBackgroundImage}
              />
              <AppStack
                widgetId={'Send_Container_Send_Stack1'}
                style={sharedStyles.analyticsContainerAnalyticsStack}
              >
                <AppText
                  widgetId={'Send_Label_UserName_Text1'}
                  numberOfLines={2}
                  style={[
                    text.label.medium,
                    styles.sendLabelUserNameText1Style,
                  ]}
                  accessibilityLabel={
                    STRINGS.Send7.Send_Label_UserName_Text1.accessibilityLabel
                  }
                >
                  {STRINGS.Send7.Send_Label_UserName_Text1.label}
                </AppText>
                <AppRow
                  widgetId={'Send_Container_Row_21'}
                  spacing={20}
                  style={styles.sendContainerRow21Style}
                >
                  <AppText
                    widgetId={'Send_Label_UserName_Text_21'}
                    style={[
                      text.label.medium,
                      styles.sendLabelUserNameText21Style,
                    ]}
                    accessibilityLabel={
                      STRINGS.Send7.Send_Label_UserName_Text_21
                        .accessibilityLabel
                    }
                  >
                    {STRINGS.Send7.Send_Label_UserName_Text_21.label}
                  </AppText>
                  <AppText
                    widgetId={'Send_Label_UserName_Text_3'}
                    style={[
                      text.label.medium,
                      styles.sendLabelUserNameText3Style,
                    ]}
                    accessibilityLabel={
                      STRINGS.Send7.Send_Label_UserName_Text_3
                        .accessibilityLabel
                    }
                  >
                    {STRINGS.Send7.Send_Label_UserName_Text_3.label}
                  </AppText>
                </AppRow>
                <AppText
                  widgetId={'Send_Label_UserName_Text_4'}
                  style={[
                    text.label.medium,
                    styles.sendLabelUserNameText4Style,
                  ]}
                  accessibilityLabel={
                    STRINGS.Send7.Send_Label_UserName_Text_4.accessibilityLabel
                  }
                >
                  {STRINGS.Send7.Send_Label_UserName_Text_4.label}
                </AppText>
                <AppColumn
                  widgetId={'Send_Container_Column1'}
                  style={styles.sendContainerColumn1Style}
                >
                  <ASTextField
                    placeholderTextColor={color.text.tertiary}
                    borderActiveColor={color.brand.primary}
                    borderErrorColor={color.status.danger}
                    prefixIcon={
                      'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/50a87f28-1480-48f7-baa1-7fb5a8727cfb-1_2128.png'
                    }
                    name={'Send_Input_Field_Input'}
                    autoCapitalize={'none'}
                    allowFontScaling={false}
                    autoComplete={'off'}
                    maxNumberOfLines={5}
                    keyboardType={'default'}
                    textFieldType={'custom'}
                    style={styles.sendInputFieldInputStyle}
                    inputTextStyle={[
                      text.body.medium,
                      styles.sendInputFieldInputInputTextStyle,
                    ]}
                    labelTextStyle={[
                      text.label.medium,
                      styles.sendInputFieldInputLabelTextStyle,
                    ]}
                    placeholderTextStyle={
                      styles.sendInputFieldInputPlaceholderTextStyle
                    }
                    prefixIconStyles={
                      styles.sendInputFieldInputPrefixIconStyles
                    }
                    suffixIconStyles={
                      styles.sendInputFieldInputSuffixIconStyles
                    }
                    errorMessageTextStyle={[
                      text.label.small,
                      styles.sendInputFieldInputErrorMessageTextStyle,
                    ]}
                    prefixTextStyle={[
                      text.body.medium,
                      sharedStyles.analyticsContainerTabsActiveTabTextTypography,
                    ]}
                    contentContainerStyle={
                      styles.sendInputFieldInputContentContainerStyle
                    }
                    testId={'Send_Input_Field_Input'}
                    placeholder={
                      STRINGS.Send7.Send_Input_Field_Input.placeholder
                    }
                  />
                </AppColumn>
                <AppColumn
                  widgetId={'Send_Container_Column_21'}
                  spacing={10}
                  style={styles.sendContainerColumn21Style}
                >
                  <AppColumn
                    widgetId={'Send_Container_Column_31'}
                    style={styles.sendContainerColumn31Style}
                  >
                    <AppRow
                      widgetId={'Send_Container_Row_31'}
                      spacing={space['2']}
                      style={styles.sendContainerRow31Style}
                    >
                      <AppImage
                        widgetId={'Send_Image_51'}
                        source={imageSources.image__f1o76}
                        style={styles.sendImage51Style}
                      />
                      <AppText
                        widgetId={'Send_Label_UserName_Text_5'}
                        numberOfLines={0}
                        style={[
                          text.label.medium,
                          styles.sendLabelUserNameText5Style,
                        ]}
                        accessibilityLabel={
                          STRINGS.Send7.Send_Label_UserName_Text_5
                            .accessibilityLabel
                        }
                      >
                        {STRINGS.Send7.Send_Label_UserName_Text_5.label}
                      </AppText>
                    </AppRow>
                  </AppColumn>
                </AppColumn>
                <AppColumn
                  widgetId={'Send_Divider_Scrol_Divider'}
                  style={styles.sendDividerScrolDividerStyle}
                />
                <AppImage
                  widgetId={'Send_Background_Image_2'}
                  source={imageSources.image__ya6nb}
                  style={styles.sendBackgroundImage2Style}
                />
                <AppRow
                  widgetId={'Send_Container_Row_41'}
                  spacing={12}
                  style={styles.sendContainerRow41Style}
                >
                  <AppImage
                    widgetId={'Send_Image_6'}
                    resizeMode={'cover'}
                    source={imageSources.image__l71io}
                    style={styles.sendImage6Style}
                  />
                  <AppColumn
                    widgetId={'Send_Container_Column_41'}
                    spacing={8}
                    style={sharedStyles.iphone15BlueContainerColumn10}
                  >
                    <AppColumn
                      widgetId={'Send_Container_Column_51'}
                      style={styles.sendContainerColumn51Style}
                    >
                      <AppImage
                        widgetId={'Send_Image_7'}
                        source={imageSources.image__yct4u}
                        style={styles.sendImage7Style}
                      />
                      <AppImage
                        widgetId={'Send_Image_8'}
                        source={imageSources.image__p2m3n}
                        style={styles.sendImage8Style}
                      />
                      <AppText
                        widgetId={'Send_Label_UserName_Text_6'}
                        style={[
                          text.label.medium,
                          styles.sendLabelUserNameText6Style,
                        ]}
                        accessibilityLabel={
                          STRINGS.Send7.Send_Label_UserName_Text_6
                            .accessibilityLabel
                        }
                      >
                        {STRINGS.Send7.Send_Label_UserName_Text_6.label}
                      </AppText>
                    </AppColumn>
                    <AppText
                      widgetId={'Send_Label_PersonalFinance_Text'}
                      style={[
                        text.label.medium,
                        styles.sendLabelPersonalFinanceTextStyle,
                      ]}
                      accessibilityLabel={
                        STRINGS.Send7.Send_Label_PersonalFinance_Text
                          .accessibilityLabel
                      }
                    >
                      {STRINGS.Send7.Send_Label_PersonalFinance_Text.label}
                    </AppText>
                  </AppColumn>
                </AppRow>
                <AppImage
                  widgetId={'Send_Image_9'}
                  source={imageSources.image__8kaf8}
                  style={styles.sendImage9Style}
                />
                <AppColumn
                  widgetId={'Send_Container_Column_61'}
                  spacing={15}
                  style={styles.sendContainerColumn61Style}
                >
                  <AppText
                    widgetId={'Send_Label_Date_Text'}
                    style={[text.label.medium, styles.sendLabelDateTextStyle]}
                    accessibilityLabel={
                      STRINGS.Send7.Send_Label_Date_Text.accessibilityLabel
                    }
                  >
                    {STRINGS.Send7.Send_Label_Date_Text.label}
                  </AppText>
                  <AppText
                    widgetId={'Send_Body_Text'}
                    numberOfLines={5}
                    style={[text.label.medium, styles.sendBodyTextStyle]}
                    accessibilityLabel={
                      STRINGS.Send7.Send_Body_Text.accessibilityLabel
                    }
                  >
                    {STRINGS.Send7.Send_Body_Text.label}
                  </AppText>
                  <AppRow
                    widgetId={'Send_Container_Row_51'}
                    spacing={16}
                    style={styles.sendContainerRow51Style}
                  >
                    <AppColumn
                      widgetId={'Send_Container_Column_71'}
                      style={styles.sendContainerColumn71Style}
                    >
                      <AppRow
                        widgetId={'Send_Container_Row_6'}
                        spacing={space['2']}
                        style={styles.sendContainerRow6Style}
                      >
                        <AppImage
                          widgetId={'Send_Image_10'}
                          source={imageSources.image__wlox5}
                          style={styles.sendImage10Style}
                        />
                        <AppText
                          widgetId={'Send_Label_Comment_Text'}
                          numberOfLines={0}
                          style={[
                            text.label.medium,
                            styles.sendLabelCommentTextStyle,
                          ]}
                          accessibilityLabel={
                            STRINGS.Send7.Send_Label_Comment_Text
                              .accessibilityLabel
                          }
                        >
                          {STRINGS.Send7.Send_Label_Comment_Text.label}
                        </AppText>
                      </AppRow>
                    </AppColumn>
                    <AppColumn
                      widgetId={'Send_Container_Column_81'}
                      style={styles.sendContainerColumn81Style}
                    >
                      <AppImage
                        widgetId={'Send_Image_11'}
                        source={imageSources.image__4ecn}
                        style={styles.sendImage11Style}
                      />
                      <AppColumn
                        widgetId={'Send_Divider1'}
                        style={styles.sendDivider1Style}
                      />
                      <AppText
                        widgetId={'Send_Label_Likes_Text'}
                        style={[
                          text.label.medium,
                          styles.sendLabelLikesTextStyle,
                        ]}
                        accessibilityLabel={
                          STRINGS.Send7.Send_Label_Likes_Text.accessibilityLabel
                        }
                      >
                        {STRINGS.Send7.Send_Label_Likes_Text.label}
                      </AppText>
                    </AppColumn>
                    <AppColumn
                      widgetId={'Send_Container_Column_91'}
                      style={styles.sendContainerColumn91Style}
                    >
                      <AppRow
                        widgetId={'Send_Container_Row_7'}
                        spacing={space['2']}
                        style={styles.sendContainerRow7Style}
                      >
                        <AppImage
                          widgetId={'Send_Image_12'}
                          source={imageSources.image__06kq}
                          style={styles.sendImage12Style}
                        />
                        <AppText
                          widgetId={'Send_Label_Dislikes_Text'}
                          numberOfLines={0}
                          style={[
                            text.label.medium,
                            styles.sendLabelDislikesTextStyle,
                          ]}
                          accessibilityLabel={
                            STRINGS.Send7.Send_Label_Dislikes_Text
                              .accessibilityLabel
                          }
                        >
                          {STRINGS.Send7.Send_Label_Dislikes_Text.label}
                        </AppText>
                      </AppRow>
                    </AppColumn>
                  </AppRow>
                </AppColumn>
                <AppImage
                  widgetId={'Send_Background_Image_3'}
                  source={imageSources.image__g0l}
                  style={styles.sendBackgroundImage3Style}
                />
                <AppRow
                  widgetId={'Send_Container_Row_8'}
                  spacing={12}
                  style={styles.sendContainerRow8Style}
                >
                  <AppImage
                    widgetId={'Send_Image_13'}
                    resizeMode={'cover'}
                    source={imageSources.image__b99j9}
                    style={styles.sendImage13Style}
                  />
                  <AppColumn
                    widgetId={'Send_Container_Column_101'}
                    spacing={8}
                    style={sharedStyles.iphone15BlueContainerColumn10}
                  >
                    <AppColumn
                      widgetId={'Send_Container_Column_111'}
                      style={styles.sendContainerColumn111Style}
                    >
                      <AppImage
                        widgetId={'Send_Image_14'}
                        source={imageSources.image__hm5x}
                        style={styles.sendImage14Style}
                      />
                      <AppImage
                        widgetId={'Send_Image_15'}
                        source={imageSources.image__30y1y}
                        style={styles.sendImage15Style}
                      />
                      <AppText
                        widgetId={'Send_Label_UserName_Text_7'}
                        style={[
                          text.label.medium,
                          styles.sendLabelUserNameText7Style,
                        ]}
                        accessibilityLabel={
                          STRINGS.Send7.Send_Label_UserName_Text_7
                            .accessibilityLabel
                        }
                      >
                        {STRINGS.Send7.Send_Label_UserName_Text_7.label}
                      </AppText>
                    </AppColumn>
                    <AppText
                      widgetId={'Send_Label_PersonalFinance_Text_2'}
                      style={[
                        text.label.medium,
                        styles.sendLabelPersonalFinanceText2Style,
                      ]}
                      accessibilityLabel={
                        STRINGS.Send7.Send_Label_PersonalFinance_Text_2
                          .accessibilityLabel
                      }
                    >
                      {STRINGS.Send7.Send_Label_PersonalFinance_Text_2.label}
                    </AppText>
                  </AppColumn>
                </AppRow>
                <AppImage
                  widgetId={'Send_Image_16'}
                  source={imageSources.image__x747}
                  style={styles.sendImage16Style}
                />
                <AppColumn
                  widgetId={'Send_Container_Column_121'}
                  spacing={15}
                  style={styles.sendContainerColumn121Style}
                >
                  <AppText
                    widgetId={'Send_Label_Date_Text_2'}
                    style={[text.label.medium, styles.sendLabelDateText2Style]}
                    accessibilityLabel={
                      STRINGS.Send7.Send_Label_Date_Text_2.accessibilityLabel
                    }
                  >
                    {STRINGS.Send7.Send_Label_Date_Text_2.label}
                  </AppText>
                  <AppText
                    widgetId={'Send_Body_Text_2'}
                    numberOfLines={4}
                    style={[text.label.medium, styles.sendBodyText2Style]}
                    accessibilityLabel={
                      STRINGS.Send7.Send_Body_Text_2.accessibilityLabel
                    }
                  >
                    {STRINGS.Send7.Send_Body_Text_2.label}
                  </AppText>
                  <AppRow
                    widgetId={'Send_Container_Row_9'}
                    spacing={16}
                    style={styles.sendContainerRow9Style}
                  >
                    <AppColumn
                      widgetId={'Send_Container_Column_131'}
                      style={styles.sendContainerColumn131Style}
                    >
                      <AppRow
                        widgetId={'Send_Container_Row_10'}
                        spacing={space['2']}
                        style={styles.sendContainerRow10Style}
                      >
                        <AppImage
                          widgetId={'Send_Image_17'}
                          source={imageSources.image__2wjho}
                          style={styles.sendImage17Style}
                        />
                        <AppText
                          widgetId={'Send_Label_Comment_Text_2'}
                          numberOfLines={0}
                          style={[
                            text.label.medium,
                            styles.sendLabelCommentText2Style,
                          ]}
                          accessibilityLabel={
                            STRINGS.Send7.Send_Label_Comment_Text_2
                              .accessibilityLabel
                          }
                        >
                          {STRINGS.Send7.Send_Label_Comment_Text_2.label}
                        </AppText>
                      </AppRow>
                    </AppColumn>
                    <AppColumn
                      widgetId={'Send_Container_Column_141'}
                      style={styles.sendContainerColumn141Style}
                    >
                      <AppImage
                        widgetId={'Send_Image_18'}
                        source={imageSources.image__9vxyw}
                        style={styles.sendImage18Style}
                      />
                      <AppColumn
                        widgetId={'Send_Divider_2'}
                        style={styles.sendDivider2Style}
                      />
                      <AppText
                        widgetId={'Send_Label_Likes_Text_2'}
                        style={[
                          text.label.medium,
                          styles.sendLabelLikesText2Style,
                        ]}
                        accessibilityLabel={
                          STRINGS.Send7.Send_Label_Likes_Text_2
                            .accessibilityLabel
                        }
                      >
                        {STRINGS.Send7.Send_Label_Likes_Text_2.label}
                      </AppText>
                    </AppColumn>
                    <AppColumn
                      widgetId={'Send_Container_Column_151'}
                      style={styles.sendContainerColumn151Style}
                    >
                      <AppRow
                        widgetId={'Send_Container_Row_11'}
                        spacing={space['2']}
                        style={styles.sendContainerRow11Style}
                      >
                        <AppImage
                          widgetId={'Send_Image_19'}
                          source={imageSources.image__jjpt1}
                          style={styles.sendImage19Style}
                        />
                        <AppText
                          widgetId={'Send_Label_Dislikes_Text_2'}
                          numberOfLines={0}
                          style={[
                            text.label.medium,
                            styles.sendLabelDislikesText2Style,
                          ]}
                          accessibilityLabel={
                            STRINGS.Send7.Send_Label_Dislikes_Text_2
                              .accessibilityLabel
                          }
                        >
                          {STRINGS.Send7.Send_Label_Dislikes_Text_2.label}
                        </AppText>
                      </AppRow>
                    </AppColumn>
                  </AppRow>
                </AppColumn>
              </AppStack>
            </>
          );
        }}
      </ASForm>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  sendLabelUserNameText1Style: {
    fontWeight: 500,
    letterSpacing: -0.7000000000000001,
    lineHeight: 44,
    top: '19.1%',
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    left: '5.3%',
    position: 'absolute',
    fontSize: 35,
    color: '#151521',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerRow21Style: {
    top: '42.9%',
    width: '79.7%',
    position: 'absolute',
    left: '5.3%',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  sendLabelUserNameText21Style: {
    marginLeft: 114,
    fontWeight: 400,
    lineHeight: 15,
    color: 'rgba(21,21,33,0.3)',
    width: 74,
    letterSpacing: -0.24,
    fontSize: 12,
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendLabelUserNameText3Style: {
    fontSize: 12,
    letterSpacing: -0.24,
    width: 103,
    lineHeight: 15,
    fontWeight: 400,
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    color: 'rgba(21,21,33,0.3)',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendLabelUserNameText4Style: {
    letterSpacing: -0.24,
    lineHeight: 15,
    width: 100,
    fontWeight: 500,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    color: '#151521',
    top: '42.9%',
    fontSize: 12,
    left: '5.3%',
    position: 'absolute',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerColumn1Style: {
    height: '5.5%',
    width: '89.3%',
    left: '5.3%',
    top: '33.6%',
    position: 'absolute',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  sendInputFieldInputStyle: {
    height: '100%',
    borderColor: '#d0d0d3',
    borderWidth: 0.5,
    borderRadius: 32,
    paddingLeft: space['3'],
    width: '100%',
    backgroundColor: color.surface.default,
    paddingRight: space['3'],
  },
  sendInputFieldInputInputTextStyle: {
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    textAlign: 'left',
    color: color.text.primary,
    height: '100%',
  },
  sendInputFieldInputLabelTextStyle: {
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    maxWidth: '97%',
    paddingRight: 0,
    paddingLeft: 0,
    position: 'absolute',
  },
  sendInputFieldInputPlaceholderTextStyle: {
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
  },
  sendInputFieldInputPrefixIconStyles: {
    iconSize: 22,
    color: color.text.primary,
  },
  sendInputFieldInputSuffixIconStyles: {
    iconSize: 22,
    color: color.text.primary,
  },
  sendInputFieldInputErrorMessageTextStyle: { color: color.status.danger },
  sendInputFieldInputContentContainerStyle: {
    flexDirection: 'row',
    gap: space['2'],
    height: '100%',
    alignItems: 'center',
  },
  sendContainerColumn21Style: {
    alignItems: 'center',
    paddingRight: 19,
    top: '24.4%',
    justifyContent: 'center',
    backgroundColor: '#e9e6f7',
    height: '5.5%',
    width: '28%',
    borderRadius: 32,
    position: 'absolute',
    left: '66.7%',
    paddingLeft: 19,
    paddingTop: 16,
    paddingBottom: 16,
    flexShrink: 1,
  },
  sendContainerColumn31Style: {
    height: 15,
    width: '73.6%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  sendContainerRow31Style: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    flexShrink: 1,
  },
  sendImage51Style: {
    width: '30.1%',
    aspectRatio: 1.0988,
    height: 12,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  sendLabelUserNameText5Style: {
    flex: 1,
    lineHeight: 15,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    fontWeight: 500,
    color: '#151521',
    fontSize: 12,
    letterSpacing: -0.24,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendDividerScrolDividerStyle: {
    backgroundColor: '#f0f0f7',
    marginTop: 0,
    marginBottom: 0,
    left: '96.8%',
    height: '25.4%',
    width: '1.3%',
    position: 'absolute',
    top: '59.6%',
    marginLeft: 0,
    marginRight: 0,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  sendBackgroundImage2Style: {
    top: '48.4%',
    left: '5.3%',
    height: '32.6%',
    position: 'absolute',
    width: '89.3%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  sendContainerRow41Style: {
    height: '4.9%',
    top: '50.9%',
    left: '9.3%',
    width: '42.7%',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  sendImage6Style: {
    width: 40,
    height: 40,
    borderRadius: 19,
    objectFit: 'cover',
    flexBasis: 'auto',
  },
  sendContainerColumn51Style: {
    height: 14,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  sendImage7Style: {
    position: 'absolute',
    height: '100%',
    top: '0%',
    left: '86.9%',
    width: '13.1%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  sendImage8Style: {
    height: '24.1%',
    width: '4.6%',
    top: '35.4%',
    position: 'absolute',
    left: '91.6%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  sendLabelUserNameText6Style: {
    fontWeight: 500,
    lineHeight: 18,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    letterSpacing: -0.3,
    alignSelf: 'flex-end',
    width: 90,
    color: '#151521',
    fontSize: 15,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendLabelPersonalFinanceTextStyle: {
    color: 'rgba(21,21,33,0.5)',
    fontSize: 11,
    alignSelf: 'flex-start',
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    letterSpacing: -0.22,
    width: 89,
    fontWeight: 400,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendImage9Style: {
    height: '2.2%',
    position: 'absolute',
    top: '52.2%',
    left: '89.6%',
    width: '1.1%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  sendContainerColumn61Style: {
    height: '19.7%',
    top: '58.9%',
    width: '81.3%',
    position: 'absolute',
    left: '9.3%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  sendLabelDateTextStyle: {
    fontWeight: 500,
    color: 'rgba(21,21,33,0.5)',
    letterSpacing: -0.24,
    alignSelf: 'flex-start',
    width: 127,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendBodyTextStyle: {
    fontWeight: 500,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    fontSize: 13,
    letterSpacing: -0.26,
    lineHeight: 20,
    color: '#151521',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerRow51Style: {
    height: 15,
    width: 260.3388671875,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  sendContainerColumn71Style: {
    height: 15,
    width: 88,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  sendContainerRow6Style: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexShrink: 1,
  },
  sendImage10Style: {
    width: 13,
    height: 13,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  sendLabelCommentTextStyle: {
    fontWeight: 500,
    letterSpacing: -0.24,
    color: '#8c8e92',
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    lineHeight: 15,
    flex: 1,
    fontSize: 12,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerColumn81Style: {
    height: 15,
    width: 69,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  sendImage11Style: {
    position: 'absolute',
    left: '0%',
    top: '13.3%',
    height: '87.7%',
    width: '18.8%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  sendDivider1Style: {
    height: '53.3%',
    position: 'absolute',
    left: '2.9%',
    marginTop: 0,
    marginLeft: 0,
    width: '2.9%',
    marginRight: 0,
    backgroundColor: '#ffffff',
    top: '46.7%',
    marginBottom: 0,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  sendLabelLikesTextStyle: {
    lineHeight: 15,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    fontSize: 12,
    letterSpacing: -0.24,
    alignSelf: 'flex-end',
    width: 56,
    color: '#fe5722',
    fontWeight: 500,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerColumn91Style: {
    width: 71,
    height: 15,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  sendContainerRow7Style: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexShrink: 1,
  },
  sendImage12Style: {
    width: 14,
    height: 14,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  sendLabelDislikesTextStyle: {
    flex: 1,
    fontWeight: 500,
    lineHeight: 15,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    fontSize: 12,
    letterSpacing: -0.24,
    color: 'rgba(21,21,33,0.5)',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendBackgroundImage3Style: {
    left: '5.3%',
    width: '89.3%',
    height: '32.6%',
    position: 'absolute',
    top: '82.5%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  sendContainerRow8Style: {
    position: 'absolute',
    left: '9.3%',
    top: '85%',
    width: '44%',
    height: '4.9%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  sendImage13Style: {
    height: 40,
    borderRadius: 19,
    width: 40,
    objectFit: 'cover',
    flexBasis: 'auto',
  },
  sendContainerColumn111Style: {
    height: 14,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  sendImage14Style: {
    top: '0%',
    height: '100%',
    left: '87.5%',
    position: 'absolute',
    width: '12.5%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  sendImage15Style: {
    left: '91.9%',
    height: '24.1%',
    top: '35.4%',
    position: 'absolute',
    width: '4.4%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  sendLabelUserNameText7Style: {
    alignSelf: 'flex-end',
    lineHeight: 18,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    fontSize: 15,
    fontWeight: 500,
    letterSpacing: -0.3,
    color: '#151521',
    width: 98,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendLabelPersonalFinanceText2Style: {
    alignSelf: 'flex-start',
    width: 89,
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    letterSpacing: -0.22,
    color: 'rgba(21,21,33,0.5)',
    fontSize: 11,
    fontWeight: 400,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendImage16Style: {
    left: '89.6%',
    height: '2.2%',
    top: '86.3%',
    width: '1.1%',
    position: 'absolute',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  sendContainerColumn121Style: {
    top: '93%',
    width: '81.3%',
    left: '9.3%',
    position: 'absolute',
    height: '17.2%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  sendLabelDateText2Style: {
    width: 127,
    alignSelf: 'flex-start',
    lineHeight: 15,
    letterSpacing: -0.24,
    color: 'rgba(21,21,33,0.5)',
    fontSize: 12,
    fontWeight: 500,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendBodyText2Style: {
    color: '#151521',
    lineHeight: 20,
    fontWeight: 500,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    letterSpacing: -0.26,
    fontSize: 13,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerRow9Style: {
    height: 15,
    width: 260.3388671875,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  sendContainerColumn131Style: {
    height: 15,
    width: 88,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  sendContainerRow10Style: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    flexShrink: 1,
  },
  sendImage17Style: {
    height: 12,
    width: 12,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  sendLabelCommentText2Style: {
    fontSize: 12,
    letterSpacing: -0.24,
    flex: 1,
    lineHeight: 15,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    color: '#8c8e92',
    fontWeight: 500,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerColumn141Style: {
    width: 69,
    height: 15,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  sendImage18Style: {
    top: '13.3%',
    width: '18.8%',
    position: 'absolute',
    left: '0%',
    height: '87.7%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  sendDivider2Style: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    position: 'absolute',
    top: '46.7%',
    left: '4.3%',
    backgroundColor: '#ffffff',
    width: '2.9%',
    marginRight: 0,
    height: '53.3%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  sendLabelLikesText2Style: {
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    fontSize: 12,
    color: '#fe5722',
    lineHeight: 15,
    fontWeight: 500,
    letterSpacing: -0.24,
    width: 56,
    alignSelf: 'flex-end',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerColumn151Style: {
    height: 15,
    width: 71,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  sendContainerRow11Style: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexShrink: 1,
  },
  sendImage19Style: {
    width: 13,
    height: 13,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  sendLabelDislikesText2Style: {
    lineHeight: 15,
    color: 'rgba(21,21,33,0.5)',
    fontSize: 12,
    letterSpacing: -0.24,
    flex: 1,
    fontWeight: 500,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
});

export default Send7;

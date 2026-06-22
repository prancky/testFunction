import React, { useRef } from 'react';
import {
  AppAppBar,
  AppButton,
  AppColumn,
  AppContainer,
  AppForm,
  AppImage,
  AppPasswordTextField,
  AppRow,
  AppText,
  AppTextField,
} from '@/components/shared';

import { useNavigation } from '@react-navigation/native';

import {
  color,
  imageSources,
  space,
  component,
  text,
  radius,
  border,
} from '@/assets';

import { ASCheckBox, ASWrap } from '@/components';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type FormValues = {
  SignUp_Input_EnterYourFullName_Input?: string;
  SignUp_Input_Email_Input?: string;
  SignUp_Input_CreateApassword_Input?: string;
  SignUp_Input_RepeatYourPassword_Input?: string;
  SignUp_Container_CheckBox?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const SignUp: React.FC<ScreenProps> = ({ route }) => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-788832'}
      testID={'0b5576ab-5a17-4f93-b58b-a406151336ed'}
      style={sharedStyles.container2}
    >
      <AppForm
        widgetId={'ASForm-840095'}
        validationSchema={Yup.object().shape({})}
        initialValues={{
          SignUp_Input_EnterYourFullName_Input: '',
          SignUp_Input_Email_Input: '',
          SignUp_Input_CreateApassword_Input: '',
          SignUp_Input_RepeatYourPassword_Input: '',
          SignUp_Container_CheckBox: false,
        }}
        innerRef={formikRef}
      >
        {(formikProps: FormikProps<FormValues>) => {
          return (
            <>
              <AppAppBar
                widgetId={'SignUp_AppBar_Header_AppBar'}
                leadingIcon={
                  'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/b7a1eecb-3efd-4c39-bc9f-5dbdc9075ad4-2544_6228.png'
                }
                textStyles={[
                  text.title.medium,
                  sharedStyles.loginAppBarHeaderTopAppBarAppBarTextStyles,
                ]}
                centerContainerStyle={
                  sharedStyles.createTransferAppBarHeaderTopAppBarFromSharedComponAppBarCenterContainer
                }
                style={sharedStyles.loginAppBarHeaderTopAppBarAppBar}
                title={STRINGS.SignUp.SignUp_AppBar_Header_AppBar.title}
              />
              <AppColumn
                widgetId={'SignUp_Container_Main_Column'}
                spacing={40}
                style={styles.signUpContainerMainColumnStyle}
              >
                <AppColumn
                  widgetId={'SignUp_Container_Column'}
                  spacing={6.875}
                  style={sharedStyles.createQuoteContainerColumn3}
                >
                  <AppColumn
                    widgetId={'SignUp_Container_Heading2_Column'}
                    style={sharedStyles.loginContainerHeading2Column}
                  >
                    <AppText
                      widgetId={'SignUp_Label_CreateYourAccount_Text'}
                      numberOfLines={1}
                      style={[
                        text.label.medium,
                        styles.signUpLabelCreateYourAccountTextStyle,
                      ]}
                      accessibilityLabel={
                        STRINGS.SignUp.SignUp_Label_CreateYourAccount_Text
                          .accessibilityLabel
                      }
                    >
                      {STRINGS.SignUp.SignUp_Label_CreateYourAccount_Text.label}
                    </AppText>
                  </AppColumn>
                  <AppColumn
                    widgetId={'SignUp_Container_Column_2'}
                    style={styles.signUpContainerColumn2Style}
                  >
                    <AppText
                      widgetId={'SignUp_Label_SignUpToSendMoneyWorldwid_Text'}
                      numberOfLines={2}
                      style={[
                        text.label.medium,
                        sharedStyles.signUpLabelSignUpToSendMoneyWorldwidText,
                      ]}
                      accessibilityLabel={
                        STRINGS.SignUp
                          .SignUp_Label_SignUpToSendMoneyWorldwid_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.SignUp
                          .SignUp_Label_SignUpToSendMoneyWorldwid_Text.label
                      }
                    </AppText>
                  </AppColumn>
                </AppColumn>
                <AppColumn
                  widgetId={'SignUp_Container_Section_Column'}
                  style={styles.signUpContainerSectionColumnStyle}
                >
                  <AppColumn
                    widgetId={'SignUp_Container_Column_3'}
                    spacing={16}
                    style={sharedStyles.createQuoteContainerColumn3}
                  >
                    <AppColumn
                      widgetId={'SignUp_Container_Column_4'}
                      spacing={6}
                      style={styles.signUpContainerColumn4Style}
                    >
                      <AppColumn
                        widgetId={'SignUp_Container_Label_Column'}
                        style={sharedStyles.signUpContainerLabelColumn}
                      >
                        <AppText
                          widgetId={'SignUp_Label_UserName_Text'}
                          numberOfLines={2}
                          style={[
                            text.label.medium,
                            styles.signUpLabelUserNameTextStyle,
                          ]}
                          accessibilityLabel={
                            STRINGS.SignUp.SignUp_Label_UserName_Text
                              .accessibilityLabel
                          }
                        >
                          {STRINGS.SignUp.SignUp_Label_UserName_Text.label}
                        </AppText>
                      </AppColumn>
                      <AppTextField
                        widgetId={'SignUp_Input_EnterYourFullName_Input'}
                        style={styles.signUpInputEnterYourFullNameInputStyle}
                        placeholder={
                          STRINGS.SignUp.SignUp_Input_EnterYourFullName_Input
                            .placeholder
                        }
                      />
                    </AppColumn>
                    <AppColumn
                      widgetId={'SignUp_Container_Column_5'}
                      spacing={6}
                      style={styles.signUpContainerColumn5Style}
                    >
                      <AppColumn
                        widgetId={'SignUp_Container_Label_Column_2'}
                        style={sharedStyles.signUpContainerLabelColumn}
                      >
                        <AppText
                          widgetId={'SignUp_Label_UserName_Text_2'}
                          numberOfLines={2}
                          style={[
                            text.label.medium,
                            styles.signUpLabelUserNameText2Style,
                          ]}
                          accessibilityLabel={
                            STRINGS.SignUp.SignUp_Label_UserName_Text_2
                              .accessibilityLabel
                          }
                        >
                          {STRINGS.SignUp.SignUp_Label_UserName_Text_2.label}
                        </AppText>
                      </AppColumn>
                      <AppTextField
                        widgetId={'SignUp_Input_Email_Input'}
                        style={styles.signUpInputEmailInputStyle}
                        placeholder={
                          STRINGS.SignUp.SignUp_Input_Email_Input.placeholder
                        }
                      />
                    </AppColumn>
                    <AppColumn
                      widgetId={'SignUp_Container_Column_6'}
                      spacing={6}
                      style={styles.signUpContainerColumn6Style}
                    >
                      <AppColumn
                        widgetId={'SignUp_Container_Label_Column_3'}
                        style={sharedStyles.signUpContainerLabelColumn}
                      >
                        <AppText
                          widgetId={'SignUp_Label_UserName_Text_3'}
                          numberOfLines={2}
                          style={[
                            text.label.medium,
                            styles.signUpLabelUserNameText3Style,
                          ]}
                          accessibilityLabel={
                            STRINGS.SignUp.SignUp_Label_UserName_Text_3
                              .accessibilityLabel
                          }
                        >
                          {STRINGS.SignUp.SignUp_Label_UserName_Text_3.label}
                        </AppText>
                      </AppColumn>
                      <AppColumn
                        widgetId={'SignUp_Container_Column_7'}
                        style={styles.signUpContainerColumn7Style}
                      >
                        <AppPasswordTextField
                          widgetId={'SignUp_Input_CreateApassword_Input'}
                          style={styles.signUpInputCreateApasswordInputStyle}
                          placeholder={
                            STRINGS.SignUp.SignUp_Input_CreateApassword_Input
                              .placeholder
                          }
                        />
                      </AppColumn>
                    </AppColumn>
                    <AppColumn
                      widgetId={'SignUp_Container_Column_8'}
                      spacing={6}
                      style={styles.signUpContainerColumn8Style}
                    >
                      <AppColumn
                        widgetId={'SignUp_Container_Label_Column_4'}
                        style={sharedStyles.signUpContainerLabelColumn}
                      >
                        <AppText
                          widgetId={'SignUp_Label_UserName_Text_4'}
                          numberOfLines={2}
                          style={[
                            text.label.medium,
                            styles.signUpLabelUserNameText4Style,
                          ]}
                          accessibilityLabel={
                            STRINGS.SignUp.SignUp_Label_UserName_Text_4
                              .accessibilityLabel
                          }
                        >
                          {STRINGS.SignUp.SignUp_Label_UserName_Text_4.label}
                        </AppText>
                      </AppColumn>
                      <AppPasswordTextField
                        widgetId={'SignUp_Input_RepeatYourPassword_Input'}
                        style={styles.signUpInputRepeatYourPasswordInputStyle}
                        placeholder={
                          STRINGS.SignUp.SignUp_Input_RepeatYourPassword_Input
                            .placeholder
                        }
                      />
                    </AppColumn>
                  </AppColumn>
                  <AppButton
                    widgetId={'SignUp_Cta_SignUp_Button'}
                    style={styles.signUpCtaSignUpButtonStyle}
                    textStyle={[
                      text.label.medium,
                      sharedStyles.createQuoteCtaContinueButtonText,
                    ]}
                    accessibilityLabel={
                      STRINGS.SignUp.SignUp_Cta_SignUp_Button.accessibilityLabel
                    }
                    label={STRINGS.SignUp.SignUp_Cta_SignUp_Button.label}
                  />
                  <ASCheckBox
                    fillColor={'#ffffff'}
                    inactiveBorderColor={'#43474f'}
                    unFillColor={'transparent'}
                    activeBorderColor={color.brand.primary}
                    tintColor={color.surface.disabled}
                    defaultSelected={false}
                    iconSize={12}
                    size={24}
                    name={'SignUp_Container_CheckBox'}
                    labelStyles={[
                      text.label.medium,
                      styles.signUpContainerCheckBoxLabelStyles,
                    ]}
                    containerStyles={
                      styles.signUpContainerCheckBoxContainerStyles
                    }
                    iconStyles={styles.signUpContainerCheckBoxIconStyles}
                    innerIconStyles={
                      styles.signUpContainerCheckBoxInnerIconStyles
                    }
                    label={STRINGS.SignUp.SignUp_Container_CheckBox.label}
                    accessibilityLabel={
                      STRINGS.SignUp.SignUp_Container_CheckBox
                        .accessibilityLabel
                    }
                    testId={'SignUp_Container_CheckBox'}
                  />
                </AppColumn>
                <AppColumn
                  widgetId={'SignUp_Container_Section_Column_2'}
                  spacing={15.5}
                  style={styles.signUpContainerSectionColumn2Style}
                >
                  <AppColumn
                    widgetId={'SignUp_Container_Column_9'}
                    style={sharedStyles.createQuoteContainerColumn2}
                  >
                    <AppText
                      widgetId={'SignUp_Label_AlreadyUsingWiseLedger_Text'}
                      numberOfLines={1}
                      style={[
                        text.label.medium,
                        styles.signUpLabelAlreadyUsingWiseLedgerTextStyle,
                      ]}
                      accessibilityLabel={
                        STRINGS.SignUp.SignUp_Label_AlreadyUsingWiseLedger_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.SignUp.SignUp_Label_AlreadyUsingWiseLedger_Text
                          .label
                      }
                    </AppText>
                  </AppColumn>
                  <AppButton
                    widgetId={'SignUp_Cta_LogIn_Button'}
                    style={styles.signUpCtaLogInButtonStyle}
                    textStyle={[
                      text.label.medium,
                      styles.signUpCtaLogInButtonTextStyle,
                    ]}
                    accessibilityLabel={
                      STRINGS.SignUp.SignUp_Cta_LogIn_Button.accessibilityLabel
                    }
                    label={STRINGS.SignUp.SignUp_Cta_LogIn_Button.label}
                  />
                </AppColumn>
                <ASWrap
                  direction={'row'}
                  name={'SignUp_Container_Section_Wrap'}
                  style={styles.signUpContainerSectionWrapStyle}
                  testId={'SignUp_Container_Section_Wrap'}
                >
                  <AppButton
                    widgetId={'SignUp_Cta_Action_Button'}
                    accessibilityLabel={''}
                    icon={
                      'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/ce86fa11-fef3-4dd4-849b-979520685020-2544_6208.png'
                    }
                    style={styles.signUpCtaActionButtonStyle}
                    iconStyles={styles.signUpCtaActionButtonIconStyles}
                    textStyle={[
                      text.label.medium,
                      sharedStyles.createQuoteCtaActionButton2Text,
                    ]}
                    label={''}
                  />
                  <AppButton
                    widgetId={'SignUp_Cta_Action_Button_2'}
                    accessibilityLabel={''}
                    icon={
                      'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/73c7d0f8-9c3e-4d83-a7db-742c703a2add-2544_6213.png'
                    }
                    style={styles.signUpCtaActionButton2Style}
                    textStyle={[
                      text.label.medium,
                      sharedStyles.createQuoteCtaActionButton2Text,
                    ]}
                    iconStyles={styles.signUpCtaActionButton2IconStyles}
                    label={''}
                  />
                </ASWrap>
                <AppColumn
                  widgetId={'SignUp_Container_Footer_Column'}
                  style={styles.signUpContainerFooterColumnStyle}
                >
                  <AppRow
                    widgetId={'SignUp_Container_Background_Row'}
                    spacing={6}
                    style={styles.signUpContainerBackgroundRowStyle}
                  >
                    <AppColumn
                      widgetId={'SignUp_Container_Column_10'}
                      style={styles.signUpContainerColumn10Style}
                    >
                      <AppImage
                        widgetId={'SignUp_Image_Icon_Image'}
                        source={imageSources.image__4dw7h}
                        resizeMode={'stretch'}
                        style={styles.signUpImageIconImageStyle}
                      />
                    </AppColumn>
                    <AppColumn
                      widgetId={'SignUp_Container_Column_11'}
                      style={styles.signUpContainerColumn11Style}
                    >
                      <AppText
                        widgetId={
                          'SignUp_Label_YourDataIsSecurelyProtecte_Text'
                        }
                        numberOfLines={1}
                        style={[
                          text.label.medium,
                          styles.signUpLabelYourDataIsSecurelyProtecteTextStyle,
                        ]}
                        accessibilityLabel={
                          STRINGS.SignUp
                            .SignUp_Label_YourDataIsSecurelyProtecte_Text
                            .accessibilityLabel
                        }
                      >
                        {
                          STRINGS.SignUp
                            .SignUp_Label_YourDataIsSecurelyProtecte_Text.label
                        }
                      </AppText>
                    </AppColumn>
                  </AppRow>
                </AppColumn>
              </AppColumn>
            </>
          );
        }}
      </AppForm>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  signUpContainerMainColumnStyle: {
    maxWidth: 448,
    alignSelf: 'stretch',
    paddingRight: 24,
    minHeight: 1109,
    paddingBottom: 52.5,
    paddingLeft: 24,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  signUpLabelCreateYourAccountTextStyle: {
    fontFamily: 'Manrope-800-normal',
    lineHeight: 36,
    textAlignVertical: 'center',
    letterSpacing: -0.75,
    alignSelf: 'stretch',
    fontWeight: 800,
    fontSize: 30,
    color: '#001e40',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  signUpContainerColumn2Style: {
    alignSelf: 'stretch',
    height: 47,
    paddingBottom: 0.625,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  signUpContainerSectionColumnStyle: {
    height: 493,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  signUpContainerColumn4Style: {
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  signUpLabelUserNameTextStyle: {
    letterSpacing: 0.550000011920929,
    fontWeight: 600,
    lineHeight: 17,
    fontFamily: 'Inter-600-normal',
    fontSize: 11,
    textAlignVertical: 'center',
    textTransform: 'uppercase',
    color: '#737780',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  signUpInputEnterYourFullNameInputStyle: {
    backgroundColor: '#f3f3f6',
    height: 52,
    borderRadius: 12,
    alignSelf: 'stretch',
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  signUpContainerColumn5Style: {
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  signUpLabelUserNameText2Style: {
    letterSpacing: 0.550000011920929,
    fontSize: 11,
    textTransform: 'uppercase',
    textAlignVertical: 'center',
    fontFamily: 'Inter-600-normal',
    lineHeight: 17,
    color: '#737780',
    fontWeight: 600,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  signUpInputEmailInputStyle: {
    alignSelf: 'stretch',
    height: 52,
    borderRadius: 12,
    backgroundColor: '#f3f3f6',
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  signUpContainerColumn6Style: {
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  signUpLabelUserNameText3Style: {
    fontSize: 11,
    fontWeight: 600,
    textTransform: 'uppercase',
    textAlignVertical: 'center',
    letterSpacing: 0.550000011920929,
    fontFamily: 'Inter-600-normal',
    lineHeight: 17,
    color: '#737780',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  signUpContainerColumn7Style: {
    alignSelf: 'stretch',
    height: 52,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  signUpInputCreateApasswordInputStyle: {
    borderRadius: 12,
    alignSelf: 'stretch',
    height: 52,
    backgroundColor: '#f3f3f6',
    borderWidth: border.default,
    paddingRight: space['3'],
    width: '100%',
    borderColor: color.border.default,
    paddingLeft: space['3'],
  },
  signUpContainerColumn8Style: {
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  signUpLabelUserNameText4Style: {
    lineHeight: 17,
    letterSpacing: 0.550000011920929,
    fontWeight: 600,
    textTransform: 'uppercase',
    color: '#737780',
    fontFamily: 'Inter-600-normal',
    fontSize: 11,
    textAlignVertical: 'center',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  signUpInputRepeatYourPasswordInputStyle: {
    borderRadius: 12,
    height: 52,
    backgroundColor: '#f3f3f6',
    alignSelf: 'stretch',
    borderWidth: border.default,
    paddingRight: space['3'],
    width: '100%',
    borderColor: color.border.default,
    paddingLeft: space['3'],
  },
  signUpCtaSignUpButtonStyle: {
    paddingTop: 16,
    gradientColors: ['#001e40', '#003366'],
    height: 52,
    lineHeight: 20,
    shadowRadius: 40,
    gradientType: 'linear',
    shadowColor: 'rgba(0,30,64,0.1)',
    gradientStart: { x: 0.47740415557001636, y: -0.4774041555700165 },
    gradientStops: [0, 1],
    marginTop: 30,
    textAlign: 'center',
    gradientEnd: { x: 0.5225958533897035, y: 1.4774041466102963 },
    paddingBottom: 16,
    paddingRight: 0,
    alignSelf: 'stretch',
    borderRadius: 12,
    paddingLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 20 },
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  signUpContainerCheckBoxLabelStyles: {
    fontFamily: 'Inter-400-normal',
    textDecorationLine: 'none',
    marginLeft: space['2'],
  },
  signUpContainerCheckBoxContainerStyles: {
    marginTop: 24,
    paddingRight: 4,
    paddingLeft: 4,
    alignItems: 'center',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  signUpContainerCheckBoxIconStyles: {
    position: 'relative',
    borderRadius: radius.sm,
    borderWidth: border.default,
    flexShrink: 0,
    flexGrow: 0,
  },
  signUpContainerCheckBoxInnerIconStyles: {
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    strokeWidth: 3.5,
  },
  signUpContainerSectionColumn2Style: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#f3f3f6',
    padding: 24,
    borderRadius: 12,
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  signUpLabelAlreadyUsingWiseLedgerTextStyle: {
    width: '54%',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily: 'Inter-400-normal',
    fontSize: 12,
    color: '#43474f',
    lineHeight: 16,
    fontWeight: 400,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  signUpCtaLogInButtonStyle: {
    lineHeight: 20,
    paddingRight: 0,
    paddingBottom: 0,
    backgroundColor: 'transparent',
    paddingTop: 0,
    paddingLeft: 0,
    textAlign: 'center',
    height: 20,
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  signUpCtaLogInButtonTextStyle: {
    color: '#001e40',
    fontFamily: 'Inter-700-normal',
    fontWeight: 700,
    fontSize: 14,
  },
  signUpContainerSectionWrapStyle: {
    runSpacing: 16,
    height: 50,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    columnGap: space['2'],
    justifyContent: 'flex-start',
    rowGap: space['2'],
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  signUpCtaActionButtonStyle: {
    borderColor: 'rgba(195,198,209,0.15)',
    backgroundColor: '#ffffff',
    alignSelf: 'stretch',
    flex: 1,
    paddingTop: 0,
    padding: 16,
    borderWidth: 1,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    borderRadius: 12,
    height: component.button.height,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  signUpCtaActionButtonIconStyles: {
    iconSize: 13.5,
    color: color.brand.onPrimary,
  },
  signUpCtaActionButton2Style: {
    paddingTop: 0,
    padding: 16,
    borderColor: 'rgba(195,198,209,0.15)',
    alignSelf: 'stretch',
    flex: 1,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    paddingLeft: 0,
    paddingRight: 0,
    borderWidth: 1,
    paddingBottom: 0,
    height: component.button.height,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  signUpCtaActionButton2IconStyles: {
    iconSize: 15,
    color: color.brand.onPrimary,
  },
  signUpContainerFooterColumnStyle: {
    paddingBottom: 24,
    alignItems: 'center',
    alignSelf: 'stretch',
    aspectRatio: 7.027397627498555,
    paddingTop: 8,
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  signUpContainerBackgroundRowStyle: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    height: 17,
    opacity: 0.3,
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  signUpContainerColumn10Style: {
    alignItems: 'center',
    height: 17,
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  signUpImageIconImageStyle: {
    height: 16.66666603088379,
    objectFit: 'fill',
    width: 13.333333015441895,
    flexBasis: 'auto',
  },
  signUpContainerColumn11Style: {
    alignItems: 'center',
    height: 15,
    width: 253,
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  signUpLabelYourDataIsSecurelyProtecteTextStyle: {
    textAlign: 'center',
    fontFamily: 'Inter-700-normal',
    alignSelf: 'stretch',
    color: '#1a1c1e',
    textTransform: 'uppercase',
    lineHeight: 15,
    fontWeight: 700,
    fontSize: 10,
    letterSpacing: 2,
    textAlignVertical: 'center',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
});

export default SignUp;

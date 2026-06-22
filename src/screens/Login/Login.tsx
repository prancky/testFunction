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

import { color, imageSources, space, component, text, border } from '@/assets';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type FormValues = {
  Login_Input_EgalexExampleCom_Input?: string;
  Login_Input?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const Login: React.FC<ScreenProps> = ({ route }) => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-180278'}
      testID={'bbb2000c-ef83-427d-be18-955c3b9f00ff'}
      style={sharedStyles.container2}
    >
      <AppForm
        widgetId={'ASForm-919626'}
        validationSchema={Yup.object().shape({})}
        initialValues={{
          Login_Input_EgalexExampleCom_Input: '',
          Login_Input: '',
        }}
        innerRef={formikRef}
      >
        {(formikProps: FormikProps<FormValues>) => {
          return (
            <>
              <AppAppBar
                widgetId={'Login_AppBar_HeaderTopAppBar_AppBar'}
                leadingIcon={
                  'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/fc15de6d-55f7-4ec4-8f2b-ffb464f38b8b-2544_6150.png'
                }
                textStyles={[
                  text.title.medium,
                  sharedStyles.loginAppBarHeaderTopAppBarAppBarTextStyles,
                ]}
                style={sharedStyles.loginAppBarHeaderTopAppBarAppBar}
                centerContainerStyle={
                  sharedStyles.createTransferAppBarHeaderTopAppBarFromSharedComponAppBarCenterContainer
                }
                title={STRINGS.Login.Login_AppBar_HeaderTopAppBar_AppBar.title}
              />
              <AppColumn
                widgetId={'Login_Container_MainContentCanvas_Column'}
                style={styles.loginContainerMainContentCanvasColumnStyle}
              >
                <AppColumn
                  widgetId={'Login_Container_HeaderSectionMargin_Column'}
                  style={styles.loginContainerHeaderSectionMarginColumnStyle}
                >
                  <AppColumn
                    widgetId={'Login_Container_HeaderSection_Column'}
                    spacing={12}
                    style={sharedStyles.createQuoteContainerColumn3}
                  >
                    <AppColumn
                      widgetId={'Login_Container_Heading2_Column'}
                      style={sharedStyles.loginContainerHeading2Column}
                    >
                      <AppText
                        widgetId={'Login_Label_WelcomeBack_Text'}
                        numberOfLines={1}
                        style={[
                          text.label.medium,
                          styles.loginLabelWelcomeBackTextStyle,
                        ]}
                        accessibilityLabel={
                          STRINGS.Login.Login_Label_WelcomeBack_Text
                            .accessibilityLabel
                        }
                      >
                        {STRINGS.Login.Login_Label_WelcomeBack_Text.label}
                      </AppText>
                    </AppColumn>
                    <AppColumn
                      widgetId={'Login_Container_Column'}
                      style={sharedStyles.createQuoteContainerColumn13}
                    >
                      <AppText
                        widgetId={'Login_Label_LogInToManageYourGlobalA_Text'}
                        numberOfLines={2}
                        style={[
                          text.label.medium,
                          styles.loginLabelLogInToManageYourGlobalATextStyle,
                        ]}
                        accessibilityLabel={
                          STRINGS.Login
                            .Login_Label_LogInToManageYourGlobalA_Text
                            .accessibilityLabel
                        }
                      >
                        {
                          STRINGS.Login
                            .Login_Label_LogInToManageYourGlobalA_Text.label
                        }
                      </AppText>
                    </AppColumn>
                  </AppColumn>
                </AppColumn>
                <AppColumn
                  widgetId={'Login_Container_FormSection_Column'}
                  spacing={24}
                  style={sharedStyles.createQuoteContainerColumn3}
                >
                  <AppColumn
                    widgetId={'Login_Container_EmailInputGroup_Column'}
                    spacing={8}
                    style={sharedStyles.createQuoteContainerColumn3}
                  >
                    <AppColumn
                      widgetId={'Login_Container_LabelMargin_Column'}
                      style={styles.loginContainerLabelMarginColumnStyle}
                    >
                      <AppColumn
                        widgetId={'Login_Container_Label_Column'}
                        style={sharedStyles.loginContainerLabelColumn}
                      >
                        <AppText
                          widgetId={'Login_Label_EmailOrUsername_Text'}
                          numberOfLines={2}
                          style={[
                            text.label.medium,
                            styles.loginLabelEmailOrUsernameTextStyle,
                          ]}
                          accessibilityLabel={
                            STRINGS.Login.Login_Label_EmailOrUsername_Text
                              .accessibilityLabel
                          }
                        >
                          {STRINGS.Login.Login_Label_EmailOrUsername_Text.label}
                        </AppText>
                      </AppColumn>
                    </AppColumn>
                    <AppTextField
                      widgetId={'Login_Input_EgalexExampleCom_Input'}
                      style={styles.loginInputEgalexExampleComInputStyle}
                      placeholder={
                        STRINGS.Login.Login_Input_EgalexExampleCom_Input
                          .placeholder
                      }
                    />
                  </AppColumn>
                  <AppColumn
                    widgetId={'Login_Container_PasswordInputGroup_Column'}
                    spacing={8}
                    style={sharedStyles.createQuoteContainerColumn3}
                  >
                    <AppRow
                      widgetId={'Login_Container_Row'}
                      style={styles.loginContainerRowStyle}
                    >
                      <AppColumn
                        widgetId={'Login_Container_Label_Column_2'}
                        style={sharedStyles.createQuoteContainerColumn14}
                      >
                        <AppText
                          widgetId={'Login_Label_UserName_Text'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            styles.loginLabelUserNameTextStyle,
                          ]}
                          accessibilityLabel={
                            STRINGS.Login.Login_Label_UserName_Text
                              .accessibilityLabel
                          }
                        >
                          {STRINGS.Login.Login_Label_UserName_Text.label}
                        </AppText>
                      </AppColumn>
                      <AppColumn
                        widgetId={'Login_Container_Link_Column'}
                        style={sharedStyles.createQuoteContainerColumn14}
                      >
                        <AppText
                          widgetId={'Login_Label_ForgotPassword_Text'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            styles.loginLabelForgotPasswordTextStyle,
                          ]}
                          accessibilityLabel={
                            STRINGS.Login.Login_Label_ForgotPassword_Text
                              .accessibilityLabel
                          }
                        >
                          {STRINGS.Login.Login_Label_ForgotPassword_Text.label}
                        </AppText>
                      </AppColumn>
                    </AppRow>
                    <AppColumn
                      widgetId={'Login_Container_Column_2'}
                      style={styles.loginContainerColumn2Style}
                    >
                      <AppPasswordTextField
                        widgetId={'Login_Input'}
                        style={styles.loginInputStyle}
                        placeholder={STRINGS.Login.Login_Input.placeholder}
                      />
                    </AppColumn>
                  </AppColumn>
                  <AppButton
                    widgetId={'Login_Cta_LogIn_Button'}
                    style={styles.loginCtaLogInButtonStyle}
                    textStyle={[
                      text.label.medium,
                      sharedStyles.createRecepientCtaContinueButtonText,
                    ]}
                    label={STRINGS.Login.Login_Cta_LogIn_Button.label}
                    accessibilityLabel={
                      STRINGS.Login.Login_Cta_LogIn_Button.accessibilityLabel
                    }
                  />
                </AppColumn>
                <AppColumn
                  widgetId={'Login_Container_SecondaryActionMargin_Column'}
                  style={styles.loginContainerSecondaryActionMarginColumnStyle}
                >
                  <AppRow
                    widgetId={'Login_Container_SecondaryAction_Row'}
                    spacing={3.990000009536743}
                    style={styles.loginContainerSecondaryActionRowStyle}
                  >
                    <AppText
                      widgetId={'Login_Label_NewToWiseLedger_Text'}
                      numberOfLines={1}
                      style={[
                        text.label.medium,
                        styles.loginLabelNewToWiseLedgerTextStyle,
                      ]}
                      accessibilityLabel={
                        STRINGS.Login.Login_Label_NewToWiseLedger_Text
                          .accessibilityLabel
                      }
                    >
                      {STRINGS.Login.Login_Label_NewToWiseLedger_Text.label}
                    </AppText>
                    <AppText
                      widgetId={'Login_Label_OpenAnAccount_Text'}
                      numberOfLines={1}
                      style={[
                        text.label.medium,
                        styles.loginLabelOpenAnAccountTextStyle,
                      ]}
                      accessibilityLabel={
                        STRINGS.Login.Login_Label_OpenAnAccount_Text
                          .accessibilityLabel
                      }
                    >
                      {STRINGS.Login.Login_Label_OpenAnAccount_Text.label}
                    </AppText>
                  </AppRow>
                </AppColumn>
                <AppColumn
                  widgetId={'Login_Container_OverlayShadow_Column'}
                  style={styles.loginContainerOverlayShadowColumnStyle}
                >
                  <AppImage
                    widgetId={'Login_Background_FinancialLifestyleImage_Image'}
                    resizeMode={'cover'}
                    source={imageSources.image__p7ynr}
                    style={
                      styles.loginBackgroundFinancialLifestyleImageImageStyle
                    }
                  />
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
  loginContainerMainContentCanvasColumnStyle: {
    paddingRight: 24,
    alignSelf: 'stretch',
    paddingLeft: 24,
    height: 935,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  loginContainerHeaderSectionMarginColumnStyle: {
    paddingTop: 32,
    alignSelf: 'stretch',
    paddingBottom: 40,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  loginLabelWelcomeBackTextStyle: {
    color: '#1a1c1e',
    letterSpacing: -0.75,
    textAlign: 'left',
    lineHeight: 36,
    alignSelf: 'stretch',
    fontSize: 30,
    fontWeight: 700,
    fontFamily: 'Manrope-700-normal',
    textAlignVertical: 'center',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  loginLabelLogInToManageYourGlobalATextStyle: {
    textAlign: 'left',
    fontWeight: 400,
    color: '#43474f',
    alignSelf: 'stretch',
    fontFamily: 'Inter-400-normal',
    lineHeight: 24,
    textAlignVertical: 'center',
    fontSize: 16,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  loginContainerLabelMarginColumnStyle: {
    alignSelf: 'stretch',
    height: 20,
    paddingLeft: 4,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  loginLabelEmailOrUsernameTextStyle: {
    textAlign: 'left',
    alignSelf: 'stretch',
    fontWeight: 600,
    lineHeight: 20,
    fontSize: 14,
    textAlignVertical: 'center',
    color: '#43474f',
    fontFamily: 'Inter-600-normal',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  loginInputEgalexExampleComInputStyle: {
    alignSelf: 'stretch',
    borderRadius: 8,
    backgroundColor: '#f3f3f6',
    minHeight: 56,
    height: component.input.height,
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  loginContainerRowStyle: {
    height: 20,
    paddingRight: 4,
    paddingLeft: 4,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexShrink: 1,
  },
  loginLabelUserNameTextStyle: {
    fontFamily: 'Inter-600-normal',
    color: '#43474f',
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 600,
    textAlignVertical: 'center',
    lineHeight: 20,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  loginLabelForgotPasswordTextStyle: {
    color: '#001e40',
    lineHeight: 20,
    textAlignVertical: 'center',
    fontFamily: 'Inter-700-normal',
    fontWeight: 700,
    fontSize: 14,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  loginContainerColumn2Style: {
    alignSelf: 'stretch',
    height: 56,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  loginInputStyle: {
    borderRadius: 8,
    backgroundColor: '#f3f3f6',
    minHeight: 56,
    alignSelf: 'stretch',
    borderWidth: border.default,
    paddingRight: space['3'],
    width: '100%',
    height: component.input.height,
    borderColor: color.border.default,
    paddingLeft: space['3'],
  },
  loginCtaLogInButtonStyle: {
    gradientStops: [0, 1],
    gradientEnd: { x: 0.790935643357388, y: 2.2767858441728865 },
    shadowRadius: 25,
    height: 72,
    shadowColor: 'rgba(0,30,64,0.12)',
    paddingBottom: 0,
    paddingRight: 0,
    textAlign: 'center',
    gradientColors: ['#001e40', '#003366'],
    lineHeight: 24,
    gradientType: 'linear',
    paddingTop: 16,
    gradientStart: { x: 0.20906431346586302, y: -1.2767856863909834 },
    borderRadius: 12,
    paddingLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 10 },
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  loginContainerSecondaryActionMarginColumnStyle: {
    paddingBottom: 40,
    alignSelf: 'stretch',
    paddingTop: 20,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  loginContainerSecondaryActionRowStyle: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: 20,
    alignItems: 'stretch',
    flexShrink: 1,
  },
  loginLabelNewToWiseLedgerTextStyle: {
    flex: 0.556,
    fontWeight: 400,
    lineHeight: 20,
    color: '#43474f',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Inter-400-normal',
    textAlignVertical: 'center',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  loginLabelOpenAnAccountTextStyle: {
    textAlignVertical: 'center',
    fontFamily: 'Inter-700-normal',
    fontSize: 14,
    flex: 0.444,
    color: '#001e40',
    fontWeight: 700,
    textAlign: 'center',
    lineHeight: 20,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  loginContainerOverlayShadowColumnStyle: {
    shadowColor: 'rgba(0,0,0,0.05)',
    justifyContent: 'center',
    height: 326,
    alignItems: 'center',
    borderRadius: 25,
    width: 322,
    shadowRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.002)',
    flexShrink: 1,
    shadowOffset: { width: 0, height: 1 },
  },
  loginBackgroundFinancialLifestyleImageImageStyle: {
    borderRadius: 10,
    position: 'absolute',
    height: '100%',
    left: '2.8%',
    top: '0%',
    objectFit: 'cover',
    width: '100%',
    flexBasis: 'auto',
  },
});

export default Login;

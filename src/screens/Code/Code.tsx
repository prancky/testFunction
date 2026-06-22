import React, { useRef } from 'react';
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

import { color, imageSources, space, radius, border, text } from '@/assets';

import { ASForm, ASPin } from '@/components';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type FormValues = {
  Code_Container_NumberBoxInferredRow1_Pin?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const Code: React.FC<ScreenProps> = ({ route }) => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-297670'}
      testID={'ca85cbe8-7214-45b4-9569-b45969e59296'}
      style={sharedStyles.container}
    >
      <ASForm
        enableReinitialize={true}
        name={'ASForm-111330'}
        validationSchema={Yup.object().shape({})}
        initialValues={{ Code_Container_NumberBoxInferredRow1_Pin: '' }}
        innerRef={formikRef}
        testId={'ASForm-111330'}
      >
        {(formikProps: FormikProps<FormValues>) => {
          return (
            <>
              <AppAppBar
                widgetId={'Code_AppBar_SyntheticAppBar_AppBar'}
                style={sharedStyles.codeAppBarSyntheticAppBarAppBar}
              >
                <AppColumn
                  widgetId={'Code_Container_AppBarCenterColumn_Column'}
                  spacing={0}
                  style={sharedStyles.codeContainerAppBarCenterColumnColumn}
                >
                  <AppRow
                    widgetId={'Code_Container_AppBarIconsRow_Row'}
                    spacing={space['2']}
                    style={sharedStyles.codeContainerAppBarIconsRowRow}
                  >
                    <AppButton
                      widgetId={'Code_Cta_Action_Button'}
                      accessibilityLabel={''}
                      style={sharedStyles.codeCtaActionButton}
                      textStyle={[
                        text.label.medium,
                        sharedStyles.analyticsCtaActionButtonText,
                      ]}
                      label={''}
                    >
                      <AppStack
                        widgetId={'Code_Container_AppBarCompositeIcon1_Stack'}
                        style={sharedStyles.analyticsContainerStack}
                      >
                        <AppImage
                          widgetId={'Code_Image'}
                          resizeMode={'cover'}
                          source={imageSources.image__71606}
                          style={sharedStyles.codeImage}
                        />
                        <AppImage
                          widgetId={'Code_Image_2'}
                          source={imageSources.image__miyza}
                          style={sharedStyles.codeImage2}
                        />
                      </AppStack>
                    </AppButton>
                  </AppRow>
                </AppColumn>
              </AppAppBar>
              <AppImage
                widgetId={'Code_Background_Image'}
                source={imageSources.image__csyxo}
                resizeMode={'cover'}
                style={sharedStyles.analyticsBackgroundImage}
              />
              <AppStack
                widgetId={'Code_Container_Code_Stack'}
                style={sharedStyles.analyticsContainerAnalyticsStack}
              >
                <AppText
                  widgetId={'Code_Label_ResendCode_Text'}
                  style={[
                    text.label.medium,
                    styles.codeLabelResendCodeTextStyle,
                  ]}
                  accessibilityLabel={
                    STRINGS.Code.Code_Label_ResendCode_Text.accessibilityLabel
                  }
                >
                  {STRINGS.Code.Code_Label_ResendCode_Text.label}
                </AppText>
                <AppColumn
                  widgetId={'Code_Container_NumberBox_Column'}
                  style={styles.codeContainerNumberBoxColumnStyle}
                >
                  <ASPin
                    pinBoxBorderColor={color.border.default}
                    buttonIconColor={color.brand.primary}
                    pinBoxGap={15}
                    pinBoxSize={72.15384674072266}
                    pinLength={4}
                    enableNativeKeyboard={true}
                    pinBoxBorderWidth={border.default}
                    digitalNumericKeyboardGap={space['4']}
                    gap={space['8']}
                    justifyContentNumericKeyboard={'space-between'}
                    pinBoxRadius={radius.sm}
                    keyboardDismissMode={'interactive'}
                    keyboardButtonSize={64}
                    name={'Code_Container_NumberBoxInferredRow1_Pin'}
                    contentContainerStyle={
                      styles.codeContainerNumberBoxInferredRow1PinContentContainerStyle
                    }
                    undefined={
                      styles.codeContainerNumberBoxInferredRow1PinUndefined
                    }
                    inputTypography={[
                      text.label.medium,
                      sharedStyles.analyticsContainerTabsActiveTabTextTypography,
                    ]}
                    keyboardStyle={
                      styles.codeContainerNumberBoxInferredRow1PinKeyboardStyle
                    }
                    style={
                      sharedStyles.analyticsContainerTabsActiveTabTextTypography
                    }
                    keyboardTypography={[
                      text.label.medium,
                      sharedStyles.analyticsContainerTabsActiveTabTextTypography,
                    ]}
                    testId={'Code_Container_NumberBoxInferredRow1_Pin'}
                  />
                </AppColumn>
                <AppText
                  widgetId={'Code_Label_EnterCode_Text'}
                  style={[
                    text.label.medium,
                    styles.codeLabelEnterCodeTextStyle,
                  ]}
                  accessibilityLabel={
                    STRINGS.Code.Code_Label_EnterCode_Text.accessibilityLabel
                  }
                >
                  {STRINGS.Code.Code_Label_EnterCode_Text.label}
                </AppText>
                <AppText
                  widgetId={'Code_Body_Text'}
                  numberOfLines={2}
                  style={[text.label.medium, sharedStyles.codeBodyText]}
                  accessibilityLabel={
                    STRINGS.Code.Code_Body_Text.accessibilityLabel
                  }
                >
                  {STRINGS.Code.Code_Body_Text.label}
                </AppText>
                <AppButton
                  widgetId={'Code_Cta_Continue_Button'}
                  style={sharedStyles.codeCtaContinueButton}
                  textStyle={[
                    text.label.medium,
                    sharedStyles.codeCtaContinueButtonText,
                  ]}
                  label={STRINGS.Code.Code_Cta_Continue_Button.label}
                  accessibilityLabel={
                    STRINGS.Code.Code_Cta_Continue_Button.accessibilityLabel
                  }
                />
                <AppText
                  widgetId={'Code_Label_Otp_Text'}
                  style={[text.label.medium, styles.codeLabelOtpTextStyle]}
                  accessibilityLabel={
                    STRINGS.Code.Code_Label_Otp_Text.accessibilityLabel
                  }
                >
                  {STRINGS.Code.Code_Label_Otp_Text.label}
                </AppText>
              </AppStack>
            </>
          );
        }}
      </ASForm>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  codeLabelResendCodeTextStyle: {
    fontSize: 12,
    color: '#fd6251',
    fontWeight: 500,
    left: '39.2%',
    letterSpacing: 0.24,
    position: 'absolute',
    lineHeight: 15,
    top: '43.5%',
    fontFamily: 'Montserrat-500-normal',
    textAlign: 'center',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  codeContainerNumberBoxColumnStyle: {
    height: '6.2%',
    width: '89.3%',
    borderRadius: 15,
    left: '5.3%',
    position: 'absolute',
    top: '33.9%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  codeContainerNumberBoxInferredRow1PinContentContainerStyle: {
    height: '100%',
    containerDisplayMode: 'flex',
    containerFlexDirection: 'column',
    width: '100%',
  },
  codeContainerNumberBoxInferredRow1PinUndefined: {
    keyboardFlexDirection: 'column',
    inputFlexShrink: 0,
    inputFlexWrap: 'wrap',
    keyboardDisplayMode: 'flex',
    keyboardJustifyContent: 'center',
    inputAlignItems: 'center',
    inputJustifyContent: 'center',
    keyboardAlignItems: 'center',
    inputFlexGrow: 0,
    inputDisplayMode: 'flex',
  },
  codeContainerNumberBoxInferredRow1PinKeyboardStyle: {
    borderRadius: radius.sm,
    borderColor: color.border.default,
    borderWidth: border.default,
  },
  codeLabelEnterCodeTextStyle: {
    fontSize: 14,
    letterSpacing: 0.28,
    top: '29.4%',
    lineHeight: 21,
    color: '#1a1d1b',
    width: 87,
    fontFamily: 'Montserrat-500-normal',
    left: '5.3%',
    fontWeight: 500,
    position: 'absolute',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  codeLabelOtpTextStyle: {
    left: '5.3%',
    width: 88,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    fontWeight: 500,
    lineHeight: 44,
    top: '19.1%',
    color: '#151521',
    fontSize: 35,
    letterSpacing: -0.7000000000000001,
    position: 'absolute',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
});

export default Code;

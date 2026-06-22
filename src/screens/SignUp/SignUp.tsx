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

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import Route from '@/navigation/routes';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const Signup: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  const onPressContinuesignupCtaContinueButton = async () => {
    navigation.navigate(Route.CODE, {});
  };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-347161'}
      testID={'00f2b713-e37a-4a21-a1b4-6275f098d641'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'Signup_AppBar_SyntheticAppBar_AppBar'}
        style={sharedStyles.codeAppBarSyntheticAppBarAppBar}
      >
        <AppColumn
          widgetId={'Signup_Container_AppBarCenterColumn_Column'}
          spacing={0}
          style={sharedStyles.codeContainerAppBarCenterColumnColumn}
        >
          <AppRow
            widgetId={'Signup_Container_AppBarIconsRow_Row'}
            spacing={space['2']}
            style={sharedStyles.codeContainerAppBarIconsRowRow}
          >
            <AppButton
              widgetId={'Signup_Cta_Action_Button'}
              accessibilityLabel={''}
              style={sharedStyles.codeCtaActionButton}
              textStyle={[
                text.label.medium,
                sharedStyles.analyticsCtaActionButtonText,
              ]}
              label={''}
            >
              <AppStack
                widgetId={'Signup_Container_AppBarCompositeIcon1_Stack'}
                style={sharedStyles.analyticsContainerStack}
              >
                <AppImage
                  widgetId={'Signup_Image'}
                  resizeMode={'cover'}
                  source={imageSources.image__0gvw}
                  style={sharedStyles.codeImage}
                />
                <AppImage
                  widgetId={'Signup_Image_2'}
                  source={imageSources.image__96y2}
                  style={sharedStyles.codeImage2}
                />
              </AppStack>
            </AppButton>
          </AppRow>
        </AppColumn>
      </AppAppBar>
      <AppImage
        widgetId={'Signup_Background_Image'}
        resizeMode={'cover'}
        source={imageSources.image__k580}
        style={sharedStyles.analyticsBackgroundImage}
      />
      <AppStack
        widgetId={'Signup_Container_Signup_Stack'}
        style={sharedStyles.analyticsContainerAnalyticsStack}
      >
        <AppColumn
          widgetId={'Signup_Container_Column'}
          spacing={15}
          style={styles.signupContainerColumnStyle}
        >
          <AppText
            widgetId={'Signup_Label_LoginWithPhoneNumber_Text'}
            style={[
              text.label.medium,
              styles.signupLabelLoginWithPhoneNumberTextStyle,
            ]}
            accessibilityLabel={
              STRINGS.Signup.Signup_Label_LoginWithPhoneNumber_Text
                .accessibilityLabel
            }
          >
            {STRINGS.Signup.Signup_Label_LoginWithPhoneNumber_Text.label}
          </AppText>
          <AppRow
            widgetId={'Signup_Container_Row'}
            spacing={10}
            style={styles.signupContainerRowStyle}
          >
            <AppColumn
              widgetId={'Signup_Container_Column_2'}
              spacing={10}
              style={styles.signupContainerColumn2Style}
            >
              <AppImage
                widgetId={'Signup_Image_3'}
                source={imageSources.image__d3aj6}
                style={styles.signupImage3Style}
              />
              <AppImage
                widgetId={'Signup_Image_4'}
                source={imageSources.image__y7g9}
                style={styles.signupImage4Style}
              />
              <AppText
                widgetId={'Signup_Label_Text'}
                style={[text.label.medium, styles.signupLabelTextStyle]}
                accessibilityLabel={
                  STRINGS.Signup.Signup_Label_Text.accessibilityLabel
                }
              >
                {STRINGS.Signup.Signup_Label_Text.label}
              </AppText>
            </AppColumn>
            <AppColumn
              widgetId={'Signup_Container_Column_3'}
              spacing={10}
              style={styles.signupContainerColumn3Style}
            >
              <AppImage
                widgetId={'Signup_Image_5'}
                source={imageSources.image__iymf9}
                style={styles.signupImage5Style}
              />
              <AppText
                widgetId={'Signup_Label_Phone_Text'}
                style={[text.label.medium, styles.signupLabelPhoneTextStyle]}
                accessibilityLabel={
                  STRINGS.Signup.Signup_Label_Phone_Text.accessibilityLabel
                }
              >
                {STRINGS.Signup.Signup_Label_Phone_Text.label}
              </AppText>
            </AppColumn>
          </AppRow>
        </AppColumn>
        <AppText
          widgetId={'Signup_Body_Text'}
          numberOfLines={2}
          style={[text.label.medium, sharedStyles.codeBodyText]}
          accessibilityLabel={
            STRINGS.Signup.Signup_Body_Text.accessibilityLabel
          }
        >
          {STRINGS.Signup.Signup_Body_Text.label}
        </AppText>
        <AppText
          widgetId={'Signup_Label_AcodeWillBeSentToYourNu_Text'}
          style={[
            text.label.medium,
            styles.signupLabelAcodeWillBeSentToYourNuTextStyle,
          ]}
          accessibilityLabel={
            STRINGS.Signup.Signup_Label_AcodeWillBeSentToYourNu_Text
              .accessibilityLabel
          }
        >
          {STRINGS.Signup.Signup_Label_AcodeWillBeSentToYourNu_Text.label}
        </AppText>
        <AppButton
          widgetId={'Signup_Cta_Continue_Button'}
          onPress={() => {
            onPressContinuesignupCtaContinueButton({});
          }}
          textStyle={[
            text.label.medium,
            sharedStyles.codeCtaContinueButtonText,
          ]}
          style={sharedStyles.codeCtaContinueButton}
          accessibilityLabel={
            STRINGS.Signup.Signup_Cta_Continue_Button.accessibilityLabel
          }
          label={STRINGS.Signup.Signup_Cta_Continue_Button.label}
        />
        <AppText
          widgetId={'Signup_Label_SignUp_Text'}
          style={[text.label.medium, styles.signupLabelSignUpTextStyle]}
          accessibilityLabel={
            STRINGS.Signup.Signup_Label_SignUp_Text.accessibilityLabel
          }
        >
          {STRINGS.Signup.Signup_Label_SignUp_Text.label}
        </AppText>
      </AppStack>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  signupContainerColumnStyle: {
    top: '29.4%',
    width: '89.3%',
    position: 'absolute',
    left: '5.3%',
    height: '10.6%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  signupLabelLoginWithPhoneNumberTextStyle: {
    width: 201,
    color: '#1a1d1b',
    alignSelf: 'flex-start',
    letterSpacing: 0.28,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 500,
    fontFamily: 'Montserrat-500-normal',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  signupContainerRowStyle: {
    width: 335,
    height: 50,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  signupContainerColumn2Style: {
    aspectRatio: 1.4,
    flex: 1,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  signupImage3Style: {
    width: '100%',
    height: '100%',
    alignSelf: 'stretch',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  signupImage4Style: {
    position: 'absolute',
    width: '22.9%',
    height: '32%',
    left: '15.7%',
    top: '36%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  signupLabelTextStyle: {
    top: '30%',
    left: '47.1%',
    width: '47.1%',
    letterSpacing: 0.28,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 21,
    position: 'absolute',
    textAlign: 'center',
    color: '#000000',
    fontFamily: 'Montserrat-600-normal',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  signupContainerColumn3Style: {
    justifyContent: 'center',
    aspectRatio: 5.1,
    flex: 1,
    flexShrink: 1,
    alignItems: 'stretch',
  },
  signupImage5Style: {
    alignSelf: 'stretch',
    height: '100%',
    width: '100%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  signupLabelPhoneTextStyle: {
    letterSpacing: 0.28,
    width: 115,
    color: '#1a1d1b',
    left: '11%',
    position: 'absolute',
    top: '30%',
    fontSize: 14,
    fontFamily: 'Montserrat-600-normal',
    lineHeight: 21,
    fontWeight: 600,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  signupLabelAcodeWillBeSentToYourNuTextStyle: {
    fontWeight: 400,
    width: 228,
    color: '#727b88',
    left: '6.7%',
    top: '41.1%',
    letterSpacing: 0.36,
    fontFamily: 'Montserrat-400-normal',
    lineHeight: 19,
    position: 'absolute',
    fontSize: 12,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  signupLabelSignUpTextStyle: {
    top: '19.1%',
    fontSize: 35,
    letterSpacing: -0.7000000000000001,
    color: '#151521',
    lineHeight: 44,
    fontWeight: 500,
    width: 138,
    position: 'absolute',
    left: '5.3%',
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
});

export default Signup;

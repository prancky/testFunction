import React from 'react';
import {
  AppAppBar,
  AppButton,
  AppColumn,
  AppContainer,
  AppIconButton,
  AppImage,
  AppRow,
  AppText,
} from '@/components/shared';
import { useNavigation } from '@react-navigation/native';

import { imageSources, text } from '@/assets';

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

const WelcomeScreen: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  const onPressSignUpNowwelcomeScreenCtaSignUpButton = async () => {
    navigation.navigate(Route.SIGN_UP, {});
  };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-607162'}
      testID={'2f090b85-6616-4eec-a8aa-300d9ea768d1'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'WelcomeScreen_AppBar_HeaderTopAppBar_AppBar'}
        leadingIcon={
          'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/2b1a01ae-bb88-4699-86e4-b3b17eb00310-2566_7770.png'
        }
        leadingIconSize={18}
        textStyles={[
          text.title.medium,
          styles.welcomeScreenAppBarHeaderTopAppBarAppBarTextStyles,
        ]}
        centerContainerStyle={
          styles.welcomeScreenAppBarHeaderTopAppBarAppBarCenterContainerStyle
        }
        style={sharedStyles.finishScreenAppBarHeaderTopNavigationAnchorAppBar}
        title={
          STRINGS.WelcomeScreen.WelcomeScreen_AppBar_HeaderTopAppBar_AppBar
            .title
        }
      >
        <AppText
          widgetId={'WelcomeScreen_Title_UserName_Text'}
          style={[
            text.label.medium,
            styles.welcomeScreenTitleUserNameTextStyle,
          ]}
          accessibilityLabel={
            STRINGS.WelcomeScreen.WelcomeScreen_Title_UserName_Text
              .accessibilityLabel
          }
        >
          {STRINGS.WelcomeScreen.WelcomeScreen_Title_UserName_Text.label}
        </AppText>
        <AppImage
          widgetId={'WelcomeScreen_Image_UserProfile_Image'}
          source={imageSources.image__x35i}
          resizeMode={'contain'}
          style={styles.welcomeScreenImageUserProfileImageStyle}
        />
      </AppAppBar>
      <AppColumn
        widgetId={'WelcomeScreen_Container_Main_Column'}
        style={styles.welcomeScreenContainerMainColumnStyle}
      >
        <AppColumn
          widgetId={'WelcomeScreen_Container_LeftColumnEditorialContent_Column'}
          style={
            styles.welcomeScreenContainerLeftColumnEditorialContentColumnStyle
          }
        >
          <AppColumn
            widgetId={'WelcomeScreen_Container_Column'}
            style={styles.welcomeScreenContainerColumnStyle}
          >
            <AppButton
              widgetId={'WelcomeScreen_Cta_FastSecureTransfers_Button'}
              style={styles.welcomeScreenCtaFastSecureTransfersButtonStyle}
              textStyle={[
                text.label.medium,
                styles.welcomeScreenCtaFastSecureTransfersButtonTextStyle,
              ]}
              accessibilityLabel={
                STRINGS.WelcomeScreen
                  .WelcomeScreen_Cta_FastSecureTransfers_Button
                  .accessibilityLabel
              }
              label={
                STRINGS.WelcomeScreen
                  .WelcomeScreen_Cta_FastSecureTransfers_Button.label
              }
            />
            <AppColumn
              widgetId={'WelcomeScreen_Container_Heading2_Column'}
              style={styles.welcomeScreenContainerHeading2ColumnStyle}
            >
              <AppText
                widgetId={'WelcomeScreen_Label_SendMoneyWorldwideEasily_Text'}
                numberOfLines={5}
                style={[
                  text.label.medium,
                  styles.welcomeScreenLabelSendMoneyWorldwideEasilyTextStyle,
                ]}
                accessibilityLabel={
                  STRINGS.WelcomeScreen
                    .WelcomeScreen_Label_SendMoneyWorldwideEasily_Text
                    .accessibilityLabel
                }
              >
                {
                  STRINGS.WelcomeScreen
                    .WelcomeScreen_Label_SendMoneyWorldwideEasily_Text.label
                }
              </AppText>
            </AppColumn>
            <AppColumn
              widgetId={'WelcomeScreen_Container_Column_2'}
              style={styles.welcomeScreenContainerColumn2Style}
            >
              <AppText
                widgetId={
                  'WelcomeScreen_Label_TransferMoneyInternationally_Text'
                }
                numberOfLines={5}
                style={[
                  text.label.medium,
                  styles.welcomeScreenLabelTransferMoneyInternationallyTextStyle,
                ]}
                accessibilityLabel={
                  STRINGS.WelcomeScreen
                    .WelcomeScreen_Label_TransferMoneyInternationally_Text
                    .accessibilityLabel
                }
              >
                {
                  STRINGS.WelcomeScreen
                    .WelcomeScreen_Label_TransferMoneyInternationally_Text.label
                }
              </AppText>
            </AppColumn>
          </AppColumn>
          <AppColumn
            widgetId={'WelcomeScreen_Container_Column_3'}
            spacing={16}
            style={
              sharedStyles.createRecepientContainerSection2AccountInformationDColu2
            }
          >
            <AppButton
              widgetId={'WelcomeScreen_Cta_SignUp_Button'}
              onPress={() => {
                onPressSignUpNowwelcomeScreenCtaSignUpButton({});
              }}
              style={styles.welcomeScreenCtaSignUpButtonStyle}
              textStyle={[
                text.label.medium,
                sharedStyles.finishScreenCtaDoneButtonText,
              ]}
              accessibilityLabel={
                STRINGS.WelcomeScreen.WelcomeScreen_Cta_SignUp_Button
                  .accessibilityLabel
              }
              label={
                STRINGS.WelcomeScreen.WelcomeScreen_Cta_SignUp_Button.label
              }
            />
            <AppButton
              widgetId={'WelcomeScreen_Cta_Continue_Button'}
              style={styles.welcomeScreenCtaContinueButtonStyle}
              textStyle={[
                text.label.medium,
                styles.welcomeScreenCtaContinueButtonTextStyle,
              ]}
              label={
                STRINGS.WelcomeScreen.WelcomeScreen_Cta_Continue_Button.label
              }
              accessibilityLabel={
                STRINGS.WelcomeScreen.WelcomeScreen_Cta_Continue_Button
                  .accessibilityLabel
              }
            />
          </AppColumn>
          <AppColumn
            widgetId={'WelcomeScreen_Container_TrustIndicators_Column'}
            style={styles.welcomeScreenContainerTrustIndicatorsColumnStyle}
          >
            <AppColumn
              widgetId={'WelcomeScreen_Container_Column_4'}
              spacing={4}
              style={styles.welcomeScreenContainerColumn4Style}
            >
              <AppColumn
                widgetId={'WelcomeScreen_Container_Column_5'}
                style={styles.welcomeScreenContainerColumn5Style}
              >
                <AppText
                  widgetId={'WelcomeScreen_Label_Text'}
                  numberOfLines={1}
                  style={[
                    text.label.medium,
                    styles.welcomeScreenLabelTextStyle,
                  ]}
                  accessibilityLabel={
                    STRINGS.WelcomeScreen.WelcomeScreen_Label_Text
                      .accessibilityLabel
                  }
                >
                  {STRINGS.WelcomeScreen.WelcomeScreen_Label_Text.label}
                </AppText>
              </AppColumn>
              <AppColumn
                widgetId={'WelcomeScreen_Container_Column_6'}
                style={sharedStyles.fundTransferContainerColumn2}
              >
                <AppText
                  widgetId={'WelcomeScreen_Label_UserName_Text'}
                  numberOfLines={1}
                  style={[
                    text.label.medium,
                    styles.welcomeScreenLabelUserNameTextStyle,
                  ]}
                  accessibilityLabel={
                    STRINGS.WelcomeScreen.WelcomeScreen_Label_UserName_Text
                      .accessibilityLabel
                  }
                >
                  {
                    STRINGS.WelcomeScreen.WelcomeScreen_Label_UserName_Text
                      .label
                  }
                </AppText>
              </AppColumn>
            </AppColumn>
            <AppRow
              widgetId={'WelcomeScreen_Container_Row'}
              spacing={16}
              style={styles.welcomeScreenContainerRowStyle}
            >
              <AppRow
                widgetId={'WelcomeScreen_Container_Row_2'}
                spacing={8}
                style={styles.welcomeScreenContainerRow2Style}
              >
                <AppColumn
                  widgetId={'WelcomeScreen_Container_Column_7'}
                  style={sharedStyles.createQuoteContainerColumn14}
                >
                  <AppImage
                    widgetId={'WelcomeScreen_Image_Icon_Image'}
                    source={imageSources.image__rkx61}
                    resizeMode={'stretch'}
                    style={sharedStyles.createQuoteImageIconImage}
                  />
                </AppColumn>
                <AppColumn
                  widgetId={'WelcomeScreen_Container_Column_8'}
                  style={sharedStyles.createQuoteContainerColumn14}
                >
                  <AppText
                    widgetId={'WelcomeScreen_Label_SecureTransfers_Text'}
                    numberOfLines={1}
                    style={[
                      text.label.medium,
                      styles.welcomeScreenLabelSecureTransfersTextStyle,
                    ]}
                    accessibilityLabel={
                      STRINGS.WelcomeScreen
                        .WelcomeScreen_Label_SecureTransfers_Text
                        .accessibilityLabel
                    }
                  >
                    {
                      STRINGS.WelcomeScreen
                        .WelcomeScreen_Label_SecureTransfers_Text.label
                    }
                  </AppText>
                </AppColumn>
              </AppRow>
              <AppRow
                widgetId={'WelcomeScreen_Container_Row_3'}
                spacing={8}
                style={styles.welcomeScreenContainerRow3Style}
              >
                <AppColumn
                  widgetId={
                    'WelcomeScreen_Container_ContainerVisualWrapper_Column'
                  }
                  style={
                    sharedStyles.createQuoteContainerIconVisualWrapperColumn
                  }
                >
                  <AppIconButton
                    widgetId={'WelcomeScreen_Icon_Container_Icon'}
                    icon={
                      'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/c22cc0f2-660e-49c2-b7eb-ed2a4da83088-2566_7806.png'
                    }
                    size={20}
                    style={sharedStyles.finishScreenIconContainerIcon}
                  />
                </AppColumn>
                <AppColumn
                  widgetId={'WelcomeScreen_Container_Column_9'}
                  style={sharedStyles.createQuoteContainerColumn14}
                >
                  <AppText
                    widgetId={'WelcomeScreen_Label_TrustedByMillions_Text'}
                    numberOfLines={1}
                    style={[
                      text.label.medium,
                      styles.welcomeScreenLabelTrustedByMillionsTextStyle,
                    ]}
                    accessibilityLabel={
                      STRINGS.WelcomeScreen
                        .WelcomeScreen_Label_TrustedByMillions_Text
                        .accessibilityLabel
                    }
                  >
                    {
                      STRINGS.WelcomeScreen
                        .WelcomeScreen_Label_TrustedByMillions_Text.label
                    }
                  </AppText>
                </AppColumn>
              </AppRow>
            </AppRow>
          </AppColumn>
        </AppColumn>
        <AppColumn
          widgetId={
            'WelcomeScreen_Container_RightColumnVisualHeroArchitec_Column'
          }
          spacing={10}
          style={
            styles.welcomeScreenContainerRightColumnVisualHeroArchitecColumnStyle
          }
        >
          <AppColumn
            widgetId={'WelcomeScreen_Container_OverlayShadow_Column'}
            style={styles.welcomeScreenContainerOverlayShadowColumnStyle}
          >
            <AppImage
              widgetId={'WelcomeScreen_Background_FinancialVisual_Image'}
              source={imageSources.image__6c9l}
              resizeMode={'cover'}
              style={styles.welcomeScreenBackgroundFinancialVisualImageStyle}
            />
            <AppColumn
              widgetId={'WelcomeScreen_Container_FloatingOverlayCard_Column'}
              spacing={8}
              style={
                styles.welcomeScreenContainerFloatingOverlayCardColumnStyle
              }
            >
              <AppColumn
                widgetId={
                  'WelcomeScreen_Container_FloatingOverlayCardShadow_Column'
                }
                style={
                  styles.welcomeScreenContainerFloatingOverlayCardShadowColumnStyle
                }
              />
              <AppRow
                widgetId={'WelcomeScreen_Container_Row_4'}
                style={styles.welcomeScreenContainerRow4Style}
              >
                <AppColumn
                  widgetId={'WelcomeScreen_Container_Column_10'}
                  style={sharedStyles.createQuoteContainerColumn4}
                >
                  <AppColumn
                    widgetId={'WelcomeScreen_Container_Column_11'}
                    style={styles.welcomeScreenContainerColumn11Style}
                  >
                    <AppText
                      widgetId={'WelcomeScreen_Label_UserName_Text_2'}
                      numberOfLines={0}
                      style={[
                        text.label.medium,
                        styles.welcomeScreenLabelUserNameText2Style,
                      ]}
                      accessibilityLabel={
                        STRINGS.WelcomeScreen
                          .WelcomeScreen_Label_UserName_Text_2
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.WelcomeScreen
                          .WelcomeScreen_Label_UserName_Text_2.label
                      }
                    </AppText>
                  </AppColumn>
                  <AppColumn
                    widgetId={'WelcomeScreen_Container_Column_12'}
                    style={styles.welcomeScreenContainerColumn12Style}
                  >
                    <AppText
                      widgetId={'WelcomeScreen_Label_Price_Text'}
                      numberOfLines={0}
                      style={[
                        text.label.medium,
                        styles.welcomeScreenLabelPriceTextStyle,
                      ]}
                      accessibilityLabel={
                        STRINGS.WelcomeScreen.WelcomeScreen_Label_Price_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.WelcomeScreen.WelcomeScreen_Label_Price_Text
                          .label
                      }
                    </AppText>
                  </AppColumn>
                </AppColumn>
                <AppColumn
                  widgetId={'WelcomeScreen_Container_IconVisualWrapper_Column'}
                  style={
                    styles.welcomeScreenContainerIconVisualWrapperColumnStyle
                  }
                >
                  <AppIconButton
                    widgetId={'WelcomeScreen_Icon'}
                    icon={
                      'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/ac60be11-65f0-4310-8bb7-67abb3c1fca6-2566_7822.svg'
                    }
                    size={16}
                    style={styles.welcomeScreenIconStyle}
                  />
                </AppColumn>
              </AppRow>
              <AppColumn
                widgetId={'WelcomeScreen_Container_Overlay_Column'}
                style={styles.welcomeScreenContainerOverlayColumnStyle}
              >
                <AppColumn
                  widgetId={'WelcomeScreen_Container_Gradient_Column'}
                  style={styles.welcomeScreenContainerGradientColumnStyle}
                />
              </AppColumn>
              <AppRow
                widgetId={'WelcomeScreen_Container_Row_5'}
                style={styles.welcomeScreenContainerRow5Style}
              >
                <AppColumn
                  widgetId={'WelcomeScreen_Container_Column_13'}
                  style={sharedStyles.createQuoteContainerColumn3}
                >
                  <AppText
                    widgetId={'WelcomeScreen_Label_UserName_Text_3'}
                    numberOfLines={1}
                    style={[
                      text.label.medium,
                      styles.welcomeScreenLabelUserNameText3Style,
                    ]}
                    accessibilityLabel={
                      STRINGS.WelcomeScreen.WelcomeScreen_Label_UserName_Text_3
                        .accessibilityLabel
                    }
                  >
                    {
                      STRINGS.WelcomeScreen.WelcomeScreen_Label_UserName_Text_3
                        .label
                    }
                  </AppText>
                </AppColumn>
                <AppColumn
                  widgetId={'WelcomeScreen_Container_Column_14'}
                  style={sharedStyles.createQuoteContainerColumn3}
                >
                  <AppText
                    widgetId={'WelcomeScreen_Label_Complete_Text'}
                    numberOfLines={1}
                    style={[
                      text.label.medium,
                      styles.welcomeScreenLabelCompleteTextStyle,
                    ]}
                    accessibilityLabel={
                      STRINGS.WelcomeScreen.WelcomeScreen_Label_Complete_Text
                        .accessibilityLabel
                    }
                  >
                    {
                      STRINGS.WelcomeScreen.WelcomeScreen_Label_Complete_Text
                        .label
                    }
                  </AppText>
                </AppColumn>
              </AppRow>
            </AppColumn>
          </AppColumn>
          <AppColumn
            widgetId={'WelcomeScreen_Container_DecorativeElements_Column'}
            style={styles.welcomeScreenContainerDecorativeElementsColumnStyle}
          />
          <AppColumn
            widgetId={'WelcomeScreen_Container_OverlayBlur_Column'}
            style={styles.welcomeScreenContainerOverlayBlurColumnStyle}
          />
        </AppColumn>
      </AppColumn>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  welcomeScreenAppBarHeaderTopAppBarAppBarTextStyles: {
    fontWeight: 700,
    color: '#1e3a8a',
    fontSize: 20,
    textDecorationLine: 'none',
    flex: 1,
    fontFamily: 'Poppins-700-normal',
    textAlign: 'left',
  },
  welcomeScreenAppBarHeaderTopAppBarAppBarCenterContainerStyle: { padding: 12 },
  welcomeScreenTitleUserNameTextStyle: {
    lineHeight: 24,
    fontFamily: 'Inter-500-normal',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 500,
    color: '#64748b',
    fontSize: 16,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  welcomeScreenImageUserProfileImageStyle: {
    height: 40,
    width: 40,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  welcomeScreenContainerMainColumnStyle: {
    width: '93.2%',
    maxWidth: 1280,
    height: '90.3%',
    left: '3.4%',
    top: '9.7%',
    position: 'absolute',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  welcomeScreenContainerLeftColumnEditorialContentColumnStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 793,
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  welcomeScreenContainerColumnStyle: {
    height: 377,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  welcomeScreenCtaFastSecureTransfersButtonStyle: {
    paddingRight: 12,
    borderRadius: 12,
    lineHeight: 16,
    backgroundColor: '#5dfd8a',
    textAlign: 'left',
    paddingBottom: 4,
    paddingTop: 4,
    height: 24,
    paddingLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  welcomeScreenCtaFastSecureTransfersButtonTextStyle: {
    color: '#007232',
    fontFamily: 'Inter-700-normal',
    fontWeight: 700,
    letterSpacing: 1.2000000476837158,
    fontSize: 12,
  },
  welcomeScreenContainerHeading2ColumnStyle: {
    marginTop: 16,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  welcomeScreenLabelSendMoneyWorldwideEasilyTextStyle: {
    textAlignVertical: 'center',
    fontWeight: 800,
    alignSelf: 'stretch',
    letterSpacing: -1.399999976158142,
    fontSize: 56,
    color: '#1e3a8a',
    lineHeight: 62,
    fontFamily: 'Manrope-800-normal',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  welcomeScreenContainerColumn2Style: {
    height: 74,
    maxWidth: 576,
    marginTop: 16,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  welcomeScreenLabelTransferMoneyInternationallyTextStyle: {
    textAlignVertical: 'center',
    color: '#43474f',
    alignSelf: 'stretch',
    fontWeight: 400,
    lineHeight: 33,
    fontSize: 20,
    fontFamily: 'Inter-400-normal',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  welcomeScreenCtaSignUpButtonStyle: {
    borderRadius: 12,
    shadowColor: 'rgba(0,27,60,0.06)',
    gradientStops: [0, 1],
    textAlign: 'center',
    gradientColors: ['#001e40', '#003366'],
    gradientType: 'linear',
    gradientEnd: { x: 0.5359766066400647, y: 1.464023393359935 },
    paddingRight: 0,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    alignSelf: 'stretch',
    shadowRadius: 40,
    gradientStart: { x: 0.46402341597095387, y: -0.4640234159709542 },
    lineHeight: 28,
    height: 76,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 20 },
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  welcomeScreenCtaContinueButtonStyle: {
    paddingBottom: 0,
    height: 68,
    paddingLeft: 0,
    paddingRight: 0,
    alignSelf: 'stretch',
    lineHeight: 28,
    textAlign: 'center',
    backgroundColor: '#f3f3f6',
    borderRadius: 12,
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  welcomeScreenCtaContinueButtonTextStyle: {
    color: '#001e40',
    fontWeight: 700,
    fontFamily: 'Inter-700-normal',
    fontSize: 18,
  },
  welcomeScreenContainerTrustIndicatorsColumnStyle: {
    borderTopWidth: 2,
    alignSelf: 'stretch',
    aspectRatio: 2.7777777777777777,
    paddingRight: 70,
    borderColor: 'rgba(195,198,209,0.2)',
    marginTop: 32,
    paddingTop: 36,
    paddingLeft: 70,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  welcomeScreenContainerColumn4Style: {
    height: '36.1%',
    top: '25%',
    position: 'absolute',
    left: '0%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  welcomeScreenContainerColumn5Style: {
    alignSelf: 'stretch',
    width: '100%',
    height: 32,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  welcomeScreenLabelTextStyle: {
    width: 69,
    fontSize: 24,
    lineHeight: 32,
    fontFamily: 'Inter-700-normal',
    textAlignVertical: 'center',
    color: '#1e3a8a',
    fontWeight: 700,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  welcomeScreenLabelUserNameTextStyle: {
    alignSelf: 'stretch',
    fontFamily: 'Inter-700-normal',
    fontSize: 12,
    textAlignVertical: 'center',
    textTransform: 'uppercase',
    fontWeight: 700,
    lineHeight: 16,
    color: '#94a3b8',
    letterSpacing: 1.2000000476837158,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  welcomeScreenContainerRowStyle: {
    alignItems: 'center',
    height: '13.9%',
    top: '83.3%',
    left: '0%',
    alignSelf: 'flex-end',
    position: 'absolute',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  welcomeScreenContainerRow2Style: {
    height: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  welcomeScreenLabelSecureTransfersTextStyle: {
    color: '#1a1c1e',
    textAlignVertical: 'center',
    fontWeight: 500,
    fontFamily: 'Inter-500-normal',
    lineHeight: 20,
    fontSize: 14,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  welcomeScreenContainerRow3Style: {
    alignItems: 'center',
    height: 20,
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  welcomeScreenLabelTrustedByMillionsTextStyle: {
    fontWeight: 500,
    lineHeight: 20,
    fontFamily: 'Inter-500-normal',
    textAlignVertical: 'center',
    color: '#1a1c1e',
    fontSize: 14,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  welcomeScreenContainerRightColumnVisualHeroArchitecColumnStyle: {
    aspectRatio: 0.8410256936739843,
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 12,
    paddingRight: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingLeft: 10,
    flexShrink: 1,
  },
  welcomeScreenContainerOverlayShadowColumnStyle: {
    shadowRadius: 50,
    overflow: 'hidden',
    aspectRatio: 0.8000000500801313,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowSpread: -12,
    borderRadius: 32,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,0.002)',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    shadowOffset: { width: 0, height: 25 },
  },
  welcomeScreenBackgroundFinancialVisualImageStyle: {
    width: '100%',
    alignSelf: 'stretch',
    height: '99.9%',
    objectFit: 'cover',
    flexBasis: 'auto',
  },
  welcomeScreenContainerFloatingOverlayCardColumnStyle: {
    top: '66.1%',
    borderRadius: 16,
    height: '28.9%',
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '87.7%',
    backgroundBlurRadius: 12,
    padding: 24,
    left: '6.2%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  welcomeScreenContainerFloatingOverlayCardShadowColumnStyle: {
    left: '0%',
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.002)',
    height: '100%',
    shadowColor: 'rgba(0,0,0,0.1)',
    width: '100%',
    top: '0%',
    borderRadius: 16,
    shadowSpread: -6,
    shadowRadius: 10,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    shadowOffset: { width: 0, height: 8 },
  },
  welcomeScreenContainerRow4Style: {
    paddingBottom: 8,
    alignSelf: 'stretch',
    height: 56,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexShrink: 1,
  },
  welcomeScreenContainerColumn11Style: {
    alignSelf: 'stretch',
    width: '100%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  welcomeScreenLabelUserNameText2Style: {
    fontFamily: 'Inter-700-normal',
    fontWeight: 700,
    lineHeight: 16,
    textTransform: 'uppercase',
    color: '#94a3b8',
    alignSelf: 'stretch',
    fontSize: 12,
    letterSpacing: -0.6000000238418579,
    textAlignVertical: 'center',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  welcomeScreenContainerColumn12Style: {
    alignSelf: 'stretch',
    width: '100%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  welcomeScreenLabelPriceTextStyle: {
    textAlignVertical: 'center',
    lineHeight: 32,
    fontSize: 24,
    color: '#1e3a8a',
    alignSelf: 'stretch',
    fontFamily: 'Manrope-700-normal',
    fontWeight: 700,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  welcomeScreenContainerIconVisualWrapperColumnStyle: {
    justifyContent: 'center',
    width: 16,
    height: 16,
    alignItems: 'center',
    borderRadius: 0,
    backgroundColor: 'transparent',
    flexShrink: 1,
  },
  welcomeScreenIconStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingTop: 0,
    width: '100%',
  },
  welcomeScreenContainerOverlayColumnStyle: {
    minHeight: 6,
    paddingRight: 74,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(195,198,209,0.2)',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 12,
    flexShrink: 1,
    alignItems: 'stretch',
  },
  welcomeScreenContainerGradientColumnStyle: {
    gradientEnd: { x: 1, y: 0.5 },
    gradientType: 'linear',
    gradientStops: [0, 1],
    gradientStart: { x: 0, y: 0.5 },
    height: 6,
    alignSelf: 'stretch',
    gradientColors: ['#006d2f', '#66ff8e'],
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  welcomeScreenContainerRow5Style: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    height: 15,
    alignItems: 'stretch',
    flexShrink: 1,
  },
  welcomeScreenLabelUserNameText3Style: {
    textAlignVertical: 'center',
    fontFamily: 'Inter-700-normal',
    fontWeight: 700,
    textTransform: 'uppercase',
    lineHeight: 15,
    fontSize: 10,
    color: '#94a3b8',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  welcomeScreenLabelCompleteTextStyle: {
    fontFamily: 'Inter-700-normal',
    fontWeight: 700,
    textAlignVertical: 'center',
    textTransform: 'uppercase',
    lineHeight: 15,
    color: '#006d2f',
    fontSize: 10,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  welcomeScreenContainerDecorativeElementsColumnStyle: {
    position: 'absolute',
    left: '49.3%',
    top: '-9.8%',
    backgroundColor: 'rgba(0,109,47,0.1)',
    width: '62.4%',
    borderRadius: 12,
    height: '52.5%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  welcomeScreenContainerOverlayBlurColumnStyle: {
    top: '70.4%',
    left: '-11.7%',
    borderRadius: 12,
    position: 'absolute',
    backgroundColor: 'rgba(0,30,64,0.05)',
    height: '39.4%',
    width: '46.8%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

export default WelcomeScreen;

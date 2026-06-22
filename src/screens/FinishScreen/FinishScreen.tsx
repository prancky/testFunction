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

import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const FinishScreen: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-651620'}
      testID={'1458e16b-1449-4444-81ce-ee4e6aed846b'}
      style={sharedStyles.container2}
    >
      <AppAppBar
        widgetId={'FinishScreen_AppBar_HeaderTopNavigationAnchor_AppBar'}
        leadingIcon={
          'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/309e7502-940e-4764-960b-d04f78b15b77-2562_7643.png'
        }
        centerContainerStyle={
          styles.finishScreenAppBarHeaderTopNavigationAnchorAppBarCenterContainerStyle
        }
        textStyles={[
          text.title.medium,
          sharedStyles.createQuoteAppBarHeaderTopAppBarAppBarTextStyles,
        ]}
        style={sharedStyles.finishScreenAppBarHeaderTopNavigationAnchorAppBar}
        title={
          STRINGS.FinishScreen
            .FinishScreen_AppBar_HeaderTopNavigationAnchor_AppBar.title
        }
      >
        <AppImage
          widgetId={'FinishScreen_Image_UserProfile_Image'}
          source={imageSources.image__uadew}
          resizeMode={'contain'}
          style={styles.finishScreenImageUserProfileImageStyle}
        />
      </AppAppBar>
      <AppColumn
        widgetId={'FinishScreen_Container_Main_Column'}
        style={styles.finishScreenContainerMainColumnStyle}
      >
        <AppColumn
          widgetId={'FinishScreen_Container_SuccessVisualSectionMargin_Column'}
          style={
            styles.finishScreenContainerSuccessVisualSectionMarginColumnStyle
          }
        >
          <AppColumn
            widgetId={'FinishScreen_Container_SuccessVisualSection_Column'}
            style={styles.finishScreenContainerSuccessVisualSectionColumnStyle}
          >
            <AppColumn
              widgetId={'FinishScreen_Container_Margin_Column'}
              style={styles.finishScreenContainerMarginColumnStyle}
            >
              <AppColumn
                widgetId={'FinishScreen_Container_Column'}
                style={styles.finishScreenContainerColumnStyle}
              >
                <AppRow
                  widgetId={'FinishScreen_Container_IconCircle_Row'}
                  style={styles.finishScreenContainerIconCircleRowStyle}
                >
                  <AppColumn
                    widgetId={
                      'FinishScreen_Container_ContainerVisualWrapper_Column'
                    }
                    style={
                      styles.finishScreenContainerContainerVisualWrapperColumnStyle
                    }
                  >
                    <AppIconButton
                      widgetId={'FinishScreen_Icon_Container_Icon'}
                      icon={
                        'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/99be2d51-36df-4b3b-87f1-9ac5ec4484c9-2562_7594.png'
                      }
                      size={40}
                      style={sharedStyles.finishScreenIconContainerIcon}
                    />
                  </AppColumn>
                </AppRow>
              </AppColumn>
            </AppColumn>
            <AppColumn
              widgetId={'FinishScreen_Container_Heading2Margin_Column'}
              style={styles.finishScreenContainerHeading2MarginColumnStyle}
            >
              <AppColumn
                widgetId={'FinishScreen_Container_Heading2_Column'}
                style={styles.finishScreenContainerHeading2ColumnStyle}
              >
                <AppText
                  widgetId={'FinishScreen_Label_UserName_Text'}
                  numberOfLines={3}
                  style={[
                    text.label.medium,
                    styles.finishScreenLabelUserNameTextStyle,
                  ]}
                  accessibilityLabel={
                    STRINGS.FinishScreen.FinishScreen_Label_UserName_Text
                      .accessibilityLabel
                  }
                >
                  {STRINGS.FinishScreen.FinishScreen_Label_UserName_Text.label}
                </AppText>
              </AppColumn>
            </AppColumn>
            <AppColumn
              widgetId={'FinishScreen_Container_Column_2'}
              style={styles.finishScreenContainerColumn2Style}
            >
              <AppText
                widgetId={'FinishScreen_Label_YourFundsAreBeingMovedThr_Text'}
                numberOfLines={2}
                style={[
                  text.label.medium,
                  styles.finishScreenLabelYourFundsAreBeingMovedThrTextStyle,
                ]}
                accessibilityLabel={
                  STRINGS.FinishScreen
                    .FinishScreen_Label_YourFundsAreBeingMovedThr_Text
                    .accessibilityLabel
                }
              >
                {
                  STRINGS.FinishScreen
                    .FinishScreen_Label_YourFundsAreBeingMovedThr_Text.label
                }
              </AppText>
            </AppColumn>
          </AppColumn>
        </AppColumn>
        <AppColumn
          widgetId={
            'FinishScreen_Container_ReceiptCardEditorialBentoStyle_Column'
          }
          spacing={24}
          style={
            styles.finishScreenContainerReceiptCardEditorialBentoStyleColumnStyle
          }
        >
          <AppColumn
            widgetId={'FinishScreen_Container_AmountHighlight_Column'}
            spacing={4}
            style={styles.finishScreenContainerAmountHighlightColumnStyle}
          >
            <AppColumn
              widgetId={'FinishScreen_Container_Column_3'}
              style={styles.finishScreenContainerColumn3Style}
            >
              <AppText
                widgetId={'FinishScreen_Label_UserName_Text_2'}
                numberOfLines={1}
                style={[
                  text.label.medium,
                  styles.finishScreenLabelUserNameText2Style,
                ]}
                accessibilityLabel={
                  STRINGS.FinishScreen.FinishScreen_Label_UserName_Text_2
                    .accessibilityLabel
                }
              >
                {STRINGS.FinishScreen.FinishScreen_Label_UserName_Text_2.label}
              </AppText>
            </AppColumn>
            <AppColumn
              widgetId={'FinishScreen_Container_Heading3_Column'}
              style={sharedStyles.finishScreenContainerHeading3Column}
            >
              <AppText
                widgetId={'FinishScreen_Label_Usd_Text'}
                numberOfLines={1}
                style={[
                  text.label.medium,
                  styles.finishScreenLabelUsdTextStyle,
                ]}
                accessibilityLabel={
                  STRINGS.FinishScreen.FinishScreen_Label_Usd_Text
                    .accessibilityLabel
                }
              >
                {STRINGS.FinishScreen.FinishScreen_Label_Usd_Text.label}
              </AppText>
            </AppColumn>
          </AppColumn>
          <AppColumn
            widgetId={'FinishScreen_Container_TransactionDetails_Column'}
            spacing={16}
            style={sharedStyles.createQuoteContainerFinancialSummaryColumn}
          >
            <AppRow
              widgetId={'FinishScreen_Container_Row'}
              style={styles.finishScreenContainerRowStyle}
            >
              <AppColumn
                widgetId={'FinishScreen_Container_Column_4'}
                style={sharedStyles.finishScreenContainerColumn4}
              >
                <AppText
                  widgetId={'FinishScreen_Label_UserName_Text_3'}
                  numberOfLines={1}
                  style={[
                    text.label.medium,
                    sharedStyles.createTransferLabelUserNameText3,
                  ]}
                  accessibilityLabel={
                    STRINGS.FinishScreen.FinishScreen_Label_UserName_Text_3
                      .accessibilityLabel
                  }
                >
                  {
                    STRINGS.FinishScreen.FinishScreen_Label_UserName_Text_3
                      .label
                  }
                </AppText>
              </AppColumn>
              <AppRow
                widgetId={'FinishScreen_Container_Row_2'}
                spacing={12}
                style={styles.finishScreenContainerRow2Style}
              >
                <AppColumn
                  widgetId={'FinishScreen_Container_Column_5'}
                  style={sharedStyles.finishScreenContainerColumn4}
                >
                  <AppText
                    widgetId={'FinishScreen_Label_UserName_Text_4'}
                    numberOfLines={1}
                    style={[
                      text.label.medium,
                      styles.finishScreenLabelUserNameText4Style,
                    ]}
                    accessibilityLabel={
                      STRINGS.FinishScreen.FinishScreen_Label_UserName_Text_4
                        .accessibilityLabel
                    }
                  >
                    {
                      STRINGS.FinishScreen.FinishScreen_Label_UserName_Text_4
                        .label
                    }
                  </AppText>
                </AppColumn>
                <AppRow
                  widgetId={'FinishScreen_Container_Background_Row'}
                  style={styles.finishScreenContainerBackgroundRowStyle}
                >
                  <AppText
                    widgetId={'FinishScreen_Label_Ah_Text'}
                    numberOfLines={1}
                    style={[
                      text.label.medium,
                      styles.finishScreenLabelAhTextStyle,
                    ]}
                    accessibilityLabel={
                      STRINGS.FinishScreen.FinishScreen_Label_Ah_Text
                        .accessibilityLabel
                    }
                  >
                    {STRINGS.FinishScreen.FinishScreen_Label_Ah_Text.label}
                  </AppText>
                </AppRow>
              </AppRow>
            </AppRow>
            <AppRow
              widgetId={'FinishScreen_Container_Row_3'}
              style={styles.finishScreenContainerRow3Style}
            >
              <AppColumn
                widgetId={'FinishScreen_Container_Column_6'}
                style={sharedStyles.finishScreenContainerColumn4}
              >
                <AppText
                  widgetId={'FinishScreen_Label_UserName_Text_5'}
                  numberOfLines={1}
                  style={[
                    text.label.medium,
                    sharedStyles.createTransferLabelUserNameText3,
                  ]}
                  accessibilityLabel={
                    STRINGS.FinishScreen.FinishScreen_Label_UserName_Text_5
                      .accessibilityLabel
                  }
                >
                  {
                    STRINGS.FinishScreen.FinishScreen_Label_UserName_Text_5
                      .label
                  }
                </AppText>
              </AppColumn>
              <AppRow
                widgetId={'FinishScreen_Container_Overlay_Row'}
                spacing={8}
                style={styles.finishScreenContainerOverlayRowStyle}
              >
                <AppColumn
                  widgetId={'FinishScreen_Container_Background_Column'}
                  style={styles.finishScreenContainerBackgroundColumnStyle}
                />
                <AppColumn
                  widgetId={'FinishScreen_Container_Column_7'}
                  style={sharedStyles.createQuoteContainerColumn14}
                >
                  <AppText
                    widgetId={'FinishScreen_Label_UserName_Text_6'}
                    numberOfLines={1}
                    style={[
                      text.label.medium,
                      styles.finishScreenLabelUserNameText6Style,
                    ]}
                    accessibilityLabel={
                      STRINGS.FinishScreen.FinishScreen_Label_UserName_Text_6
                        .accessibilityLabel
                    }
                  >
                    {
                      STRINGS.FinishScreen.FinishScreen_Label_UserName_Text_6
                        .label
                    }
                  </AppText>
                </AppColumn>
              </AppRow>
            </AppRow>
            <AppRow
              widgetId={'FinishScreen_Container_Row_4'}
              style={sharedStyles.finishScreenContainerRow4}
            >
              <AppColumn
                widgetId={'FinishScreen_Container_Column_8'}
                style={sharedStyles.finishScreenContainerColumn4}
              >
                <AppText
                  widgetId={'FinishScreen_Label_TransferId_Text'}
                  numberOfLines={1}
                  style={[
                    text.label.medium,
                    sharedStyles.createTransferLabelUserNameText3,
                  ]}
                  accessibilityLabel={
                    STRINGS.FinishScreen.FinishScreen_Label_TransferId_Text
                      .accessibilityLabel
                  }
                >
                  {
                    STRINGS.FinishScreen.FinishScreen_Label_TransferId_Text
                      .label
                  }
                </AppText>
              </AppColumn>
              <AppColumn
                widgetId={'FinishScreen_Container_Column_9'}
                style={sharedStyles.createQuoteContainerColumn14}
              >
                <AppText
                  widgetId={'FinishScreen_Label_Tfr7712X92_Text'}
                  numberOfLines={1}
                  style={[
                    text.label.medium,
                    styles.finishScreenLabelTfr7712X92TextStyle,
                  ]}
                  accessibilityLabel={
                    STRINGS.FinishScreen.FinishScreen_Label_Tfr7712X92_Text
                      .accessibilityLabel
                  }
                >
                  {
                    STRINGS.FinishScreen.FinishScreen_Label_Tfr7712X92_Text
                      .label
                  }
                </AppText>
              </AppColumn>
            </AppRow>
            <AppColumn
              widgetId={
                'FinishScreen_Container_FinancialProgressTrackerCustom_Column'
              }
              spacing={8}
              style={
                styles.finishScreenContainerFinancialProgressTrackerCustomColumnStyle
              }
            >
              <AppRow
                widgetId={'FinishScreen_Container_Row_5'}
                style={styles.finishScreenContainerRow5Style}
              >
                <AppColumn
                  widgetId={'FinishScreen_Container_Column_10'}
                  style={sharedStyles.createRecepientContainerColumn5}
                >
                  <AppText
                    widgetId={'FinishScreen_Label_NetworkConfirmation_Text'}
                    numberOfLines={0}
                    style={[
                      text.label.medium,
                      styles.finishScreenLabelNetworkConfirmationTextStyle,
                    ]}
                    accessibilityLabel={
                      STRINGS.FinishScreen
                        .FinishScreen_Label_NetworkConfirmation_Text
                        .accessibilityLabel
                    }
                  >
                    {
                      STRINGS.FinishScreen
                        .FinishScreen_Label_NetworkConfirmation_Text.label
                    }
                  </AppText>
                </AppColumn>
                <AppColumn
                  widgetId={'FinishScreen_Container_Column_11'}
                  style={sharedStyles.createQuoteContainerColumn3}
                >
                  <AppText
                    widgetId={'FinishScreen_Label_Complete_Text'}
                    numberOfLines={1}
                    style={[
                      text.label.medium,
                      styles.finishScreenLabelCompleteTextStyle,
                    ]}
                    accessibilityLabel={
                      STRINGS.FinishScreen.FinishScreen_Label_Complete_Text
                        .accessibilityLabel
                    }
                  >
                    {
                      STRINGS.FinishScreen.FinishScreen_Label_Complete_Text
                        .label
                    }
                  </AppText>
                </AppColumn>
              </AppRow>
              <AppColumn
                widgetId={'FinishScreen_Container_Overlay_Column'}
                style={styles.finishScreenContainerOverlayColumnStyle}
              >
                <AppColumn
                  widgetId={'FinishScreen_Container_Gradient_Column'}
                  style={styles.finishScreenContainerGradientColumnStyle}
                />
              </AppColumn>
            </AppColumn>
          </AppColumn>
        </AppColumn>
        <AppColumn
          widgetId={
            'FinishScreen_Container_DecorativeIllustrationElementM_Column'
          }
          style={
            styles.finishScreenContainerDecorativeIllustrationElementMColumnStyle
          }
        >
          <AppColumn
            widgetId={
              'FinishScreen_Container_DecorativeIllustrationElement_Column'
            }
            style={
              styles.finishScreenContainerDecorativeIllustrationElementColumnStyle
            }
          >
            <AppImage
              widgetId={'FinishScreen_Background_AbstractWealth_Image'}
              source={imageSources.image__epqu}
              resizeMode={'cover'}
              style={styles.finishScreenBackgroundAbstractWealthImageStyle}
            />
          </AppColumn>
        </AppColumn>
        <AppButton
          widgetId={'FinishScreen_Cta_Done_Button'}
          style={styles.finishScreenCtaDoneButtonStyle}
          textStyle={[
            text.label.medium,
            sharedStyles.finishScreenCtaDoneButtonText,
          ]}
          accessibilityLabel={
            STRINGS.FinishScreen.FinishScreen_Cta_Done_Button.accessibilityLabel
          }
          label={STRINGS.FinishScreen.FinishScreen_Cta_Done_Button.label}
        />
      </AppColumn>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  finishScreenAppBarHeaderTopNavigationAnchorAppBarCenterContainerStyle: {
    padding: 24,
  },
  finishScreenImageUserProfileImageStyle: {
    width: 38,
    height: 38,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  finishScreenContainerMainColumnStyle: {
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 1232,
    paddingRight: 24,
    paddingLeft: 24,
    paddingBottom: 48,
    minHeight: 1232,
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  finishScreenContainerSuccessVisualSectionMarginColumnStyle: {
    alignSelf: 'stretch',
    paddingBottom: 40,
    maxWidth: 448,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  finishScreenContainerSuccessVisualSectionColumnStyle: {
    paddingLeft: 11,
    maxWidth: 448,
    alignItems: 'center',
    height: 260,
    paddingRight: 11,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  finishScreenContainerMarginColumnStyle: {
    backgroundColor: 'rgba(93,253,138,0.2)',
    alignSelf: 'center',
    paddingBottom: 24,
    borderRadius: 12,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  finishScreenContainerColumnStyle: {
    justifyContent: 'center',
    height: 144,
    borderRadius: 12,
    width: 144,
    backgroundColor: 'rgba(93,253,138,0.2)',
    alignItems: 'center',
    flexShrink: 1,
  },
  finishScreenContainerIconCircleRowStyle: {
    width: '66.7%',
    alignItems: 'center',
    backgroundColor: '#5dfd8a',
    aspectRatio: 1,
    borderRadius: 12,
    justifyContent: 'center',
    flexShrink: 1,
  },
  finishScreenContainerContainerVisualWrapperColumnStyle: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    borderRadius: 0,
    height: 40,
    width: 40,
    alignItems: 'center',
    flexShrink: 1,
  },
  finishScreenContainerHeading2MarginColumnStyle: {
    paddingBottom: 12,
    width: '100%',
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  finishScreenContainerHeading2ColumnStyle: {
    paddingLeft: 23,
    paddingRight: 23,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  finishScreenLabelUserNameTextStyle: {
    fontWeight: 800,
    textAlign: 'center',
    alignSelf: 'stretch',
    textAlignVertical: 'center',
    color: '#1a1c1e',
    lineHeight: 36,
    letterSpacing: -0.75,
    fontFamily: 'Manrope-800-normal',
    fontSize: 30,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  finishScreenContainerColumn2Style: {
    alignItems: 'center',
    width: '100%',
    height: 56,
    paddingLeft: 4.449999809265137,
    paddingRight: 4.46999979019165,
    alignSelf: 'stretch',
    maxWidth: 320,
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  finishScreenLabelYourFundsAreBeingMovedThrTextStyle: {
    textAlign: 'center',
    fontSize: 18,
    alignSelf: 'stretch',
    textAlignVertical: 'center',
    fontFamily: 'Inter-400-normal',
    color: '#43474f',
    fontWeight: 400,
    lineHeight: 28,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  finishScreenContainerReceiptCardEditorialBentoStyleColumnStyle: {
    padding: 24,
    backgroundColor: '#f3f3f6',
    borderRadius: 12,
    maxWidth: 448,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  finishScreenContainerAmountHighlightColumnStyle: {
    shadowColor: 'rgba(0,27,60,0.04)',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    alignSelf: 'stretch',
    padding: 32,
    shadowRadius: 40,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    shadowOffset: { width: 0, height: 20 },
  },
  finishScreenContainerColumn3Style: {
    height: 20,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  finishScreenLabelUserNameText2Style: {
    color: '#737780',
    lineHeight: 20,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: 1.399999976158142,
    textAlignVertical: 'center',
    fontFamily: 'Inter-400-normal',
    width: '51.9%',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  finishScreenLabelUsdTextStyle: {
    textAlign: 'center',
    fontWeight: 800,
    fontFamily: 'Manrope-800-normal',
    fontSize: 36,
    alignSelf: 'stretch',
    textAlignVertical: 'center',
    letterSpacing: -1.7999999523162842,
    lineHeight: 40,
    color: '#001e40',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  finishScreenContainerRowStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    height: 32,
    flexShrink: 1,
  },
  finishScreenContainerRow2Style: {
    height: 32,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  finishScreenLabelUserNameText4Style: {
    fontFamily: 'Inter-700-normal',
    fontWeight: 700,
    textAlignVertical: 'center',
    color: '#1a1c1e',
    lineHeight: 24,
    fontSize: 16,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  finishScreenContainerBackgroundRowStyle: {
    width: 32,
    borderRadius: 12,
    alignItems: 'center',
    paddingBottom: 9,
    paddingTop: 8,
    height: 32,
    backgroundColor: '#d5e3ff',
    justifyContent: 'center',
    flexShrink: 1,
  },
  finishScreenLabelAhTextStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: 15,
    fontSize: 10,
    fontWeight: 700,
    width: '46.7%',
    fontFamily: 'Inter-700-normal',
    color: '#001b3c',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  finishScreenContainerRow3Style: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    height: 28,
    alignItems: 'center',
    flexShrink: 1,
  },
  finishScreenContainerOverlayRowStyle: {
    paddingBottom: 4,
    height: 28,
    paddingRight: 12,
    alignItems: 'center',
    borderRadius: 12,
    paddingLeft: 12,
    paddingTop: 4,
    backgroundColor: 'rgba(93,253,138,0.3)',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  finishScreenContainerBackgroundColumnStyle: {
    borderRadius: 12,
    backgroundColor: '#006d2f',
    height: 8,
    width: 8,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  finishScreenLabelUserNameText6Style: {
    fontFamily: 'Inter-700-normal',
    fontSize: 14,
    lineHeight: 20,
    textAlignVertical: 'center',
    fontWeight: 700,
    textAlign: 'left',
    color: '#007232',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  finishScreenLabelTfr7712X92TextStyle: {
    textAlignVertical: 'center',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Liberation Mono',
    fontWeight: 400,
    color: '#1a1c1e',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  finishScreenContainerFinancialProgressTrackerCustomColumnStyle: {
    alignSelf: 'stretch',
    height: 46,
    paddingTop: 16,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  finishScreenContainerRow5Style: {
    alignSelf: 'stretch',
    height: 16,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  finishScreenLabelNetworkConfirmationTextStyle: {
    lineHeight: 16,
    textAlignVertical: 'center',
    fontWeight: 400,
    color: '#737780',
    fontFamily: 'Inter-400-normal',
    fontSize: 12,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  finishScreenLabelCompleteTextStyle: {
    lineHeight: 16,
    fontFamily: 'Inter-400-normal',
    color: '#006d2f',
    fontWeight: 400,
    textAlignVertical: 'center',
    fontSize: 12,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  finishScreenContainerOverlayColumnStyle: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'rgba(195,198,209,0.2)',
    minHeight: 6,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  finishScreenContainerGradientColumnStyle: {
    width: '85%',
    gradientStops: [0, 1],
    gradientEnd: { x: 1, y: 0.5 },
    borderRadius: 12,
    height: 6,
    gradientColors: ['#006d2f', '#66ff8e'],
    gradientType: 'linear',
    gradientStart: { x: 0, y: 0.5 },
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  finishScreenContainerDecorativeIllustrationElementMColumnStyle: {
    aspectRatio: 1.425,
    alignSelf: 'stretch',
    maxWidth: 384,
    borderRadius: 8,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  finishScreenContainerDecorativeIllustrationElementColumnStyle: {
    minHeight: 240,
    overflow: 'hidden',
    opacity: 0.8,
    justifyContent: 'center',
    borderRadius: 8,
    maxWidth: 384,
    alignSelf: 'stretch',
    flexShrink: 1,
    alignItems: 'stretch',
  },
  finishScreenBackgroundAbstractWealthImageStyle: {
    alignSelf: 'stretch',
    width: '100%',
    objectFit: 'cover',
    height: '100%',
    flexBasis: 'auto',
  },
  finishScreenCtaDoneButtonStyle: {
    shadowRadius: 40,
    gradientStops: [0, 1],
    paddingLeft: 0,
    gradientType: 'linear',
    paddingBottom: 16,
    paddingRight: 0,
    shadowColor: 'rgba(0,30,64,0.15)',
    gradientStart: { x: 0.20614035524557445, y: -1.1750000742932054 },
    gradientEnd: { x: 0.7938596669369775, y: 2.174999947852654 },
    height: 60,
    paddingTop: 32,
    maxWidth: 448,
    gradientColors: ['#001e40', '#003366'],
    alignSelf: 'stretch',
    textAlign: 'center',
    lineHeight: 28,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 20 },
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
});

export default FinishScreen;

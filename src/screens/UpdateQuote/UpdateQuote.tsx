import React, { useRef } from 'react';
import {
  AppAppBar,
  AppButton,
  AppColumn,
  AppContainer,
  AppDropDown,
  AppForm,
  AppIconButton,
  AppImage,
  AppRow,
  AppText,
  AppTextField,
} from '@/components/shared';

import { useNavigation } from '@react-navigation/native';

import { color, imageSources, space, text, border } from '@/assets';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type FormValues = {
  UpdateQuote_Container_BackgroundBorder_DropDown?: string;
  UpdateQuote_Input_EnterRecipientFullName_Input?: string;
  UpdateQuote_Input_EnterRecipientFullName_Input_2?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const UpdateQuote: React.FC<ScreenProps> = ({ route }) => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-915391'}
      testID={'647f12c8-030c-41a3-b640-c49fb0ceb6c9'}
      style={sharedStyles.container2}
    >
      <AppForm
        widgetId={'ASForm-539041'}
        validationSchema={Yup.object().shape({})}
        initialValues={{
          UpdateQuote_Container_BackgroundBorder_DropDown: '',
          UpdateQuote_Input_EnterRecipientFullName_Input: '',
          UpdateQuote_Input_EnterRecipientFullName_Input_2: '',
        }}
        innerRef={formikRef}
      >
        {(formikProps: FormikProps<FormValues>) => {
          return (
            <>
              <AppAppBar
                widgetId={'UpdateQuote_AppBar_SyntheticAppBar_AppBar'}
                trailingShow={false}
                variant={'transparent'}
                centerMode={'custom'}
                leadingShow={false}
                leadingIconSize={24}
                leadingIcon={'arrow_back'}
                style={sharedStyles.fundTransferAppBarSyntheticAppBarAppBar}
                textStyles={[
                  text.title.medium,
                  sharedStyles.fundTransferAppBarSyntheticAppBarAppBarTextStyles,
                ]}
              >
                <AppRow
                  widgetId={'UpdateQuote_Container_AppBarCustomCentre_Row'}
                  style={styles.updateQuoteContainerAppBarCustomCentreRowStyle}
                >
                  <AppRow
                    widgetId={'UpdateQuote_Container_Row'}
                    spacing={16}
                    style={styles.updateQuoteContainerRowStyle}
                  >
                    <AppColumn
                      widgetId={'UpdateQuote_Container_Button_Column'}
                      style={styles.updateQuoteContainerButtonColumnStyle}
                    >
                      <AppRow
                        widgetId={'UpdateQuote_Container_Row_2'}
                        style={sharedStyles.fundTransferContainerRow2}
                      >
                        <AppImage
                          widgetId={'UpdateQuote_Image_Icon_Image'}
                          source={imageSources.image__1ncg}
                          resizeMode={'contain'}
                          style={styles.updateQuoteImageIconImageStyle}
                        />
                      </AppRow>
                    </AppColumn>
                    <AppColumn
                      widgetId={'UpdateQuote_Container_Heading1_Column'}
                      style={styles.updateQuoteContainerHeading1ColumnStyle}
                    >
                      <AppText
                        widgetId={
                          'UpdateQuote_Title_ReviewTransferDetails_Text'
                        }
                        numberOfLines={0}
                        style={[
                          text.label.medium,
                          styles.updateQuoteTitleReviewTransferDetailsTextStyle,
                        ]}
                        accessibilityLabel={
                          STRINGS.UpdateQuote
                            .UpdateQuote_Title_ReviewTransferDetails_Text
                            .accessibilityLabel
                        }
                      >
                        {
                          STRINGS.UpdateQuote
                            .UpdateQuote_Title_ReviewTransferDetails_Text.label
                        }
                      </AppText>
                    </AppColumn>
                  </AppRow>
                  <AppColumn
                    widgetId={'UpdateQuote_Container_Button_Column_2'}
                    style={styles.updateQuoteContainerButtonColumn2Style}
                  >
                    <AppRow
                      widgetId={'UpdateQuote_Container_Row_3'}
                      style={styles.updateQuoteContainerRow3Style}
                    >
                      <AppImage
                        widgetId={'UpdateQuote_Image_Icon_Image_2'}
                        source={imageSources.image__77f5}
                        resizeMode={'contain'}
                        style={styles.updateQuoteImageIconImage2Style}
                      />
                    </AppRow>
                  </AppColumn>
                </AppRow>
              </AppAppBar>
              <AppColumn
                widgetId={'UpdateQuote_Container_Main_Column'}
                spacing={40}
                style={styles.updateQuoteContainerMainColumnStyle}
              >
                <AppColumn
                  widgetId={
                    'UpdateQuote_Container_EditorialHeaderSection_Column'
                  }
                  spacing={8}
                  style={sharedStyles.createQuoteContainerColumn3}
                >
                  <AppColumn
                    widgetId={'UpdateQuote_Container_Heading2_Column'}
                    style={styles.updateQuoteContainerHeading2ColumnStyle}
                  >
                    <AppText
                      widgetId={'UpdateQuote_Label_ReviewYourTransfer_Text'}
                      numberOfLines={1}
                      style={[
                        text.label.medium,
                        styles.updateQuoteLabelReviewYourTransferTextStyle,
                      ]}
                      accessibilityLabel={
                        STRINGS.UpdateQuote
                          .UpdateQuote_Label_ReviewYourTransfer_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.UpdateQuote
                          .UpdateQuote_Label_ReviewYourTransfer_Text.label
                      }
                    </AppText>
                  </AppColumn>
                  <AppColumn
                    widgetId={'UpdateQuote_Container_Column'}
                    style={styles.updateQuoteContainerColumnStyle}
                  >
                    <AppText
                      widgetId={'UpdateQuote_Body_Text'}
                      numberOfLines={2}
                      style={[
                        text.label.medium,
                        sharedStyles.signUpLabelSignUpToSendMoneyWorldwidText,
                      ]}
                      accessibilityLabel={
                        STRINGS.UpdateQuote.UpdateQuote_Body_Text
                          .accessibilityLabel
                      }
                    >
                      {STRINGS.UpdateQuote.UpdateQuote_Body_Text.label}
                    </AppText>
                  </AppColumn>
                </AppColumn>
                <AppColumn
                  widgetId={'UpdateQuote_Container_MainInputCanvas_Column'}
                  spacing={24}
                  style={sharedStyles.createQuoteContainerColumn3}
                >
                  <AppColumn
                    widgetId={'UpdateQuote_Container_AmountInputCard_Column'}
                    style={
                      styles.updateQuoteContainerAmountInputCardColumnStyle
                    }
                  >
                    <AppColumn
                      widgetId={'UpdateQuote_Container_BackgroundShadow_Column'}
                      spacing={8}
                      style={
                        styles.updateQuoteContainerBackgroundShadowColumnStyle
                      }
                    >
                      <AppColumn
                        widgetId={'UpdateQuote_Container_Label_Column'}
                        style={sharedStyles.signUpContainerLabelColumn}
                      >
                        <AppText
                          widgetId={'UpdateQuote_Label_YouSend_Text'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            styles.updateQuoteLabelYouSendTextStyle,
                          ]}
                          accessibilityLabel={
                            STRINGS.UpdateQuote.UpdateQuote_Label_YouSend_Text
                              .accessibilityLabel
                          }
                        >
                          {
                            STRINGS.UpdateQuote.UpdateQuote_Label_YouSend_Text
                              .label
                          }
                        </AppText>
                      </AppColumn>
                      <AppRow
                        widgetId={'UpdateQuote_Container_Row_4'}
                        style={styles.updateQuoteContainerRow4Style}
                      >
                        <AppColumn
                          widgetId={'UpdateQuote_Container_Column_2'}
                          style={sharedStyles.createQuoteContainerColumn4}
                        >
                          <AppRow
                            widgetId={'UpdateQuote_Container_Input_Row'}
                            style={styles.updateQuoteContainerInputRowStyle}
                          >
                            <AppColumn
                              widgetId={'UpdateQuote_Container_Column_3'}
                              style={sharedStyles.createQuoteContainerColumn4}
                            >
                              <AppColumn
                                widgetId={'UpdateQuote_Container_Column_4'}
                                style={
                                  sharedStyles.createQuoteContainerColumn10
                                }
                              >
                                <AppText
                                  widgetId={'UpdateQuote_Label_Phone_Text'}
                                  numberOfLines={0}
                                  style={[
                                    text.label.medium,
                                    styles.updateQuoteLabelPhoneTextStyle,
                                  ]}
                                  accessibilityLabel={
                                    STRINGS.UpdateQuote
                                      .UpdateQuote_Label_Phone_Text
                                      .accessibilityLabel
                                  }
                                >
                                  {
                                    STRINGS.UpdateQuote
                                      .UpdateQuote_Label_Phone_Text.label
                                  }
                                </AppText>
                              </AppColumn>
                            </AppColumn>
                          </AppRow>
                        </AppColumn>
                        <AppDropDown
                          widgetId={
                            'UpdateQuote_Container_BackgroundBorder_DropDown'
                          }
                          options={[]}
                          containerStyle={
                            sharedStyles.createQuoteContainerBackgroundBorderDropDownContainer
                          }
                          placeholder={
                            STRINGS.UpdateQuote
                              .UpdateQuote_Container_BackgroundBorder_DropDown
                              .placeholder
                          }
                          searchPlaceholder={
                            STRINGS.UpdateQuote
                              .UpdateQuote_Container_BackgroundBorder_DropDown
                              .searchPlaceholder
                          }
                        />
                      </AppRow>
                      <AppRow
                        widgetId={'UpdateQuote_Container_HorizontalBorder_Row'}
                        spacing={8}
                        style={
                          styles.updateQuoteContainerHorizontalBorderRowStyle
                        }
                      >
                        <AppColumn
                          widgetId={'UpdateQuote_Container_Column_5'}
                          style={styles.updateQuoteContainerColumn5Style}
                        >
                          <AppImage
                            widgetId={'UpdateQuote_Image_Icon_Image_3'}
                            resizeMode={'stretch'}
                            source={imageSources.image__y52md}
                            style={styles.updateQuoteImageIconImage3Style}
                          />
                        </AppColumn>
                        <AppColumn
                          widgetId={'UpdateQuote_Container_Column_6'}
                          style={sharedStyles.fundTransferContainerColumn4}
                        >
                          <AppText
                            widgetId={
                              'UpdateQuote_Label_YouCanChangeThisAmount_Text'
                            }
                            numberOfLines={1}
                            style={[
                              text.label.medium,
                              styles.updateQuoteLabelYouCanChangeThisAmountTextStyle,
                            ]}
                            accessibilityLabel={
                              STRINGS.UpdateQuote
                                .UpdateQuote_Label_YouCanChangeThisAmount_Text
                                .accessibilityLabel
                            }
                          >
                            {
                              STRINGS.UpdateQuote
                                .UpdateQuote_Label_YouCanChangeThisAmount_Text
                                .label
                            }
                          </AppText>
                        </AppColumn>
                      </AppRow>
                    </AppColumn>
                  </AppColumn>
                  <AppColumn
                    widgetId={
                      'UpdateQuote_Container_QuoteSummaryReadOnlyDetailsAsym_Column'
                    }
                    spacing={25}
                    style={sharedStyles.createQuoteContainerColumn3}
                  >
                    <AppColumn
                      widgetId={'UpdateQuote_Container_TargetCurrency_Column'}
                      spacing={16}
                      style={
                        sharedStyles.createQuoteContainerTargetCurrencyColumn
                      }
                    >
                      <AppRow
                        widgetId={'UpdateQuote_Container_Row_5'}
                        style={
                          sharedStyles.fundTransferContainerFinancialProgressTrackerCustomDesRow
                        }
                      >
                        <AppColumn
                          widgetId={'UpdateQuote_Container_Label_Column_2'}
                          style={sharedStyles.createQuoteContainerLabelColumn}
                        >
                          <AppText
                            widgetId={'UpdateQuote_Label_RecipientGets_Text'}
                            numberOfLines={1}
                            style={[
                              text.label.medium,
                              sharedStyles.createQuoteLabelUserNameText2,
                            ]}
                            accessibilityLabel={
                              STRINGS.UpdateQuote
                                .UpdateQuote_Label_RecipientGets_Text
                                .accessibilityLabel
                            }
                          >
                            {
                              STRINGS.UpdateQuote
                                .UpdateQuote_Label_RecipientGets_Text.label
                            }
                          </AppText>
                        </AppColumn>
                      </AppRow>
                      <AppColumn
                        widgetId={'UpdateQuote_Container_Column_7'}
                        spacing={8}
                        style={styles.updateQuoteContainerColumn7Style}
                      >
                        <AppRow
                          widgetId={'UpdateQuote_Container_Input_Row_2'}
                          style={sharedStyles.createQuoteContainerInputRow}
                        >
                          <AppColumn
                            widgetId={'UpdateQuote_Container_Column_8'}
                            style={sharedStyles.createQuoteContainerColumn4}
                          >
                            <AppColumn
                              widgetId={'UpdateQuote_Container_Column_9'}
                              style={sharedStyles.createQuoteContainerColumn10}
                            >
                              <AppText
                                widgetId={'UpdateQuote_Label_Text'}
                                numberOfLines={1}
                                style={[
                                  text.label.medium,
                                  sharedStyles.createQuoteLabelText,
                                ]}
                                accessibilityLabel={
                                  STRINGS.UpdateQuote.UpdateQuote_Label_Text
                                    .accessibilityLabel
                                }
                              >
                                {
                                  STRINGS.UpdateQuote.UpdateQuote_Label_Text
                                    .label
                                }
                              </AppText>
                            </AppColumn>
                          </AppColumn>
                        </AppRow>
                        <AppRow
                          widgetId={'UpdateQuote_Container_Row_6'}
                          style={styles.updateQuoteContainerRow6Style}
                        >
                          <AppColumn
                            widgetId={'UpdateQuote_Container_Column_10'}
                            style={sharedStyles.createQuoteContainerColumn12}
                          >
                            <AppText
                              widgetId={'UpdateQuote_Label_Calculating_Text'}
                              numberOfLines={1}
                              style={[
                                text.label.medium,
                                sharedStyles.createQuoteLabelCalculatingText,
                              ]}
                              accessibilityLabel={
                                STRINGS.UpdateQuote
                                  .UpdateQuote_Label_Calculating_Text
                                  .accessibilityLabel
                              }
                            >
                              {
                                STRINGS.UpdateQuote
                                  .UpdateQuote_Label_Calculating_Text.label
                              }
                            </AppText>
                          </AppColumn>
                        </AppRow>
                      </AppColumn>
                    </AppColumn>
                    <AppColumn
                      widgetId={
                        'UpdateQuote_Container_FeesTargetFormLayout_Column'
                      }
                      spacing={10}
                      style={
                        styles.updateQuoteContainerFeesTargetFormLayoutColumnStyle
                      }
                    >
                      <AppColumn
                        widgetId={'UpdateQuote_Container_Column_11'}
                        spacing={4}
                        style={sharedStyles.createQuoteContainerLabelColumn3}
                      >
                        <AppColumn
                          widgetId={'UpdateQuote_Container_Label_Column_3'}
                          style={sharedStyles.loginContainerLabelColumn}
                        >
                          <AppText
                            widgetId={'UpdateQuote_Label_QuoteId_Text'}
                            numberOfLines={2}
                            style={[
                              text.label.medium,
                              styles.updateQuoteLabelQuoteIdTextStyle,
                            ]}
                            accessibilityLabel={
                              STRINGS.UpdateQuote.UpdateQuote_Label_QuoteId_Text
                                .accessibilityLabel
                            }
                          >
                            {
                              STRINGS.UpdateQuote.UpdateQuote_Label_QuoteId_Text
                                .label
                            }
                          </AppText>
                        </AppColumn>
                      </AppColumn>
                      <AppTextField
                        widgetId={
                          'UpdateQuote_Input_EnterRecipientFullName_Input'
                        }
                        style={
                          styles.updateQuoteInputEnterRecipientFullNameInputStyle
                        }
                        placeholder={
                          STRINGS.UpdateQuote
                            .UpdateQuote_Input_EnterRecipientFullName_Input
                            .placeholder
                        }
                      />
                      <AppColumn
                        widgetId={'UpdateQuote_Container_Column_12'}
                        spacing={4}
                        style={sharedStyles.createQuoteContainerLabelColumn3}
                      >
                        <AppColumn
                          widgetId={'UpdateQuote_Container_Label_Column_4'}
                          style={sharedStyles.loginContainerLabelColumn}
                        >
                          <AppText
                            widgetId={'UpdateQuote_Label_UserName_Text'}
                            numberOfLines={1}
                            style={[
                              text.label.medium,
                              styles.updateQuoteLabelUserNameTextStyle,
                            ]}
                            accessibilityLabel={
                              STRINGS.UpdateQuote
                                .UpdateQuote_Label_UserName_Text
                                .accessibilityLabel
                            }
                          >
                            {
                              STRINGS.UpdateQuote
                                .UpdateQuote_Label_UserName_Text.label
                            }
                          </AppText>
                        </AppColumn>
                      </AppColumn>
                      <AppTextField
                        widgetId={
                          'UpdateQuote_Input_EnterRecipientFullName_Input_2'
                        }
                        style={
                          styles.updateQuoteInputEnterRecipientFullNameInput2Style
                        }
                        placeholder={
                          STRINGS.UpdateQuote
                            .UpdateQuote_Input_EnterRecipientFullName_Input_2
                            .placeholder
                        }
                      />
                    </AppColumn>
                  </AppColumn>
                  <AppColumn
                    widgetId={'UpdateQuote_Container_ConversionMeta_Column'}
                    style={styles.updateQuoteContainerConversionMetaColumnStyle}
                  >
                    <AppColumn
                      widgetId={'UpdateQuote_Container_Column_13'}
                      spacing={8}
                      style={styles.updateQuoteContainerColumn13Style}
                    >
                      <AppColumn
                        widgetId={'UpdateQuote_Container_Label_Column_5'}
                        style={sharedStyles.createQuoteContainerLabelColumn3}
                      >
                        <AppText
                          widgetId={'UpdateQuote_Label_TransferSummary_Text'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            styles.updateQuoteLabelTransferSummaryTextStyle,
                          ]}
                          accessibilityLabel={
                            STRINGS.UpdateQuote
                              .UpdateQuote_Label_TransferSummary_Text
                              .accessibilityLabel
                          }
                        >
                          {
                            STRINGS.UpdateQuote
                              .UpdateQuote_Label_TransferSummary_Text.label
                          }
                        </AppText>
                      </AppColumn>
                      <AppColumn
                        widgetId={'UpdateQuote_Container_Column_14'}
                        style={styles.updateQuoteContainerColumn14Style}
                      >
                        <AppText
                          widgetId={'UpdateQuote_Label_Usd0924Eur_Text'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            styles.updateQuoteLabelUsd0924EurTextStyle,
                          ]}
                          accessibilityLabel={
                            STRINGS.UpdateQuote
                              .UpdateQuote_Label_Usd0924Eur_Text
                              .accessibilityLabel
                          }
                        >
                          {
                            STRINGS.UpdateQuote
                              .UpdateQuote_Label_Usd0924Eur_Text.label
                          }
                        </AppText>
                      </AppColumn>
                    </AppColumn>
                    <AppColumn
                      widgetId={'UpdateQuote_Container_Margin_Column'}
                      style={styles.updateQuoteContainerMarginColumnStyle}
                    >
                      <AppRow
                        widgetId={'UpdateQuote_Container_Row_7'}
                        spacing={12}
                        style={sharedStyles.finishScreenContainerHeading3Column}
                      >
                        <AppRow
                          widgetId={'UpdateQuote_Container_Overlay_Row'}
                          style={styles.updateQuoteContainerOverlayRowStyle}
                        >
                          <AppColumn
                            widgetId={
                              'UpdateQuote_Container_ContainerVisualWrapper_Column'
                            }
                            style={
                              styles.updateQuoteContainerContainerVisualWrapperColumnStyle
                            }
                          >
                            <AppIconButton
                              widgetId={'UpdateQuote_Icon_Container_Icon'}
                              icon={
                                'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/08e2b998-1e68-4fde-9f73-8b09d9893ed8-2551_7041.png'
                              }
                              size={18}
                              style={sharedStyles.finishScreenIconContainerIcon}
                            />
                          </AppColumn>
                        </AppRow>
                        <AppColumn
                          widgetId={'UpdateQuote_Container_Column_15'}
                          style={sharedStyles.finishScreenContainerColumn4}
                        >
                          <AppText
                            widgetId={'UpdateQuote_Label_Eur_Text'}
                            numberOfLines={1}
                            style={[
                              text.label.medium,
                              styles.updateQuoteLabelEurTextStyle,
                            ]}
                            accessibilityLabel={
                              STRINGS.UpdateQuote.UpdateQuote_Label_Eur_Text
                                .accessibilityLabel
                            }
                          >
                            {
                              STRINGS.UpdateQuote.UpdateQuote_Label_Eur_Text
                                .label
                            }
                          </AppText>
                        </AppColumn>
                      </AppRow>
                    </AppColumn>
                  </AppColumn>
                  <AppColumn
                    widgetId={
                      'UpdateQuote_Container_DetailsListNoLineRule_Column'
                    }
                    style={
                      styles.updateQuoteContainerDetailsListNoLineRuleColumnStyle
                    }
                  >
                    <AppColumn
                      widgetId={'UpdateQuote_Container_Column_16'}
                      spacing={4}
                      style={sharedStyles.createQuoteContainerColumn3}
                    >
                      <AppRow
                        widgetId={'UpdateQuote_Container_Overlay_Row_2'}
                        style={styles.updateQuoteContainerOverlayRow2Style}
                      >
                        <AppColumn
                          widgetId={'UpdateQuote_Container_Column_17'}
                          style={sharedStyles.createQuoteContainerColumn14}
                        >
                          <AppText
                            widgetId={'UpdateQuote_Label_UserName_Text_2'}
                            numberOfLines={1}
                            style={[
                              text.label.medium,
                              sharedStyles.createQuoteLabelUserNameText10,
                            ]}
                            accessibilityLabel={
                              STRINGS.UpdateQuote
                                .UpdateQuote_Label_UserName_Text_2
                                .accessibilityLabel
                            }
                          >
                            {
                              STRINGS.UpdateQuote
                                .UpdateQuote_Label_UserName_Text_2.label
                            }
                          </AppText>
                        </AppColumn>
                        <AppColumn
                          widgetId={'UpdateQuote_Container_Column_18'}
                          style={sharedStyles.createQuoteContainerColumn14}
                        >
                          <AppText
                            widgetId={'UpdateQuote_Label_UserName_Text_3'}
                            numberOfLines={1}
                            style={[
                              text.label.medium,
                              styles.updateQuoteLabelUserNameText3Style,
                            ]}
                            accessibilityLabel={
                              STRINGS.UpdateQuote
                                .UpdateQuote_Label_UserName_Text_3
                                .accessibilityLabel
                            }
                          >
                            {
                              STRINGS.UpdateQuote
                                .UpdateQuote_Label_UserName_Text_3.label
                            }
                          </AppText>
                        </AppColumn>
                      </AppRow>
                      <AppRow
                        widgetId={'UpdateQuote_Container_Overlay_Row_3'}
                        style={styles.updateQuoteContainerOverlayRow3Style}
                      >
                        <AppColumn
                          widgetId={'UpdateQuote_Container_Column_19'}
                          style={sharedStyles.createQuoteContainerColumn4}
                        >
                          <AppText
                            widgetId={'UpdateQuote_Label_UserName_Text_4'}
                            numberOfLines={0}
                            style={[
                              text.label.medium,
                              sharedStyles.createQuoteLabelUserNameText10,
                            ]}
                            accessibilityLabel={
                              STRINGS.UpdateQuote
                                .UpdateQuote_Label_UserName_Text_4
                                .accessibilityLabel
                            }
                          >
                            {
                              STRINGS.UpdateQuote
                                .UpdateQuote_Label_UserName_Text_4.label
                            }
                          </AppText>
                        </AppColumn>
                        <AppColumn
                          widgetId={'UpdateQuote_Container_Column_20'}
                          style={sharedStyles.createQuoteContainerColumn14}
                        >
                          <AppText
                            widgetId={'UpdateQuote_Label_UserName_Text_5'}
                            numberOfLines={1}
                            style={[
                              text.label.medium,
                              styles.updateQuoteLabelUserNameText5Style,
                            ]}
                            accessibilityLabel={
                              STRINGS.UpdateQuote
                                .UpdateQuote_Label_UserName_Text_5
                                .accessibilityLabel
                            }
                          >
                            {
                              STRINGS.UpdateQuote
                                .UpdateQuote_Label_UserName_Text_5.label
                            }
                          </AppText>
                        </AppColumn>
                      </AppRow>
                    </AppColumn>
                  </AppColumn>
                  <AppColumn
                    widgetId={'UpdateQuote_Container_PrimaryAction_Column'}
                    spacing={24}
                    style={styles.updateQuoteContainerPrimaryActionColumnStyle}
                  >
                    <AppButton
                      widgetId={'UpdateQuote_Cta_Continue_Button'}
                      style={styles.updateQuoteCtaContinueButtonStyle}
                      textStyle={[
                        text.label.medium,
                        sharedStyles.createTransferCtaConfirmButtonText,
                      ]}
                      accessibilityLabel={
                        STRINGS.UpdateQuote.UpdateQuote_Cta_Continue_Button
                          .accessibilityLabel
                      }
                      label={
                        STRINGS.UpdateQuote.UpdateQuote_Cta_Continue_Button
                          .label
                      }
                    />
                    <AppColumn
                      widgetId={'UpdateQuote_Container_Column_21'}
                      style={styles.updateQuoteContainerColumn21Style}
                    >
                      <AppText
                        widgetId={
                          'UpdateQuote_Label_ExchangeRatesMayChangeUnti_Text'
                        }
                        numberOfLines={3}
                        style={[
                          text.label.medium,
                          styles.updateQuoteLabelExchangeRatesMayChangeUntiTextStyle,
                        ]}
                        accessibilityLabel={
                          STRINGS.UpdateQuote
                            .UpdateQuote_Label_ExchangeRatesMayChangeUnti_Text
                            .accessibilityLabel
                        }
                      >
                        {
                          STRINGS.UpdateQuote
                            .UpdateQuote_Label_ExchangeRatesMayChangeUnti_Text
                            .label
                        }
                      </AppText>
                    </AppColumn>
                  </AppColumn>
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
  updateQuoteContainerAppBarCustomCentreRowStyle: {
    justifyContent: 'space-between',
    width: '100%',
    backgroundBlurRadius: 12,
    alignItems: 'center',
    backgroundColor: 'rgba(249,249,252,0.8)',
    height: 64,
    flexShrink: 1,
  },
  updateQuoteContainerRowStyle: {
    alignItems: 'center',
    width: 260,
    height: 32,
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  updateQuoteContainerButtonColumnStyle: {
    justifyContent: 'center',
    height: 32,
    borderRadius: 12,
    alignItems: 'center',
    padding: 8,
    width: 32,
    flexShrink: 1,
  },
  updateQuoteImageIconImageStyle: {
    aspectRatio: 1,
    height: 16,
    width: 16,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  updateQuoteContainerHeading1ColumnStyle: {
    width: 212,
    height: 28,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  updateQuoteTitleReviewTransferDetailsTextStyle: {
    fontWeight: 600,
    color: '#001e40',
    lineHeight: 28,
    fontFamily: 'Inter-600-normal',
    width: 212,
    fontSize: 20,
    textAlignVertical: 'center',
    letterSpacing: -0.5,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  updateQuoteContainerButtonColumn2Style: {
    padding: 8,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 32,
    flexShrink: 1,
  },
  updateQuoteContainerRow3Style: {
    width: 4,
    justifyContent: 'center',
    height: 16,
    alignItems: 'stretch',
    flexShrink: 1,
  },
  updateQuoteImageIconImage2Style: {
    aspectRatio: 0.25,
    width: 4,
    height: 16,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  updateQuoteContainerMainColumnStyle: {
    paddingRight: 24,
    paddingLeft: 24,
    alignSelf: 'stretch',
    paddingBottom: 128,
    height: 1357,
    maxWidth: 512,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  updateQuoteContainerHeading2ColumnStyle: {
    height: 38,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  updateQuoteLabelReviewYourTransferTextStyle: {
    fontWeight: 800,
    fontFamily: 'Manrope-800-normal',
    fontSize: 30,
    lineHeight: 38,
    alignSelf: 'stretch',
    textAlignVertical: 'center',
    letterSpacing: -0.75,
    color: '#001e40',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  updateQuoteContainerColumnStyle: {
    paddingBottom: 0.625,
    alignSelf: 'stretch',
    paddingTop: 2.875,
    height: 50,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  updateQuoteContainerAmountInputCardColumnStyle: {
    alignSelf: 'stretch',
    borderRadius: 8,
    padding: 4,
    backgroundColor: '#f3f3f6',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  updateQuoteContainerBackgroundShadowColumnStyle: {
    shadowRadius: 40,
    borderRadius: 8,
    padding: 24,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0,27,60,0.04)',
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    shadowOffset: { width: 0, height: 20 },
  },
  updateQuoteLabelYouSendTextStyle: {
    textTransform: 'uppercase',
    letterSpacing: 0.550000011920929,
    alignSelf: 'stretch',
    lineHeight: 17,
    fontFamily: 'Inter-600-normal',
    fontWeight: 600,
    fontSize: 11,
    color: '#737780',
    textAlignVertical: 'center',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  updateQuoteContainerRow4Style: {
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 48,
    justifyContent: 'space-between',
    paddingBottom: 8,
    flexShrink: 1,
  },
  updateQuoteContainerInputRowStyle: {
    alignSelf: 'stretch',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  updateQuoteLabelPhoneTextStyle: {
    lineHeight: 40,
    color: '#001e40',
    fontSize: 36,
    fontFamily: 'Manrope-700-normal',
    alignSelf: 'stretch',
    textAlignVertical: 'center',
    fontWeight: 700,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  updateQuoteContainerHorizontalBorderRowStyle: {
    alignSelf: 'stretch',
    aspectRatio: 8.666666666666666,
    borderColor: 'rgba(195,198,209,0.15)',
    alignItems: 'center',
    borderTopWidth: 1,
    paddingTop: 16,
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  updateQuoteContainerColumn5Style: {
    height: 7,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  updateQuoteImageIconImage3Style: {
    height: 7,
    objectFit: 'fill',
    width: 11.666666984558105,
    flexBasis: 'auto',
  },
  updateQuoteLabelYouCanChangeThisAmountTextStyle: {
    lineHeight: 16,
    textAlignVertical: 'center',
    fontFamily: 'Inter-500-normal',
    fontSize: 12,
    fontWeight: 500,
    color: '#006d2f',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  updateQuoteContainerColumn7Style: {
    alignSelf: 'stretch',
    height: 58,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  updateQuoteContainerRow6Style: {
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 14,
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  updateQuoteContainerFeesTargetFormLayoutColumnStyle: {
    borderRadius: 8,
    alignSelf: 'stretch',
    padding: 20,
    backgroundColor: '#f3f3f6',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  updateQuoteLabelQuoteIdTextStyle: {
    alignSelf: 'stretch',
    fontWeight: 600,
    textAlignVertical: 'center',
    textTransform: 'uppercase',
    color: '#737780',
    lineHeight: 15,
    fontFamily: 'Inter-600-normal',
    fontSize: 10,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  updateQuoteInputEnterRecipientFullNameInputStyle: {
    borderRadius: 8,
    backgroundColor: '#ffffff',
    height: 47,
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  updateQuoteLabelUserNameTextStyle: {
    alignSelf: 'stretch',
    lineHeight: 15,
    textAlignVertical: 'center',
    fontSize: 10,
    fontWeight: 600,
    fontFamily: 'Inter-600-normal',
    color: '#737780',
    textTransform: 'uppercase',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  updateQuoteInputEnterRecipientFullNameInput2Style: {
    backgroundColor: '#ffffff',
    height: 47,
    borderRadius: 8,
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  updateQuoteContainerConversionMetaColumnStyle: {
    backgroundColor: '#f3f3f6',
    justifyContent: 'space-between',
    height: 120,
    alignSelf: 'stretch',
    padding: 10,
    borderRadius: 8,
    flexShrink: 1,
    alignItems: 'stretch',
  },
  updateQuoteContainerColumn13Style: {
    width: '91.0%',
    height: 51,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  updateQuoteLabelTransferSummaryTextStyle: {
    color: '#737780',
    alignSelf: 'stretch',
    fontWeight: 600,
    fontSize: 10,
    lineHeight: 15,
    textTransform: 'uppercase',
    textAlignVertical: 'center',
    fontFamily: 'Inter-600-normal',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  updateQuoteContainerColumn14Style: {
    height: 28,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  updateQuoteLabelUsd0924EurTextStyle: {
    fontFamily: 'Manrope-700-normal',
    fontWeight: 700,
    lineHeight: 28,
    color: '#001e40',
    textAlignVertical: 'center',
    fontSize: 18,
    alignSelf: 'stretch',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  updateQuoteContainerMarginColumnStyle: {
    width: '85.8%',
    height: 46,
    paddingTop: 16,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  updateQuoteContainerOverlayRowStyle: {
    backgroundColor: 'rgba(0,51,102,0.1)',
    justifyContent: 'center',
    width: '14%',
    alignItems: 'center',
    aspectRatio: 1,
    borderRadius: 12,
    flexShrink: 1,
  },
  updateQuoteContainerContainerVisualWrapperColumnStyle: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    width: 18,
    borderRadius: 0,
    height: 18,
    flexShrink: 1,
  },
  updateQuoteLabelEurTextStyle: {
    color: '#001e40',
    fontFamily: 'Manrope-700-normal',
    fontWeight: 700,
    textAlignVertical: 'center',
    lineHeight: 24,
    fontSize: 16,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  updateQuoteContainerDetailsListNoLineRuleColumnStyle: {
    backgroundColor: '#f3f3f6',
    alignSelf: 'stretch',
    padding: 8,
    borderRadius: 8,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  updateQuoteContainerOverlayRow2Style: {
    borderRadius: 4,
    padding: 16,
    justifyContent: 'space-between',
    height: 52,
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,0.5)',
    flexShrink: 1,
  },
  updateQuoteLabelUserNameText3Style: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 700,
    fontFamily: 'Manrope-700-normal',
    textAlignVertical: 'center',
    color: '#001e40',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  updateQuoteContainerOverlayRow3Style: {
    height: 52,
    borderRadius: 4,
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  updateQuoteLabelUserNameText5Style: {
    fontSize: 14,
    color: '#001e40',
    lineHeight: 20,
    textAlignVertical: 'center',
    fontFamily: 'Manrope-700-normal',
    fontWeight: 700,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  updateQuoteContainerPrimaryActionColumnStyle: {
    paddingTop: 16,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  updateQuoteCtaContinueButtonStyle: {
    shadowColor: 'rgba(0,27,60,0.04)',
    gradientType: 'linear',
    shadowRadius: 40,
    borderRadius: 12,
    paddingTop: 20,
    paddingBottom: 20,
    height: 56,
    paddingLeft: 0,
    gradientEnd: { x: 0.7997075988453417, y: 2.007352988785695 },
    alignSelf: 'stretch',
    lineHeight: 24,
    textAlign: 'center',
    paddingRight: 0,
    gradientStops: [0, 1],
    gradientColors: ['#001e40', '#003366'],
    gradientStart: { x: 0.20029240170656537, y: -1.0073529017162286 },
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 20 },
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  updateQuoteContainerColumn21Style: {
    height: 59,
    alignItems: 'center',
    paddingLeft: 32,
    paddingRight: 32,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  updateQuoteLabelExchangeRatesMayChangeUntiTextStyle: {
    lineHeight: 20,
    color: '#737780',
    width: '89.6%',
    fontWeight: 400,
    textAlignVertical: 'center',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Inter-400-normal',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
});

export default UpdateQuote;

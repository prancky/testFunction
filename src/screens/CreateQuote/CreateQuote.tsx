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
} from '@/components/shared';

import { useNavigation } from '@react-navigation/native';

import { color, imageSources, space, text } from '@/assets';

import { ASWrap } from '@/components';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type FormValues = {
  CreateQuote_Container_BackgroundBorder_DropDown?: string;
  CreateQuote_Container_BackgroundBorder_DropDown_2?: string;
  CreateQuote_Container_Options_DropDown?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const CreateQuote: React.FC<ScreenProps> = ({ route }) => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-900615'}
      testID={'2e6da0d6-8317-4615-b1d7-f97448773555'}
      style={sharedStyles.container}
    >
      <AppForm
        widgetId={'ASForm-984722'}
        validationSchema={Yup.object().shape({})}
        initialValues={{
          CreateQuote_Container_BackgroundBorder_DropDown: '',
          CreateQuote_Container_BackgroundBorder_DropDown_2: '',
          CreateQuote_Container_Options_DropDown: '',
        }}
        innerRef={formikRef}
      >
        {(formikProps: FormikProps<FormValues>) => {
          return (
            <>
              <AppAppBar
                widgetId={'CreateQuote_AppBar_HeaderTopAppBar_AppBar'}
                leadingIcon={
                  'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/b37a04f5-ef96-4d76-8f12-e8b774c98dd7-2546_6697.png'
                }
                style={styles.createQuoteAppBarHeaderTopAppBarAppBarStyle}
                centerContainerStyle={
                  styles.createQuoteAppBarHeaderTopAppBarAppBarCenterContainerStyle
                }
                textStyles={[
                  text.title.medium,
                  sharedStyles.createQuoteAppBarHeaderTopAppBarAppBarTextStyles,
                ]}
                title={
                  STRINGS.CreateQuote.CreateQuote_AppBar_HeaderTopAppBar_AppBar
                    .title
                }
              />
              <AppColumn
                widgetId={'CreateQuote_Container_Main_Column'}
                spacing={32}
                style={styles.createQuoteContainerMainColumnStyle}
              >
                <AppColumn
                  widgetId={'CreateQuote_Container_BrandIdentification_Column'}
                  spacing={4.5}
                  style={
                    styles.createQuoteContainerBrandIdentificationColumnStyle
                  }
                >
                  <AppText
                    widgetId={'CreateQuote_Label_UserName_Text'}
                    numberOfLines={1}
                    style={[
                      text.label.medium,
                      styles.createQuoteLabelUserNameTextStyle,
                    ]}
                    accessibilityLabel={
                      STRINGS.CreateQuote.CreateQuote_Label_UserName_Text
                        .accessibilityLabel
                    }
                  >
                    {STRINGS.CreateQuote.CreateQuote_Label_UserName_Text.label}
                  </AppText>
                  <AppColumn
                    widgetId={'CreateQuote_Container_Column'}
                    style={styles.createQuoteContainerColumnStyle}
                  >
                    <AppText
                      widgetId={
                        'CreateQuote_Label_SendMoneyWorldwideWithReal_Text'
                      }
                      numberOfLines={3}
                      style={[
                        text.label.medium,
                        styles.createQuoteLabelSendMoneyWorldwideWithRealTextStyle,
                      ]}
                      accessibilityLabel={
                        STRINGS.CreateQuote
                          .CreateQuote_Label_SendMoneyWorldwideWithReal_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.CreateQuote
                          .CreateQuote_Label_SendMoneyWorldwideWithReal_Text
                          .label
                      }
                    </AppText>
                  </AppColumn>
                </AppColumn>
                <AppColumn
                  widgetId={'CreateQuote_Container_Section_Column'}
                  spacing={24}
                  style={sharedStyles.createQuoteContainerColumn3}
                >
                  <AppColumn
                    widgetId={
                      'CreateQuote_Container_StepIndicatorFeedback_Column'
                    }
                    style={
                      styles.createQuoteContainerStepIndicatorFeedbackColumnStyle
                    }
                  >
                    <AppColumn
                      widgetId={'CreateQuote_Container_Column_2'}
                      style={sharedStyles.createQuoteContainerColumn2}
                    >
                      <AppText
                        widgetId={
                          'CreateQuote_Label_RealExchangeRateApplied_Text'
                        }
                        numberOfLines={1}
                        style={[
                          text.label.medium,
                          styles.createQuoteLabelRealExchangeRateAppliedTextStyle,
                        ]}
                        accessibilityLabel={
                          STRINGS.CreateQuote
                            .CreateQuote_Label_RealExchangeRateApplied_Text
                            .accessibilityLabel
                        }
                      >
                        {
                          STRINGS.CreateQuote
                            .CreateQuote_Label_RealExchangeRateApplied_Text
                            .label
                        }
                      </AppText>
                    </AppColumn>
                  </AppColumn>
                  <AppColumn
                    widgetId={'CreateQuote_Container_ExchangeSection_Column'}
                    spacing={4}
                    style={
                      styles.createQuoteContainerExchangeSectionColumnStyle
                    }
                  >
                    <AppColumn
                      widgetId={'CreateQuote_Container_SourceCurrency_Column'}
                      spacing={16}
                      style={
                        styles.createQuoteContainerSourceCurrencyColumnStyle
                      }
                    >
                      <AppColumn
                        widgetId={
                          'CreateQuote_Container_SourceCurrencyShadow_Column'
                        }
                        style={
                          styles.createQuoteContainerSourceCurrencyShadowColumnStyle
                        }
                      />
                      <AppRow
                        widgetId={'CreateQuote_Container_Row'}
                        style={styles.createQuoteContainerRowStyle}
                      >
                        <AppColumn
                          widgetId={'CreateQuote_Container_Label_Column'}
                          style={sharedStyles.createQuoteContainerLabelColumn}
                        >
                          <AppText
                            widgetId={'CreateQuote_Label_UserName_Text_2'}
                            numberOfLines={1}
                            style={[
                              text.label.medium,
                              sharedStyles.createQuoteLabelUserNameText2,
                            ]}
                            accessibilityLabel={
                              STRINGS.CreateQuote
                                .CreateQuote_Label_UserName_Text_2
                                .accessibilityLabel
                            }
                          >
                            {
                              STRINGS.CreateQuote
                                .CreateQuote_Label_UserName_Text_2.label
                            }
                          </AppText>
                        </AppColumn>
                        <AppDropDown
                          widgetId={
                            'CreateQuote_Container_BackgroundBorder_DropDown'
                          }
                          options={[]}
                          containerStyle={
                            sharedStyles.createQuoteContainerBackgroundBorderDropDownContainer
                          }
                          placeholder={
                            STRINGS.CreateQuote
                              .CreateQuote_Container_BackgroundBorder_DropDown
                              .placeholder
                          }
                          searchPlaceholder={
                            STRINGS.CreateQuote
                              .CreateQuote_Container_BackgroundBorder_DropDown
                              .searchPlaceholder
                          }
                        />
                      </AppRow>
                      <AppColumn
                        widgetId={'CreateQuote_Container_Column_3'}
                        spacing={8}
                        style={sharedStyles.createQuoteContainerColumn3}
                      >
                        <AppRow
                          widgetId={'CreateQuote_Container_Input_Row'}
                          style={sharedStyles.createQuoteContainerInputRow}
                        >
                          <AppColumn
                            widgetId={'CreateQuote_Container_Column_4'}
                            style={sharedStyles.createQuoteContainerColumn4}
                          >
                            <AppColumn
                              widgetId={'CreateQuote_Container_Column_5'}
                              style={sharedStyles.createQuoteContainerColumn10}
                            >
                              <AppText
                                widgetId={'CreateQuote_Label_Phone_Text'}
                                numberOfLines={1}
                                style={[
                                  text.label.medium,
                                  styles.createQuoteLabelPhoneTextStyle,
                                ]}
                                accessibilityLabel={
                                  STRINGS.CreateQuote
                                    .CreateQuote_Label_Phone_Text
                                    .accessibilityLabel
                                }
                              >
                                {
                                  STRINGS.CreateQuote
                                    .CreateQuote_Label_Phone_Text.label
                                }
                              </AppText>
                            </AppColumn>
                          </AppColumn>
                        </AppRow>
                        <AppRow
                          widgetId={'CreateQuote_Container_Row_2'}
                          style={styles.createQuoteContainerRow2Style}
                        >
                          <AppColumn
                            widgetId={'CreateQuote_Container_Column_6'}
                            style={styles.createQuoteContainerColumn6Style}
                          >
                            <AppText
                              widgetId={'CreateQuote_Label_UserName_Text_3'}
                              numberOfLines={1}
                              style={[
                                text.label.medium,
                                styles.createQuoteLabelUserNameText3Style,
                              ]}
                              accessibilityLabel={
                                STRINGS.CreateQuote
                                  .CreateQuote_Label_UserName_Text_3
                                  .accessibilityLabel
                              }
                            >
                              {
                                STRINGS.CreateQuote
                                  .CreateQuote_Label_UserName_Text_3.label
                              }
                            </AppText>
                          </AppColumn>
                        </AppRow>
                      </AppColumn>
                    </AppColumn>
                    <AppRow
                      widgetId={
                        'CreateQuote_Container_TransferFlowConnector_Row'
                      }
                      style={
                        styles.createQuoteContainerTransferFlowConnectorRowStyle
                      }
                    >
                      <AppRow
                        widgetId={'CreateQuote_Container_Background_Row'}
                        scrollable={true}
                        style={styles.createQuoteContainerBackgroundRowStyle}
                      >
                        <AppColumn
                          widgetId={
                            'CreateQuote_Container_OverlayShadow_Column'
                          }
                          style={
                            styles.createQuoteContainerOverlayShadowColumnStyle
                          }
                        />
                        <AppColumn
                          widgetId={'CreateQuote_Container_Column_7'}
                          style={sharedStyles.createQuoteContainerColumn14}
                        >
                          <AppImage
                            widgetId={'CreateQuote_Image_Icon_Image'}
                            resizeMode={'stretch'}
                            source={imageSources.image__pobne}
                            style={sharedStyles.createQuoteImageIconImage}
                          />
                        </AppColumn>
                      </AppRow>
                    </AppRow>
                    <AppColumn
                      widgetId={'CreateQuote_Container_TargetCurrency_Column'}
                      spacing={16}
                      style={
                        sharedStyles.createQuoteContainerTargetCurrencyColumn
                      }
                    >
                      <AppRow
                        widgetId={'CreateQuote_Container_Row_3'}
                        style={styles.createQuoteContainerRow3Style}
                      >
                        <AppColumn
                          widgetId={'CreateQuote_Container_Label_Column_2'}
                          style={styles.createQuoteContainerLabelColumn2Style}
                        >
                          <AppText
                            widgetId={'CreateQuote_Label_UserName_Text_4'}
                            numberOfLines={1}
                            style={[
                              text.label.medium,
                              sharedStyles.createQuoteLabelUserNameText2,
                            ]}
                            accessibilityLabel={
                              STRINGS.CreateQuote
                                .CreateQuote_Label_UserName_Text_4
                                .accessibilityLabel
                            }
                          >
                            {
                              STRINGS.CreateQuote
                                .CreateQuote_Label_UserName_Text_4.label
                            }
                          </AppText>
                        </AppColumn>
                        <AppDropDown
                          widgetId={
                            'CreateQuote_Container_BackgroundBorder_DropDown_2'
                          }
                          options={[]}
                          containerStyle={
                            styles.createQuoteContainerBackgroundBorderDropDown2ContainerStyle
                          }
                          placeholder={
                            STRINGS.CreateQuote
                              .CreateQuote_Container_BackgroundBorder_DropDown_2
                              .placeholder
                          }
                          searchPlaceholder={
                            STRINGS.CreateQuote
                              .CreateQuote_Container_BackgroundBorder_DropDown_2
                              .searchPlaceholder
                          }
                        />
                      </AppRow>
                      <AppColumn
                        widgetId={'CreateQuote_Container_Column_8'}
                        spacing={8}
                        style={sharedStyles.createQuoteContainerColumn3}
                      >
                        <AppRow
                          widgetId={'CreateQuote_Container_Input_Row_2'}
                          style={sharedStyles.createQuoteContainerInputRow}
                        >
                          <AppColumn
                            widgetId={'CreateQuote_Container_Column_9'}
                            style={sharedStyles.createQuoteContainerColumn4}
                          >
                            <AppColumn
                              widgetId={'CreateQuote_Container_Column_10'}
                              style={sharedStyles.createQuoteContainerColumn10}
                            >
                              <AppText
                                widgetId={'CreateQuote_Label_Text'}
                                numberOfLines={1}
                                style={[
                                  text.label.medium,
                                  sharedStyles.createQuoteLabelText,
                                ]}
                                accessibilityLabel={
                                  STRINGS.CreateQuote.CreateQuote_Label_Text
                                    .accessibilityLabel
                                }
                              >
                                {
                                  STRINGS.CreateQuote.CreateQuote_Label_Text
                                    .label
                                }
                              </AppText>
                            </AppColumn>
                          </AppColumn>
                        </AppRow>
                        <AppRow
                          widgetId={'CreateQuote_Container_Row_4'}
                          style={styles.createQuoteContainerRow4Style}
                        >
                          <AppColumn
                            widgetId={'CreateQuote_Container_Column_11'}
                            style={styles.createQuoteContainerColumn11Style}
                          >
                            <AppText
                              widgetId={'CreateQuote_Label_UserName_Text_5'}
                              numberOfLines={1}
                              style={[
                                text.label.medium,
                                styles.createQuoteLabelUserNameText5Style,
                              ]}
                              accessibilityLabel={
                                STRINGS.CreateQuote
                                  .CreateQuote_Label_UserName_Text_5
                                  .accessibilityLabel
                              }
                            >
                              {
                                STRINGS.CreateQuote
                                  .CreateQuote_Label_UserName_Text_5.label
                              }
                            </AppText>
                          </AppColumn>
                          <AppColumn
                            widgetId={'CreateQuote_Container_Column_12'}
                            style={sharedStyles.createQuoteContainerColumn12}
                          >
                            <AppText
                              widgetId={'CreateQuote_Label_Calculating_Text'}
                              numberOfLines={1}
                              style={[
                                text.label.medium,
                                sharedStyles.createQuoteLabelCalculatingText,
                              ]}
                              accessibilityLabel={
                                STRINGS.CreateQuote
                                  .CreateQuote_Label_Calculating_Text
                                  .accessibilityLabel
                              }
                            >
                              {
                                STRINGS.CreateQuote
                                  .CreateQuote_Label_Calculating_Text.label
                              }
                            </AppText>
                          </AppColumn>
                        </AppRow>
                      </AppColumn>
                    </AppColumn>
                  </AppColumn>
                  <AppText
                    widgetId={'CreateQuote_Body_Text'}
                    numberOfLines={2}
                    style={[text.label.medium, styles.createQuoteBodyTextStyle]}
                    accessibilityLabel={
                      STRINGS.CreateQuote.CreateQuote_Body_Text
                        .accessibilityLabel
                    }
                  >
                    {STRINGS.CreateQuote.CreateQuote_Body_Text.label}
                  </AppText>
                  <AppColumn
                    widgetId={
                      'CreateQuote_Container_TransferDetailsSection_Column'
                    }
                    spacing={24}
                    style={
                      styles.createQuoteContainerTransferDetailsSectionColumnStyle
                    }
                  >
                    <AppColumn
                      widgetId={'CreateQuote_Container_TransferType_Column'}
                      spacing={12}
                      style={sharedStyles.createQuoteContainerColumn3}
                    >
                      <AppColumn
                        widgetId={'CreateQuote_Container_Label_Column_3'}
                        style={sharedStyles.createQuoteContainerLabelColumn3}
                      >
                        <AppText
                          widgetId={'CreateQuote_Label_UserName_Text_6'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            styles.createQuoteLabelUserNameText6Style,
                          ]}
                          accessibilityLabel={
                            STRINGS.CreateQuote
                              .CreateQuote_Label_UserName_Text_6
                              .accessibilityLabel
                          }
                        >
                          {
                            STRINGS.CreateQuote
                              .CreateQuote_Label_UserName_Text_6.label
                          }
                        </AppText>
                      </AppColumn>
                      <ASWrap
                        direction={'row'}
                        name={'CreateQuote_Container_Wrap'}
                        style={styles.createQuoteContainerWrapStyle}
                        testId={'CreateQuote_Container_Wrap'}
                      >
                        <AppButton
                          widgetId={'CreateQuote_Cta_Action_Button'}
                          style={styles.createQuoteCtaActionButtonStyle}
                          textStyle={[
                            text.label.medium,
                            sharedStyles.createQuoteCtaActionButton2Text,
                          ]}
                          label={
                            STRINGS.CreateQuote.CreateQuote_Cta_Action_Button
                              .label
                          }
                        >
                          <AppColumn
                            widgetId={
                              'CreateQuote_Container_IconVisualWrapper_Column'
                            }
                            style={
                              sharedStyles.createQuoteContainerIconVisualWrapperColumn
                            }
                          >
                            <AppIconButton
                              widgetId={'CreateQuote_Icon'}
                              size={20}
                              icon={
                                'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/2160dfe5-a61f-4610-a5e2-05c7a3594efa-2546_6650.svg'
                              }
                              style={styles.createQuoteIconStyle}
                            />
                          </AppColumn>
                          <AppText
                            widgetId={'CreateQuote_Label_UserName_Text_7'}
                            numberOfLines={1}
                            style={[
                              text.label.medium,
                              styles.createQuoteLabelUserNameText7Style,
                            ]}
                            accessibilityLabel={
                              STRINGS.CreateQuote
                                .CreateQuote_Label_UserName_Text_7
                                .accessibilityLabel
                            }
                          >
                            {
                              STRINGS.CreateQuote
                                .CreateQuote_Label_UserName_Text_7.label
                            }
                          </AppText>
                        </AppButton>
                        <AppButton
                          widgetId={'CreateQuote_Cta_Action_Button_2'}
                          style={styles.createQuoteCtaActionButton2Style}
                          textStyle={[
                            text.label.medium,
                            sharedStyles.createQuoteCtaActionButton2Text,
                          ]}
                          label={
                            STRINGS.CreateQuote.CreateQuote_Cta_Action_Button_2
                              .label
                          }
                        >
                          <AppColumn
                            widgetId={
                              'CreateQuote_Container_IconVisualWrapper_Column_2'
                            }
                            style={
                              sharedStyles.createQuoteContainerIconVisualWrapperColumn2
                            }
                          >
                            <AppIconButton
                              widgetId={'CreateQuote_Icon_2'}
                              icon={
                                'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/cc1b9a8b-bcfb-4216-a146-af16b3145303-2546_6653.svg'
                              }
                              size={19}
                              style={styles.createQuoteIcon2Style}
                            />
                          </AppColumn>
                          <AppText
                            widgetId={'CreateQuote_Label_UserName_Text_8'}
                            numberOfLines={1}
                            style={[
                              text.label.medium,
                              styles.createQuoteLabelUserNameText8Style,
                            ]}
                            accessibilityLabel={
                              STRINGS.CreateQuote
                                .CreateQuote_Label_UserName_Text_8
                                .accessibilityLabel
                            }
                          >
                            {
                              STRINGS.CreateQuote
                                .CreateQuote_Label_UserName_Text_8.label
                            }
                          </AppText>
                        </AppButton>
                        <AppButton
                          widgetId={'CreateQuote_Cta_Action_Button_3'}
                          textStyle={[
                            text.label.medium,
                            sharedStyles.createQuoteCtaActionButton2Text,
                          ]}
                          style={styles.createQuoteCtaActionButton3Style}
                          label={
                            STRINGS.CreateQuote.CreateQuote_Cta_Action_Button_3
                              .label
                          }
                        >
                          <AppImage
                            widgetId={'CreateQuote_Image_Icon_Image_2'}
                            source={imageSources.image__djl2}
                            resizeMode={'contain'}
                            style={styles.createQuoteImageIconImage2Style}
                          />
                          <AppText
                            widgetId={'CreateQuote_Label_UserName_Text_9'}
                            numberOfLines={1}
                            style={[
                              text.label.medium,
                              styles.createQuoteLabelUserNameText9Style,
                            ]}
                            accessibilityLabel={
                              STRINGS.CreateQuote
                                .CreateQuote_Label_UserName_Text_9
                                .accessibilityLabel
                            }
                          >
                            {
                              STRINGS.CreateQuote
                                .CreateQuote_Label_UserName_Text_9.label
                            }
                          </AppText>
                        </AppButton>
                      </ASWrap>
                    </AppColumn>
                    <AppColumn
                      widgetId={'CreateQuote_Container_PurposeDropdown_Column'}
                      spacing={8}
                      style={sharedStyles.createQuoteContainerColumn3}
                    >
                      <AppColumn
                        widgetId={'CreateQuote_Container_Label_Column_4'}
                        style={sharedStyles.createQuoteContainerLabelColumn3}
                      >
                        <AppText
                          widgetId={'CreateQuote_Label_PurposeOfTransfer_Text'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            styles.createQuoteLabelPurposeOfTransferTextStyle,
                          ]}
                          accessibilityLabel={
                            STRINGS.CreateQuote
                              .CreateQuote_Label_PurposeOfTransfer_Text
                              .accessibilityLabel
                          }
                        >
                          {
                            STRINGS.CreateQuote
                              .CreateQuote_Label_PurposeOfTransfer_Text.label
                          }
                        </AppText>
                      </AppColumn>
                      <AppColumn
                        widgetId={'CreateQuote_Container_Column_13'}
                        style={sharedStyles.createQuoteContainerColumn13}
                      >
                        <AppDropDown
                          widgetId={'CreateQuote_Container_Options_DropDown'}
                          options={[]}
                          containerStyle={
                            sharedStyles.createQuoteContainerOptionsDropDownContainer
                          }
                          placeholder={
                            STRINGS.CreateQuote
                              .CreateQuote_Container_Options_DropDown
                              .placeholder
                          }
                          searchPlaceholder={
                            STRINGS.CreateQuote
                              .CreateQuote_Container_Options_DropDown
                              .searchPlaceholder
                          }
                        />
                      </AppColumn>
                    </AppColumn>
                  </AppColumn>
                  <AppColumn
                    widgetId={'CreateQuote_Container_FinancialSummary_Column'}
                    spacing={12}
                    style={
                      sharedStyles.createQuoteContainerFinancialSummaryColumn
                    }
                  >
                    <AppRow
                      widgetId={'CreateQuote_Container_Row_5'}
                      style={sharedStyles.createQuoteContainerRow5}
                    >
                      <AppColumn
                        widgetId={'CreateQuote_Container_Column_14'}
                        style={sharedStyles.createQuoteContainerColumn14}
                      >
                        <AppText
                          widgetId={'CreateQuote_Label_UserName_Text_10'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            sharedStyles.createQuoteLabelUserNameText10,
                          ]}
                          accessibilityLabel={
                            STRINGS.CreateQuote
                              .CreateQuote_Label_UserName_Text_10
                              .accessibilityLabel
                          }
                        >
                          {
                            STRINGS.CreateQuote
                              .CreateQuote_Label_UserName_Text_10.label
                          }
                        </AppText>
                      </AppColumn>
                      <AppColumn
                        widgetId={'CreateQuote_Container_Column_15'}
                        style={sharedStyles.createQuoteContainerColumn14}
                      >
                        <AppText
                          widgetId={'CreateQuote_Label_Usd0924Eur_Text'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            styles.createQuoteLabelUsd0924EurTextStyle,
                          ]}
                          accessibilityLabel={
                            STRINGS.CreateQuote
                              .CreateQuote_Label_Usd0924Eur_Text
                              .accessibilityLabel
                          }
                        >
                          {
                            STRINGS.CreateQuote
                              .CreateQuote_Label_Usd0924Eur_Text.label
                          }
                        </AppText>
                      </AppColumn>
                    </AppRow>
                    <AppRow
                      widgetId={'CreateQuote_Container_Row_6'}
                      style={sharedStyles.createQuoteContainerRow5}
                    >
                      <AppColumn
                        widgetId={'CreateQuote_Container_Column_16'}
                        style={sharedStyles.createQuoteContainerColumn14}
                      >
                        <AppText
                          widgetId={'CreateQuote_Label_UserName_Text_11'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            sharedStyles.createQuoteLabelUserNameText10,
                          ]}
                          accessibilityLabel={
                            STRINGS.CreateQuote
                              .CreateQuote_Label_UserName_Text_11
                              .accessibilityLabel
                          }
                        >
                          {
                            STRINGS.CreateQuote
                              .CreateQuote_Label_UserName_Text_11.label
                          }
                        </AppText>
                      </AppColumn>
                      <AppColumn
                        widgetId={'CreateQuote_Container_Column_17'}
                        style={sharedStyles.createQuoteContainerColumn14}
                      >
                        <AppText
                          widgetId={'CreateQuote_Label_UserName_Text_12'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            styles.createQuoteLabelUserNameText12Style,
                          ]}
                          accessibilityLabel={
                            STRINGS.CreateQuote
                              .CreateQuote_Label_UserName_Text_12
                              .accessibilityLabel
                          }
                        >
                          {
                            STRINGS.CreateQuote
                              .CreateQuote_Label_UserName_Text_12.label
                          }
                        </AppText>
                      </AppColumn>
                    </AppRow>
                    <AppColumn
                      widgetId={'CreateQuote_Container_Column_18'}
                      spacing={8}
                      style={styles.createQuoteContainerColumn18Style}
                    >
                      <AppColumn
                        widgetId={'CreateQuote_Container_Overlay_Column'}
                        style={styles.createQuoteContainerOverlayColumnStyle}
                      >
                        <AppColumn
                          widgetId={'CreateQuote_Container_Background_Column'}
                          style={
                            styles.createQuoteContainerBackgroundColumnStyle
                          }
                        />
                      </AppColumn>
                      <AppColumn
                        widgetId={'CreateQuote_Container_Column_19'}
                        style={styles.createQuoteContainerColumn19Style}
                      >
                        <AppText
                          widgetId={
                            'CreateQuote_Label_CalculatedBasedOnLiveMidM_Text'
                          }
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            styles.createQuoteLabelCalculatedBasedOnLiveMidMTextStyle,
                          ]}
                          accessibilityLabel={
                            STRINGS.CreateQuote
                              .CreateQuote_Label_CalculatedBasedOnLiveMidM_Text
                              .accessibilityLabel
                          }
                        >
                          {
                            STRINGS.CreateQuote
                              .CreateQuote_Label_CalculatedBasedOnLiveMidM_Text
                              .label
                          }
                        </AppText>
                      </AppColumn>
                    </AppColumn>
                  </AppColumn>
                  <AppButton
                    widgetId={'CreateQuote_Cta_Continue_Button'}
                    textStyle={[
                      text.label.medium,
                      sharedStyles.createQuoteCtaContinueButtonText,
                    ]}
                    style={styles.createQuoteCtaContinueButtonStyle}
                    accessibilityLabel={
                      STRINGS.CreateQuote.CreateQuote_Cta_Continue_Button
                        .accessibilityLabel
                    }
                    label={
                      STRINGS.CreateQuote.CreateQuote_Cta_Continue_Button.label
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
  createQuoteAppBarHeaderTopAppBarAppBarStyle: {
    height: 64,
    borderColor: color.border.default,
    paddingLeft: space['3'],
    paddingRight: space['3'],
    borderBottomWidth: 0,
  },
  createQuoteAppBarHeaderTopAppBarAppBarCenterContainerStyle: { padding: 32 },
  createQuoteContainerMainColumnStyle: {
    paddingLeft: 24,
    alignSelf: 'stretch',
    paddingRight: 24,
    maxWidth: 512,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createQuoteContainerBrandIdentificationColumnStyle: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  createQuoteLabelUserNameTextStyle: {
    fontFamily: 'Manrope-800-normal',
    letterSpacing: -1.5,
    color: '#003366',
    lineHeight: 36,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 800,
    fontSize: 30,
    width: '87.1%',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createQuoteContainerColumnStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  createQuoteLabelSendMoneyWorldwideWithRealTextStyle: {
    fontFamily: 'Inter-400-normal',
    alignSelf: 'stretch',
    fontSize: 14,
    color: '#43474f',
    lineHeight: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 400,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createQuoteContainerStepIndicatorFeedbackColumnStyle: {
    padding: 12,
    height: 42,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0,109,47,0.05)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(0,109,47,0.1)',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createQuoteLabelRealExchangeRateAppliedTextStyle: {
    lineHeight: 16,
    width: '92.4%',
    color: '#006d2f',
    fontFamily: 'Inter-600-normal',
    letterSpacing: 1.2000000476837158,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 600,
    textAlignVertical: 'center',
    textTransform: 'uppercase',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createQuoteContainerExchangeSectionColumnStyle: {
    padding: 4,
    borderRadius: 12,
    backgroundColor: '#f3f3f6',
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createQuoteContainerSourceCurrencyColumnStyle: {
    borderColor: 'rgba(195,198,209,0.2)',
    backgroundColor: '#ffffff',
    height: 153,
    borderRadius: 12,
    padding: 20,
    alignSelf: 'stretch',
    borderWidth: 1,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createQuoteContainerSourceCurrencyShadowColumnStyle: {
    borderRadius: 12,
    width: '100%',
    position: 'absolute',
    shadowColor: 'rgba(0,0,0,0.05)',
    shadowRadius: 2,
    left: '0%',
    backgroundColor: 'rgba(255,255,255,0.002)',
    height: '99.7%',
    top: '0%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    shadowOffset: { width: 0, height: 1 },
  },
  createQuoteContainerRowStyle: {
    alignSelf: 'stretch',
    height: 34,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 1,
  },
  createQuoteLabelPhoneTextStyle: {
    textAlignVertical: 'center',
    fontFamily: 'Manrope-700-normal',
    fontWeight: 700,
    lineHeight: 36,
    color: '#003366',
    alignSelf: 'stretch',
    fontSize: 30,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createQuoteContainerRow2Style: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    height: 17,
    alignItems: 'center',
    flexShrink: 1,
  },
  createQuoteContainerColumn6Style: {
    height: 17,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createQuoteLabelUserNameText3Style: {
    color: '#43474f',
    fontWeight: 400,
    fontFamily: 'Inter-400-normal',
    fontSize: 11,
    lineHeight: 17,
    textAlignVertical: 'center',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createQuoteContainerTransferFlowConnectorRowStyle: {
    alignSelf: 'stretch',
    aspectRatio: 8.35,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexShrink: 1,
  },
  createQuoteContainerBackgroundRowStyle: {
    justifyContent: 'center',
    width: 40,
    borderRadius: 9999,
    alignItems: 'center',
    backgroundColor: '#003366',
    height: 40,
    flexShrink: 1,
  },
  createQuoteContainerOverlayShadowColumnStyle: {
    backgroundColor: 'rgba(255,255,255,0.002)',
    width: 40,
    shadowSpread: -2,
    height: 40,
    borderRadius: 9999,
    left: '0%',
    position: 'absolute',
    top: '0%',
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowRadius: 4,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    shadowOffset: { width: 0, height: 2 },
  },
  createQuoteContainerRow3Style: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 34,
    flexShrink: 1,
  },
  createQuoteContainerLabelColumn2Style: {
    flex: 1,
    height: 15,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createQuoteContainerBackgroundBorderDropDown2ContainerStyle: {
    backgroundColor: '#eeeef0',
    height: 34,
    paddingBottom: 6,
    paddingTop: 6,
    borderWidth: 1,
    paddingLeft: 12,
    width: 89.44999694824219,
    borderColor: 'rgba(0,0,0,0)',
    paddingRight: 12,
    borderRadius: 4,
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'space-between',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  createQuoteContainerRow4Style: {
    height: 17,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  createQuoteContainerColumn11Style: {
    height: 17,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createQuoteLabelUserNameText5Style: {
    color: '#43474f',
    fontSize: 11,
    fontFamily: 'Inter-400-normal',
    lineHeight: 17,
    textAlignVertical: 'center',
    fontWeight: 400,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createQuoteBodyTextStyle: {
    textAlign: 'center',
    alignSelf: 'stretch',
    fontFamily: 'Inter-700-normal',
    fontWeight: 700,
    fontSize: 9,
    lineHeight: 14,
    color: '#43474f',
    textAlignVertical: 'center',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createQuoteContainerTransferDetailsSectionColumnStyle: {
    borderRadius: 12,
    alignSelf: 'stretch',
    padding: 24,
    backgroundColor: '#f3f3f6',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createQuoteLabelUserNameText6Style: {
    textAlignVertical: 'center',
    fontFamily: 'Inter-700-normal',
    fontSize: 10,
    lineHeight: 15,
    fontWeight: 700,
    textTransform: 'uppercase',
    alignSelf: 'stretch',
    color: '#737780',
    letterSpacing: 1,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createQuoteContainerWrapStyle: {
    alignSelf: 'stretch',
    runSpacing: 12,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    columnGap: space['2'],
    justifyContent: 'flex-start',
    rowGap: space['2'],
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  createQuoteCtaActionButtonStyle: {
    paddingTop: 16,
    paddingLeft: 30.549999237060547,
    flexDirection: 'column',
    paddingRight: 30.540000915527344,
    borderColor: '#003366',
    height: 79,
    paddingBottom: 16,
    borderWidth: 1,
    width: '30.6%',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  createQuoteIconStyle: {
    paddingBottom: 0,
    width: '100%',
    paddingRight: 0,
    height: '100%',
    paddingLeft: 0,
    paddingTop: 0,
  },
  createQuoteLabelUserNameText7Style: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#003366',
    fontSize: 11,
    fontWeight: 700,
    width: 33,
    lineHeight: 17,
    fontFamily: 'Inter-700-normal',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createQuoteCtaActionButton2Style: {
    paddingBottom: 16,
    borderRadius: 8,
    borderColor: 'rgba(0,0,0,0)',
    height: 77,
    paddingLeft: 27.139999389648438,
    paddingTop: 16,
    flexDirection: 'column',
    width: '30.6%',
    paddingRight: 27.139999389648438,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  createQuoteIcon2Style: {
    paddingLeft: 0,
    paddingRight: 0,
    width: '100%',
    paddingBottom: 0,
    height: '100%',
    paddingTop: 0,
  },
  createQuoteLabelUserNameText8Style: {
    fontFamily: 'Inter-700-normal',
    color: '#43474f',
    fontSize: 11,
    textAlignVertical: 'center',
    width: 40,
    textAlign: 'center',
    fontWeight: 700,
    lineHeight: 17,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createQuoteCtaActionButton3Style: {
    backgroundColor: '#ffffff',
    paddingBottom: 16,
    borderColor: 'rgba(0,0,0,0)',
    width: '30.6%',
    paddingLeft: 30.219999313354492,
    borderRadius: 8,
    paddingRight: 30.229999542236328,
    borderWidth: 1,
    flexDirection: 'column',
    height: 75,
    paddingTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  createQuoteImageIconImage2Style: {
    height: 16,
    width: 22,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  createQuoteLabelUserNameText9Style: {
    lineHeight: 17,
    fontWeight: 700,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 11,
    width: 34,
    fontFamily: 'Inter-700-normal',
    color: '#43474f',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createQuoteLabelPurposeOfTransferTextStyle: {
    textAlignVertical: 'center',
    fontSize: 10,
    textTransform: 'uppercase',
    fontWeight: 700,
    fontFamily: 'Inter-700-normal',
    lineHeight: 15,
    alignSelf: 'stretch',
    letterSpacing: 1,
    color: '#737780',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createQuoteLabelUsd0924EurTextStyle: {
    fontFamily: 'Inter-700-normal',
    color: '#1a1c1e',
    lineHeight: 20,
    fontSize: 14,
    fontWeight: 700,
    textAlignVertical: 'center',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createQuoteLabelUserNameText12Style: {
    lineHeight: 20,
    fontWeight: 700,
    fontSize: 14,
    textAlignVertical: 'center',
    fontFamily: 'Inter-700-normal',
    color: '#006d2f',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createQuoteContainerColumn18Style: {
    paddingTop: 8,
    alignSelf: 'stretch',
    height: 35,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createQuoteContainerOverlayColumnStyle: {
    backgroundColor: 'rgba(195,198,209,0.1)',
    paddingRight: 109,
    alignSelf: 'stretch',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 9999,
    minHeight: 4,
    flexShrink: 1,
    alignItems: 'stretch',
  },
  createQuoteContainerBackgroundColumnStyle: {
    backgroundColor: '#003366',
    alignSelf: 'stretch',
    height: 4,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createQuoteContainerColumn19Style: {
    height: 15,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  createQuoteLabelCalculatedBasedOnLiveMidMTextStyle: {
    lineHeight: 15,
    color: '#43474f',
    textAlignVertical: 'center',
    fontFamily: 'Inter-400-normal',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 10,
    width: '62.1%',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createQuoteCtaContinueButtonStyle: {
    lineHeight: 20,
    borderRadius: 8,
    alignSelf: 'stretch',
    paddingRight: 0,
    height: 52,
    backgroundColor: '#003366',
    paddingBottom: 16,
    paddingLeft: 0,
    textAlign: 'center',
    paddingTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
});

export default CreateQuote;

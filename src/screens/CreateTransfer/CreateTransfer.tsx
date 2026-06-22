import React, { useRef } from 'react';
import {
  AppAppBar,
  AppButton,
  AppColumn,
  AppContainer,
  AppDropDown,
  AppForm,
  AppImage,
  AppRow,
  AppText,
  AppTextField,
} from '@/components/shared';

import { useNavigation } from '@react-navigation/native';

import { color, imageSources, space, component, text, border } from '@/assets';

import { ASStack } from '@/components';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type FormValues = {
  CreateTransfer_Input_Background_Input?: string;
  CreateTransfer_Input_SymQ20248812_Input?: string;
  CreateTransfer_Input_Rec99234410_Input?: string;
  CreateTransfer_Input_EgrentPayment_Input?: string;
  CreateTransfer_Container_Options_DropDown?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const CreateTransfer: React.FC<ScreenProps> = ({ route }) => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-571859'}
      testID={'517bb959-0b3c-49a4-87f5-6161f864846c'}
      style={sharedStyles.container}
    >
      <AppForm
        widgetId={'ASForm-917822'}
        validationSchema={Yup.object().shape({})}
        initialValues={{
          CreateTransfer_Input_Background_Input: '',
          CreateTransfer_Input_SymQ20248812_Input: '',
          CreateTransfer_Input_Rec99234410_Input: '',
          CreateTransfer_Input_EgrentPayment_Input: '',
          CreateTransfer_Container_Options_DropDown: '',
        }}
        innerRef={formikRef}
      >
        {(formikProps: FormikProps<FormValues>) => {
          return (
            <>
              <AppAppBar
                widgetId={
                  'CreateTransfer_AppBar_HeaderTopAppBarFromSharedCompon_AppBar'
                }
                leadingIcon={
                  'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/b195a43d-f496-418f-a775-fbdbe1f28d3e-2557_7304.png'
                }
                textStyles={[
                  text.title.medium,
                  sharedStyles.createQuoteAppBarHeaderTopAppBarAppBarTextStyles,
                ]}
                style={
                  styles.createTransferAppBarHeaderTopAppBarFromSharedComponAppBarStyle
                }
                centerContainerStyle={
                  sharedStyles.createTransferAppBarHeaderTopAppBarFromSharedComponAppBarCenterContainer
                }
                title={
                  STRINGS.CreateTransfer
                    .CreateTransfer_AppBar_HeaderTopAppBarFromSharedCompon_AppBar
                    .title
                }
              />
              <AppColumn
                widgetId={'CreateTransfer_Container_Main_Column'}
                spacing={20}
                scrollable={true}
                style={styles.createTransferContainerMainColumnStyle}
              >
                <AppColumn
                  widgetId={
                    'CreateTransfer_Container_EditorialHeaderSection_Column'
                  }
                  spacing={8}
                  style={sharedStyles.createQuoteContainerColumn3}
                >
                  <AppColumn
                    widgetId={'CreateTransfer_Container_Heading2_Column'}
                    style={sharedStyles.createQuoteContainerColumn3}
                  >
                    <AppText
                      widgetId={
                        'CreateTransfer_Label_ReviewAndConfirmYourTransf_Text'
                      }
                      numberOfLines={3}
                      style={[
                        text.label.medium,
                        styles.createTransferLabelReviewAndConfirmYourTransfTextStyle,
                      ]}
                      accessibilityLabel={
                        STRINGS.CreateTransfer
                          .CreateTransfer_Label_ReviewAndConfirmYourTransf_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.CreateTransfer
                          .CreateTransfer_Label_ReviewAndConfirmYourTransf_Text
                          .label
                      }
                    </AppText>
                  </AppColumn>
                  <AppColumn
                    widgetId={'CreateTransfer_Container_Column'}
                    style={styles.createTransferContainerColumnStyle}
                  >
                    <AppText
                      widgetId={
                        'CreateTransfer_Label_CheckTheDetailsBelowBefore_Text'
                      }
                      numberOfLines={2}
                      style={[
                        text.label.medium,
                        styles.createTransferLabelCheckTheDetailsBelowBeforeTextStyle,
                      ]}
                      accessibilityLabel={
                        STRINGS.CreateTransfer
                          .CreateTransfer_Label_CheckTheDetailsBelowBefore_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.CreateTransfer
                          .CreateTransfer_Label_CheckTheDetailsBelowBefore_Text
                          .label
                      }
                    </AppText>
                  </AppColumn>
                </AppColumn>
                <AppColumn
                  widgetId={'CreateTransfer_Container_QuoteId_Column'}
                  style={styles.createTransferContainerQuoteIdColumnStyle}
                >
                  <AppText
                    widgetId={'CreateTransfer_Label_CustomerTransactionId_Text'}
                    numberOfLines={2}
                    style={[
                      text.label.medium,
                      styles.createTransferLabelCustomerTransactionIdTextStyle,
                    ]}
                    accessibilityLabel={
                      STRINGS.CreateTransfer
                        .CreateTransfer_Label_CustomerTransactionId_Text
                        .accessibilityLabel
                    }
                  >
                    {
                      STRINGS.CreateTransfer
                        .CreateTransfer_Label_CustomerTransactionId_Text.label
                    }
                  </AppText>
                  <AppTextField
                    widgetId={'CreateTransfer_Input_Background_Input'}
                    placeholder={''}
                    suffixIcon={
                      'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/753c95c7-610c-407e-8fc5-135cd025100e-2558_7335.png'
                    }
                    style={styles.createTransferInputBackgroundInputStyle}
                  />
                </AppColumn>
                <AppColumn
                  widgetId={
                    'CreateTransfer_Container_TransactionDetailsForm_Column'
                  }
                  spacing={24}
                  style={sharedStyles.createQuoteContainerColumn3}
                >
                  <AppColumn
                    widgetId={'CreateTransfer_Container_ReadOnlyCluster_Column'}
                    spacing={16}
                    style={sharedStyles.createQuoteContainerColumn3}
                  >
                    <AppColumn
                      widgetId={'CreateTransfer_Container_QuoteId_Column_2'}
                      style={sharedStyles.createQuoteContainerColumn3}
                    >
                      <AppText
                        widgetId={'CreateTransfer_Label_QuoteId_Text'}
                        numberOfLines={2}
                        style={[
                          text.label.medium,
                          styles.createTransferLabelQuoteIdTextStyle,
                        ]}
                        accessibilityLabel={
                          STRINGS.CreateTransfer
                            .CreateTransfer_Label_QuoteId_Text
                            .accessibilityLabel
                        }
                      >
                        {
                          STRINGS.CreateTransfer
                            .CreateTransfer_Label_QuoteId_Text.label
                        }
                      </AppText>
                      <AppTextField
                        widgetId={'CreateTransfer_Input_SymQ20248812_Input'}
                        suffixIcon={
                          'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/759d2a9c-abb0-49cb-9942-e3a9355b6a05-2557_7243.png'
                        }
                        style={styles.createTransferInputSymQ20248812InputStyle}
                        placeholder={
                          STRINGS.CreateTransfer
                            .CreateTransfer_Input_SymQ20248812_Input.placeholder
                        }
                      />
                    </AppColumn>
                    <AppColumn
                      widgetId={'CreateTransfer_Container_RecipientId_Column'}
                      style={sharedStyles.createQuoteContainerColumn3}
                    >
                      <AppText
                        widgetId={'CreateTransfer_Label_UserName_Text'}
                        numberOfLines={2}
                        style={[
                          text.label.medium,
                          styles.createTransferLabelUserNameTextStyle,
                        ]}
                        accessibilityLabel={
                          STRINGS.CreateTransfer
                            .CreateTransfer_Label_UserName_Text
                            .accessibilityLabel
                        }
                      >
                        {
                          STRINGS.CreateTransfer
                            .CreateTransfer_Label_UserName_Text.label
                        }
                      </AppText>
                      <AppTextField
                        widgetId={'CreateTransfer_Input_Rec99234410_Input'}
                        suffixIcon={
                          'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/f7707b15-488f-430b-8431-96cef2f663dd-2557_7250.png'
                        }
                        style={styles.createTransferInputRec99234410InputStyle}
                        placeholder={
                          STRINGS.CreateTransfer
                            .CreateTransfer_Input_Rec99234410_Input.placeholder
                        }
                      />
                    </AppColumn>
                  </AppColumn>
                  <AppColumn
                    widgetId={
                      'CreateTransfer_Container_ReferenceOptional_Column'
                    }
                    style={
                      styles.createTransferContainerReferenceOptionalColumnStyle
                    }
                  >
                    <AppText
                      widgetId={'CreateTransfer_Label_ReferenceOptional_Text'}
                      numberOfLines={2}
                      style={[
                        text.label.medium,
                        styles.createTransferLabelReferenceOptionalTextStyle,
                      ]}
                      accessibilityLabel={
                        STRINGS.CreateTransfer
                          .CreateTransfer_Label_ReferenceOptional_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.CreateTransfer
                          .CreateTransfer_Label_ReferenceOptional_Text.label
                      }
                    </AppText>
                    <AppTextField
                      widgetId={'CreateTransfer_Input_EgrentPayment_Input'}
                      style={styles.createTransferInputEgrentPaymentInputStyle}
                      placeholder={
                        STRINGS.CreateTransfer
                          .CreateTransfer_Input_EgrentPayment_Input.placeholder
                      }
                    />
                  </AppColumn>
                  <AppColumn
                    widgetId={
                      'CreateTransfer_Container_PurposeOfTransferOptional_Column'
                    }
                    style={
                      styles.createTransferContainerPurposeOfTransferOptionalColumnStyle
                    }
                  >
                    <AppText
                      widgetId={
                        'CreateTransfer_Label_PurposeOfTransferOptional_Text'
                      }
                      numberOfLines={1}
                      style={[
                        text.label.medium,
                        styles.createTransferLabelPurposeOfTransferOptionalTextStyle,
                      ]}
                      accessibilityLabel={
                        STRINGS.CreateTransfer
                          .CreateTransfer_Label_PurposeOfTransferOptional_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.CreateTransfer
                          .CreateTransfer_Label_PurposeOfTransferOptional_Text
                          .label
                      }
                    </AppText>
                    <AppColumn
                      widgetId={'CreateTransfer_Container_Column_2'}
                      style={styles.createTransferContainerColumn2Style}
                    >
                      <AppDropDown
                        widgetId={'CreateTransfer_Container_Options_DropDown'}
                        options={[]}
                        containerStyle={
                          styles.createTransferContainerOptionsDropDownContainerStyle
                        }
                        placeholder={
                          STRINGS.CreateTransfer
                            .CreateTransfer_Container_Options_DropDown
                            .placeholder
                        }
                        searchPlaceholder={
                          STRINGS.CreateTransfer
                            .CreateTransfer_Container_Options_DropDown
                            .searchPlaceholder
                        }
                      />
                    </AppColumn>
                  </AppColumn>
                </AppColumn>
                <AppColumn
                  widgetId={
                    'CreateTransfer_Container_SectionSummaryCardTonalDepth_Column'
                  }
                  spacing={24}
                  style={
                    styles.createTransferContainerSectionSummaryCardTonalDepthColumnStyle
                  }
                >
                  <AppRow
                    widgetId={'CreateTransfer_Container_Heading3_Row'}
                    spacing={8}
                    style={styles.createTransferContainerHeading3RowStyle}
                  >
                    <AppColumn
                      widgetId={'CreateTransfer_Container_Column_3'}
                      style={sharedStyles.createQuoteContainerColumn14}
                    >
                      <AppImage
                        widgetId={'CreateTransfer_Image_Icon_Image'}
                        resizeMode={'stretch'}
                        source={imageSources.image__g2zw}
                        style={sharedStyles.createQuoteImageIconImage}
                      />
                    </AppColumn>
                    <AppText
                      widgetId={'CreateTransfer_Label_UserName_Text_2'}
                      numberOfLines={1}
                      style={[
                        text.label.medium,
                        styles.createTransferLabelUserNameText2Style,
                      ]}
                      accessibilityLabel={
                        STRINGS.CreateTransfer
                          .CreateTransfer_Label_UserName_Text_2
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.CreateTransfer
                          .CreateTransfer_Label_UserName_Text_2.label
                      }
                    </AppText>
                  </AppRow>
                  <AppColumn
                    widgetId={'CreateTransfer_Container_Column_4'}
                    spacing={16}
                    style={sharedStyles.createQuoteContainerColumn3}
                  >
                    <AppRow
                      widgetId={'CreateTransfer_Container_HorizontalBorder_Row'}
                      style={
                        styles.createTransferContainerHorizontalBorderRowStyle
                      }
                    >
                      <AppColumn
                        widgetId={'CreateTransfer_Container_Column_5'}
                        style={styles.createTransferContainerColumn5Style}
                      >
                        <AppText
                          widgetId={'CreateTransfer_Label_UserName_Text_3'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            sharedStyles.createTransferLabelUserNameText3,
                          ]}
                          accessibilityLabel={
                            STRINGS.CreateTransfer
                              .CreateTransfer_Label_UserName_Text_3
                              .accessibilityLabel
                          }
                        >
                          {
                            STRINGS.CreateTransfer
                              .CreateTransfer_Label_UserName_Text_3.label
                          }
                        </AppText>
                      </AppColumn>
                      <AppColumn
                        widgetId={'CreateTransfer_Container_Column_6'}
                        style={styles.createTransferContainerColumn6Style}
                      >
                        <AppText
                          widgetId={'CreateTransfer_Label_Within30Minutes_Text'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            styles.createTransferLabelWithin30MinutesTextStyle,
                          ]}
                          accessibilityLabel={
                            STRINGS.CreateTransfer
                              .CreateTransfer_Label_Within30Minutes_Text
                              .accessibilityLabel
                          }
                        >
                          {
                            STRINGS.CreateTransfer
                              .CreateTransfer_Label_Within30Minutes_Text.label
                          }
                        </AppText>
                      </AppColumn>
                    </AppRow>
                    <AppRow
                      widgetId={'CreateTransfer_Container_Row'}
                      style={styles.createTransferContainerRowStyle}
                    >
                      <AppColumn
                        widgetId={'CreateTransfer_Container_Column_7'}
                        style={sharedStyles.createQuoteContainerColumn4}
                      >
                        <AppText
                          widgetId={'CreateTransfer_Label_UserName_Text_4'}
                          numberOfLines={0}
                          style={[
                            text.label.medium,
                            sharedStyles.createTransferLabelUserNameText3,
                          ]}
                          accessibilityLabel={
                            STRINGS.CreateTransfer
                              .CreateTransfer_Label_UserName_Text_4
                              .accessibilityLabel
                          }
                        >
                          {
                            STRINGS.CreateTransfer
                              .CreateTransfer_Label_UserName_Text_4.label
                          }
                        </AppText>
                      </AppColumn>
                      <AppColumn
                        widgetId={'CreateTransfer_Container_Column_8'}
                        style={styles.createTransferContainerColumn8Style}
                      >
                        <AppText
                          widgetId={'CreateTransfer_Label_Price_Text'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            styles.createTransferLabelPriceTextStyle,
                          ]}
                          accessibilityLabel={
                            STRINGS.CreateTransfer
                              .CreateTransfer_Label_Price_Text
                              .accessibilityLabel
                          }
                        >
                          {
                            STRINGS.CreateTransfer
                              .CreateTransfer_Label_Price_Text.label
                          }
                        </AppText>
                        <AppColumn
                          widgetId={'CreateTransfer_Container_Column_9'}
                          style={styles.createTransferContainerColumn9Style}
                        >
                          <AppText
                            widgetId={'CreateTransfer_Label_UserName_Text_5'}
                            numberOfLines={1}
                            style={[
                              text.label.medium,
                              styles.createTransferLabelUserNameText5Style,
                            ]}
                            accessibilityLabel={
                              STRINGS.CreateTransfer
                                .CreateTransfer_Label_UserName_Text_5
                                .accessibilityLabel
                            }
                          >
                            {
                              STRINGS.CreateTransfer
                                .CreateTransfer_Label_UserName_Text_5.label
                            }
                          </AppText>
                        </AppColumn>
                      </AppColumn>
                    </AppRow>
                  </AppColumn>
                  <AppColumn
                    widgetId={
                      'CreateTransfer_Container_DecorativeBackgroundElements_Column'
                    }
                    style={
                      styles.createTransferContainerDecorativeBackgroundElementsColumnStyle
                    }
                  />
                </AppColumn>
                <ASStack
                  backgroundImageResizeMode={'contain'}
                  name={'CreateTransfer_Container_SectionCtaLegalNote_Stack'}
                  style={
                    styles.createTransferContainerSectionCtaLegalNoteStackStyle
                  }
                  testId={'CreateTransfer_Container_SectionCtaLegalNote_Stack'}
                >
                  <AppButton
                    widgetId={'CreateTransfer_Cta_Confirm_Button'}
                    style={styles.createTransferCtaConfirmButtonStyle}
                    textStyle={[
                      text.label.medium,
                      sharedStyles.createTransferCtaConfirmButtonText,
                    ]}
                    label={
                      STRINGS.CreateTransfer.CreateTransfer_Cta_Confirm_Button
                        .label
                    }
                    accessibilityLabel={
                      STRINGS.CreateTransfer.CreateTransfer_Cta_Confirm_Button
                        .accessibilityLabel
                    }
                  />
                </ASStack>
                <AppText
                  widgetId={
                    'CreateTransfer_Label_ByConfirmingYouAgreeToCo_Text'
                  }
                  numberOfLines={3}
                  style={[
                    text.label.medium,
                    styles.createTransferLabelByConfirmingYouAgreeToCoTextStyle,
                  ]}
                  accessibilityLabel={
                    STRINGS.CreateTransfer
                      .CreateTransfer_Label_ByConfirmingYouAgreeToCo_Text
                      .accessibilityLabel
                  }
                >
                  {
                    STRINGS.CreateTransfer
                      .CreateTransfer_Label_ByConfirmingYouAgreeToCo_Text.label
                  }
                </AppText>
              </AppColumn>
            </>
          );
        }}
      </AppForm>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  createTransferAppBarHeaderTopAppBarFromSharedComponAppBarStyle: {
    height: 58,
    borderColor: color.border.default,
    paddingLeft: space['3'],
    paddingRight: space['3'],
    borderBottomWidth: 0,
  },
  createTransferContainerMainColumnStyle: {
    paddingRight: 24,
    height: 1197,
    paddingBottom: 48,
    alignSelf: 'stretch',
    paddingLeft: 24,
    maxWidth: 576,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createTransferLabelReviewAndConfirmYourTransfTextStyle: {
    letterSpacing: -1,
    lineHeight: 50,
    color: '#001e40',
    fontFamily: 'Manrope-800-normal',
    fontWeight: 800,
    alignSelf: 'stretch',
    textAlignVertical: 'center',
    fontSize: 30,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createTransferContainerColumnStyle: {
    height: 52,
    maxWidth: 384,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createTransferLabelCheckTheDetailsBelowBeforeTextStyle: {
    fontFamily: 'Inter-400-normal',
    lineHeight: 26,
    color: '#43474f',
    textAlignVertical: 'center',
    fontSize: 16,
    alignSelf: 'stretch',
    fontWeight: 400,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createTransferContainerQuoteIdColumnStyle: {
    alignSelf: 'stretch',
    height: 72,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createTransferLabelCustomerTransactionIdTextStyle: {
    fontSize: 12,
    textAlignVertical: 'center',
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: 1.2000000476837158,
    lineHeight: 16,
    color: '#43474f',
    fontFamily: 'Inter-700-normal',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createTransferInputBackgroundInputStyle: {
    height: 48,
    backgroundColor: '#eeeef0',
    borderRadius: 12,
    alignSelf: 'stretch',
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  createTransferLabelQuoteIdTextStyle: {
    textTransform: 'uppercase',
    fontFamily: 'Inter-700-normal',
    textAlignVertical: 'center',
    fontSize: 12,
    color: '#43474f',
    fontWeight: 700,
    lineHeight: 16,
    letterSpacing: 1.2000000476837158,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createTransferInputSymQ20248812InputStyle: {
    borderRadius: 12,
    height: 48,
    backgroundColor: '#eeeef0',
    alignSelf: 'stretch',
    marginTop: 9,
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  createTransferLabelUserNameTextStyle: {
    fontFamily: 'Inter-700-normal',
    color: '#43474f',
    lineHeight: 16,
    fontSize: 12,
    fontWeight: 700,
    textAlignVertical: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.2000000476837158,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createTransferInputRec99234410InputStyle: {
    alignSelf: 'stretch',
    borderRadius: 12,
    backgroundColor: '#eeeef0',
    height: 48,
    marginTop: 14,
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  createTransferContainerReferenceOptionalColumnStyle: {
    height: 88,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createTransferLabelReferenceOptionalTextStyle: {
    fontWeight: 700,
    textAlignVertical: 'center',
    letterSpacing: 1.2000000476837158,
    color: '#43474f',
    fontFamily: 'Inter-700-normal',
    fontSize: 12,
    textTransform: 'uppercase',
    lineHeight: 16,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createTransferInputEgrentPaymentInputStyle: {
    borderRadius: 12,
    marginTop: 9,
    backgroundColor: '#f3f3f6',
    alignSelf: 'stretch',
    height: component.input.height,
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  createTransferContainerPurposeOfTransferOptionalColumnStyle: {
    height: 72,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createTransferLabelPurposeOfTransferOptionalTextStyle: {
    lineHeight: 16,
    textAlignVertical: 'center',
    fontWeight: 700,
    letterSpacing: 1.2000000476837158,
    width: '77.1%',
    fontFamily: 'Inter-700-normal',
    textTransform: 'uppercase',
    fontSize: 12,
    color: '#43474f',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createTransferContainerColumn2Style: {
    marginTop: 9,
    alignSelf: 'stretch',
    height: 48,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createTransferContainerOptionsDropDownContainerStyle: {
    backgroundColor: '#f3f3f6',
    borderRadius: 12,
    height: '100%',
    borderWidth: border.default,
    paddingRight: space['3'],
    borderColor: color.border.default,
    alignItems: 'center',
    paddingLeft: space['3'],
    width: '100%',
    position: 'relative',
    justifyContent: 'space-between',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  createTransferContainerSectionSummaryCardTonalDepthColumnStyle: {
    borderRadius: 16,
    paddingBottom: 24,
    alignSelf: 'stretch',
    aspectRatio: 1.4150526112523572,
    paddingTop: 32,
    overflow: 'hidden',
    backgroundColor: '#f3f3f6',
    paddingLeft: 24,
    paddingRight: 24,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createTransferContainerHeading3RowStyle: {
    alignSelf: 'stretch',
    aspectRatio: 11.678841908772787,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  createTransferLabelUserNameText2Style: {
    fontFamily: 'Manrope-700-normal',
    color: '#001e40',
    fontWeight: 700,
    lineHeight: 24,
    flex: 1,
    fontSize: 16,
    textAlignVertical: 'center',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createTransferContainerHorizontalBorderRowStyle: {
    borderBottomWidth: 1,
    borderColor: 'rgba(195,198,209,0.1)',
    paddingTop: 12,
    height: 49,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingBottom: 12,
    flexShrink: 1,
  },
  createTransferContainerColumn5Style: {
    flex: 1,
    height: 24,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createTransferContainerColumn6Style: {
    flex: 1,
    height: 24,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createTransferLabelWithin30MinutesTextStyle: {
    color: '#006d2f',
    textAlignVertical: 'center',
    fontFamily: 'Manrope-700-normal',
    fontWeight: 700,
    lineHeight: 24,
    fontSize: 16,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createTransferContainerRowStyle: {
    alignSelf: 'stretch',
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 1,
  },
  createTransferContainerColumn8Style: {
    height: 39,
    alignItems: 'flex-end',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  createTransferLabelPriceTextStyle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Manrope-700-normal',
    fontWeight: 700,
    textAlign: 'right',
    textAlignVertical: 'center',
    width: 55,
    color: '#001e40',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createTransferContainerColumn9Style: {
    height: 15,
    alignItems: 'flex-end',
    width: 56.08000183105469,
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  createTransferLabelUserNameText5Style: {
    fontFamily: 'Inter-700-normal',
    textTransform: 'uppercase',
    alignSelf: 'stretch',
    fontSize: 10,
    textAlignVertical: 'center',
    lineHeight: 15,
    fontWeight: 700,
    textAlign: 'right',
    letterSpacing: -0.5,
    color: '#006d2f',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createTransferContainerDecorativeBackgroundElementsColumnStyle: {
    left: '80.4%',
    borderRadius: 12,
    top: '-24.1%',
    position: 'absolute',
    backgroundColor: 'rgba(93,253,138,0.1)',
    height: '55.2%',
    width: '39%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createTransferContainerSectionCtaLegalNoteStackStyle: {
    height: 66,
    alignSelf: 'stretch',
    position: 'relative',
  },
  createTransferCtaConfirmButtonStyle: {
    gradientStart: { x: 0.46196992584832924, y: -0.46196992584832935 },
    paddingLeft: 32,
    position: 'absolute',
    gradientType: 'linear',
    gradientColors: ['#001e40', '#003366'],
    paddingTop: 20,
    shadowRadius: 40,
    top: '0%',
    gradientEnd: { x: 0.5380300654339104, y: 1.4619699345660897 },
    height: '84.8%',
    width: '100%',
    paddingBottom: 20,
    borderRadius: 12,
    textAlign: 'center',
    shadowColor: 'rgba(0,27,60,0.06)',
    lineHeight: 24,
    paddingRight: 32,
    gradientStops: [0, 1],
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 20 },
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  createTransferLabelByConfirmingYouAgreeToCoTextStyle: {
    fontWeight: 400,
    textAlign: 'center',
    color: 'rgba(67,71,79,0.7)',
    alignSelf: 'stretch',
    fontSize: 11,
    textAlignVertical: 'center',
    lineHeight: 18,
    fontFamily: 'Inter-400-normal',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
});

export default CreateTransfer;

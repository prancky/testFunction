import React, { useRef } from 'react';
import {
  AppAppBar,
  AppButton,
  AppColumn,
  AppContainer,
  AppForm,
  AppIconButton,
  AppImage,
  AppRow,
  AppText,
  AppTextField,
} from '@/components/shared';

import { useNavigation } from '@react-navigation/native';

import { color, imageSources, space, component, text, border } from '@/assets';

import { ASListView } from '@/components';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { useTranslation } from 'react-i18next';
import { KEYS } from '@/i18n/keys';

type FormValues = {
  FundTransfer_Input_PartnerReferenceOptional_Input?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const FundTransfer: React.FC<ScreenProps> = ({ route }) => {
  const { t } = useTranslation();

  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  const renderItem_FundTransfer_List_ContainerList_List = ({ item }) => (
    <AppColumn
      widgetId={'FundTransfer_Container_Option2BankTransfer_Column'}
      spacing={16}
      style={styles.fundTransferContainerOption2BankTransferColumnStyle}
    >
      <AppRow
        widgetId={'FundTransfer_Container_RowWrapper_Row'}
        style={styles.fundTransferContainerRowWrapperRowStyle}
      >
        <AppColumn
          widgetId={'FundTransfer_Container_BackgroundVisualWrapper_Column'}
          style={styles.fundTransferContainerBackgroundVisualWrapperColumnStyle}
        >
          <AppIconButton
            widgetId={'FundTransfer_Icon_Background_Icon'}
            size={48}
            icon={
              'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/9c79c8d5-0ce6-4a6e-b92f-e64a4975390a-2560_7467.png'
            }
            style={styles.fundTransferIconBackgroundIconStyle}
          />
        </AppColumn>
        <AppColumn
          widgetId={'FundTransfer_Container_Column_6'}
          spacing={2}
          style={sharedStyles.createQuoteContainerColumn4}
        >
          <AppText
            widgetId={'text55'}
            numberOfLines={0}
            style={[text.label.medium, styles.text55Style]}
            accessibilityLabel={t(KEYS.FundTransfer.text55.accessibilityLabel)}
          >
            {String(
              item['text55'] ?? t(KEYS.FundTransfer.text55.accessibilityLabel),
            )}
          </AppText>
          <AppColumn
            widgetId={'FundTransfer_Container_Column_7'}
            style={sharedStyles.createQuoteContainerColumn3}
          >
            <AppText
              widgetId={'BusinessDays'}
              numberOfLines={0}
              style={[text.label.medium, styles.businessDaysStyle]}
              accessibilityLabel={t(
                KEYS.FundTransfer.BusinessDays.accessibilityLabel,
              )}
            >
              {String(
                item['BusinessDays'] ??
                  t(KEYS.FundTransfer.BusinessDays.accessibilityLabel),
              )}
            </AppText>
          </AppColumn>
        </AppColumn>
      </AppRow>
    </AppColumn>
  );

  return (
    <AppContainer
      widgetId={'ASContainer-763885'}
      testID={'6ec2696d-1599-420e-be4c-6d0c104b15ad'}
      style={sharedStyles.container}
    >
      <AppForm
        widgetId={'ASForm-127522'}
        validationSchema={Yup.object().shape({})}
        initialValues={{
          FundTransfer_Input_PartnerReferenceOptional_Input: '',
        }}
        innerRef={formikRef}
      >
        {(formikProps: FormikProps<FormValues>) => {
          return (
            <>
              <AppAppBar
                widgetId={'FundTransfer_AppBar_SyntheticAppBar_AppBar'}
                variant={'transparent'}
                centerMode={'custom'}
                leadingShow={false}
                trailingShow={false}
                leadingIconSize={24}
                leadingIcon={'arrow_back'}
                style={sharedStyles.fundTransferAppBarSyntheticAppBarAppBar}
                textStyles={[
                  text.title.medium,
                  sharedStyles.fundTransferAppBarSyntheticAppBarAppBarTextStyles,
                ]}
              >
                <AppRow
                  widgetId={'FundTransfer_Container_AppBarCustomCentre_Row'}
                  style={styles.fundTransferContainerAppBarCustomCentreRowStyle}
                >
                  <AppRow
                    widgetId={'FundTransfer_Container_Row'}
                    spacing={16}
                    style={styles.fundTransferContainerRowStyle}
                  >
                    <AppColumn
                      widgetId={'FundTransfer_Container_Button_Column'}
                      style={styles.fundTransferContainerButtonColumnStyle}
                    >
                      <AppRow
                        widgetId={'FundTransfer_Container_Row_2'}
                        style={sharedStyles.fundTransferContainerRow2}
                      >
                        <AppImage
                          widgetId={'FundTransfer_Image_Icon_Image'}
                          source={imageSources.image__gptu}
                          resizeMode={'contain'}
                          style={styles.fundTransferImageIconImageStyle}
                        />
                      </AppRow>
                    </AppColumn>
                    <AppColumn
                      widgetId={'FundTransfer_Container_Heading1_Column'}
                      style={styles.fundTransferContainerHeading1ColumnStyle}
                    >
                      <AppText
                        widgetId={'FundTransfer_Title_UserName_Text'}
                        numberOfLines={0}
                        style={[
                          text.label.medium,
                          styles.fundTransferTitleUserNameTextStyle,
                        ]}
                        accessibilityLabel={t(
                          KEYS.FundTransfer.FundTransfer_Title_UserName_Text
                            .accessibilityLabel,
                        )}
                      >
                        {t(
                          KEYS.FundTransfer.FundTransfer_Title_UserName_Text
                            .label,
                        )}
                      </AppText>
                    </AppColumn>
                  </AppRow>
                  <AppColumn
                    widgetId={'FundTransfer_Container_Button_Column_2'}
                    style={styles.fundTransferContainerButtonColumn2Style}
                  >
                    <AppRow
                      widgetId={'FundTransfer_Container_Row_3'}
                      style={styles.fundTransferContainerRow3Style}
                    >
                      <AppImage
                        widgetId={'FundTransfer_Image_Icon_Image_2'}
                        source={imageSources.image__5635f}
                        resizeMode={'contain'}
                        style={styles.fundTransferImageIconImage2Style}
                      />
                    </AppRow>
                  </AppColumn>
                </AppRow>
              </AppAppBar>
              <AppColumn
                widgetId={'FundTransfer_Container_Main_Column'}
                style={styles.fundTransferContainerMainColumnStyle}
              >
                <AppColumn
                  widgetId={'FundTransfer_Container_TransferIdSection_Column'}
                  style={
                    styles.fundTransferContainerTransferIdSectionColumnStyle
                  }
                >
                  <AppText
                    widgetId={'FundTransfer_Label_UserName_Text'}
                    numberOfLines={2}
                    style={[
                      text.label.medium,
                      styles.fundTransferLabelUserNameTextStyle,
                    ]}
                    accessibilityLabel={t(
                      KEYS.FundTransfer.FundTransfer_Label_UserName_Text
                        .accessibilityLabel,
                    )}
                  >
                    {t(
                      KEYS.FundTransfer.FundTransfer_Label_UserName_Text.label,
                    )}
                  </AppText>
                  <AppRow
                    widgetId={'FundTransfer_Container_Background_Row'}
                    style={styles.fundTransferContainerBackgroundRowStyle}
                  >
                    <AppColumn
                      widgetId={'FundTransfer_Container_Column'}
                      spacing={2}
                      style={styles.fundTransferContainerColumnStyle}
                    >
                      <AppColumn
                        widgetId={'FundTransfer_Container_Column_2'}
                        style={sharedStyles.fundTransferContainerColumn2}
                      >
                        <AppText
                          widgetId={'FundTransfer_Label_TransferId_Text'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            styles.fundTransferLabelTransferIdTextStyle,
                          ]}
                          accessibilityLabel={t(
                            KEYS.FundTransfer.FundTransfer_Label_TransferId_Text
                              .accessibilityLabel,
                          )}
                        >
                          {t(
                            KEYS.FundTransfer.FundTransfer_Label_TransferId_Text
                              .label,
                          )}
                        </AppText>
                      </AppColumn>
                      <AppColumn
                        widgetId={'FundTransfer_Container_Column_3'}
                        style={styles.fundTransferContainerColumn3Style}
                      >
                        <AppText
                          widgetId={'FundTransfer_Label_Tfr7712X92_Text'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            styles.fundTransferLabelTfr7712X92TextStyle,
                          ]}
                          accessibilityLabel={t(
                            KEYS.FundTransfer.FundTransfer_Label_Tfr7712X92_Text
                              .accessibilityLabel,
                          )}
                        >
                          {t(
                            KEYS.FundTransfer.FundTransfer_Label_Tfr7712X92_Text
                              .label,
                          )}
                        </AppText>
                      </AppColumn>
                    </AppColumn>
                    <AppColumn
                      widgetId={'FundTransfer_Container_Button_Column_3'}
                      style={styles.fundTransferContainerButtonColumn3Style}
                    >
                      <AppColumn
                        widgetId={
                          'FundTransfer_Container_ContainerVisualWrapper_Column'
                        }
                        style={
                          styles.fundTransferContainerContainerVisualWrapperColumnStyle
                        }
                      >
                        <AppIconButton
                          widgetId={'FundTransfer_Icon_Container_Icon'}
                          size={14.166666984558105}
                          icon={
                            'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/865f2f9b-0c12-42b1-8f25-cedf829be415-2560_7457.png'
                          }
                          style={sharedStyles.finishScreenIconContainerIcon}
                        />
                      </AppColumn>
                    </AppColumn>
                  </AppRow>
                </AppColumn>
                <AppColumn
                  widgetId={
                    'FundTransfer_Container_SectionPaymentMethodSelection_Column'
                  }
                  spacing={16}
                  style={
                    styles.fundTransferContainerSectionPaymentMethodSelectionColumnStyle
                  }
                >
                  <AppRow
                    widgetId={'FundTransfer_Container_Row_4'}
                    style={styles.fundTransferContainerRow4Style}
                  >
                    <AppColumn
                      widgetId={'FundTransfer_Container_Heading2_Column'}
                      style={sharedStyles.createQuoteContainerColumn4}
                    >
                      <AppText
                        widgetId={'FundTransfer_Label_UserName_Text_2'}
                        numberOfLines={0}
                        style={[
                          text.label.medium,
                          styles.fundTransferLabelUserNameText2Style,
                        ]}
                        accessibilityLabel={t(
                          KEYS.FundTransfer.FundTransfer_Label_UserName_Text_2
                            .accessibilityLabel,
                        )}
                      >
                        {t(
                          KEYS.FundTransfer.FundTransfer_Label_UserName_Text_2
                            .label,
                        )}
                      </AppText>
                    </AppColumn>
                    <AppColumn
                      widgetId={'FundTransfer_Container_Column_4'}
                      style={sharedStyles.fundTransferContainerColumn4}
                    >
                      <AppText
                        widgetId={'FundTransfer_Label_Available_Text'}
                        numberOfLines={1}
                        style={[
                          text.label.medium,
                          styles.fundTransferLabelAvailableTextStyle,
                        ]}
                        accessibilityLabel={t(
                          KEYS.FundTransfer.FundTransfer_Label_Available_Text
                            .accessibilityLabel,
                        )}
                      >
                        {t(
                          KEYS.FundTransfer.FundTransfer_Label_Available_Text
                            .label,
                        )}
                      </AppText>
                    </AppColumn>
                  </AppRow>
                  <AppColumn
                    widgetId={'FundTransfer_Container_Column_5'}
                    spacing={12}
                    style={sharedStyles.createQuoteContainerColumn3}
                  >
                    <ASListView
                      itemSpacing={12}
                      orientation={'vertical'}
                      showsHorizontalScrollIndicator={false}
                      name={'FundTransfer_List_ContainerList_List'}
                      style={styles.fundTransferListContainerListListStyle}
                      renderItem={
                        renderItem_FundTransfer_List_ContainerList_List
                      }
                      data={[
                        {
                          text55: 'BANK_TRANSFER',
                          BusinessDays: '1-3 business days',
                        },
                        {
                          text55: 'CARD',
                          BusinessDays: 'Processing fees apply',
                        },
                        { text55: 'FAST', BusinessDays: 'Immediate clearing' },
                        { text55: 'SWIFT', BusinessDays: '2-5 business days' },
                      ]}
                      testId={'FundTransfer_List_ContainerList_List'}
                    />
                    <AppRow
                      widgetId={
                        'FundTransfer_Container_Option1BalanceSelectedState_Row'
                      }
                      spacing={16}
                      style={
                        styles.fundTransferContainerOption1BalanceSelectedStateRowStyle
                      }
                    >
                      <AppRow
                        widgetId={'FundTransfer_Container_Background_Row_2'}
                        style={styles.fundTransferContainerBackgroundRow2Style}
                      >
                        <AppColumn
                          widgetId={
                            'FundTransfer_Container_ContainerVisualWrapper_Column_2'
                          }
                          style={
                            sharedStyles.createQuoteContainerIconVisualWrapperColumn2
                          }
                        >
                          <AppIconButton
                            widgetId={'FundTransfer_Icon_Container_Icon_2'}
                            size={19}
                            icon={
                              'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/3ec8d7c8-2fb0-4e4f-a766-aa90efab66d8-2560_7500.png'
                            }
                            style={sharedStyles.finishScreenIconContainerIcon}
                          />
                        </AppColumn>
                      </AppRow>
                      <AppColumn
                        widgetId={'FundTransfer_Container_Column_8'}
                        spacing={2}
                        style={sharedStyles.createQuoteContainerColumn4}
                      >
                        <AppRow
                          widgetId={'FundTransfer_Container_Row_5'}
                          style={sharedStyles.finishScreenContainerRow4}
                        >
                          <AppColumn
                            widgetId={'FundTransfer_Container_Column_9'}
                            style={sharedStyles.createQuoteContainerColumn4}
                          >
                            <AppText
                              widgetId={'FundTransfer_Label_Balance_Text'}
                              numberOfLines={0}
                              style={[
                                text.label.medium,
                                styles.fundTransferLabelBalanceTextStyle,
                              ]}
                              accessibilityLabel={t(
                                KEYS.FundTransfer
                                  .FundTransfer_Label_Balance_Text
                                  .accessibilityLabel,
                              )}
                            >
                              {t(
                                KEYS.FundTransfer
                                  .FundTransfer_Label_Balance_Text.label,
                              )}
                            </AppText>
                          </AppColumn>
                          <AppButton
                            widgetId={'FundTransfer_Cta_Instant_Button'}
                            style={styles.fundTransferCtaInstantButtonStyle}
                            textStyle={[
                              text.label.medium,
                              styles.fundTransferCtaInstantButtonTextStyle,
                            ]}
                            accessibilityLabel={t(
                              KEYS.FundTransfer.FundTransfer_Cta_Instant_Button
                                .accessibilityLabel,
                            )}
                            label={t(
                              KEYS.FundTransfer.FundTransfer_Cta_Instant_Button
                                .label,
                            )}
                          />
                        </AppRow>
                        <AppColumn
                          widgetId={'FundTransfer_Container_Column_10'}
                          style={styles.fundTransferContainerColumn10Style}
                        >
                          <AppText
                            widgetId={'FundTransfer_Label_Current1245080_Text'}
                            numberOfLines={1}
                            style={[
                              text.label.medium,
                              styles.fundTransferLabelCurrent1245080TextStyle,
                            ]}
                            accessibilityLabel={t(
                              KEYS.FundTransfer
                                .FundTransfer_Label_Current1245080_Text
                                .accessibilityLabel,
                            )}
                          >
                            {t(
                              KEYS.FundTransfer
                                .FundTransfer_Label_Current1245080_Text.label,
                            )}
                          </AppText>
                        </AppColumn>
                      </AppColumn>
                      <AppImage
                        widgetId={'FundTransfer_Image_Background_Image'}
                        source={imageSources.image__e2w5m}
                        resizeMode={'contain'}
                        style={styles.fundTransferImageBackgroundImageStyle}
                      />
                    </AppRow>
                  </AppColumn>
                </AppColumn>
                <AppColumn
                  widgetId={
                    'FundTransfer_Container_SectionPartnerReferenceInput_Column'
                  }
                  style={
                    styles.fundTransferContainerSectionPartnerReferenceInputColumnStyle
                  }
                >
                  <AppText
                    widgetId={'FundTransfer_Label_UserName_Text_3'}
                    numberOfLines={2}
                    style={[
                      text.label.medium,
                      styles.fundTransferLabelUserNameText3Style,
                    ]}
                    accessibilityLabel={t(
                      KEYS.FundTransfer.FundTransfer_Label_UserName_Text_3
                        .accessibilityLabel,
                    )}
                  >
                    {t(
                      KEYS.FundTransfer.FundTransfer_Label_UserName_Text_3
                        .label,
                    )}
                  </AppText>
                  <AppColumn
                    widgetId={'FundTransfer_Container_Column_11'}
                    style={styles.fundTransferContainerColumn11Style}
                  >
                    <AppTextField
                      widgetId={
                        'FundTransfer_Input_PartnerReferenceOptional_Input'
                      }
                      style={
                        styles.fundTransferInputPartnerReferenceOptionalInputStyle
                      }
                      placeholder={t(
                        KEYS.FundTransfer
                          .FundTransfer_Input_PartnerReferenceOptional_Input
                          .placeholder,
                      )}
                    />
                    <AppColumn
                      widgetId={
                        'FundTransfer_Container_ContainerVisualWrapper_Column_3'
                      }
                      style={
                        styles.fundTransferContainerContainerVisualWrapperColumn3Style
                      }
                    >
                      <AppIconButton
                        widgetId={'FundTransfer_Icon_Container_Icon_3'}
                        size={15}
                        icon={
                          'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/f8841b5f-ea5e-4059-be32-d66910bfe25f-2560_7519.png'
                        }
                        style={sharedStyles.finishScreenIconContainerIcon}
                      />
                    </AppColumn>
                  </AppColumn>
                </AppColumn>
                <AppColumn
                  widgetId={
                    'FundTransfer_Container_SectionSummaryCardProjectedYie_Column'
                  }
                  spacing={16}
                  style={
                    styles.fundTransferContainerSectionSummaryCardProjectedYieColumnStyle
                  }
                >
                  <AppColumn
                    widgetId={
                      'FundTransfer_Container_DecorativeGrainAbstractBackgro_Column'
                    }
                    style={
                      styles.fundTransferContainerDecorativeGrainAbstractBackgroColumnStyle
                    }
                  />
                  <AppRow
                    widgetId={'FundTransfer_Container_Row_6'}
                    style={styles.fundTransferContainerRow6Style}
                  >
                    <AppColumn
                      widgetId={'FundTransfer_Container_Column_12'}
                      spacing={3.5}
                      style={sharedStyles.createQuoteContainerColumn4}
                    >
                      <AppColumn
                        widgetId={'FundTransfer_Container_Heading3_Column'}
                        style={styles.fundTransferContainerHeading3ColumnStyle}
                      >
                        <AppText
                          widgetId={'FundTransfer_Label_UserName_Text_4'}
                          numberOfLines={0}
                          style={[
                            text.label.medium,
                            styles.fundTransferLabelUserNameText4Style,
                          ]}
                          accessibilityLabel={t(
                            KEYS.FundTransfer.FundTransfer_Label_UserName_Text_4
                              .accessibilityLabel,
                          )}
                        >
                          {t(
                            KEYS.FundTransfer.FundTransfer_Label_UserName_Text_4
                              .label,
                          )}
                        </AppText>
                      </AppColumn>
                      <AppRow
                        widgetId={'FundTransfer_Container_Paragraph_Row'}
                        style={styles.fundTransferContainerParagraphRowStyle}
                      >
                        <AppText
                          widgetId={'FundTransfer_Label_Text'}
                          numberOfLines={0}
                          style={[
                            text.label.medium,
                            styles.fundTransferLabelTextStyle,
                          ]}
                          accessibilityLabel={t(
                            KEYS.FundTransfer.FundTransfer_Label_Text
                              .accessibilityLabel,
                          )}
                        >
                          {t(KEYS.FundTransfer.FundTransfer_Label_Text.label)}
                        </AppText>
                        <AppText
                          widgetId={'FundTransfer_Label_Apy_Text'}
                          numberOfLines={0}
                          style={[
                            text.label.medium,
                            styles.fundTransferLabelApyTextStyle,
                          ]}
                          accessibilityLabel={t(
                            KEYS.FundTransfer.FundTransfer_Label_Apy_Text
                              .accessibilityLabel,
                          )}
                        >
                          {t(
                            KEYS.FundTransfer.FundTransfer_Label_Apy_Text.label,
                          )}
                        </AppText>
                      </AppRow>
                    </AppColumn>
                    <AppRow
                      widgetId={'FundTransfer_Container_OverlayOverlayBlur_Row'}
                      style={
                        styles.fundTransferContainerOverlayOverlayBlurRowStyle
                      }
                    >
                      <AppColumn
                        widgetId={'FundTransfer_Container_Column_13'}
                        style={styles.fundTransferContainerColumn13Style}
                      >
                        <AppImage
                          widgetId={'FundTransfer_Image_Icon_Image_3'}
                          source={imageSources.image__i3pw}
                          resizeMode={'stretch'}
                          style={styles.fundTransferImageIconImage3Style}
                        />
                      </AppColumn>
                    </AppRow>
                  </AppRow>
                  <AppColumn
                    widgetId={'FundTransfer_Container_HorizontalBorder_Column'}
                    spacing={8}
                    style={
                      styles.fundTransferContainerHorizontalBorderColumnStyle
                    }
                  >
                    <AppRow
                      widgetId={
                        'FundTransfer_Container_FinancialProgressTrackerCustomDes_Row'
                      }
                      style={
                        sharedStyles.fundTransferContainerFinancialProgressTrackerCustomDesRow
                      }
                    >
                      <AppColumn
                        widgetId={'FundTransfer_Container_Column_14'}
                        style={styles.fundTransferContainerColumn14Style}
                      >
                        <AppText
                          widgetId={'FundTransfer_Label_UserName_Text_5'}
                          numberOfLines={0}
                          style={[
                            text.label.medium,
                            styles.fundTransferLabelUserNameText5Style,
                          ]}
                          accessibilityLabel={t(
                            KEYS.FundTransfer.FundTransfer_Label_UserName_Text_5
                              .accessibilityLabel,
                          )}
                        >
                          {t(
                            KEYS.FundTransfer.FundTransfer_Label_UserName_Text_5
                              .label,
                          )}
                        </AppText>
                      </AppColumn>
                      <AppColumn
                        widgetId={'FundTransfer_Container_Column_15'}
                        style={sharedStyles.createQuoteContainerLabelColumn}
                      >
                        <AppText
                          widgetId={'FundTransfer_Label_Target25K_Text'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            styles.fundTransferLabelTarget25KTextStyle,
                          ]}
                          accessibilityLabel={t(
                            KEYS.FundTransfer.FundTransfer_Label_Target25K_Text
                              .accessibilityLabel,
                          )}
                        >
                          {t(
                            KEYS.FundTransfer.FundTransfer_Label_Target25K_Text
                              .label,
                          )}
                        </AppText>
                      </AppColumn>
                    </AppRow>
                    <AppColumn
                      widgetId={'FundTransfer_Container_Overlay_Column'}
                      style={styles.fundTransferContainerOverlayColumnStyle}
                    >
                      <AppColumn
                        widgetId={'FundTransfer_Container_Gradient_Column'}
                        style={styles.fundTransferContainerGradientColumnStyle}
                      />
                    </AppColumn>
                  </AppColumn>
                </AppColumn>
                <AppButton
                  widgetId={'FundTransfer_Cta_FundTransfer_Button'}
                  iconPosition={'trailing'}
                  icon={
                    'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/27a1682f-dd0f-484b-9667-bcbb09c92b36-2560_7556.png'
                  }
                  style={styles.fundTransferCtaFundTransferButtonStyle}
                  textStyle={[
                    text.label.medium,
                    sharedStyles.finishScreenCtaDoneButtonText,
                  ]}
                  iconStyles={
                    styles.fundTransferCtaFundTransferButtonIconStyles
                  }
                  label={t(
                    KEYS.FundTransfer.FundTransfer_Cta_FundTransfer_Button
                      .label,
                  )}
                  accessibilityLabel={t(
                    KEYS.FundTransfer.FundTransfer_Cta_FundTransfer_Button
                      .accessibilityLabel,
                  )}
                />
                <AppText
                  widgetId={'FundTransfer_Label_ByContinuingYouAgreeToCo_Text'}
                  numberOfLines={2}
                  style={[
                    text.label.medium,
                    styles.fundTransferLabelByContinuingYouAgreeToCoTextStyle,
                  ]}
                  accessibilityLabel={t(
                    KEYS.FundTransfer
                      .FundTransfer_Label_ByContinuingYouAgreeToCo_Text
                      .accessibilityLabel,
                  )}
                >
                  {t(
                    KEYS.FundTransfer
                      .FundTransfer_Label_ByContinuingYouAgreeToCo_Text.label,
                  )}
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
  fundTransferContainerAppBarCustomCentreRowStyle: {
    alignItems: 'center',
    backgroundBlurRadius: 24,
    maxWidth: 512,
    backgroundColor: 'rgba(248,250,252,0.8)',
    width: '100%',
    height: 63,
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  fundTransferContainerRowStyle: {
    width: 220,
    height: 28,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  fundTransferContainerButtonColumnStyle: {
    justifyContent: 'center',
    height: 16,
    width: 16,
    alignItems: 'center',
    flexShrink: 1,
  },
  fundTransferImageIconImageStyle: {
    objectFit: 'contain',
    width: '100%',
    aspectRatio: 1,
    height: 16,
    flexBasis: 'auto',
  },
  fundTransferContainerHeading1ColumnStyle: {
    width: 188,
    height: 28,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  fundTransferTitleUserNameTextStyle: {
    fontFamily: 'Manrope-700-normal',
    color: '#001e40',
    lineHeight: 28,
    letterSpacing: -0.5,
    alignSelf: 'stretch',
    fontSize: 20,
    textAlignVertical: 'center',
    fontWeight: 700,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  fundTransferContainerButtonColumn2Style: {
    width: 20,
    justifyContent: 'center',
    height: 20,
    alignItems: 'center',
    flexShrink: 1,
  },
  fundTransferContainerRow3Style: {
    width: 20,
    justifyContent: 'center',
    height: 20,
    alignItems: 'stretch',
    flexShrink: 1,
  },
  fundTransferImageIconImage2Style: {
    height: 20,
    aspectRatio: 1,
    objectFit: 'contain',
    width: '100%',
    flexBasis: 'auto',
  },
  fundTransferContainerMainColumnStyle: {
    alignItems: 'center',
    paddingRight: 10,
    height: 1050,
    paddingLeft: 10,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  fundTransferContainerTransferIdSectionColumnStyle: {
    width: '92.7%',
    height: 101,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  fundTransferLabelUserNameTextStyle: {
    fontSize: 11,
    fontFamily: 'Inter-700-normal',
    textTransform: 'uppercase',
    fontWeight: 700,
    color: '#737780',
    letterSpacing: 0.550000011920929,
    textAlignVertical: 'center',
    lineHeight: 17,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  fundTransferContainerBackgroundRowStyle: {
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#f3f3f6',
    marginTop: 8,
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  fundTransferContainerColumnStyle: {
    height: 42,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  fundTransferLabelTransferIdTextStyle: {
    fontSize: 12,
    textAlignVertical: 'center',
    lineHeight: 16,
    fontWeight: 500,
    fontFamily: 'Inter-500-normal',
    width: '63.2%',
    color: '#43474f',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  fundTransferContainerColumn3Style: {
    alignSelf: 'stretch',
    height: 24,
    width: '100%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  fundTransferLabelTfr7712X92TextStyle: {
    letterSpacing: -0.4000000059604645,
    textAlignVertical: 'center',
    fontWeight: 700,
    color: '#001e40',
    lineHeight: 24,
    fontFamily: 'Manrope-700-normal',
    alignSelf: 'stretch',
    fontSize: 16,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  fundTransferContainerButtonColumn3Style: {
    height: 33,
    shadowRadius: 2,
    borderRadius: 12,
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
    shadowColor: 'rgba(0,0,0,0.05)',
    backgroundColor: '#ffffff',
    flexShrink: 1,
    shadowOffset: { width: 0, height: 1 },
  },
  fundTransferContainerContainerVisualWrapperColumnStyle: {
    height: 16.66666603088379,
    justifyContent: 'center',
    alignItems: 'center',
    width: 14.166666984558105,
    backgroundColor: 'transparent',
    borderRadius: 0,
    flexShrink: 1,
  },
  fundTransferContainerSectionPaymentMethodSelectionColumnStyle: {
    width: '92.7%',
    marginTop: 25,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  fundTransferContainerRow4Style: {
    paddingLeft: 4,
    height: 28,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingRight: 4,
    alignItems: 'flex-end',
    flexShrink: 1,
  },
  fundTransferLabelUserNameText2Style: {
    color: '#001e40',
    fontSize: 18,
    fontFamily: 'Manrope-700-normal',
    textAlignVertical: 'center',
    fontWeight: 700,
    lineHeight: 28,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  fundTransferLabelAvailableTextStyle: {
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'left',
    color: '#006d2f',
    fontFamily: 'Inter-600-normal',
    fontWeight: 600,
    textAlignVertical: 'center',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  fundTransferListContainerListListStyle: { alignSelf: 'stretch', flexGrow: 0 },
  fundTransferContainerOption2BankTransferColumnStyle: {
    borderRadius: 12,
    alignSelf: 'stretch',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f3f3f6',
    padding: 16,
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  fundTransferContainerRowWrapperRowStyle: {
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    flexShrink: 1,
  },
  fundTransferContainerBackgroundVisualWrapperColumnStyle: {
    alignItems: 'center',
    height: 48,
    width: 48,
    justifyContent: 'center',
    backgroundColor: '#e2e2e5',
    borderRadius: 12,
    flexShrink: 1,
  },
  fundTransferIconBackgroundIconStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    alignSelf: 'stretch',
    paddingRight: 0,
    width: '100%',
    paddingLeft: 0,
  },
  text55Style: {
    fontSize: 16,
    fontWeight: 700,
    fontFamily: 'Inter-700-normal',
    color: '#1a1c1e',
    textAlignVertical: 'center',
    letterSpacing: -0.4000000059604645,
    lineHeight: 24,
    width: '54.1%',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  businessDaysStyle: {
    color: '#43474f',
    fontWeight: 400,
    textAlignVertical: 'center',
    fontSize: 12,
    fontFamily: 'Inter-400-normal',
    alignSelf: 'stretch',
    lineHeight: 16,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  fundTransferContainerOption1BalanceSelectedStateRowStyle: {
    shadowRadius: 12,
    borderWidth: 2,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderColor: 'rgba(0,30,64,0.1)',
    alignSelf: 'stretch',
    height: 80,
    alignItems: 'center',
    shadowColor: 'rgba(0,30,64,0.04)',
    justifyContent: 'flex-start',
    flexShrink: 1,
    shadowOffset: { width: 0, height: 4 },
  },
  fundTransferContainerBackgroundRow2Style: {
    alignItems: 'center',
    backgroundColor: '#d5e3ff',
    alignSelf: 'stretch',
    borderRadius: 12,
    width: '14%',
    justifyContent: 'center',
    flexShrink: 1,
  },
  fundTransferLabelBalanceTextStyle: {
    textAlignVertical: 'center',
    fontWeight: 700,
    textAlign: 'left',
    fontFamily: 'Inter-700-normal',
    letterSpacing: -0.4000000059604645,
    fontSize: 16,
    color: '#1a1c1e',
    lineHeight: 24,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  fundTransferCtaInstantButtonStyle: {
    borderRadius: 12,
    paddingTop: 2,
    paddingRight: 8,
    textAlign: 'left',
    lineHeight: 15,
    paddingBottom: 2,
    height: 19,
    paddingLeft: 8,
    backgroundColor: '#5dfd8a',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  fundTransferCtaInstantButtonTextStyle: {
    color: '#007232',
    fontFamily: 'Inter-700-normal',
    fontWeight: 700,
    fontSize: 10,
  },
  fundTransferContainerColumn10Style: {
    height: 16,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  fundTransferLabelCurrent1245080TextStyle: {
    lineHeight: 16,
    fontSize: 12,
    textAlignVertical: 'center',
    color: '#43474f',
    fontWeight: 400,
    alignSelf: 'stretch',
    fontFamily: 'Inter-400-normal',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  fundTransferImageBackgroundImageStyle: {
    left: '97.6%',
    top: '-10%',
    position: 'absolute',
    width: '3.6%',
    height: '12.5%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  fundTransferContainerSectionPartnerReferenceInputColumnStyle: {
    width: '92.7%',
    height: 81,
    marginTop: 41,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  fundTransferLabelUserNameText3Style: {
    fontFamily: 'Inter-700-normal',
    color: '#737780',
    letterSpacing: 0.550000011920929,
    textTransform: 'uppercase',
    textAlign: 'left',
    lineHeight: 17,
    textAlignVertical: 'center',
    fontSize: 11,
    fontWeight: 700,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  fundTransferContainerColumn11Style: {
    alignSelf: 'stretch',
    marginTop: 8,
    height: 56,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  fundTransferInputPartnerReferenceOptionalInputStyle: {
    minHeight: 56,
    alignSelf: 'stretch',
    borderRadius: 12,
    backgroundColor: '#f3f3f6',
    height: component.input.height,
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  fundTransferContainerContainerVisualWrapperColumn3Style: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderRadius: 0,
    marginLeft: -7.5,
    alignItems: 'center',
    left: '93.4%',
    width: 15,
    marginTop: -6.666666507720947,
    top: '40.5%',
    height: 13.333333015441895,
    justifyContent: 'center',
    flexShrink: 1,
  },
  fundTransferContainerSectionSummaryCardProjectedYieColumnStyle: {
    padding: 20,
    shadowRadius: 10,
    overflow: 'hidden',
    shadowColor: 'rgba(0,0,0,0.1)',
    marginTop: 41,
    backgroundColor: '#001e40',
    width: '92.7%',
    borderRadius: 16,
    shadowSpread: -6,
    height: 163.5,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    shadowOffset: { width: 0, height: 8 },
  },
  fundTransferContainerDecorativeGrainAbstractBackgroColumnStyle: {
    opacity: 0.1,
    backgroundColor: 'rgba(102,255,142,0.5)',
    height: '100.3%',
    left: '0%',
    position: 'absolute',
    top: '0%',
    width: '100%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  fundTransferContainerRow6Style: {
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    aspectRatio: 5.294117647058823,
    flexShrink: 1,
  },
  fundTransferContainerHeading3ColumnStyle: {
    width: '100%',
    alignSelf: 'stretch',
    opacity: 0.8,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  fundTransferLabelUserNameText4Style: {
    fontWeight: 600,
    width: '82.9%',
    fontSize: 14,
    lineHeight: 20,
    textAlignVertical: 'center',
    textAlign: 'left',
    fontFamily: 'Inter-600-normal',
    color: '#ffffff',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  fundTransferContainerParagraphRowStyle: {
    width: '100%',
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  fundTransferLabelTextStyle: {
    textAlignVertical: 'center',
    lineHeight: 36,
    fontSize: 30,
    color: '#ffffff',
    width: '74.4%',
    fontWeight: 800,
    fontFamily: 'Manrope-800-normal',
    textAlign: 'left',
    letterSpacing: -0.75,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  fundTransferLabelApyTextStyle: {
    fontSize: 18,
    letterSpacing: -0.75,
    lineHeight: 28,
    fontFamily: 'Manrope-500-normal',
    textAlignVertical: 'center',
    fontWeight: 500,
    textAlign: 'left',
    width: '25.6%',
    color: 'rgba(255,255,255,0.7)',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  fundTransferContainerOverlayOverlayBlurRowStyle: {
    alignItems: 'center',
    backgroundBlurRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    borderRadius: 12,
    height: 48,
    flexShrink: 1,
  },
  fundTransferContainerColumn13Style: {
    height: 12,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  fundTransferImageIconImage3Style: {
    height: 12,
    objectFit: 'fill',
    width: 20,
    flexBasis: 'auto',
  },
  fundTransferContainerHorizontalBorderColumnStyle: {
    paddingTop: 16,
    borderColor: 'rgba(255,255,255,0.1)',
    height: 48,
    borderTopWidth: 1,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  fundTransferContainerColumn14Style: {
    opacity: 0.6,
    flex: 1,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  fundTransferLabelUserNameText5Style: {
    letterSpacing: 1,
    fontFamily: 'Inter-700-normal',
    textTransform: 'uppercase',
    lineHeight: 15,
    textAlignVertical: 'center',
    fontSize: 10,
    textAlign: 'left',
    fontWeight: 700,
    color: '#ffffff',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  fundTransferLabelTarget25KTextStyle: {
    fontSize: 10,
    textAlignVertical: 'center',
    color: '#66ff8e',
    textAlign: 'left',
    fontFamily: 'Inter-700-normal',
    fontWeight: 700,
    lineHeight: 15,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  fundTransferContainerOverlayColumnStyle: {
    minHeight: 8,
    alignSelf: 'stretch',
    borderRadius: 12,
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingRight: 105,
    flexShrink: 1,
    alignItems: 'stretch',
  },
  fundTransferContainerGradientColumnStyle: {
    gradientType: 'linear',
    gradientStart: { x: 0, y: 0.5 },
    gradientEnd: { x: 1, y: 0.5 },
    borderRadius: 12,
    gradientColors: ['#006d2f', '#66ff8e'],
    height: 8,
    alignSelf: 'stretch',
    gradientStops: [0, 1],
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  fundTransferCtaFundTransferButtonStyle: {
    paddingBottom: 0,
    lineHeight: 28,
    gradientEnd: { x: 0.7967836133802604, y: 2.085937512891318 },
    borderRadius: 12,
    gradientType: 'linear',
    paddingTop: 0,
    paddingLeft: 0,
    textAlign: 'center',
    gradientColors: ['#001e40', '#003366'],
    gradientStart: { x: 0.20321636988776887, y: -1.0859375180090898 },
    gradientStops: [0, 1],
    width: '89.3%',
    shadowColor: 'rgba(0,27,60,0.04)',
    height: 64,
    paddingRight: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  fundTransferCtaFundTransferButtonIconStyles: {
    marginLeft: 12,
    iconSize: 16,
    color: color.brand.onPrimary,
  },
  fundTransferLabelByContinuingYouAgreeToCoTextStyle: {
    fontSize: 10,
    fontFamily: 'Inter-500-normal',
    textAlignVertical: 'center',
    alignSelf: 'center',
    width: '78.7%',
    color: 'rgba(115,119,128,0.7)',
    marginTop: 24,
    textAlign: 'center',
    fontWeight: 500,
    lineHeight: 16,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
});

export default FundTransfer;

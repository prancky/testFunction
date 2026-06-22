import React, { useRef } from 'react';
import {
  AppAppBar,
  AppButton,
  AppColumn,
  AppContainer,
  AppDropDown,
  AppForm,
  AppRow,
  AppText,
  AppTextField,
} from '@/components/shared';

import { useNavigation } from '@react-navigation/native';

import { color, space, component, text, border } from '@/assets';

import { ASWrap } from '@/components';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { useTranslation } from 'react-i18next';
import { KEYS } from '@/i18n/keys';

type FormValues = {
  CreateRecepient_Input_EnterRecipientFullName_Input?: string;
  CreateRecepient_Container_Options_DropDown?: string;
  CreateRecepient_Container_Options_DropDown_2?: string;
  CreateRecepient_Input_Egit60X054281110100000012_Input?: string;
  CreateRecepient_Input_Egit60X054281110100000012_Input_2?: string;
  CreateRecepient_Input_Eg000123456789_Input?: string;
  CreateRecepient_Container_Options_DropDown_3?: string;
  CreateRecepient_Input_Egbocelklx_Input?: string;
  CreateRecepient_Input_Eg201585_Input?: string;
  CreateRecepient_Input?: string;
  CreateRecepient_Input_2?: string;
  CreateRecepient_Input_3?: string;
  CreateRecepient_Input_Gb_Input?: string;
  CreateRecepient_Input_4?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const CreateRecepient: React.FC<ScreenProps> = ({ route }) => {
  const { t } = useTranslation();

  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-482737'}
      testID={'9c239078-be7a-4397-bce4-131b73d231d8'}
      style={sharedStyles.container2}
    >
      <AppForm
        widgetId={'ASForm-657023'}
        validationSchema={Yup.object().shape({})}
        initialValues={{
          CreateRecepient_Input_EnterRecipientFullName_Input: '',
          CreateRecepient_Container_Options_DropDown: '',
          CreateRecepient_Container_Options_DropDown_2: '',
          CreateRecepient_Input_Egit60X054281110100000012_Input: '',
          CreateRecepient_Input_Egit60X054281110100000012_Input_2: '',
          CreateRecepient_Input_Eg000123456789_Input: '',
          CreateRecepient_Container_Options_DropDown_3: '',
          CreateRecepient_Input_Egbocelklx_Input: '',
          CreateRecepient_Input_Eg201585_Input: '',
          CreateRecepient_Input: '',
          CreateRecepient_Input_2: '',
          CreateRecepient_Input_3: '',
          CreateRecepient_Input_Gb_Input: '',
          CreateRecepient_Input_4: '',
        }}
        innerRef={formikRef}
      >
        {(formikProps: FormikProps<FormValues>) => {
          return (
            <>
              <AppAppBar
                widgetId={'CreateRecepient_AppBar_HeaderTopAppBar_AppBar'}
                leadingIcon={
                  'https://content.oneapi.world/apps/7f2aa8bb-b945-4403-85a2-9b39711155cc/_app/6c5b0a54-becf-48d5-8e8b-5e75bbc157f6-2549_6951.png'
                }
                textStyles={[
                  text.title.medium,
                  sharedStyles.createQuoteAppBarHeaderTopAppBarAppBarTextStyles,
                ]}
                centerContainerStyle={
                  styles.createRecepientAppBarHeaderTopAppBarAppBarCenterContainerStyle
                }
                style={styles.createRecepientAppBarHeaderTopAppBarAppBarStyle}
                title={t(
                  KEYS.CreateRecepient
                    .CreateRecepient_AppBar_HeaderTopAppBar_AppBar.title,
                )}
              />
              <AppColumn
                widgetId={'CreateRecepient_Container_MainForm_Column'}
                style={styles.createRecepientContainerMainFormColumnStyle}
              >
                <AppColumn
                  widgetId={
                    'CreateRecepient_Container_Section1RecipientDetails_Column'
                  }
                  spacing={16}
                  style={sharedStyles.createQuoteContainerColumn3}
                >
                  <AppRow
                    widgetId={'CreateRecepient_Container_Row'}
                    style={sharedStyles.createQuoteContainerRow5}
                  >
                    <AppColumn
                      widgetId={'CreateRecepient_Container_Heading2_Column'}
                      style={styles.createRecepientContainerHeading2ColumnStyle}
                    >
                      <AppText
                        widgetId={'CreateRecepient_Label_UserName_Text'}
                        numberOfLines={2}
                        style={[
                          text.label.medium,
                          styles.createRecepientLabelUserNameTextStyle,
                        ]}
                        accessibilityLabel={t(
                          KEYS.CreateRecepient
                            .CreateRecepient_Label_UserName_Text
                            .accessibilityLabel,
                        )}
                      >
                        {t(
                          KEYS.CreateRecepient
                            .CreateRecepient_Label_UserName_Text.label,
                        )}
                      </AppText>
                    </AppColumn>
                  </AppRow>
                  <AppColumn
                    widgetId={'CreateRecepient_Container_Background_Column'}
                    spacing={20}
                    style={styles.createRecepientContainerBackgroundColumnStyle}
                  >
                    <AppColumn
                      widgetId={
                        'CreateRecepient_Container_AccountHolderName_Column'
                      }
                      style={
                        styles.createRecepientContainerAccountHolderNameColumnStyle
                      }
                    >
                      <AppText
                        widgetId={'CreateRecepient_Label_UserName_Text_2'}
                        numberOfLines={2}
                        style={[
                          text.label.medium,
                          styles.createRecepientLabelUserNameText2Style,
                        ]}
                        accessibilityLabel={t(
                          KEYS.CreateRecepient
                            .CreateRecepient_Label_UserName_Text_2
                            .accessibilityLabel,
                        )}
                      >
                        {t(
                          KEYS.CreateRecepient
                            .CreateRecepient_Label_UserName_Text_2.label,
                        )}
                      </AppText>
                      <AppTextField
                        widgetId={
                          'CreateRecepient_Input_EnterRecipientFullName_Input'
                        }
                        style={
                          styles.createRecepientInputEnterRecipientFullNameInputStyle
                        }
                        placeholder={t(
                          KEYS.CreateRecepient
                            .CreateRecepient_Input_EnterRecipientFullName_Input
                            .placeholder,
                        )}
                      />
                    </AppColumn>
                    <AppColumn
                      widgetId={
                        'CreateRecepient_Container_CurrencySelection_Column'
                      }
                      style={
                        styles.createRecepientContainerCurrencySelectionColumnStyle
                      }
                    >
                      <AppText
                        widgetId={'CreateRecepient_Label_UserName_Text_3'}
                        numberOfLines={1}
                        style={[
                          text.label.medium,
                          styles.createRecepientLabelUserNameText3Style,
                        ]}
                        accessibilityLabel={t(
                          KEYS.CreateRecepient
                            .CreateRecepient_Label_UserName_Text_3
                            .accessibilityLabel,
                        )}
                      >
                        {t(
                          KEYS.CreateRecepient
                            .CreateRecepient_Label_UserName_Text_3.label,
                        )}
                      </AppText>
                      <AppColumn
                        widgetId={'CreateRecepient_Container_Column'}
                        style={styles.createRecepientContainerColumnStyle}
                      >
                        <AppDropDown
                          widgetId={
                            'CreateRecepient_Container_Options_DropDown'
                          }
                          options={[]}
                          containerStyle={
                            sharedStyles.createQuoteContainerOptionsDropDownContainer
                          }
                          placeholder={t(
                            KEYS.CreateRecepient
                              .CreateRecepient_Container_Options_DropDown
                              .placeholder,
                          )}
                          searchPlaceholder={t(
                            KEYS.CreateRecepient
                              .CreateRecepient_Container_Options_DropDown
                              .searchPlaceholder,
                          )}
                        />
                      </AppColumn>
                    </AppColumn>
                    <AppColumn
                      widgetId={
                        'CreateRecepient_Container_LegalTypeToggle_Column'
                      }
                      style={
                        styles.createRecepientContainerLegalTypeToggleColumnStyle
                      }
                    >
                      <AppText
                        widgetId={'CreateRecepient_Label_UserName_Text_4'}
                        numberOfLines={2}
                        style={[
                          text.label.medium,
                          styles.createRecepientLabelUserNameText4Style,
                        ]}
                        accessibilityLabel={t(
                          KEYS.CreateRecepient
                            .CreateRecepient_Label_UserName_Text_4
                            .accessibilityLabel,
                        )}
                      >
                        {t(
                          KEYS.CreateRecepient
                            .CreateRecepient_Label_UserName_Text_4.label,
                        )}
                      </AppText>
                      <ASWrap
                        direction={'row'}
                        name={'CreateRecepient_Container_Background_Wrap'}
                        style={
                          styles.createRecepientContainerBackgroundWrapStyle
                        }
                        testId={'CreateRecepient_Container_Background_Wrap'}
                      >
                        <AppButton
                          widgetId={'CreateRecepient_Cta_Personal_Button'}
                          textStyle={[
                            text.label.medium,
                            styles.createRecepientCtaPersonalButtonTextStyle,
                          ]}
                          style={styles.createRecepientCtaPersonalButtonStyle}
                          label={t(
                            KEYS.CreateRecepient
                              .CreateRecepient_Cta_Personal_Button.label,
                          )}
                          accessibilityLabel={t(
                            KEYS.CreateRecepient
                              .CreateRecepient_Cta_Personal_Button
                              .accessibilityLabel,
                          )}
                        />
                        <AppButton
                          widgetId={'CreateRecepient_Cta_Business_Button'}
                          style={styles.createRecepientCtaBusinessButtonStyle}
                          textStyle={[
                            text.label.medium,
                            styles.createRecepientCtaBusinessButtonTextStyle,
                          ]}
                          accessibilityLabel={t(
                            KEYS.CreateRecepient
                              .CreateRecepient_Cta_Business_Button
                              .accessibilityLabel,
                          )}
                          label={t(
                            KEYS.CreateRecepient
                              .CreateRecepient_Cta_Business_Button.label,
                          )}
                        />
                      </ASWrap>
                    </AppColumn>
                  </AppColumn>
                </AppColumn>
                <AppColumn
                  widgetId={'CreateRecepient_Container_TransferType_Column'}
                  style={styles.createRecepientContainerTransferTypeColumnStyle}
                >
                  <AppText
                    widgetId={'CreateRecepient_Label_RecipientAccountType_Text'}
                    numberOfLines={1}
                    style={[
                      text.label.medium,
                      styles.createRecepientLabelRecipientAccountTypeTextStyle,
                    ]}
                    accessibilityLabel={t(
                      KEYS.CreateRecepient
                        .CreateRecepient_Label_RecipientAccountType_Text
                        .accessibilityLabel,
                    )}
                  >
                    {t(
                      KEYS.CreateRecepient
                        .CreateRecepient_Label_RecipientAccountType_Text.label,
                    )}
                  </AppText>
                  <AppColumn
                    widgetId={'CreateRecepient_Container_Column_2'}
                    style={styles.createRecepientContainerColumn2Style}
                  >
                    <AppDropDown
                      widgetId={'CreateRecepient_Container_Options_DropDown_2'}
                      options={[]}
                      containerStyle={
                        sharedStyles.createQuoteContainerOptionsDropDownContainer
                      }
                      placeholder={t(
                        KEYS.CreateRecepient
                          .CreateRecepient_Container_Options_DropDown_2
                          .placeholder,
                      )}
                      searchPlaceholder={t(
                        KEYS.CreateRecepient
                          .CreateRecepient_Container_Options_DropDown_2
                          .searchPlaceholder,
                      )}
                    />
                  </AppColumn>
                </AppColumn>
                <AppColumn
                  widgetId={
                    'CreateRecepient_Container_Section2AccountInformationD_Column'
                  }
                  spacing={16}
                  style={
                    sharedStyles.createRecepientContainerSection2AccountInformationDColu2
                  }
                >
                  <AppColumn
                    widgetId={'CreateRecepient_Container_Heading2_Column_2'}
                    style={styles.createRecepientContainerHeading2Column2Style}
                  >
                    <AppText
                      widgetId={'CreateRecepient_Label_UserName_Text_5'}
                      numberOfLines={2}
                      style={[
                        text.label.medium,
                        styles.createRecepientLabelUserNameText5Style,
                      ]}
                      accessibilityLabel={t(
                        KEYS.CreateRecepient
                          .CreateRecepient_Label_UserName_Text_5
                          .accessibilityLabel,
                      )}
                    >
                      {t(
                        KEYS.CreateRecepient
                          .CreateRecepient_Label_UserName_Text_5.label,
                      )}
                    </AppText>
                  </AppColumn>
                  <AppText
                    widgetId={
                      'CreateRecepient_Label_IbanRequiredIfTypeIban_Text'
                    }
                    numberOfLines={2}
                    style={[
                      text.label.medium,
                      styles.createRecepientLabelIbanRequiredIfTypeIbanTextStyle,
                    ]}
                    accessibilityLabel={t(
                      KEYS.CreateRecepient
                        .CreateRecepient_Label_IbanRequiredIfTypeIban_Text
                        .accessibilityLabel,
                    )}
                  >
                    {t(
                      KEYS.CreateRecepient
                        .CreateRecepient_Label_IbanRequiredIfTypeIban_Text
                        .label,
                    )}
                  </AppText>
                  <AppTextField
                    widgetId={
                      'CreateRecepient_Input_Egit60X054281110100000012_Input'
                    }
                    style={
                      styles.createRecepientInputEgit60X054281110100000012InputStyle
                    }
                    placeholder={t(
                      KEYS.CreateRecepient
                        .CreateRecepient_Input_Egit60X054281110100000012_Input
                        .placeholder,
                    )}
                  />
                </AppColumn>
                <AppText
                  widgetId={
                    'CreateRecepient_Label_AbaRtnRequiredIfTypeAba_Text'
                  }
                  numberOfLines={2}
                  style={[
                    text.label.medium,
                    styles.createRecepientLabelAbaRtnRequiredIfTypeAbaTextStyle,
                  ]}
                  accessibilityLabel={t(
                    KEYS.CreateRecepient
                      .CreateRecepient_Label_AbaRtnRequiredIfTypeAba_Text
                      .accessibilityLabel,
                  )}
                >
                  {t(
                    KEYS.CreateRecepient
                      .CreateRecepient_Label_AbaRtnRequiredIfTypeAba_Text.label,
                  )}
                </AppText>
                <AppTextField
                  widgetId={
                    'CreateRecepient_Input_Egit60X054281110100000012_Input_2'
                  }
                  style={
                    styles.createRecepientInputEgit60X054281110100000012Input2Style
                  }
                  placeholder={t(
                    KEYS.CreateRecepient
                      .CreateRecepient_Input_Egit60X054281110100000012_Input_2
                      .placeholder,
                  )}
                />
                <AppText
                  widgetId={
                    'CreateRecepient_Label_AccountNumberRequiredForA_Text'
                  }
                  numberOfLines={2}
                  style={[
                    text.label.medium,
                    styles.createRecepientLabelAccountNumberRequiredForATextStyle,
                  ]}
                  accessibilityLabel={t(
                    KEYS.CreateRecepient
                      .CreateRecepient_Label_AccountNumberRequiredForA_Text
                      .accessibilityLabel,
                  )}
                >
                  {t(
                    KEYS.CreateRecepient
                      .CreateRecepient_Label_AccountNumberRequiredForA_Text
                      .label,
                  )}
                </AppText>
                <AppTextField
                  widgetId={'CreateRecepient_Input_Eg000123456789_Input'}
                  style={styles.createRecepientInputEg000123456789InputStyle}
                  placeholder={t(
                    KEYS.CreateRecepient
                      .CreateRecepient_Input_Eg000123456789_Input.placeholder,
                  )}
                />
                <AppColumn
                  widgetId={'CreateRecepient_Container_TransferType_Column_2'}
                  style={
                    styles.createRecepientContainerTransferTypeColumn2Style
                  }
                >
                  <AppText
                    widgetId={
                      'CreateRecepient_Label_AccountTypeRequiredIfType_Text'
                    }
                    style={[
                      text.label.medium,
                      styles.createRecepientLabelAccountTypeRequiredIfTypeTextStyle,
                    ]}
                    accessibilityLabel={t(
                      KEYS.CreateRecepient
                        .CreateRecepient_Label_AccountTypeRequiredIfType_Text
                        .accessibilityLabel,
                    )}
                  >
                    {t(
                      KEYS.CreateRecepient
                        .CreateRecepient_Label_AccountTypeRequiredIfType_Text
                        .label,
                    )}
                  </AppText>
                  <AppColumn
                    widgetId={'CreateRecepient_Container_Column_3'}
                    style={sharedStyles.createQuoteContainerColumn13}
                  >
                    <AppDropDown
                      widgetId={'CreateRecepient_Container_Options_DropDown_3'}
                      options={[]}
                      containerStyle={
                        sharedStyles.createQuoteContainerOptionsDropDownContainer
                      }
                      placeholder={t(
                        KEYS.CreateRecepient
                          .CreateRecepient_Container_Options_DropDown_3
                          .placeholder,
                      )}
                      searchPlaceholder={t(
                        KEYS.CreateRecepient
                          .CreateRecepient_Container_Options_DropDown_3
                          .searchPlaceholder,
                      )}
                    />
                  </AppColumn>
                </AppColumn>
                <AppColumn
                  widgetId={
                    'CreateRecepient_Container_Section2AccountInformationD_Colu_2'
                  }
                  spacing={16}
                  style={
                    sharedStyles.createRecepientContainerSection2AccountInformationDColu2
                  }
                >
                  <AppText
                    widgetId={
                      'CreateRecepient_Label_SwiftCodeRequiredIfTypeS_Text'
                    }
                    numberOfLines={2}
                    style={[
                      text.label.medium,
                      styles.createRecepientLabelSwiftCodeRequiredIfTypeSTextStyle,
                    ]}
                    accessibilityLabel={t(
                      KEYS.CreateRecepient
                        .CreateRecepient_Label_SwiftCodeRequiredIfTypeS_Text
                        .accessibilityLabel,
                    )}
                  >
                    {t(
                      KEYS.CreateRecepient
                        .CreateRecepient_Label_SwiftCodeRequiredIfTypeS_Text
                        .label,
                    )}
                  </AppText>
                  <AppTextField
                    widgetId={'CreateRecepient_Input_Egbocelklx_Input'}
                    style={styles.createRecepientInputEgbocelklxInputStyle}
                    placeholder={t(
                      KEYS.CreateRecepient
                        .CreateRecepient_Input_Egbocelklx_Input.placeholder,
                    )}
                  />
                </AppColumn>
                <AppColumn
                  widgetId={
                    'CreateRecepient_Container_Section2AccountInformationD_Colu_3'
                  }
                  spacing={16}
                  style={
                    sharedStyles.createRecepientContainerSection2AccountInformationDColu2
                  }
                >
                  <AppText
                    widgetId={
                      'CreateRecepient_Label_SortCodeRequiredIfTypeSo_Text'
                    }
                    numberOfLines={2}
                    style={[
                      text.label.medium,
                      styles.createRecepientLabelSortCodeRequiredIfTypeSoTextStyle,
                    ]}
                    accessibilityLabel={t(
                      KEYS.CreateRecepient
                        .CreateRecepient_Label_SortCodeRequiredIfTypeSo_Text
                        .accessibilityLabel,
                    )}
                  >
                    {t(
                      KEYS.CreateRecepient
                        .CreateRecepient_Label_SortCodeRequiredIfTypeSo_Text
                        .label,
                    )}
                  </AppText>
                  <AppTextField
                    widgetId={'CreateRecepient_Input_Eg201585_Input'}
                    style={styles.createRecepientInputEg201585InputStyle}
                    placeholder={t(
                      KEYS.CreateRecepient.CreateRecepient_Input_Eg201585_Input
                        .placeholder,
                    )}
                  />
                </AppColumn>
                <AppColumn
                  widgetId={
                    'CreateRecepient_Container_Section3PostalAddress_Column'
                  }
                  spacing={16}
                  style={
                    styles.createRecepientContainerSection3PostalAddressColumnStyle
                  }
                >
                  <AppColumn
                    widgetId={'CreateRecepient_Container_Heading2_Column_3'}
                    style={styles.createRecepientContainerHeading2Column3Style}
                  >
                    <AppText
                      widgetId={'CreateRecepient_Label_UserName_Text_6'}
                      numberOfLines={1}
                      style={[
                        text.label.medium,
                        styles.createRecepientLabelUserNameText6Style,
                      ]}
                      accessibilityLabel={t(
                        KEYS.CreateRecepient
                          .CreateRecepient_Label_UserName_Text_6
                          .accessibilityLabel,
                      )}
                    >
                      {t(
                        KEYS.CreateRecepient
                          .CreateRecepient_Label_UserName_Text_6.label,
                      )}
                    </AppText>
                  </AppColumn>
                  <AppColumn
                    widgetId={'CreateRecepient_Container_Background_Column_2'}
                    spacing={16}
                    style={
                      styles.createRecepientContainerBackgroundColumn2Style
                    }
                  >
                    <AppColumn
                      widgetId={'CreateRecepient_Container_Column_4'}
                      style={styles.createRecepientContainerColumn4Style}
                    >
                      <AppText
                        widgetId={'CreateRecepient_Label_AddressLine1_Text'}
                        numberOfLines={2}
                        style={[
                          text.label.medium,
                          styles.createRecepientLabelAddressLine1TextStyle,
                        ]}
                        accessibilityLabel={t(
                          KEYS.CreateRecepient
                            .CreateRecepient_Label_AddressLine1_Text
                            .accessibilityLabel,
                        )}
                      >
                        {t(
                          KEYS.CreateRecepient
                            .CreateRecepient_Label_AddressLine1_Text.label,
                        )}
                      </AppText>
                      <AppTextField
                        widgetId={'CreateRecepient_Input'}
                        placeholder={''}
                        style={styles.createRecepientInputStyle}
                      />
                    </AppColumn>
                    <ASWrap
                      direction={'row'}
                      name={'CreateRecepient_Container_Wrap'}
                      style={styles.createRecepientContainerWrapStyle}
                      testId={'CreateRecepient_Container_Wrap'}
                    >
                      <AppColumn
                        widgetId={'CreateRecepient_Container_Column_5'}
                        style={sharedStyles.createRecepientContainerColumn5}
                      >
                        <AppText
                          widgetId={'CreateRecepient_Label_UserName_Text_7'}
                          numberOfLines={2}
                          style={[
                            text.label.medium,
                            styles.createRecepientLabelUserNameText7Style,
                          ]}
                          accessibilityLabel={t(
                            KEYS.CreateRecepient
                              .CreateRecepient_Label_UserName_Text_7
                              .accessibilityLabel,
                          )}
                        >
                          {t(
                            KEYS.CreateRecepient
                              .CreateRecepient_Label_UserName_Text_7.label,
                          )}
                        </AppText>
                        <AppTextField
                          widgetId={'CreateRecepient_Input_2'}
                          placeholder={''}
                          style={styles.createRecepientInput2Style}
                        />
                      </AppColumn>
                      <AppColumn
                        widgetId={'CreateRecepient_Container_Column_6'}
                        style={sharedStyles.createRecepientContainerColumn5}
                      >
                        <AppText
                          widgetId={'CreateRecepient_Label_UserName_Text_8'}
                          numberOfLines={2}
                          style={[
                            text.label.medium,
                            styles.createRecepientLabelUserNameText8Style,
                          ]}
                          accessibilityLabel={t(
                            KEYS.CreateRecepient
                              .CreateRecepient_Label_UserName_Text_8
                              .accessibilityLabel,
                          )}
                        >
                          {t(
                            KEYS.CreateRecepient
                              .CreateRecepient_Label_UserName_Text_8.label,
                          )}
                        </AppText>
                        <AppTextField
                          widgetId={'CreateRecepient_Input_3'}
                          placeholder={''}
                          style={styles.createRecepientInput3Style}
                        />
                      </AppColumn>
                    </ASWrap>
                    <ASWrap
                      direction={'row'}
                      name={'CreateRecepient_Container_Wrap_2'}
                      style={styles.createRecepientContainerWrap2Style}
                      testId={'CreateRecepient_Container_Wrap_2'}
                    >
                      <AppColumn
                        widgetId={'CreateRecepient_Container_Column_7'}
                        style={sharedStyles.createRecepientContainerColumn5}
                      >
                        <AppText
                          widgetId={'CreateRecepient_Label_UserName_Text_9'}
                          numberOfLines={2}
                          style={[
                            text.label.medium,
                            styles.createRecepientLabelUserNameText9Style,
                          ]}
                          accessibilityLabel={t(
                            KEYS.CreateRecepient
                              .CreateRecepient_Label_UserName_Text_9
                              .accessibilityLabel,
                          )}
                        >
                          {t(
                            KEYS.CreateRecepient
                              .CreateRecepient_Label_UserName_Text_9.label,
                          )}
                        </AppText>
                        <AppTextField
                          widgetId={'CreateRecepient_Input_Gb_Input'}
                          style={styles.createRecepientInputGbInputStyle}
                          placeholder={t(
                            KEYS.CreateRecepient.CreateRecepient_Input_Gb_Input
                              .placeholder,
                          )}
                        />
                      </AppColumn>
                      <AppColumn
                        widgetId={'CreateRecepient_Container_Column_8'}
                        style={styles.createRecepientContainerColumn8Style}
                      >
                        <AppText
                          widgetId={
                            'CreateRecepient_Label_StateProvinceOptional_Text'
                          }
                          numberOfLines={2}
                          style={[
                            text.label.medium,
                            styles.createRecepientLabelStateProvinceOptionalTextStyle,
                          ]}
                          accessibilityLabel={t(
                            KEYS.CreateRecepient
                              .CreateRecepient_Label_StateProvinceOptional_Text
                              .accessibilityLabel,
                          )}
                        >
                          {t(
                            KEYS.CreateRecepient
                              .CreateRecepient_Label_StateProvinceOptional_Text
                              .label,
                          )}
                        </AppText>
                        <AppTextField
                          widgetId={'CreateRecepient_Input_4'}
                          placeholder={''}
                          style={styles.createRecepientInput4Style}
                        />
                      </AppColumn>
                    </ASWrap>
                  </AppColumn>
                </AppColumn>
                <AppButton
                  widgetId={'CreateRecepient_Cta_Continue_Button'}
                  style={styles.createRecepientCtaContinueButtonStyle}
                  textStyle={[
                    text.label.medium,
                    sharedStyles.createRecepientCtaContinueButtonText,
                  ]}
                  label={t(
                    KEYS.CreateRecepient.CreateRecepient_Cta_Continue_Button
                      .label,
                  )}
                  accessibilityLabel={t(
                    KEYS.CreateRecepient.CreateRecepient_Cta_Continue_Button
                      .accessibilityLabel,
                  )}
                />
              </AppColumn>
            </>
          );
        }}
      </AppForm>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  createRecepientAppBarHeaderTopAppBarAppBarCenterContainerStyle: {
    padding: 28,
  },
  createRecepientAppBarHeaderTopAppBarAppBarStyle: {
    height: 65,
    borderColor: color.border.default,
    paddingLeft: space['3'],
    paddingRight: space['3'],
    borderBottomWidth: 0,
  },
  createRecepientContainerMainFormColumnStyle: {
    height: 1667,
    paddingRight: 10,
    paddingLeft: 10,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  createRecepientContainerHeading2ColumnStyle: {
    paddingLeft: 8,
    height: 20,
    paddingRight: 8,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createRecepientLabelUserNameTextStyle: {
    fontWeight: 700,
    textAlignVertical: 'center',
    letterSpacing: 1.399999976158142,
    color: '#43474f',
    fontFamily: 'Manrope-700-normal',
    textTransform: 'uppercase',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createRecepientContainerBackgroundColumnStyle: {
    borderRadius: 12,
    backgroundColor: '#f3f3f6',
    alignSelf: 'stretch',
    padding: 20,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createRecepientContainerAccountHolderNameColumnStyle: {
    alignSelf: 'stretch',
    height: 70,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createRecepientLabelUserNameText2Style: {
    color: '#43474f',
    textAlignVertical: 'center',
    fontFamily: 'Inter-600-normal',
    fontWeight: 600,
    lineHeight: 16,
    fontSize: 12,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createRecepientInputEnterRecipientFullNameInputStyle: {
    marginTop: 7,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    alignSelf: 'stretch',
    height: 47,
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  createRecepientContainerCurrencySelectionColumnStyle: {
    height: 70,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createRecepientLabelUserNameText3Style: {
    fontWeight: 600,
    lineHeight: 16,
    color: '#43474f',
    textAlignVertical: 'center',
    width: '16.3%',
    fontFamily: 'Inter-600-normal',
    fontSize: 12,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createRecepientContainerColumnStyle: {
    height: 48,
    alignSelf: 'stretch',
    marginTop: 7,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createRecepientContainerLegalTypeToggleColumnStyle: {
    alignSelf: 'stretch',
    height: 66,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createRecepientLabelUserNameText4Style: {
    fontSize: 12,
    fontWeight: 600,
    fontFamily: 'Inter-600-normal',
    textAlignVertical: 'center',
    color: '#43474f',
    lineHeight: 16,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createRecepientContainerBackgroundWrapStyle: {
    runSpacing: 8,
    padding: 4,
    backgroundColor: '#e8e8ea',
    marginTop: 7,
    borderRadius: 8,
    alignSelf: 'stretch',
    height: 44,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    columnGap: space['2'],
    justifyContent: 'flex-start',
    rowGap: space['2'],
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  createRecepientCtaPersonalButtonTextStyle: {
    fontFamily: 'Inter-700-normal',
    fontSize: 12,
    color: '#001e40',
    fontWeight: 700,
  },
  createRecepientCtaPersonalButtonStyle: {
    width: '49.6%',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    paddingLeft: 50.380001068115234,
    shadowColor: 'rgba(0,0,0,0.05)',
    lineHeight: 16,
    paddingTop: 10,
    borderRadius: 4,
    paddingBottom: 10,
    height: 36,
    shadowRadius: 2,
    paddingRight: 50.38999938964844,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 1 },
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  createRecepientCtaBusinessButtonStyle: {
    borderRadius: 4,
    textAlign: 'center',
    paddingBottom: 10,
    lineHeight: 16,
    paddingLeft: 45.689998626708984,
    paddingTop: 10,
    backgroundColor: 'transparent',
    height: 36,
    paddingRight: 45.70000076293945,
    width: '45.8%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  createRecepientCtaBusinessButtonTextStyle: {
    fontFamily: 'Inter-500-normal',
    color: '#43474f',
    fontSize: 12,
    fontWeight: 500,
  },
  createRecepientContainerTransferTypeColumnStyle: {
    marginTop: 32,
    height: 70,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createRecepientLabelRecipientAccountTypeTextStyle: {
    color: '#43474f',
    textAlignVertical: 'center',
    lineHeight: 16,
    fontFamily: 'Inter-600-normal',
    fontSize: 12,
    fontWeight: 600,
    width: '45.1%',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createRecepientContainerColumn2Style: {
    alignSelf: 'stretch',
    height: 48,
    marginTop: 7,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createRecepientContainerHeading2Column2Style: {
    height: 20,
    paddingLeft: 8,
    paddingRight: 8,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createRecepientLabelUserNameText5Style: {
    lineHeight: 20,
    letterSpacing: 1.399999976158142,
    fontSize: 14,
    textAlignVertical: 'center',
    fontFamily: 'Manrope-700-normal',
    textTransform: 'uppercase',
    fontWeight: 700,
    alignSelf: 'stretch',
    color: '#43474f',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createRecepientLabelIbanRequiredIfTypeIbanTextStyle: {
    textAlignVertical: 'center',
    fontWeight: 600,
    fontFamily: 'Inter-600-normal',
    color: '#43474f',
    lineHeight: 16,
    fontSize: 12,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createRecepientInputEgit60X054281110100000012InputStyle: {
    minHeight: 48,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    alignSelf: 'stretch',
    height: component.input.height,
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  createRecepientLabelAbaRtnRequiredIfTypeAbaTextStyle: {
    lineHeight: 16,
    alignSelf: 'center',
    fontWeight: 600,
    color: '#43474f',
    fontSize: 12,
    textAlignVertical: 'center',
    fontFamily: 'Inter-600-normal',
    marginTop: 32,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createRecepientInputEgit60X054281110100000012Input2Style: {
    alignSelf: 'stretch',
    marginTop: 32,
    backgroundColor: '#ffffff',
    minHeight: 48,
    borderRadius: 8,
    height: component.input.height,
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  createRecepientLabelAccountNumberRequiredForATextStyle: {
    fontSize: 12,
    fontWeight: 600,
    textAlignVertical: 'center',
    fontFamily: 'Inter-600-normal',
    color: '#43474f',
    width: '82.7%',
    marginTop: 32,
    alignSelf: 'center',
    lineHeight: 16,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createRecepientInputEg000123456789InputStyle: {
    borderRadius: 8,
    marginTop: 32,
    alignSelf: 'stretch',
    minHeight: 48,
    backgroundColor: '#ffffff',
    height: component.input.height,
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  createRecepientContainerTransferTypeColumn2Style: {
    height: 70,
    alignSelf: 'stretch',
    marginTop: 32,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createRecepientLabelAccountTypeRequiredIfTypeTextStyle: {
    fontFamily: 'Inter-600-normal',
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 16,
    color: '#43474f',
    textAlignVertical: 'center',
    width: '63%',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createRecepientLabelSwiftCodeRequiredIfTypeSTextStyle: {
    fontSize: 12,
    fontFamily: 'Inter-600-normal',
    lineHeight: 16,
    color: '#43474f',
    fontWeight: 600,
    textAlignVertical: 'center',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createRecepientInputEgbocelklxInputStyle: {
    alignSelf: 'stretch',
    minHeight: 48,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    height: component.input.height,
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  createRecepientLabelSortCodeRequiredIfTypeSoTextStyle: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Inter-600-normal',
    textAlignVertical: 'center',
    fontWeight: 600,
    color: '#43474f',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createRecepientInputEg201585InputStyle: {
    borderRadius: 8,
    minHeight: 48,
    alignSelf: 'stretch',
    backgroundColor: '#ffffff',
    height: component.input.height,
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  createRecepientContainerSection3PostalAddressColumnStyle: {
    paddingBottom: 24,
    alignSelf: 'stretch',
    marginTop: 32,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createRecepientContainerHeading2Column3Style: {
    paddingRight: 8,
    height: 20,
    paddingLeft: 8,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createRecepientLabelUserNameText6Style: {
    alignSelf: 'stretch',
    fontFamily: 'Manrope-700-normal',
    color: '#43474f',
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: 1.399999976158142,
    fontSize: 14,
    lineHeight: 20,
    textAlignVertical: 'center',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createRecepientContainerBackgroundColumn2Style: {
    backgroundColor: '#f3f3f6',
    borderRadius: 12,
    padding: 20,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createRecepientContainerColumn4Style: {
    height: 70,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createRecepientLabelAddressLine1TextStyle: {
    textAlignVertical: 'center',
    fontWeight: 600,
    color: '#43474f',
    lineHeight: 16,
    fontFamily: 'Inter-600-normal',
    fontSize: 12,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createRecepientInputStyle: {
    borderRadius: 8,
    marginTop: 7,
    height: 48,
    backgroundColor: '#ffffff',
    alignSelf: 'stretch',
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  createRecepientContainerWrapStyle: {
    runSpacing: 16,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    columnGap: space['2'],
    justifyContent: 'flex-start',
    rowGap: space['2'],
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  createRecepientLabelUserNameText7Style: {
    fontSize: 12,
    color: '#43474f',
    lineHeight: 16,
    fontFamily: 'Inter-600-normal',
    fontWeight: 600,
    textAlignVertical: 'center',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createRecepientInput2Style: {
    backgroundColor: '#ffffff',
    alignSelf: 'stretch',
    marginTop: 7,
    height: 48,
    borderRadius: 8,
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  createRecepientLabelUserNameText8Style: {
    lineHeight: 16,
    fontFamily: 'Inter-600-normal',
    color: '#43474f',
    fontSize: 12,
    fontWeight: 600,
    textAlignVertical: 'center',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createRecepientInput3Style: {
    marginTop: 7,
    backgroundColor: '#ffffff',
    alignSelf: 'stretch',
    height: 48,
    borderRadius: 8,
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  createRecepientContainerWrap2Style: {
    alignSelf: 'stretch',
    runSpacing: 16,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    columnGap: space['2'],
    justifyContent: 'flex-start',
    rowGap: space['2'],
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  createRecepientLabelUserNameText9Style: {
    fontWeight: 600,
    lineHeight: 16,
    fontFamily: 'Inter-600-normal',
    color: '#43474f',
    fontSize: 12,
    textAlignVertical: 'center',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createRecepientInputGbInputStyle: {
    height: 48,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    alignSelf: 'stretch',
    marginTop: 7,
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  createRecepientContainerColumn8Style: {
    alignSelf: 'stretch',
    flex: 2,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  createRecepientLabelStateProvinceOptionalTextStyle: {
    color: '#43474f',
    textAlignVertical: 'center',
    fontFamily: 'Inter-600-normal',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 600,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  createRecepientInput4Style: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    alignSelf: 'stretch',
    height: 48,
    marginTop: 7,
    borderColor: color.border.default,
    borderWidth: border.default,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  createRecepientCtaContinueButtonStyle: {
    textAlign: 'center',
    gradientColors: ['#001e40', '#003366'],
    gradientStart: { x: 0.47611576122127375, y: -0.47611576122127397 },
    paddingRight: 0,
    paddingTop: 16,
    paddingLeft: 0,
    height: 56,
    lineHeight: 24,
    shadowRadius: 40,
    gradientStops: [0, 1],
    borderRadius: 12,
    alignSelf: 'stretch',
    marginTop: 32,
    shadowColor: 'rgba(0,27,60,0.1)',
    gradientEnd: { x: 0.5238842295671116, y: 1.4761157704328882 },
    paddingBottom: 16,
    gradientType: 'linear',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 20 },
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
});

export default CreateRecepient;

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

const Send: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  const onPressSendsendCtaSendButton = async () => {
    navigation.navigate(Route.SEND7, {});
  };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-287742'}
      testID={'0c7f05fe-e258-4a84-8a0c-f2fa9374bf05'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'Send_AppBar_SyntheticAppBar_AppBar'}
        style={sharedStyles.analyticsAppBarSyntheticAppBarAppBar}
      >
        <AppRow
          widgetId={'Send_Container_AppBarCustomCentre_Row'}
          spacing={space['2']}
          style={sharedStyles.analyticsContainerAppBarCustomCentreRow}
        >
          <AppStack
            widgetId={'Send_Container_Stack'}
            style={sharedStyles.analyticsContainerStack}
          >
            <AppImage
              widgetId={'Send_Image'}
              source={imageSources.image__hhvkb}
              resizeMode={'stretch'}
              style={sharedStyles.analyticsImage}
            />
            <AppImage
              widgetId={'Send_Image_2'}
              source={imageSources.image__jx46}
              style={sharedStyles.analyticsImage2}
            />
          </AppStack>
          <AppImage
            widgetId={'Send_Image_3'}
            source={imageSources.image__fjux}
            resizeMode={'cover'}
            style={sharedStyles.analyticsImage3}
          />
        </AppRow>
      </AppAppBar>
      <AppImage
        widgetId={'Send_Background_Image'}
        resizeMode={'cover'}
        source={imageSources.image__6ifi6}
        style={sharedStyles.analyticsBackgroundImage}
      />
      <AppStack
        widgetId={'Send_Container_Send_Stack'}
        style={sharedStyles.analyticsContainerAnalyticsStack}
      >
        <AppText
          widgetId={'Send_Label_UserName_Text'}
          style={[text.label.medium, styles.sendLabelUserNameTextStyle]}
          accessibilityLabel={
            STRINGS.Send.Send_Label_UserName_Text.accessibilityLabel
          }
        >
          {STRINGS.Send.Send_Label_UserName_Text.label}
        </AppText>
        <AppStack
          widgetId={'Send_Container_Stack_2'}
          style={styles.sendContainerStack2Style}
        >
          <AppColumn
            widgetId={'Send_Container_Column'}
            style={styles.sendContainerColumnStyle}
          />
          <AppRow
            widgetId={'Send_Container_Row'}
            spacing={15}
            style={styles.sendContainerRowStyle}
          >
            <AppImage
              widgetId={'Send_Image_4'}
              source={imageSources.image__n8k9}
              resizeMode={'cover'}
              style={styles.sendImage4Style}
            />
            <AppColumn
              widgetId={'Send_Container_Column_2'}
              style={styles.sendContainerColumn2Style}
            >
              <AppText
                widgetId={'Send_Label_UserName_Text_2'}
                style={[text.label.medium, styles.sendLabelUserNameText2Style]}
                accessibilityLabel={
                  STRINGS.Send.Send_Label_UserName_Text_2.accessibilityLabel
                }
              >
                {STRINGS.Send.Send_Label_UserName_Text_2.label}
              </AppText>
              <AppText
                widgetId={'Send_Label_Text'}
                style={[text.label.medium, styles.sendLabelTextStyle]}
                accessibilityLabel={
                  STRINGS.Send.Send_Label_Text.accessibilityLabel
                }
              >
                {STRINGS.Send.Send_Label_Text.label}
              </AppText>
            </AppColumn>
          </AppRow>
          <AppImage
            widgetId={'Send_Image_5'}
            source={imageSources.image__tqp0}
            style={styles.sendImage5Style}
          />
        </AppStack>
        <AppText
          widgetId={'Send_Label_Price_Text'}
          style={[text.label.medium, styles.sendLabelPriceTextStyle]}
          accessibilityLabel={
            STRINGS.Send.Send_Label_Price_Text.accessibilityLabel
          }
        >
          {STRINGS.Send.Send_Label_Price_Text.label}
        </AppText>
        <AppColumn widgetId={'Send_Divider'} style={styles.sendDividerStyle} />
        <AppColumn
          widgetId={'Send_Container_Column_3'}
          spacing={6}
          style={styles.sendContainerColumn3Style}
        >
          <AppRow
            widgetId={'Send_Container_Row_2'}
            spacing={6}
            style={styles.sendContainerRow2Style}
          >
            <AppColumn
              widgetId={'Send_Container_Column_4'}
              spacing={10}
              style={styles.sendContainerColumn4Style}
            >
              <AppText
                widgetId={'Send_Label_Text_2'}
                numberOfLines={2}
                style={[text.label.medium, styles.sendLabelText2Style]}
                accessibilityLabel={
                  STRINGS.Send.Send_Label_Text_2.accessibilityLabel
                }
              >
                {STRINGS.Send.Send_Label_Text_2.label}
              </AppText>
            </AppColumn>
            <AppColumn
              widgetId={'Send_Container_Column_5'}
              spacing={10}
              style={styles.sendContainerColumn5Style}
            >
              <AppText
                widgetId={'Send_Label_Text_3'}
                numberOfLines={2}
                style={[text.label.medium, styles.sendLabelText3Style]}
                accessibilityLabel={
                  STRINGS.Send.Send_Label_Text_3.accessibilityLabel
                }
              >
                {STRINGS.Send.Send_Label_Text_3.label}
              </AppText>
            </AppColumn>
            <AppColumn
              widgetId={'Send_Container_Column_6'}
              spacing={10}
              style={styles.sendContainerColumn6Style}
            >
              <AppText
                widgetId={'Send_Label_Text_4'}
                numberOfLines={2}
                style={[text.label.medium, styles.sendLabelText4Style]}
                accessibilityLabel={
                  STRINGS.Send.Send_Label_Text_4.accessibilityLabel
                }
              >
                {STRINGS.Send.Send_Label_Text_4.label}
              </AppText>
            </AppColumn>
          </AppRow>
          <AppRow
            widgetId={'Send_Container_Row_3'}
            spacing={6}
            style={styles.sendContainerRow3Style}
          >
            <AppColumn
              widgetId={'Send_Container_Column_7'}
              spacing={10}
              style={styles.sendContainerColumn7Style}
            >
              <AppText
                widgetId={'Send_Label_Text_5'}
                numberOfLines={2}
                style={[text.label.medium, styles.sendLabelText5Style]}
                accessibilityLabel={
                  STRINGS.Send.Send_Label_Text_5.accessibilityLabel
                }
              >
                {STRINGS.Send.Send_Label_Text_5.label}
              </AppText>
            </AppColumn>
            <AppColumn
              widgetId={'Send_Container_Column_8'}
              spacing={10}
              style={styles.sendContainerColumn8Style}
            >
              <AppText
                widgetId={'Send_Label_Text_6'}
                numberOfLines={2}
                style={[text.label.medium, styles.sendLabelText6Style]}
                accessibilityLabel={
                  STRINGS.Send.Send_Label_Text_6.accessibilityLabel
                }
              >
                {STRINGS.Send.Send_Label_Text_6.label}
              </AppText>
            </AppColumn>
            <AppColumn
              widgetId={'Send_Container_Column_9'}
              spacing={10}
              style={styles.sendContainerColumn9Style}
            >
              <AppText
                widgetId={'Send_Label_Text_7'}
                numberOfLines={2}
                style={[text.label.medium, styles.sendLabelText7Style]}
                accessibilityLabel={
                  STRINGS.Send.Send_Label_Text_7.accessibilityLabel
                }
              >
                {STRINGS.Send.Send_Label_Text_7.label}
              </AppText>
            </AppColumn>
          </AppRow>
          <AppRow
            widgetId={'Send_Container_Row_4'}
            spacing={6}
            style={styles.sendContainerRow4Style}
          >
            <AppColumn
              widgetId={'Send_Container_Column_10'}
              spacing={10}
              style={styles.sendContainerColumn10Style}
            >
              <AppText
                widgetId={'Send_Label_Text_8'}
                numberOfLines={2}
                style={[text.label.medium, styles.sendLabelText8Style]}
                accessibilityLabel={
                  STRINGS.Send.Send_Label_Text_8.accessibilityLabel
                }
              >
                {STRINGS.Send.Send_Label_Text_8.label}
              </AppText>
            </AppColumn>
            <AppColumn
              widgetId={'Send_Container_Column_11'}
              spacing={10}
              style={styles.sendContainerColumn11Style}
            >
              <AppText
                widgetId={'Send_Label_Text_9'}
                numberOfLines={2}
                style={[text.label.medium, styles.sendLabelText9Style]}
                accessibilityLabel={
                  STRINGS.Send.Send_Label_Text_9.accessibilityLabel
                }
              >
                {STRINGS.Send.Send_Label_Text_9.label}
              </AppText>
            </AppColumn>
            <AppColumn
              widgetId={'Send_Container_Column_12'}
              spacing={10}
              style={styles.sendContainerColumn12Style}
            >
              <AppText
                widgetId={'Send_Label_Text_10'}
                numberOfLines={2}
                style={[text.label.medium, styles.sendLabelText10Style]}
                accessibilityLabel={
                  STRINGS.Send.Send_Label_Text_10.accessibilityLabel
                }
              >
                {STRINGS.Send.Send_Label_Text_10.label}
              </AppText>
            </AppColumn>
          </AppRow>
          <AppRow
            widgetId={'Send_Container_Row_5'}
            spacing={6}
            style={styles.sendContainerRow5Style}
          >
            <AppColumn
              widgetId={'Send_Container_Column_13'}
              spacing={10}
              style={styles.sendContainerColumn13Style}
            >
              <AppText
                widgetId={'Send_Label_Text_11'}
                numberOfLines={2}
                style={[text.label.medium, styles.sendLabelText11Style]}
                accessibilityLabel={
                  STRINGS.Send.Send_Label_Text_11.accessibilityLabel
                }
              >
                {STRINGS.Send.Send_Label_Text_11.label}
              </AppText>
            </AppColumn>
            <AppColumn
              widgetId={'Send_Container_Column_14'}
              spacing={10}
              style={styles.sendContainerColumn14Style}
            >
              <AppText
                widgetId={'Send_Label_Text_12'}
                numberOfLines={2}
                style={[text.label.medium, styles.sendLabelText12Style]}
                accessibilityLabel={
                  STRINGS.Send.Send_Label_Text_12.accessibilityLabel
                }
              >
                {STRINGS.Send.Send_Label_Text_12.label}
              </AppText>
            </AppColumn>
            <AppColumn
              widgetId={'Send_Container_Column_15'}
              spacing={10}
              style={styles.sendContainerColumn15Style}
            >
              <AppText
                widgetId={'Send_Label_X_Text'}
                style={[text.label.medium, styles.sendLabelXTextStyle]}
                accessibilityLabel={
                  STRINGS.Send.Send_Label_X_Text.accessibilityLabel
                }
              >
                {STRINGS.Send.Send_Label_X_Text.label}
              </AppText>
            </AppColumn>
          </AppRow>
        </AppColumn>
        <AppButton
          widgetId={'Send_Cta_Send_Button'}
          onPress={() => {
            onPressSendsendCtaSendButton({});
          }}
          style={styles.sendCtaSendButtonStyle}
          textStyle={[
            text.label.medium,
            sharedStyles.codeCtaContinueButtonText,
          ]}
          accessibilityLabel={
            STRINGS.Send.Send_Cta_Send_Button.accessibilityLabel
          }
          label={STRINGS.Send.Send_Cta_Send_Button.label}
        />
      </AppStack>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  sendLabelUserNameTextStyle: {
    top: '19.1%',
    lineHeight: 44,
    position: 'absolute',
    fontSize: 35,
    left: '5.3%',
    fontWeight: 500,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    color: '#151521',
    width: 104,
    letterSpacing: -0.7000000000000001,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerStack2Style: {
    height: '8.1%',
    position: 'absolute',
    width: '89.3%',
    top: '28.2%',
    left: '5.3%',
  },
  sendContainerColumnStyle: {
    borderWidth: 0.5,
    top: '0%',
    borderColor: '#d0d0d3',
    borderRadius: 32,
    position: 'absolute',
    width: '100%',
    left: '0%',
    height: '100%',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  sendContainerRowStyle: {
    top: '18.2%',
    position: 'absolute',
    height: '62%',
    width: '50.1%',
    left: '6%',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  sendImage4Style: {
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: 500,
    flexBasis: 'auto',
  },
  sendContainerColumn2Style: {
    width: 113,
    alignItems: 'center',
    height: 41,
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  sendLabelUserNameText2Style: {
    lineHeight: 19,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    fontSize: 15,
    fontWeight: 500,
    color: '#1a1d25',
    width: 111,
    letterSpacing: -0.3,
    textAlignVertical: 'center',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendLabelTextStyle: {
    textAlignVertical: 'center',
    marginTop: 7,
    fontSize: 12,
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    color: 'rgba(21,21,33,0.5)',
    letterSpacing: -0.24,
    lineHeight: 15,
    width: 119,
    fontWeight: 400,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendImage5Style: {
    top: '40.9%',
    width: '3.8%',
    height: '10.8%',
    position: 'absolute',
    left: '90.4%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  sendLabelPriceTextStyle: {
    fontSize: 35,
    color: '#151521',
    left: '30.1%',
    lineHeight: 43,
    fontWeight: 500,
    position: 'absolute',
    letterSpacing: 1.05,
    fontFamily: 'Montserrat-500-normal',
    width: 167,
    top: '44%',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendDividerStyle: {
    top: '43.7%',
    marginBottom: 0,
    marginTop: 0,
    backgroundColor: '#151521',
    height: '5.4%',
    marginRight: 0,
    marginLeft: 0,
    width: '0.5%',
    left: '54.7%',
    position: 'absolute',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  sendContainerColumn3Style: {
    alignItems: 'center',
    top: '56.5%',
    alignContent: 'center',
    height: '31.8%',
    position: 'absolute',
    left: '5.3%',
    width: '89.6%',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  sendContainerRow2Style: {
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  sendContainerColumn4Style: {
    height: 60,
    backgroundColor: '#e9e6f7',
    paddingBottom: 16,
    paddingTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    flex: 1,
    paddingLeft: 19,
    paddingRight: 19,
    flexShrink: 1,
  },
  sendLabelText2Style: {
    fontWeight: 500,
    color: '#151521',
    letterSpacing: -0.3,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    fontSize: 15,
    lineHeight: 19,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerColumn5Style: {
    paddingTop: 16,
    borderRadius: 32,
    flex: 1,
    paddingBottom: 16,
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#e9e6f7',
    paddingLeft: 19,
    alignItems: 'center',
    paddingRight: 19,
    flexShrink: 1,
  },
  sendLabelText3Style: {
    lineHeight: 19,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    fontSize: 15,
    color: '#151521',
    letterSpacing: -0.3,
    fontWeight: 500,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerColumn6Style: {
    justifyContent: 'center',
    paddingLeft: 19,
    backgroundColor: '#e9e6f7',
    flex: 1,
    paddingTop: 16,
    alignItems: 'center',
    paddingRight: 19,
    height: 60,
    borderRadius: 32,
    paddingBottom: 16,
    flexShrink: 1,
  },
  sendLabelText4Style: {
    fontWeight: 500,
    lineHeight: 19,
    color: '#151521',
    fontSize: 15,
    letterSpacing: -0.3,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerRow3Style: {
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  sendContainerColumn7Style: {
    alignItems: 'center',
    paddingRight: 19,
    borderRadius: 32,
    justifyContent: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    flex: 1,
    paddingLeft: 19,
    height: 60,
    backgroundColor: '#e9e6f7',
    flexShrink: 1,
  },
  sendLabelText5Style: {
    fontWeight: 500,
    letterSpacing: -0.3,
    fontSize: 15,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    lineHeight: 19,
    color: '#151521',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerColumn8Style: {
    justifyContent: 'center',
    backgroundColor: '#e9e6f7',
    borderRadius: 32,
    alignItems: 'center',
    paddingRight: 19,
    paddingBottom: 16,
    paddingTop: 16,
    height: 60,
    paddingLeft: 19,
    flex: 1,
    flexShrink: 1,
  },
  sendLabelText6Style: {
    fontWeight: 500,
    color: '#151521',
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    lineHeight: 19,
    fontSize: 15,
    letterSpacing: -0.3,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerColumn9Style: {
    height: 60,
    justifyContent: 'center',
    paddingBottom: 16,
    paddingRight: 19,
    borderRadius: 32,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e9e6f7',
    paddingLeft: 19,
    paddingTop: 16,
    flexShrink: 1,
  },
  sendLabelText7Style: {
    letterSpacing: -0.3,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    fontSize: 15,
    color: '#151521',
    lineHeight: 19,
    fontWeight: 500,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerRow4Style: {
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  sendContainerColumn10Style: {
    paddingBottom: 16,
    borderRadius: 32,
    flex: 1,
    paddingTop: 16,
    height: 60,
    alignItems: 'center',
    paddingLeft: 19,
    justifyContent: 'center',
    backgroundColor: '#e9e6f7',
    paddingRight: 19,
    flexShrink: 1,
  },
  sendLabelText8Style: {
    letterSpacing: -0.3,
    color: '#151521',
    fontWeight: 500,
    lineHeight: 19,
    fontSize: 15,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerColumn11Style: {
    borderRadius: 32,
    paddingLeft: 19,
    backgroundColor: '#e9e6f7',
    alignItems: 'center',
    flex: 1,
    paddingBottom: 16,
    height: 60,
    paddingTop: 16,
    paddingRight: 19,
    justifyContent: 'center',
    flexShrink: 1,
  },
  sendLabelText9Style: {
    fontWeight: 500,
    color: '#151521',
    letterSpacing: -0.3,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    fontSize: 15,
    lineHeight: 19,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerColumn12Style: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 16,
    paddingRight: 19,
    justifyContent: 'center',
    borderRadius: 32,
    paddingLeft: 19,
    paddingBottom: 16,
    backgroundColor: '#e9e6f7',
    height: 60,
    flexShrink: 1,
  },
  sendLabelText10Style: {
    lineHeight: 19,
    fontSize: 15,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    letterSpacing: -0.3,
    fontWeight: 500,
    color: '#151521',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerRow5Style: {
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  sendContainerColumn13Style: {
    paddingLeft: 19,
    alignItems: 'center',
    paddingRight: 19,
    paddingTop: 16,
    height: 60,
    paddingBottom: 16,
    backgroundColor: '#e9e6f7',
    flex: 1,
    justifyContent: 'center',
    borderRadius: 32,
    flexShrink: 1,
  },
  sendLabelText11Style: {
    fontSize: 20,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    letterSpacing: -0.4,
    lineHeight: 25,
    color: '#151521',
    fontWeight: 500,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerColumn14Style: {
    paddingBottom: 16,
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#e9e6f7',
    paddingRight: 19,
    paddingTop: 16,
    borderRadius: 32,
    paddingLeft: 19,
    flexShrink: 1,
  },
  sendLabelText12Style: {
    fontSize: 15,
    letterSpacing: -0.3,
    lineHeight: 19,
    fontWeight: 500,
    color: '#151521',
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendContainerColumn15Style: {
    paddingTop: 16,
    borderRadius: 32,
    justifyContent: 'center',
    paddingBottom: 16,
    paddingRight: 19,
    paddingLeft: 19,
    backgroundColor: '#e9e6f7',
    height: 60,
    flex: 1,
    alignItems: 'center',
    flexShrink: 1,
  },
  sendLabelXTextStyle: {
    fontSize: 15,
    lineHeight: 19,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    width: 18,
    letterSpacing: -0.3,
    fontWeight: 500,
    color: '#151521',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  sendCtaSendButtonStyle: {
    top: '91.4%',
    height: '6.2%',
    width: '89.3%',
    borderRadius: 32,
    paddingLeft: 19,
    paddingTop: 14,
    left: '5.3%',
    lineHeight: 17.639999389648438,
    position: 'absolute',
    textAlign: 'left',
    paddingBottom: 14,
    backgroundColor: '#bfb7fd',
    paddingRight: 19,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
});

export default Send;

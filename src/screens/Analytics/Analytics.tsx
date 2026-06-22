import React from 'react';
import {
  AppAppBar,
  AppButton,
  AppColumn,
  AppContainer,
  AppImage,
  AppListTile,
  AppRow,
  AppStack,
  AppText,
} from '@/components/shared';
import { useNavigation } from '@react-navigation/native';

import { color, imageSources, space, component, text, radius } from '@/assets';

import { ASTabs } from '@/components';

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

const Analytics: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-912396'}
      testID={'3f0755d5-b0c5-4610-87b9-30fa5b16f843'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'Analytics_AppBar_SyntheticAppBar_AppBar'}
        style={sharedStyles.analyticsAppBarSyntheticAppBarAppBar}
      >
        <AppRow
          widgetId={'Analytics_Container_AppBarCustomCentre_Row'}
          spacing={space['2']}
          style={sharedStyles.analyticsContainerAppBarCustomCentreRow}
        >
          <AppStack
            widgetId={'Analytics_Container_Stack'}
            style={sharedStyles.analyticsContainerStack}
          >
            <AppImage
              widgetId={'Analytics_Image'}
              resizeMode={'stretch'}
              source={imageSources.image__w0df}
              style={sharedStyles.analyticsImage}
            />
            <AppImage
              widgetId={'Analytics_Image_2'}
              source={imageSources.image__qyii}
              style={sharedStyles.analyticsImage2}
            />
          </AppStack>
          <AppImage
            widgetId={'Analytics_Image_3'}
            source={imageSources.image__i4fpq}
            resizeMode={'cover'}
            style={sharedStyles.analyticsImage3}
          />
        </AppRow>
      </AppAppBar>
      <AppImage
        widgetId={'Analytics_Background_Image'}
        source={imageSources.image__hrso}
        resizeMode={'cover'}
        style={sharedStyles.analyticsBackgroundImage}
      />
      <AppStack
        widgetId={'Analytics_Container_Analytics_Stack'}
        style={sharedStyles.analyticsContainerAnalyticsStack}
      >
        <AppImage
          widgetId={'Analytics_Background_Image_2'}
          source={imageSources.image__mcdc0}
          style={styles.analyticsBackgroundImage2Style}
        />
        <AppText
          widgetId={'Analytics_Label_Text'}
          numberOfLines={2}
          style={[text.label.medium, styles.analyticsLabelTextStyle]}
          accessibilityLabel={
            STRINGS.Analytics.Analytics_Label_Text.accessibilityLabel
          }
        >
          {STRINGS.Analytics.Analytics_Label_Text.label}
        </AppText>
        <AppColumn
          widgetId={'Analytics_Container_Column'}
          spacing={10}
          style={styles.analyticsContainerColumnStyle}
        >
          <AppColumn
            widgetId={'Analytics_Container_Column_2'}
            spacing={10}
            style={styles.analyticsContainerColumn2Style}
          >
            <AppText
              widgetId={'Analytics_Label_TotalIncome_Text'}
              style={[
                text.label.medium,
                styles.analyticsLabelTotalIncomeTextStyle,
              ]}
              accessibilityLabel={
                STRINGS.Analytics.Analytics_Label_TotalIncome_Text
                  .accessibilityLabel
              }
            >
              {STRINGS.Analytics.Analytics_Label_TotalIncome_Text.label}
            </AppText>
            <AppText
              widgetId={'Analytics_Label_Price_Text'}
              style={[text.label.medium, styles.analyticsLabelPriceTextStyle]}
              accessibilityLabel={
                STRINGS.Analytics.Analytics_Label_Price_Text.accessibilityLabel
              }
            >
              {STRINGS.Analytics.Analytics_Label_Price_Text.label}
            </AppText>
          </AppColumn>
        </AppColumn>
        <AppColumn
          widgetId={'Analytics_Container_Column_3'}
          spacing={10}
          style={styles.analyticsContainerColumn3Style}
        >
          <AppColumn
            widgetId={'Analytics_Container_Column_4'}
            spacing={10}
            style={styles.analyticsContainerColumn4Style}
          >
            <AppText
              widgetId={'Analytics_Label_TotalExpenses_Text'}
              style={[
                text.label.medium,
                styles.analyticsLabelTotalExpensesTextStyle,
              ]}
              accessibilityLabel={
                STRINGS.Analytics.Analytics_Label_TotalExpenses_Text
                  .accessibilityLabel
              }
            >
              {STRINGS.Analytics.Analytics_Label_TotalExpenses_Text.label}
            </AppText>
            <AppText
              widgetId={'Analytics_Label_Price_Text_2'}
              style={[text.label.medium, styles.analyticsLabelPriceText2Style]}
              accessibilityLabel={
                STRINGS.Analytics.Analytics_Label_Price_Text_2
                  .accessibilityLabel
              }
            >
              {STRINGS.Analytics.Analytics_Label_Price_Text_2.label}
            </AppText>
          </AppColumn>
        </AppColumn>
        <AppRow
          widgetId={'Analytics_Container_Row'}
          spacing={space['2']}
          style={styles.analyticsContainerRowStyle}
        >
          <AppRow
            widgetId={'Analytics_Container_Row_2'}
            spacing={20}
            style={sharedStyles.analyticsContainerRow2}
          >
            <AppText
              widgetId={'Analytics_Label_UserName_Text'}
              numberOfLines={0}
              style={[
                text.label.medium,
                styles.analyticsLabelUserNameTextStyle,
              ]}
              accessibilityLabel={
                STRINGS.Analytics.Analytics_Label_UserName_Text
                  .accessibilityLabel
              }
            >
              {STRINGS.Analytics.Analytics_Label_UserName_Text.label}
            </AppText>
            <AppText
              widgetId={'Analytics_Label_UserName_Text_2'}
              numberOfLines={0}
              style={[
                text.label.medium,
                styles.analyticsLabelUserNameText2Style,
              ]}
              accessibilityLabel={
                STRINGS.Analytics.Analytics_Label_UserName_Text_2
                  .accessibilityLabel
              }
            >
              {STRINGS.Analytics.Analytics_Label_UserName_Text_2.label}
            </AppText>
          </AppRow>
          <AppButton
            widgetId={'Analytics_Cta_Action_Button'}
            accessibilityLabel={''}
            style={sharedStyles.analyticsCtaActionButton}
            textStyle={[
              text.label.medium,
              sharedStyles.analyticsCtaActionButtonText,
            ]}
            label={''}
          />
        </AppRow>
        <ASTabs
          activeTabTextColor={color.text.primary}
          activeTabBorderColor={color.brand.primary}
          tabTitleOffset={space['2']}
          contentOffset={1}
          enableShadow={true}
          name={'Analytics_Container_Tabs'}
          style={styles.analyticsContainerTabsStyle}
          tabHeaderStyle={styles.analyticsContainerTabsTabHeaderStyle}
          tabViewStyle={styles.analyticsContainerTabsTabViewStyle}
          iconStyle={styles.analyticsContainerTabsIconStyle}
          activeTabTextTypography={[
            text.heading.small,
            sharedStyles.analyticsContainerTabsActiveTabTextTypography,
          ]}
          tabHeaderTypography={[
            text.heading.small,
            sharedStyles.analyticsContainerTabsActiveTabTextTypography,
          ]}
          tabHeaderContainerStyle={
            styles.analyticsContainerTabsTabHeaderContainerStyle
          }
          testId={'Analytics_Container_Tabs'}
        />
        <AppColumn
          widgetId={'Analytics_Container_Column_5'}
          style={sharedStyles.analyticsContainerColumn5}
        >
          <AppListTile
            widgetId={'Analytics_Item_ListItem'}
            titleStyle={{
              color: '#151521',
              fontSize: 35,
              textAlign: 'left',
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
              lineHeight: 44.099998474121094,
              letterSpacing: -0.7000000000000001,
            }}
            trailing={
              'https://content.oneapi.world/apps/87978af7-5590-4a29-b207-cc923b0707bc/_app/af186513-26ab-4868-82fb-cc7d42f14184-1_2438.png'
            }
            style={sharedStyles.analyticsItemListItem}
            title={STRINGS.Analytics.Analytics_Item_ListItem.title}
          />
        </AppColumn>
      </AppStack>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  analyticsBackgroundImage2Style: {
    left: '26.1%',
    height: '28.6%',
    top: '55.3%',
    position: 'absolute',
    width: '62%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  analyticsLabelTextStyle: {
    lineHeight: 36,
    top: '64.2%',
    fontFamily: 'Urbanist-600-normal',
    fontSize: 30,
    left: '42.9%',
    fontWeight: 600,
    color: '#151521',
    position: 'absolute',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  analyticsContainerColumnStyle: {
    height: '10.8%',
    borderRadius: 32,
    paddingLeft: 27,
    paddingTop: 16,
    left: '5.3%',
    paddingRight: 27,
    alignItems: 'center',
    position: 'absolute',
    paddingBottom: 16,
    backgroundColor: '#e9e6f7',
    width: '43.5%',
    top: '28.2%',
    justifyContent: 'center',
    flexShrink: 1,
  },
  analyticsContainerColumn2Style: {
    alignSelf: 'stretch',
    width: '95.4%',
    height: 50,
    justifyContent: 'center',
    flexShrink: 1,
    alignItems: 'stretch',
  },
  analyticsLabelTotalIncomeTextStyle: {
    letterSpacing: -0.24,
    alignSelf: 'flex-start',
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    width: 76,
    color: 'rgba(21,21,33,0.5)',
    fontSize: 12,
    lineHeight: 15,
    fontWeight: 400,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  analyticsLabelPriceTextStyle: {
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    color: '#000000',
    width: 114,
    letterSpacing: -0.4,
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 500,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  analyticsContainerColumn3Style: {
    paddingTop: 16,
    backgroundColor: '#e9e6f7',
    paddingRight: 27,
    paddingBottom: 16,
    width: '43.5%',
    left: '51.2%',
    position: 'absolute',
    top: '28.2%',
    borderRadius: 32,
    paddingLeft: 27,
    justifyContent: 'center',
    height: '10.8%',
    flexShrink: 1,
    alignItems: 'stretch',
  },
  analyticsContainerColumn4Style: {
    justifyContent: 'center',
    height: 50,
    alignSelf: 'flex-start',
    flexShrink: 1,
    alignItems: 'stretch',
  },
  analyticsLabelTotalExpensesTextStyle: {
    fontWeight: 400,
    color: 'rgba(21,21,33,0.5)',
    fontSize: 12,
    letterSpacing: -0.24,
    lineHeight: 15,
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    width: 88,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  analyticsLabelPriceText2Style: {
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: -0.4,
    width: 71,
    color: '#000000',
    lineHeight: 25,
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  analyticsContainerRowStyle: {
    position: 'absolute',
    height: '5.5%',
    top: '42.7%',
    justifyContent: 'space-between',
    width: '89.3%',
    left: '5.3%',
    alignItems: 'center',
    flexShrink: 1,
  },
  analyticsLabelUserNameTextStyle: {
    fontFamily: 'Plus-Jakarta-Sans-500-normal',
    fontWeight: 500,
    fontSize: 12,
    letterSpacing: -0.24,
    color: '#151521',
    lineHeight: 15,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  analyticsLabelUserNameText2Style: {
    lineHeight: 15,
    fontFamily: 'Plus-Jakarta-Sans-400-normal',
    color: 'rgba(21,21,33,0.3)',
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: -0.24,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  analyticsContainerTabsStyle: {
    width: '89.3%',
    height: '4.8%',
    left: '5.3%',
    top: '84.4%',
    flexDirection: 'column',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  analyticsContainerTabsTabHeaderStyle: {
    borderTopWidth: 0,
    borderStyle: 'solid',
    backgroundColor: color.surface.default,
    width: '100%',
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    borderRadius: radius.sm,
    borderRightWidth: 0,
    justifyContent: 'center',
    height: 40,
    alignItems: 'center',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  analyticsContainerTabsTabViewStyle: { flex: 1, borderStyle: 'solid' },
  analyticsContainerTabsIconStyle: {
    iconSize: component.icon.size.md,
    color: color.brand.primary,
  },
  analyticsContainerTabsTabHeaderContainerStyle: {
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
});

export default Analytics;

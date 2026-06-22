import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import en from './locales/en.json';

/**
 * Locales bundled into the app. When you add a new translation file under
 * `./locales/`, import it here and add an entry to both `resources` and
 * `SUPPORTED_LOCALES` so the detector can match the device language.
 */
const resources = {
  en: { translation: en },
};

export const SUPPORTED_LOCALES = Object.keys(resources);
const FALLBACK_LOCALE = 'en';
/**
 * Only set when the user explicitly chose a language via `setLanguage()`.
 * Absent = follow the device language. This is the same pattern Apple/Google
 * apps use: the OS language is the default, but an in-app override wins.
 */
const OVERRIDE_KEY = '@app/locale_override';

/**
 * Resolve the best language tag from the device's preferred locales.
 * Uses `react-native-localize` (requires a native rebuild).
 */
const pickBestLanguage = (): string => {
  const best = RNLocalize.findBestLanguageTag(SUPPORTED_LOCALES);
  return best?.languageTag ?? FALLBACK_LOCALE;
};

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => undefined,
  detect: async (callback) => {
    try {
      const overridden = await AsyncStorage.getItem(OVERRIDE_KEY);
      if (overridden && SUPPORTED_LOCALES.includes(overridden)) {
        callback(overridden);
        return;
      }
    } catch {
      // AsyncStorage may fail on first-run; fall through to device locale.
    }
    callback(pickBestLanguage());
  },
  // No-op: we deliberately do NOT persist the auto-detected language so the
  // app keeps tracking the OS language. Persistence only happens through
  // the explicit `setLanguage()` / `resetLanguage()` helpers below.
  cacheUserLanguage: () => undefined,
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: FALLBACK_LOCALE,
    interpolation: { escapeValue: false },
    keySeparator: '.',
    nsSeparator: false,
    compatibilityJSON: 'v4',
  });

/**
 * Programmatically switch the active language. Persists the choice so it
 * survives app restarts and wins over the device language.
 */
export const setLanguage = async (lang: string): Promise<unknown> => {
  try {
    await AsyncStorage.setItem(OVERRIDE_KEY, lang);
  } catch {
    // Persistence failure is non-fatal — the language is still active for this session.
  }
  return i18n.changeLanguage(lang);
};

/**
 * Clear the user override so the app tracks the OS language again on the
 * next launch (and immediately on the current session).
 */
export const resetLanguage = async (): Promise<unknown> => {
  try {
    await AsyncStorage.removeItem(OVERRIDE_KEY);
  } catch {
    // ignore
  }
  return i18n.changeLanguage(pickBestLanguage());
};

export default i18n;

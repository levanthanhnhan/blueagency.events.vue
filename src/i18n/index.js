import { createI18n } from "vue-i18n";
import vi from "./locales/vi.json";

export const i18n = createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: { vi },
  runtimeOnly: false,
});

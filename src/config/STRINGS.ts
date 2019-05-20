import { Localization } from "expo";
import i18n from "i18n-js";

const en = {
  LOADING: "LOADING...",
  FEATURES: "Features"
};

const ko = {
  LOADING: "로딩중...",
  FEATURES: "주요기능"
};

i18n.fallbacks = true;
i18n.translations = { en, ko };
i18n.locale = Localization.locale;

export const TEXT = i18n;

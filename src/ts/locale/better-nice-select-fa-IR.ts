/*
 *  Better Nice Select Persian (Iran) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const FA = {
    formatSearch(): string {
        return "جستجو کردن...";
    },
    formatHelpForTagging(): string {
        return "برای ایجاد تگ های خود، روی فیلد ورودی تمرکز کنید و یکی از دکمه های زیر را برای ایجاد شیء کلیک کنید:";
    },
    formatAlertOptiongroups(): string {
        return "لطفاً صبر کنید...\nگروه‌های گزینه همچنان در حال بارگیری هستند...";
    },
    formatLoadingMessage(): string {
        return "بارگذاری";
    },
    formatCheckingMessage(): string {
        return "چک کردن";
    }
}

LOCALISATION['fa-IR'] = LOCALISATION['fa'] = FA;
DEFAULTS.locale = "fa-IR";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
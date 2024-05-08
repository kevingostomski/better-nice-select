/*
 *  Better Nice Select Arabic (Saudi Arabia) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const AR = {
    formatSearch(): string {
        return "يبحث...";
    },
    formatHelpForTagging(): string {
        return "لإنشاء العلامات الخاصة بك ، ركز على حقل الإدخال وانقر فوق أحد الأزرار التالية لإنشاء الكائن:";
    },
    formatAlertOptiongroups(): string {
        return "الرجاء الانتظار...\nلا يزال يتم تحميل مجموعات الخيارات...";
    },
    formatLoadingMessage(): string {
        return "تحميل";
    },
    formatCheckingMessage(): string {
        return "تدقيق";
    }
}

LOCALISATION['ar-SA'] = LOCALISATION['ar'] = AR;
DEFAULTS.locale = "ar-SA";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
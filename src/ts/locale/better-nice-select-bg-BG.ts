/*
 *  Better Nice Select Bulgarian (Bulgaria) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const BG = {
    formatSearch(): string {
        return "Търсене...";
    },
    formatHelpForTagging(): string {
        return "За да създадете свои собствени тагове, фокусирайте се върху полето за въвеждане и щракнете върху един от следните бутони, за да създадете обекта:";
    },
    formatAlertOptiongroups(): string {
        return "Моля, изчакайте...\nГрупите опции все още се зареждат...";
    },
    formatLoadingMessage(): string {
        return "Зареждане";
    },
    formatCheckingMessage(): string {
        return "Проверка";
    }
}

LOCALISATION['bg-BG'] = LOCALISATION['bg'] = BG;
DEFAULTS.locale = "bg-BG";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
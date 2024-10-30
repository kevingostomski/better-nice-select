/*
 *  Better Nice Select Russian (Russia) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import { LOCALISATION, DEFAULTS, BetterNiceSelect } from "../better-nice-select"


const RU = {
    formatSearch(): string {
        return "Поиск...";
    },
    formatHelpForTagging(): string {
        return "Чтобы создать собственные теги, сфокусируйтесь на поле ввода и нажмите одну из следующих кнопок, чтобы создать объект:";
    },
    formatAlertOptiongroups(): string {
        return "Пожалуйста, подождите...\nГруппы опций все еще загружаются...";
    },
    formatLoadingMessage(): string {
        return "Загрузка";
    },
    formatCheckingMessage(): string {
        return "Проверка";
    }
}

LOCALISATION['ru-RU'] = LOCALISATION['ru'] = RU;
DEFAULTS.locale = "ru-RU";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
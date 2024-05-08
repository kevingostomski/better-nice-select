/*
 *  Better Nice Select Czech (Czech Republic) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const CS = {
    formatSearch(): string {
        return "Vyhledávání...";
    },
    formatHelpForTagging(): string {
        return "Chcete-li vytvořit vlastní značky, zaměřte se na vstupní pole a kliknutím na jedno z následujících tlačítek vytvořte objekt:";
    },
    formatAlertOptiongroups(): string {
        return "Čekejte prosím...\nSkupiny možností se stále načítají...";
    },
    formatLoadingMessage(): string {
        return "načítání";
    },
    formatCheckingMessage(): string {
        return "Kontrola";
    }
}

LOCALISATION['cs-CZ'] = LOCALISATION['cs'] = CS;
DEFAULTS.locale = "cs-CZ";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
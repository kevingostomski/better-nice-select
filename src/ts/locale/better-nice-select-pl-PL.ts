/*
 *  Better Nice Select Polish (Poland) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const PL = {
    formatSearch(): string {
        return "Szukaj...";
    },
    formatHelpForTagging(): string {
        return "Aby utworzyć własne tagi, skup się na polu wejściowym i kliknij jeden z poniższych przycisków, aby utworzyć obiekt:";
    },
    formatAlertOptiongroups(): string {
        return "Proszę czekać...\nGrupy opcji są nadal ładowane...";
    },   
    formatLoadingMessage(): string {
        return "Ładowanie";
    },
    formatCheckingMessage(): string {
        return "Kontrola";
    }
}

LOCALISATION['pl-PL'] = LOCALISATION['pl'] = PL;
DEFAULTS.locale = "pl-PL";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
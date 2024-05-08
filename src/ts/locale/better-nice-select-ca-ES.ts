/*
 *  Better Nice Select Catalan (Spain) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const CA = {
    formatSearch(): string {
        return "Cerca...";
    },
    formatHelpForTagging(): string {
        return "Per crear les vostres pròpies etiquetes, centreu-vos en el camp d'entrada i feu clic en un dels botons següents per crear l'objecte:";
    },
    formatAlertOptiongroups(): string {
        return "Espereu...\nEls grups d'opcions encara s'estan carregant...";
    },
    formatLoadingMessage(): string {
        return "Carregant";
    },
    formatCheckingMessage(): string {
        return "Comprovació";
    }
}

LOCALISATION['ca-ES'] = LOCALISATION['ca'] = CA;
DEFAULTS.locale = "ca-ES";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
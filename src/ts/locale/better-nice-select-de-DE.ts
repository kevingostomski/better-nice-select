/*
 *  Better Nice Select German (Germany) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const DE = {
    formatSearch(): string {
        return "Suchen...";
    },
    formatHelpForTagging(): string {
        return "Um eigene Tags zu erstellen, fokussieren Sie das Eingabefeld und klicken Sie einen der folgenden Tasten um das Objekt zu erstellen:";
    },
    formatAlertOptiongroups(): string {
        return "Bitte warten...\nDie Optionsgruppen werden noch geladen...";
    },
    formatLoadingMessage(): string {
        return "Wird geladen";
    },
    formatCheckingMessage(): string {
        return "Wird überprüft";
    }
}

LOCALISATION['de-DE'] = LOCALISATION['de'] = DE;
DEFAULTS.locale = "de-DE";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
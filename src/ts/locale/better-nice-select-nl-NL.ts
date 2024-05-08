/*
 *  Better Nice Select Dutch (Netherlands) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const NL = {
    formatSearch(): string {
        return "Zoekopdracht...";
    },
    formatHelpForTagging(): string {
        return "Om uw eigen tags te maken, focust u zich op het invoerveld en klikt u op een van de volgende knoppen om het object te maken:";
    },
    formatAlertOptiongroups(): string {
        return "Een ogenblik geduld...\nDe optiegroepen worden nog steeds geladen...";
    },
    formatLoadingMessage(): string {
        return "Bezig met laden";
    },
    formatCheckingMessage(): string {
        return "Controleren";
    }
}

LOCALISATION['nl-NL'] = LOCALISATION['nl'] = NL;
DEFAULTS.locale = "nl-NL";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
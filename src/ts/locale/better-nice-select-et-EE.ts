/*
 *  Better Nice Select Estonian (Estonia) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const ET = {
    formatSearch(): string {
        return "Otsing...";
    },
    formatHelpForTagging(): string {
        return "Oma siltide loomiseks keskenduge sisestusväljale ja klõpsake objekti loomiseks ühte järgmistest nuppudest:";
    },
    formatAlertOptiongroups(): string {
        return "Palun oodake...\nValikurühmade laadimine alles käib...";
    },
    formatLoadingMessage(): string {
        return "Laadimine";
    },
    formatCheckingMessage(): string {
        return "Kontrollimine";
    }
}

LOCALISATION['et-EE'] = LOCALISATION['et'] = ET;
DEFAULTS.locale = "et-EE";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
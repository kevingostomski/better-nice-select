/*
 *  Better Nice Select Finnish (Finland) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import { LOCALISATION, DEFAULTS, BetterNiceSelect } from "../better-nice-select"


const FI = {
    formatSearch(): string {
        return "Hae...";
    },
    formatHelpForTagging(): string {
        return "Jos haluat luoda omia tunnisteita, keskity syöttökenttään ja luo objekti napsauttamalla jotakin seuraavista painikkeista:";
    },
    formatAlertOptiongroups(): string {
        return "Odota...\nVaihtoehtoryhmiä ladataan edelleen...";
    },
    formatLoadingMessage(): string {
        return "Ladataan";
    },
    formatCheckingMessage(): string {
        return "Tarkistetaan";
    }
}

LOCALISATION['fi-FI'] = LOCALISATION['fi'] = FI;
DEFAULTS.locale = "fi-FI";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
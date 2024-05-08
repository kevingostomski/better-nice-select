/*
 *  Better Nice Select Afrikaans (South Africa) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const AF = {
    formatSearch(): string {
        return "Soek...";
    },
    formatHelpForTagging(): string {
        return "Om jou eie merkers te skep, fokus op die invoerveld en klik op een van die volgende knoppies om die voorwerp te skep:";
    },
    formatAlertOptiongroups(): string {
        return "Wag asseblief...\nDie opsiegroepe word steeds gelaai...";
    },
    formatLoadingMessage(): string {
        return "Laai tans";
    },
    formatCheckingMessage(): string {
        return "Nagaan";
    }
}

LOCALISATION['af-ZA'] = LOCALISATION['af'] = AF;
DEFAULTS.locale = "af-ZA";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
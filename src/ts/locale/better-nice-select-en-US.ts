/*
 *  Better Nice Select English (United States) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const EN = {
    formatSearch(): string {
        return "Search..."
    },
    formatHelpForTagging(): string {
        return "To create your own tags, focus on the input field and click one of the following buttons to create the object:";
    },
    formatAlertOptiongroups(): string {
        return "Please wait...\nThe option groups are still getting loaded...";
    },
    formatLoadingMessage(): string {
        return "Loading";
    },
    formatCheckingMessage(): string {
        return "Checking";
    }
}

LOCALISATION['en-US'] = LOCALISATION['en'] = EN;
DEFAULTS.locale = "en-US";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
/*
 *  Better Nice Select Italian (Italy) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const IT = {
    formatSearch(): string {
        return "Ricerca...";
    },
    formatHelpForTagging(): string {
        return "Per creare i tuoi tag, concentrati sul campo di input e fai clic su uno dei seguenti pulsanti per creare l'oggetto:";
    },
    formatAlertOptiongroups(): string {
        return "Attendere prego...\nI gruppi di opzioni sono ancora in fase di caricamento...";
    },
    formatLoadingMessage(): string {
        return "Caricamento";
    },
    formatCheckingMessage(): string {
        return "Controllo";
    }
}

LOCALISATION['it-IT'] = LOCALISATION['it'] = IT;
DEFAULTS.locale = "it-IT";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
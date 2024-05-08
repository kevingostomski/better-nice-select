/*
 *  Better Nice Select Romanian (Romania) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const RO = {
    formatSearch(): string {
        return "Căutare...";
    },
    formatHelpForTagging(): string {
        return "Pentru a vă crea propriile etichete, concentrați-vă pe câmpul de introducere și faceți clic pe unul dintre următoarele butoane pentru a crea obiectul:";
    },
    formatAlertOptiongroups(): string {
        return "Vă rugăm să așteptați...\nGrupurile de opțiuni încă se încarcă...";
    },
    formatLoadingMessage(): string {
        return "Se încarcă";
    },
    formatCheckingMessage(): string {
        return "Control";
    }
}

LOCALISATION['ro-RO'] = LOCALISATION['ro'] = RO;
DEFAULTS.locale = "ro-RO";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
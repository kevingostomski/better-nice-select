/*
 *  Better Nice Select Spanish (Spain, International Sort) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const ES = {
    formatSearch(): string {
        return "Buscar...";
    },
    formatHelpForTagging(): string {
        return "Para crear sus propias etiquetas, céntrese en el campo de entrada y haga clic en uno de los siguientes botones para crear el objeto:";
    },
    formatAlertOptiongroups(): string {
        return "Espere...\nLos grupos de opciones aún se están cargando...";
    },
    formatLoadingMessage(): string {
        return "Cargando";
    },
    formatCheckingMessage(): string {
        return "Comprobación";
    }
}

LOCALISATION['es-ES'] = LOCALISATION['es'] = ES;
DEFAULTS.locale = "es-ES";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
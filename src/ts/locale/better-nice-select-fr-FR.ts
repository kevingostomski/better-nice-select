/*
 *  Better Nice Select French (France) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const FR = {
    formatSearch(): string {
        return "Recherche...";
    },
    formatHelpForTagging(): string {
        return "Pour créer vos propres balises, concentrez-vous sur le champ de saisie et cliquez sur l'un des boutons suivants pour créer l'objet:";
    },
    formatAlertOptiongroups(): string {
        return "Veuillez patienter...\nLes groupes d'options sont toujours en cours de chargement...";
    },
    formatLoadingMessage(): string {
        return "Chargement";
    },
    formatCheckingMessage(): string {
        return "Vérification";
    }
}

LOCALISATION['fr-FR'] = LOCALISATION['fr'] = FR;
DEFAULTS.locale = "fr-FR";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
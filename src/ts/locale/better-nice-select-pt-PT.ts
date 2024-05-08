/*
 *  Better Nice Select Portuguese (Portugal) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const PT = {
    formatSearch(): string {
        return "Procurar...";
    },
    formatHelpForTagging(): string {
        return "Para criar suas próprias tags, concentre-se no campo de entrada e clique em um dos seguintes botões para criar o objeto:";
    },
    formatAlertOptiongroups(): string {
        return "Aguarde...\nOs grupos de opções ainda estão sendo carregados...";
    },
    formatLoadingMessage(): string {
        return "Carregando";
    },
    formatCheckingMessage(): string {
        return "Verificando";
    }
}

LOCALISATION['pt-PT'] = LOCALISATION['pt'] = PT;
DEFAULTS.locale = "pt-PT";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
/*
 *  Better Nice Select Turkish (Turkey) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const TR = {
    formatSearch(): string {
        return "Aramak...";
    },
    formatHelpForTagging(): string {
        return "Kendi etiketlerinizi oluşturmak için giriş alanına odaklanın ve nesneyi oluşturmak için aşağıdaki düğmelerden birine tıklayın:";
    },
    formatAlertOptiongroups(): string {
        return "Lütfen bekleyin...\nSeçenek grupları hâlâ yükleniyor...";
    },
    formatLoadingMessage(): string {
        return "Yükleniyor";
    },
    formatCheckingMessage(): string {
        return "Kontrol etme";
    }
}

LOCALISATION['tr-TR'] = LOCALISATION['tr'] = TR;
DEFAULTS.locale = "tr-TR";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
/*
 *  Better Nice Select Japanese (Japan) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const JA = {
    formatSearch(): string {
        return "検索...";
    },
    formatHelpForTagging(): string {
        return "独自のタグを作成するには、入力フィールドに焦点を当て、次のいずれかのボタンをクリックしてオブジェクトを作成します。";
    },
    formatAlertOptiongroups(): string {
        return "お待ちください...\nオプション グループはまだロード中です...";
    },
    formatLoadingMessage(): string {
        return "読み込み中";
    },
    formatCheckingMessage(): string {
        return "チェック中";
    }
}

LOCALISATION['ja-JP'] = LOCALISATION['ja'] = JA;
DEFAULTS.locale = "ja-JP";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
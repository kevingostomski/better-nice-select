/*
 *  Better Nice Select Chinese (Simplified, People's Republic of China) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com> 
*/
import BetterNiceSelect from "../better-nice-select";
import { LOCALISATION, DEFAULTS } from "../better-nice-select"

const ZH = {
    formatSearch(): string {
        return "搜索...";
    },
    formatHelpForTagging(): string {
        return "要创建您自己的标签，请关注输入字段并单击以下按钮之一来创建对象：";
    },
    formatAlertOptiongroups(): string {
        return "请稍候...\n选项组仍在加载中...";
    },
    formatLoadingMessage(): string {
        return "加载中";
    },
    formatCheckingMessage(): string {
        return "检查";
    }
}

LOCALISATION['zh-CN'] = LOCALISATION['zh'] = ZH;
DEFAULTS.locale = "zh-CN";

export { DEFAULTS, LOCALISATION, BetterNiceSelect }
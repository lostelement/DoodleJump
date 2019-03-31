/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import GameUI from "./script/GameUI"
import GameControl from "./script/GameControl"
import LoadingPage from "./script/LoadingPage/LoadingPage"
import groundBox from "./script/groundBox"
import JetpackBox from "./script/prop/JetpackBox"
import PropellerBox from "./script/prop/PropellerBox"
import SpringBox from "./script/prop/SpringBox"
import hopBox from "./script/hopBox"
import likBox from "./script/likBox"

export default class GameConfig {
    static init() {
        //注册Script或者Runtime引用
        let reg = Laya.ClassUtils.regClass;
		reg("script/GameUI.js",GameUI);
		reg("script/GameControl.js",GameControl);
		reg("script/LoadingPage/LoadingPage.js",LoadingPage);
		reg("script/groundBox.js",groundBox);
		reg("script/prop/JetpackBox.js",JetpackBox);
		reg("script/prop/PropellerBox.js",PropellerBox);
		reg("script/prop/SpringBox.js",SpringBox);
		reg("script/hopBox.js",hopBox);
		reg("script/likBox.js",likBox);
    }
}
GameConfig.width = 640;
GameConfig.height = 1136;
GameConfig.scaleMode ="fixedwidth";
GameConfig.screenMode = "none";
GameConfig.alignV = "top";
GameConfig.alignH = "left";
GameConfig.startScene = "game/GameStart.scene";
GameConfig.sceneRoot = "";
GameConfig.debug = false;
GameConfig.stat = false;
GameConfig.physicsDebug = false;
GameConfig.exportSceneToJson = true;

GameConfig.init();

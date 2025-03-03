//game.import( name:"千幻聆音"
//提示：本扩展源代码基于GPL协议向无名杀社区开放，欢迎大家借鉴和参考代码。
//import { VERSION } from './version.js'
// @ts-ignore
import { lib,get,_status,ui,game,ai } from './extension/noname.js';
import { CONFIG } from './extension/config.js';
import { CONTENT } from './extension/content.js';
import { PRECONTENT } from './extension/precontent.js';

// @ts-ignore
lib.element.player.qh_old_init = lib.element.player.init;
// @ts-ignore
lib.element.player.qh_old_$init = lib.element.player.$init;
// @ts-ignore
lib.element.player.qh_old_uninit = lib.element.player.uninit;
// @ts-ignore
lib.element.player.qh_old_$uninit = lib.element.player.$uninit;

// @ts-ignore
if (!window.qhlyUI) window.qhlyUI = {};
// @ts-ignore
window.qhlyUI.assets = {
  huanpifu: {
    name: '../../../千幻聆音/assets/huanpifu',
  },
  pinzhi: {
    name: '../../../千幻聆音/assets/SF_pifu_pinzhiUI',
  },
  huanfu: {
    name: '../../../千幻聆音/assets/huanfu',
  },
}
//出框调整
//皮切用自己函数播放出框
//getSkinFile,setOriginSkin,syncChange

let mainPackageFunc = async function(){
  const extensionInfo = 
        await lib.init.promises.json(`${lib.assetURL}extension/千幻聆音/info.json`);
  let mainPackage = {
    name: "千幻聆音", content:CONTENT, precontent:PRECONTENT, config:CONFIG, help: {}, package: {
      character: {
        character: {
        },
        translate: {
        },
      },
      card: {
        card: {
        },
        translate: {
        },
        list: [],
      },
      skill: {
        skill: {
        },
        translate: {
        },
      },
      intro: "版本号："+extensionInfo.version+"<br>对局内实时换肤换音扩展！<br>感谢七.提供的【水墨龙吟】界面素材。<br>感谢灵徒℡丶提供的【海克斯科技】界面素材。<br>感谢雷开发的十周年、手杀界面。<br>感谢以下群友参与了BUG反馈，并给出了可行的建议：<br>柚子 Empty city° ꧁彥꧂ 折月醉倾城 世中人 ᴀᴅɪᴏs 废城<b>",
      author: "玄武江湖工作室 & 雷",
      diskURL: "",
      forumURL: "",
      version: extensionInfo.version,
    }, files: { "character": [], "card": [], "skill": [] }
  };
  // @ts-ignore
  window.qhly_extension_package = mainPackage;
  return mainPackage;
};


export let type = 'extension';

export default mainPackageFunc;

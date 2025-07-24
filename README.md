# DICE-Copy-Freedom
這是一個可以讓[DICE程式教學平台](http://dice.18dice.tw/diceweb/)開啟複製貼上的功能，程式碼請看`index.js`。

## How to use
1. 登入DICE，開啟Dev tool。
2. 貼上程式碼
   ```js
   const editor = ace.edit(document.querySelector(".ace_editor"));
   editor.commands.addCommand({
   name: "forcePaste",
   bindKey: { win: "Ctrl-V", mac: "Command-V" },
   exec: function (editor) {
   navigator.clipboard.readText().then((text) => {
   editor.insert(text);
   });
   },
   });
   ```

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

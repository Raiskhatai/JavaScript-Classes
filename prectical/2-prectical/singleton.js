class Settings {
  constructor() {
    if (Settings.instance instanceof Settings) {
      return Settings.instance;
    }
    this.settingObject = {
      background: "#ff0000",
      version: Math.floor(Math.random() * 4000),
    };
    Object.freeze(this.settingObject);
    Object.freeze(this);
    Settings.instance = this;
  }

  get(key) {
    return this.settingObject[key];
  }
}

let s = new Settings();
let a = new Settings();
console.log(s.get("version"));
console.log(a.get("version"));

console.log(s === a);

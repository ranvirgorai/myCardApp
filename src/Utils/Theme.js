import { ColorSchemeName } from 'react-native'
const light = {
    primery: "#00ffff",
    secondry: "#ffff00",
    background: "#ffffff",
    textDefault: "#000000",
    danger: "#ff0000",
    info: "#0000ff",
    primery: "#00ff00"
}

const dark = {
    primery: "#00ffff",
    secondry: "#ffff00",
    background: "#000000",
    textDefault: "#ffffff",
    danger: "#ff0000",
    info: "#0000ff",
    primery: "#00ff00"
}
let currentTheme = light;
if (ColorSchemeName === 'dark') {
    currentTheme = dark;
}
export default currentTheme;
export default function useCaption(jsonData) {
    const lang = navigator.language.toUpperCase().indexOf("EN") >= 0 ? 0 : 1
    return (key) => jsonData[key][lang]
}
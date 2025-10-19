// data_utils.js
export async function loadJSON(path) {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`No se pudo cargar el archivo JSON: ${response.statusText}`);
    }
    return await response.json();
}


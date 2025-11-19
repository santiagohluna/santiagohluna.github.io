export function renderHabilidades(habilidades) {
    const section = document.createElement('div');
    section.classList.add('section');
    section.innerHTML = `<h2 class="section-title">Habilidades Técnicas</h2>`;

    Object.entries(habilidades).forEach(([categoria, lista]) => {
        const div = document.createElement('div');
        div.classList.add('mb-2');
        const displayCat = categoria.replace(/_/g, ' ');
        div.innerHTML = `<strong>${displayCat.charAt(0).toUpperCase() + displayCat.slice(1)}:</strong> ${lista.join(', ')}`;
        section.appendChild(div);
    });

    return section;
}

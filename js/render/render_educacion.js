export function renderEducacion(educacion) {
    const section = document.createElement('div');
    section.classList.add('section');
    section.innerHTML = `<h2 class="section-title">Educación</h2>`;

    educacion.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card p-3 mb-3';
        card.innerHTML = `
            <h5>${item.titulo}</h5>
            <h6 class="text-muted">${item.institucion} — ${item.ubicacion}</h6>
            <p class="mb-1"><small>${item.fecha_inicio} - ${item.fecha_fin}</small></p>
            <p>${item.descripcion}</p>
        `;
        section.appendChild(card);
    });

    return section;
}

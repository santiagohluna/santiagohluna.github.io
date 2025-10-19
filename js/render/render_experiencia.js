export function renderExperiencia(experiencia) {
    const section = document.createElement('div');
    section.classList.add('section');
    section.innerHTML = `<h2 class="section-title">Experiencia Profesional</h2>`;

    experiencia.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card p-3 mb-3';
        card.innerHTML = `
            <h5>${item.cargo}</h5>
            <h6 class="text-muted">${item.organizacion} — ${item.ubicacion}</h6>
            <p class="mb-1"><small>${item.fecha_inicio} - ${item.fecha_fin}</small></p>
            <ul>
                ${item.responsabilidades.map(r => `<li>${r}</li>`).join('')}
            </ul>
        `;
        section.appendChild(card);
    });

    return section;
}

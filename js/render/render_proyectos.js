export function renderProyectos(proyectos) {
    const section = document.createElement('div');
    section.classList.add('section');
    section.innerHTML = `<h2 class="section-title">Proyectos Personales</h2>`;

    proyectos.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card p-3 mb-3';
        card.innerHTML = `
            <h5>${p.nombre}</h5>
            <h6 class="text-muted">${p.rol} — ${p.año}</h6>
            <p>${p.descripcion}</p>
            <p><strong>Tecnologías:</strong> ${p.tecnologias.join(', ')}</p>
            <p><a href="${p.repositorio}" target="_blank">Repositorio</a></p>
        `;
        section.appendChild(card);
    });

    return section;
}

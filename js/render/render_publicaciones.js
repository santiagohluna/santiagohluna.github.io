export function renderPublicaciones(publicaciones) {
    const section = document.createElement('div');
    section.classList.add('section');
    section.innerHTML = `<h2 class="section-title">Publicaciones Destacadas</h2>`;

    publicaciones.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card p-3 mb-3';
        card.innerHTML = `
            <h5>${p.titulo}</h5>
            <h6 class="text-muted">${p.revista_o_evento} — ${p.año}</h6>
            <p><a href="${p.enlace}" target="_blank">Ver publicación</a></p>
        `;
        section.appendChild(card);
    });

    return section;
}

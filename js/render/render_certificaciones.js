export function renderCertificaciones(certificaciones) {
    const section = document.createElement('div');
    section.classList.add('section');
    section.innerHTML = `<h2 class="section-title">Certificaciones y Cursos</h2>`;

    certificaciones.forEach(c => {
        const card = document.createElement('div');
        card.className = 'card p-3 mb-3';
        card.innerHTML = `
            <h5>${c.nombre}</h5>
            <h6 class="text-muted">${c.institucion} — ${c.año}</h6>
            <p>${c.descripcion}</p>
            <p><a href="${c.url_certificado}" target="_blank">Ver certificado</a></p>
        `;
        section.appendChild(card);
    });

    return section;
}

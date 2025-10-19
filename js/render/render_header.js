export function renderHeader(perfil) {
    const div = document.createElement('div');
    div.id = 'header';
    div.classList.add('d-flex', 'align-items-center', 'mb-4', 'gap-3');
    div.innerHTML = `
        <img src="${perfil.foto}" alt="Foto de ${perfil.nombre}" class="rounded-circle border border-primary" width="150" height="150">
        <div class="info flex-grow-1">
            <h1>${perfil.nombre}</h1>
            <h4 class="text-primary">${perfil.titulo_profesional}</h4>
            <p>${perfil.resumen}</p>
            <div class="contact-icons">
                <a href="mailto:${perfil.email}" target="_blank" class="me-2"><i class="bi bi-envelope-fill"></i></a>
                <a href="${perfil.linkedin}" target="_blank" class="me-2"><i class="bi bi-linkedin"></i></a>
                <a href="${perfil.github}" target="_blank" class="me-2"><i class="bi bi-github"></i></a>
                <a href="${perfil.sitio_web}" target="_blank" class="me-2"><i class="bi bi-globe"></i></a>
            </div>
        </div>
    `;
    return div;
}

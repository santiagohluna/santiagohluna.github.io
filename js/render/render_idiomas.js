export function renderIdiomas(idiomas) {
    const section = document.createElement('div');
    section.classList.add('section');
    section.innerHTML = `<h2 class="section-title">Idiomas</h2>`;

    const ul = document.createElement('ul');
    idiomas.forEach(i => {
        const li = document.createElement('li');
        li.textContent = `${i.idioma} — ${i.nivel}`;
        ul.appendChild(li);
    });
    section.appendChild(ul);

    return section;
}

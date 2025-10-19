export function renderHabilidadesBlandas(habilidades) {
    const section = document.createElement('div');
    section.classList.add('section');
    section.innerHTML = `<h2 class="section-title">Habilidades Blandas</h2>`;

    const ul = document.createElement('ul');
    habilidades.forEach(h => {
        const li = document.createElement('li');
        li.textContent = h;
        ul.appendChild(li);
    });
    section.appendChild(ul);

    return section;
}

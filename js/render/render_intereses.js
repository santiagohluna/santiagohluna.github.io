export function renderIntereses(intereses) {
    const section = document.createElement('div');
    section.classList.add('section');
    section.innerHTML = `<h2 class="section-title">Intereses</h2>`;

    const ul = document.createElement('ul');
    intereses.forEach(i => {
        const li = document.createElement('li');
        li.textContent = i;
        ul.appendChild(li);
    });
    section.appendChild(ul);

    return section;
}

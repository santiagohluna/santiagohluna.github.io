import { loadJSON } from './utils/data_utils.js';
import { renderHeader } from './render/render_header.js';
import { renderEducacion } from './render/render_educacion.js';
import { renderExperiencia } from './render/render_experiencia.js';
import { renderProyectos } from './render/render_proyectos.js';
import { renderPublicaciones } from './render/render_publicaciones.js';
import { renderHabilidades } from './render/render_habilidades.js';
import { renderHabilidadesBlandas } from './render/render_habilidades_blandas.js';
import { renderCertificaciones } from './render/render_certificaciones.js';
import { renderIdiomas } from './render/render_idiomas.js';
import { renderIntereses } from './render/render_intereses.js';

async function main() {
    try {
        const data = await loadJSON('data/profile.json');
        const container = document.getElementById('cv-container');

        container.innerHTML = '';
        container.appendChild(renderHeader(data.perfil_personal));
        container.appendChild(renderExperiencia(data.experiencia_profesional));
        container.appendChild(renderEducacion(data.educacion));
        // container.appendChild(renderProyectos(data.proyectos_personales));
        // container.appendChild(renderPublicaciones(data.publicaciones_destacadas));
        container.appendChild(renderHabilidades(data.habilidades_tecnicas));
        container.appendChild(renderHabilidadesBlandas(data.habilidades_blandas));
        // container.appendChild(renderCertificaciones(data.certificaciones_y_cursos));
        container.appendChild(renderIdiomas(data.idiomas));
        container.appendChild(renderIntereses(data.intereses));
    } catch (error) {
        console.error("Error al cargar el CV:", error);
    }
}

main();

import json
import subprocess
import os

# ---------- Cargar JSON ----------
with open("data/profile.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# ---------- Inicializar LaTeX ----------
lines = []
lines.append(r"\documentclass[a4paper,10pt]{resume}")
lines.append(r"\usepackage{ebgaramond}")
lines.append(r"\usepackage{hyperref}")
lines.append(r"\hypersetup{colorlinks=true,linkcolor=blue,urlcolor=blue}")

# ---------- Encabezado ----------
lines.append(r"\name{%s}" % data["perfil_personal"]["nombre"])
lines.append(r"\address{%s}" % data["perfil_personal"]["titulo_profesional"])
lines.append(r"\address{%s}" % data["perfil_personal"]["ubicacion"])
contact = (
    r"\href{mailto:%s}{%s} \\ \href{%s}{LinkedIn} \\ \href{%s}{GitHub} \\ \href{%s}{Portfolio}"
    % (
        data["perfil_personal"]["email"],
        data["perfil_personal"]["email"],
        data["perfil_personal"]["linkedin"],
        data["perfil_personal"]["github"],
        data["perfil_personal"]["portfolio"],
    )
)
lines.append(r"\address{%s}" % contact)

lines.append(r"\begin{document}")

# ---------- Resumen profesional ----------
lines.append(r"\begin{rSection}{Resumen profesional}")
lines.append(data["perfil_personal"]["resumen"])
lines.append(r"\end{rSection}")

# ---------- Educación ----------
lines.append(r"\begin{rSection}{Educación}")
for edu in data["educacion"]:
    lines.append(
        r"\begin{rSubsection}{%s}{%s --- %s}{%s}{}"
        % (edu["titulo"], edu["fecha_inicio"], edu["fecha_fin"], edu["institucion"])
    )
    lines.append(r"\item %s" % edu["descripcion"])
    lines.append(r"\end{rSubsection}")
lines.append(r"\end{rSection}")

# ---------- Experiencia profesional ----------
lines.append(r"\begin{rSection}{Experiencia profesional}")
for exp in data.get("experiencia_profesional", []):
    lines.append(
        r"\begin{rSubsection}{%s}{%s --- %s}{%s}{}"
        % (exp["cargo"], exp["fecha_inicio"], exp["fecha_fin"], exp["organizacion"])
    )
    for resp in exp["responsabilidades"]:
        lines.append(r"\item %s" % resp)
    lines.append(r"\end{rSubsection}")
lines.append(r"\end{rSection}")

# ---------- Proyectos personales ----------
lines.append(r"\begin{rSection}{Proyectos personales}")
for proj in data.get("proyectos_personales", []):
    lines.append(
        r"\begin{rSubsection}{%s}{%s}{%s}{}"
        % (proj["nombre"], proj["año"], proj["rol"])
    )
    lines.append(r"\item %s" % proj["descripcion"])
    lines.append(r"\item Tecnologías: %s" % ", ".join(proj["tecnologias"]))
    lines.append(
        r"\item Repositorio: \href{%s}{%s}" % (proj["repositorio"], proj["repositorio"])
    )
    lines.append(r"\end{rSubsection}")
lines.append(r"\end{rSection}")

# ---------- Publicaciones destacadas ----------
lines.append(r"\begin{rSection}{Publicaciones destacadas}")
for pub in data.get("publicaciones_destacadas", []):
    lines.append(
        r"\item %s, %s, %s. \href{%s}{Enlace}"
        % (pub["titulo"], pub["revista_o_evento"], pub["año"], pub["enlace"])
    )
lines.append(r"\end{rSection}")

# ---------- Habilidades ----------
lines.append(r"\begin{rSection}{Habilidades}")
# Técnicas
techs = []
for key in ["lenguajes", "frameworks", "herramientas", "bases_de_datos", "otros"]:
    techs.extend(data["habilidades_tecnicas"].get(key, []))
lines.append(r"\textbf{Técnicas:} %s." % ", ".join(techs))
# Blandas
lines.append(r"\textbf{Blandas:} %s." % ", ".join(data.get("habilidades_blandas", [])))
lines.append(r"\end{rSection}")

# ---------- Certificaciones y cursos ----------
lines.append(r"\begin{rSection}{Certificaciones y cursos}")
for cert in data.get("certificaciones_y_cursos", []):
    lines.append(
        r"\item %s, %s, %s. \href{%s}{Certificado}"
        % (cert["nombre"], cert["institucion"], cert["año"], cert["url_certificado"])
    )
lines.append(r"\end{rSection}")

# ---------- Idiomas ----------
lines.append(r"\begin{rSection}{Idiomas}")
idiomas = [f"{i['idioma']} ({i['nivel']})" for i in data.get("idiomas", [])]
lines.append(", ".join(idiomas))
lines.append(r"\end{rSection}")

# ---------- Intereses ----------
lines.append(r"\begin{rSection}{Intereses}")
lines.append(", ".join(data.get("intereses", [])))
lines.append(r"\end{rSection}")

lines.append(r"\end{document}")

# ---------- Guardar .tex ----------
tex_file = "tex/cv_shluna.tex"
with open(tex_file, "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

# ---------- Compilar PDF ----------
subprocess.run(
    ["pdflatex", "-output-directory", "../output", "cv_shluna.tex"], cwd="tex"
)

# ---------- Limpiar archivos auxiliares ----------
aux_files = [".aux", ".log", ".out"]
for ext in aux_files:
    aux_path = os.path.join(
        "output", os.path.splitext(os.path.basename(tex_file))[0] + ext
    )
    if os.path.exists(aux_path):
        os.remove(aux_path)

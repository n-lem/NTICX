import hashlib
import json
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CONTENT_DIRS = (
    "01_Planificacion_y_Cronograma",
    "02_Guia_Docente",
    "03_Guia_Estudiantes",
    "04_Cuadernillo_Actividades",
    "05_Evaluaciones",
    "Bibliografía",
)


def build_outputs():
    documents = {}
    for folder in CONTENT_DIRS:
        for path in sorted((ROOT / folder).rglob("*.md")):
            relative_path = path.relative_to(ROOT).as_posix()
            documents[relative_path] = path.read_text(encoding="utf-8")

    document_json = json.dumps(documents, ensure_ascii=False, separators=(",", ":"))
    assets = sorted(documents)
    curriculum_pdf = ROOT / "Diseño_Curricular" / "tic_4_final_web.pdf"
    if curriculum_pdf.exists():
        assets.append(curriculum_pdf.relative_to(ROOT).as_posix())

    manifest_json = json.dumps(assets, ensure_ascii=False, separators=(",", ":"))
    version_source = "".join(
        relative_path + "\0" + documents[relative_path] + "\0"
        for relative_path in sorted(documents)
    )
    if curriculum_pdf.exists():
        version_source += curriculum_pdf.relative_to(ROOT).as_posix()
        version_source += "\0" + curriculum_pdf.read_bytes().hex()
    version = hashlib.sha256(version_source.encode("utf-8")).hexdigest()[:16]
    return {
        ROOT / "offline-documents.js": (
            "window.NTICX_OFFLINE_DOCUMENTS = Object.freeze(" + document_json + ");\n"
        ),
        ROOT / "offline-manifest.js": (
            "self.NTICX_OFFLINE_VERSION = " + json.dumps(version) + ";\n"
            "self.NTICX_OFFLINE_ASSETS = Object.freeze(" + manifest_json + ");\n"
        ),
    }


def main():
    outputs = build_outputs()
    stale = []
    for path, content in outputs.items():
        if not path.exists() or path.read_text(encoding="utf-8") != content:
            stale.append(path.name)

    if "--check" in sys.argv:
        if stale:
            raise SystemExit("Offline bundle is out of date: " + ", ".join(stale))
        print(f"Offline bundle is up to date ({len(outputs)} generated files).")
        return

    for path, content in outputs.items():
        path.write_text(content, encoding="utf-8", newline="\n")
    total_bytes = sum(path.stat().st_size for path in outputs)
    print(f"Generated {len(outputs)} offline files ({total_bytes} bytes).")


if __name__ == "__main__":
    main()

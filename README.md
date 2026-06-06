# Scavenger

**Offline duplicate file finder and storage cleaner.**  
No accounts. No telemetry. Nothing leaves your machine.

[scavenger.akulastech.com](https://scavenger.akulastech.com) · [Download](#download) · [Build from source](#build-from-source)

---

## What it does

**Clean mode** — scans a folder and finds:
- Exact duplicate files (SHA-256 hash comparison)
- Near-duplicate files (perceptual hash — images, video, PDF)
- Visually similar scene groups (EXIF clustering + on-device ML)
- Version groups (fuzzy filename match)

**Organise mode** — classifies a scattered folder into a typed destination tree (photos, videos, music, documents, etc.) and presents a proposed move plan before touching anything.

In both modes: **the app only suggests. Nothing is deleted or moved without explicit user approval.**

---

## Download

Visit **[scavenger.akulastech.com](https://scavenger.akulastech.com)** to download for your platform.

| Platform | Status | Direct link |
|----------|--------|-------------|
| Windows 10/11 (x64) | Available | [Latest release](../../releases/latest) |
| Android 8.0+ | Available | Coming soon |
| macOS | In development | — |
| Ubuntu | In development | — |

---

## Key facts

- Fully offline — zero network requests, ever
- No accounts, no telemetry, no data collection
- Suggestions only — nothing deleted or moved without your confirmation
- Dark mode only
- Version: 1.0.1

---

## Build from source

See [docs/SETUP.md](docs/SETUP.md) for full build instructions.

**Windows quick start:**
```powershell
flutter pub get
# Download required assets first — see docs/SETUP.md sections 1.3 and 1.4
flutter build windows --release
```

**Android quick start:**
```bash
flutter pub get
flutter build apk --release
```

---

## Project structure

```
lib/          Flutter source (screens, services, models, utils)
docs/         PRD, decisions, setup guide, landing page
assets/       Icons, bundled FFmpeg, ML model
test/         Unit tests mirroring lib/
windows/      Windows runner (Flutter-generated)
android/      Android runner
```

---

## Privacy

Scavenger reads files on your device to compute hashes and group duplicates. It never uploads, transmits, or shares any file data. All processing is local and offline.

---

## Contact

abheshekh1285@gmail.com

# Tatrų gidas — STATUS

> **Tipas:** Gyva būsena (tiesos šaltinis būsenai). Stabilios taisyklės — Project Instructions / `DARBO_PRINCIPAI_PERKELIAMI_v2.md`.
> **Vieta:** repo šaknis (`freigofas-sketch/tatrai/STATUS.md`).
> **Atnaujina:** Claude sprinto pradžioj/pabaigoj ir kai būsena keičiasi; commit'inama su deploy git žingsniais.
> **Paskutinį kartą atnaujinta:** 2026-06-18 · **Atnaujino:** Claude (web) — gyvo repo patikra per raw.githubusercontent.com

---

## 📋 Užduočių lenta

### ✅ Baigta
- `tatrai-2026-v7` įdiegtas ir **gyvai nuoseklus** (sw.js / manifest / index.html / realūs failai sutampa).
- 10 Waze deep-link navigacijos mygtukų dienų sekcijose (d1–d5).
- 3 GPX žygiai pridėti ir pasiekiami (200): Wysoka–Homole–Biała Woda, Téryho chata, Velická–Sliezsky dom (kilpa).
- `noindex, nofollow` meta žyma įjungta (puslapis nerodomas Google paieškoje).
- Ikonų vardų grandinė suvienodinta su brūkšneliu (`icon-192.png` / `icon-512.png`) visur.

### 🔴 Laukia / užbaigti (rankiniai žingsniai — iki birž. 20)
- **PWA atidaryti telefone SU internetu**, kad service worker įsimintų v7 + visus 3 GPX į talpyklą. Po to veikia offline.
- (Pasirinktinai) Įrašyti lokalų repo kelią kompiuteryje į lentelę žemiau.

### ▶️ Galima imtis (next)
- Nieko būtino iki kelionės. `v8` ikonų taisymas **ATŠAUKTAS** kaip nereikalingas (žr. saugos invariantai).

---

## 🧩 Sistema (architektūra — ne būsena)
> Vienpuslapis offline PWA kelionės gidas, talpinamas GitHub Pages.
- `index.html` — visa programėlė viename faile: inline CSS `<style>`, sisteminiai šriftai (Georgia/system-ui), base64 nuotraukos, 5 dienų kortelės, sticky chip navigacija (scrollspy).
- `sw.js` — service worker, cache-first; `CORE` + `EXTRA` (GPX) failų talpinimas.
- `manifest.json` — PWA manifestas (ikonos, theme-color).
- `icon-192.png` / `icon-512.png` — ikonos.
- 3× `*.gpx` — žygių trasos Garmin laikrodžiui.
- **Hosting:** GitHub Pages, šaltinis = `main` šaknis.
- **Navigacija:** Waze deep links (`ll=` koordinatės arba `q=` adresas).

---

## 🔑 ID, versijos, prieigos
> Gyvi rodikliai. Niekada nepasitikėk atmintimi — tikrink gyvame kode.

| Ką | Reikšmė |
|---|---|
| Repo | `freigofas-sketch/tatrai` · branch `main` |
| Lokalus kelias | `<įrašyti — kelias Žilvino kompiuteryje>` |
| Deploy URL | `https://freigofas-sketch.github.io/tatrai/` |
| Read path (gyvas, be auth) | `https://raw.githubusercontent.com/freigofas-sketch/tatrai/main/<failas>` |
| SW cache versija | `tatrai-2026-v7` (gyvai patvirtinta 2026-06-18) |
| Failai (visi 200) | `index.html`, `sw.js`, `manifest.json`, `icon-192.png`, `icon-512.png`, 3× `*.gpx` |
| PAT / raktai | NIEKADA nesaugomi čia — per Žilviną |

---

## 🛡️ Saugos invariantai (NETAISYTI be atskiro sprendimo)
- **Ikonų vardai su brūkšneliu visur:** `icon-192.png` / `icon-512.png`. `sw.js` CORE, `manifest.json`, `index.html` ir realūs repo failai sutampa. NEKEISTI į be-brūkšnelio — sulaužytų cache ir PWA įsidiegimą.
- **„v8 icon fix" ATŠAUKTAS:** senas „neatitikimas" egzistavo tik senoje projekto žinių kopijoje (`/mnt/project/`), ne gyvame repo. Gyvai viskas nuoseklu — keisti nereikia.
- **`noindex, nofollow`** — palikti įjungtą.
- **Bump SW versiją** (`v7 → v8 → …`) po **kiekvieno** turinio keitimo, kitaip telefonai rodo seną iš talpyklos.
- **GPX failų vardai** turi tiksliai sutapti su download mygtukų `href` (case-sensitive).

---

## 🚀 Deploy seka (nekintama)
1. 🔴 **RANKINIS** — Žilvinas patvirtina pakeitimą („daryk").
2. ✅ **CLAUDE ruošia** — fetch live (`raw`) → edit darbinėje kopijoje → bump SW versiją → pateikia **pilną failą** (`index.html` ir/ar `sw.js`).
3. 🔴 **RANKINIS** — Žilvinas commit + push (Claude Code / PowerShell / GitHub web). GitHub Pages persistato ~1–2 min.
4. ✅ **CLAUDE verifikuoja** — re-fetch `raw` + grep, kad nauja SW versija ir pakeitimas tikrai nukrito (smoke test). Pastaba: `raw` po push gali atsilikti ~minutę.

---

## 📝 Atviri klausimai / laukiama sprendimų
- Lokalus repo kelias kompiuteryje? (įrašyti į lentelę aukščiau)
- Ar naudosim **Claude Code** kaip vykdytoją lokaliai? Tai tightest loop — Claude Code turi tiesioginį rašymą į realius failus ir gali `git push`, o gyvą patikrą darytų pats.

---

*Stabilios taisyklės nekeičiamos čia — jos Project Instructions / principų faile. Čia tik kintanti būsena.*

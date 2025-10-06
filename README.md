# Café Luna – landing page

Nowoczesna, responsywna strona typu landing page dla kawiarni **Café Luna**, zbudowana w Vite + React z Tailwind CSS i przygotowana do wdrożenia na GitHub Pages.

## Wymagania wstępne

- Node.js w wersji 18 lub wyższej
- npm

## Instalacja

```bash
npm install
```

## Dostępne skrypty

- `npm run dev` – uruchamia środowisko deweloperskie Vite (domyślnie pod adresem http://localhost:5173)
- `npm run build` – tworzy zoptymalizowaną wersję produkcyjną w katalogu `dist`
- `npm run preview` – podgląd zbudowanej aplikacji

## Struktura projektu

- `src/App.jsx` – główny komponent strony z sekcjami hero, menu, galerią, opiniami i formularzem kontaktowym
- `src/index.css` – globalne style oparte o Tailwind CSS
- `public/` – statyczne zasoby, m.in. favicon

## Tailwind CSS

Konfiguracja frameworka znajduje się w plikach `tailwind.config.js` oraz `postcss.config.js`. Klasy Tailwind są dostępne we wszystkich komponentach z katalogu `src` i w dokumencie `index.html`.

## Deployment na GitHub Pages

Repozytorium zawiera workflow GitHub Actions (`.github/workflows/deploy.yml`), który:

1. Buduje aplikację po wypchnięciu zmian na gałąź `main`.
2. Publikuje zawartość katalogu `dist` w GitHub Pages.

Adres produkcyjny strony po wdrożeniu: `https://<twoja_nazwa_uzytkownika>.github.io/Luna-strona/`.

## Licencja

Projekt został przygotowany w ramach zadania demonstracyjnego.

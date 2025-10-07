import { useEffect } from 'react';

const drinks = [
  {
    name: 'Luna Latte',
    description: 'Kremowe latte z nutą lawendy i wanilii.',
    price: '16 zł',
  },
  {
    name: 'Moonlight Cold Brew',
    description: 'Powolna ekstrakcja z syropem jaśminowym i tonikiem.',
    price: '18 zł',
  },
  {
    name: 'Solar Espresso',
    description: 'Podwójne espresso z ziaren single origin.',
    price: '12 zł',
  },
  {
    name: 'Galaktyczny Matcha Latte',
    description: 'Japońska matcha z mlekiem owsianym i yuzu.',
    price: '17 zł',
  },
];

const testimonials = [
  {
    quote:
      'Najlepsza kawa w mieście! Czuć pasję w każdym łyku i świetną atmosferę.',
    author: 'Magda, graficzka',
  },
  {
    quote: 'Uwielbiam ich deserowe kawy i przyjazny, kreatywny klimat.',
    author: 'Tomek, freelancer',
  },
  {
    quote:
      'Idealne miejsce na spotkania – szybkie Wi-Fi, doskonała muzyka i obsługa.',
    author: 'Ania, copywriterka',
  },
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    alt: 'Barista parząca kawę w przytulnym wnętrzu Café Luna',
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    alt: 'Stół z kawą i deserami w otoczeniu roślin',
  },
  {
    src: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=800&q=80',
    alt: 'Zbliżenie na ręcznie zaparzoną kawę przelewową',
  },
  {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    alt: 'Wnętrze Café Luna z wygodnymi fotelami',
  },
  {
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80',
    alt: 'Zaparzacz do kawy i filiżanka na drewnianym blacie',
  },
  {
    // nasz deser – link z Unsplash
    src: 'https://images.unsplash.com/photo-1682596044370-b2b1dc91cf2b?q=80&w=800&auto=format&fit=crop',
    alt: 'Kawałek ciasta na talerzyku',
  },
];

export default function App() {
  useEffect(() => {
    document.title = 'Café Luna – aromatyczna kawiarnia w Twoim mieście';
  }, []);

  return (
    <div className="min-h-full">
      <header className="relative overflow-hidden bg-latte-200 text-espresso-800">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-latte-100 via-latte-200 to-latte-300" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,theme(colors.caramel.400),transparent_65%)] opacity-30" />
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-20 sm:pb-32 sm:pt-28">
          <nav className="flex items-center justify-between rounded-full bg-cream-100/85 px-5 py-3 text-espresso-900 shadow-soft backdrop-blur">
            <span className="font-display text-2xl font-semibold text-espresso-900">
              Café Luna
            </span>
            <a href="#kontakt" className="hidden sm:inline-flex btn btn-outline">
              Rezerwuj stolik
            </a>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow inline-flex items-center rounded-full bg-caramel-500/10 px-4 py-1 text-sm uppercase text-espresso-800 ring-1 ring-inset ring-caramel-500/30">
                Nowa jakość kawy
              </p>
              <div className="max-w-xl">
                <h1 className="font-display text-5xl font-semibold tracking-tight text-espresso-800 md:text-6xl">
                  Przywitaj noc smaku w Café Luna
                </h1>
                <p className="prose-muted mt-4 mb-8 text-lg md:text-xl">
                  Zanurz się w aromatycznym świecie kaw speciality, autorskich
                  napojów i wypieków tworzonych z pasją. Odkryj nowe rytuały w
                  sercu miasta.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#kontakt" className="btn">
                  Rezerwacja
                </a>
                <a href="#menu" className="btn btn-outline">
                  Poznaj menu
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cream-200/20 via-cream-200/10 to-transparent blur-3xl" />
              <div className="relative rounded-3xl border border-espresso-900/10 bg-espresso-900/80 p-6 shadow-2xl backdrop-blur-lg text-cream-200/90">
                <p className="text-sm font-medium uppercase tracking-[0.2em]">
                  Godziny otwarcia
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex justify-between text-sm">
                    <span>Poniedziałek – Piątek</span>
                    <span>8:00 – 22:00</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span>Sobota</span>
                    <span>9:00 – 24:00</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span>Niedziela</span>
                    <span>10:00 – 20:00</span>
                  <

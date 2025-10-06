import { useEffect, useState } from 'react';

const drinks = [
  {
    name: 'Luna Latte',
    description: 'Kremowe latte z nutą lawendy i wanilii.',
    price: '16 zł'
  },
  {
    name: 'Moonlight Cold Brew',
    description: 'Powolna ekstrakcja z syropem jaśminowym i tonikiem.',
    price: '18 zł'
  },
  {
    name: 'Solar Espresso',
    description: 'Podwójne espresso z ziaren single origin.',
    price: '12 zł'
  },
  {
    name: 'Galaktyczny Matcha Latte',
    description: 'Japońska matcha z mlekiem owsianym i yuzu.',
    price: '17 zł'
  }
];

const testimonials = [
  {
    quote:
      'Najlepsza kawa w mieście! Czuć pasję w każdym łyku i świetną atmosferę.',
    author: 'Magda, graficzka'
  },
  {
    quote: 'Uwielbiam ich deserowe kawy i przyjazny, kreatywny klimat.',
    author: 'Tomek, freelancer'
  },
  {
    quote:
      'Idealne miejsce na spotkania – szybkie Wi-Fi, doskonała muzyka i obsługa.',
    author: 'Ania, copywriterka'
  }
];

const galleryImages = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
];

const getPreferredDarkMode = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export default function App() {
  const [isDark, setIsDark] = useState(getPreferredDarkMode);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => setIsDark(event.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.title = 'Café Luna – aromatyczna kawiarnia w Twoim mieście';
  }, []);

  return (
    <div className="min-h-full bg-cream-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 opacity-80 dark:opacity-60" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,#fde68a,transparent_60%)] opacity-70" />
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-20 sm:pb-32 sm:pt-28">
          <nav className="flex items-center justify-between">
            <span className="font-display text-2xl font-semibold text-white">Café Luna</span>
            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              <span className="hidden sm:inline">{isDark ? 'Tryb jasny' : 'Tryb ciemny'}</span>
              <span aria-hidden>{isDark ? '🌙' : '🌞'}</span>
            </button>
          </nav>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6 text-white">
              <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm uppercase tracking-[0.2em]">
                Nowa jakość kawy
              </p>
              <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Przywitaj noc smaku w Café Luna
              </h1>
              <p className="max-w-xl text-base/relaxed text-white/80 sm:text-lg">
                Zanurz się w aromatycznym świecie kaw speciality, autorskich napojów i wypieków tworzonych z pasją. Odkryj nowe
                rytuały w sercu miasta.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center rounded-full bg-luna-gold px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-luna-gold/40 transition hover:bg-yellow-300"
                >
                  Rezerwacja
                </a>
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Poznaj menu
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-3xl" />
              <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-lg">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">Godziny otwarcia</p>
                <ul className="mt-4 space-y-2 text-white/80">
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
                  </li>
                </ul>
                <div className="mt-6 rounded-2xl bg-black/30 p-4 text-sm text-white/70">
                  <p>
                    Zamów kawę na wynos, a przy odbiorze otrzymasz świeży, ciepły croissant w prezencie do każdej kawy Luna
                    Latte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24 sm:py-32">
        <section id="menu" className="space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-luna-coffee dark:text-luna-gold">Menu</p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Rozświetlające napoje</h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-300">
              Od klasycznych espresso po autorskie kompozycje inspirowane nocnym niebem. Wszystkie napoje przygotowujemy z ziaren
              wypalanych lokalnie.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {drinks.map((drink) => (
              <article
                key={drink.name}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">{drink.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{drink.description}</p>
                </div>
                <p className="mt-6 text-right text-lg font-semibold text-luna-coffee dark:text-luna-gold">{drink.price}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="galeria" className="space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-luna-coffee dark:text-luna-gold">Galeria</p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Wnętrza i smaki</h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-300">
              Uchwyciliśmy chwile, które najlepiej opisują charakter Café Luna – przytulność, światło i aromat świeżo mielonej
              kawy.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((src, index) => (
              <figure
                key={src}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/40 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/40"
              >
                <img
                  src={src}
                  alt={`Zdjęcie ${index + 1} z Café Luna`}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </section>

        <section id="opinie" className="space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-luna-coffee dark:text-luna-gold">Opinie</p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Co mówią goście</h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-300">
              Historie naszych gości są najpiękniejszym potwierdzeniem, że każda chwila w Café Luna jest wyjątkowa.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.author}
                className="flex h-full flex-col justify-between rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60"
              >
                <p className="text-sm text-slate-600 dark:text-slate-300">“{testimonial.quote}”</p>
                <footer className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">{testimonial.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="kontakt" className="space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-luna-coffee dark:text-luna-gold">Kontakt</p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Zarezerwuj stolik</h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-300">
              Zostaw swoje dane, a nasz zespół skontaktuje się z Tobą, aby potwierdzić rezerwację i zadbać o każdy detal
              spotkania.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-6 rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">Dane kontaktowe</h3>
              <dl className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <div>
                  <dt className="font-semibold text-slate-900 dark:text-white">Adres</dt>
                  <dd>Ul. Kawiarniana 12, 00-123 Warszawa</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900 dark:text-white">Telefon</dt>
                  <dd>
                    <a href="tel:+48123456789" className="hover:text-luna-coffee dark:hover:text-luna-gold">
                      +48 123 456 789
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900 dark:text-white">E-mail</dt>
                  <dd>
                    <a href="mailto:kontakt@cafeluna.pl" className="hover:text-luna-coffee dark:hover:text-luna-gold">
                      kontakt@cafeluna.pl
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="rounded-2xl bg-slate-100 p-4 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <p>
                  Wpadnij na warsztaty parzenia kawy w każdy pierwszy piątek miesiąca – limitowana liczba miejsc!
                </p>
              </div>
            </div>

            <form className="space-y-6 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm">
                  <span className="font-semibold text-slate-900 dark:text-white">Imię</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="given-name"
                    placeholder="Twoje imię"
                    className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-luna-coffee focus:ring-2 focus:ring-luna-gold/60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  <span className="font-semibold text-slate-900 dark:text-white">E-mail</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="Twój e-mail"
                    className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-luna-coffee focus:ring-2 focus:ring-luna-gold/60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm">
                <span className="font-semibold text-slate-900 dark:text-white">Wiadomość</span>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Napisz, kiedy chcesz nas odwiedzić"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-luna-coffee focus:ring-2 focus:ring-luna-gold/60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-luna-gold dark:text-slate-900 dark:hover:bg-yellow-300"
              >
                Wyślij zgłoszenie
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-10 text-center text-sm text-slate-300 dark:bg-black/90">
        © {new Date().getFullYear()} Café Luna. Wszystkie prawa zastrzeżone.
      </footer>
    </div>
  );
}

galleryimport { useEffect } from 'react';
import dessertImageWebp from './assets/gallery/dessert.webp';
import dessertImageJpg from './assets/gallery/dessert.jpg';

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
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    alt: 'Barista parząca kawę w przytulnym wnętrzu Café Luna'
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    alt: 'Stół z kawą i deserami w otoczeniu roślin'
  },
  {
    src: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=800&q=80',
    alt: 'Zbliżenie na ręcznie zaparzoną kawę przelewową'
  },
  {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    alt: 'Wnętrze Café Luna z wygodnymi fotelami'
  },
  {
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80',
    alt: 'Zaparzacz do kawy i filiżanka na drewnianym blacie'
  },
  {
    src: 'https://images.unsplash.com/photo-1682596044370-b2b1dc91cf2b?q=80&w=800&auto=format&fit=crop',
    webp: dessertImageWebp,
    alt: 'Kawałek ciasta na talerzyku'
  }
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
            <span className="font-display text-2xl font-semibold text-espresso-900">Café Luna</span>
            <a
              href="#kontakt"
              className="hidden sm:inline-flex btn btn-outline"
            >
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
                  Zanurz się w aromatycznym świecie kaw speciality, autorskich napojów i wypieków tworzonych z pasją. Odkryj nowe
                  rytuały w sercu miasta.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#kontakt"
                  className="btn"
                >
                  Rezerwacja
                </a>
                <a
                  href="#menu"
                  className="btn btn-outline"
                >
                  Poznaj menu
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cream-200/20 via-cream-200/10 to-transparent blur-3xl" />
              <div className="relative rounded-3xl border border-espresso-900/10 bg-espresso-900/80 p-6 shadow-2xl backdrop-blur-lg text-cream-200/90">
                <p className="text-sm font-medium uppercase tracking-[0.2em]">Godziny otwarcia</p>
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
                  </li>
                </ul>
                <div className="mt-6 rounded-2xl bg-espresso-900/60 p-4 text-sm text-cream-200/80">
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
        <section id="menu" className="py-16 md:py-24">
          <div className="text-center">
            <p className="eyebrow uppercase">Menu</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-espresso-900 sm:text-4xl">Rozświetlające napoje</h2>
            <p className="prose-muted mx-auto mt-4 mb-8 max-w-2xl text-lg md:text-xl">
              Od klasycznych espresso po autorskie kompozycje inspirowane nocnym niebem. Wszystkie napoje przygotowujemy z ziaren
              wypalanych lokalnie.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {drinks.map((drink) => (
              <article
                key={drink.name}
                className="group flex flex-col justify-between rounded-xl2 border border-espresso-900/10 bg-cream-100 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-semibold text-espresso-900">{drink.name}</h3>
                  <p className="text-sm text-espresso-800/80">{drink.description}</p>
                </div>
                <p className="mt-6 text-right text-lg font-semibold text-caramel-500">{drink.price}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="galeria" className="py-16 md:py-24">
          <div className="text-center">
            <p className="eyebrow uppercase">Galeria</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-espresso-900 sm:text-4xl">Wnętrza i smaki</h2>
            <p className="prose-muted mx-auto mt-4 mb-8 max-w-2xl text-lg md:text-xl">
              Uchwyciliśmy chwile, które najlepiej opisują charakter Café Luna – przytulność, światło i aromat świeżo mielonej
              kawy.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map(({ src, alt, webp }, index) => (
              <figure
                key={`gallery-${index}`}
                className="group relative overflow-hidden rounded-xl2 border border-espresso-900/10 bg-cream-100/80 shadow-soft transition hover:-translate-y-1 hover:shadow-2xl"
              >
                {webp ? (
                  <picture>
                    <source srcSet={webp} type="image/webp" />
                    <img
                      src={src}
                      alt={alt ?? `Zdjęcie ${index + 1} z Café Luna`}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </picture>
                ) : (
                  <img
                    src={src}
                    alt={alt ?? `Zdjęcie ${index + 1} z Café Luna`}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                )}
              </figure>
            ))}
          </div>
        </section>

        <section id="opinie" className="py-16 md:py-24">
          <div className="text-center">
            <p className="eyebrow uppercase">Opinie</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-espresso-900 sm:text-4xl">Co mówią goście</h2>
            <p className="prose-muted mx-auto mt-4 mb-8 max-w-2xl text-lg md:text-xl">
              Historie naszych gości są najpiękniejszym potwierdzeniem, że każda chwila w Café Luna jest wyjątkowa.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.author}
                className="flex h-full flex-col justify-between rounded-xl2 border border-espresso-900/10 bg-cream-100 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="prose-muted text-base">“{testimonial.quote}”</p>
                <footer className="mt-4 text-sm font-semibold text-espresso-900">{testimonial.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="kontakt" className="py-16 md:py-24">
          <div className="text-center">
            <p className="eyebrow uppercase">Kontakt</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-espresso-900 sm:text-4xl">Zarezerwuj stolik</h2>
            <p className="prose-muted mx-auto mt-4 mb-8 max-w-2xl text-lg md:text-xl">
              Zostaw swoje dane, a nasz zespół skontaktuje się z Tobą, aby potwierdzić rezerwację i zadbać o każdy detal
              spotkania.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-6 rounded-xl2 border border-espresso-900/10 bg-cream-100 p-8 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-espresso-900">Dane kontaktowe</h3>
              <dl className="space-y-4 text-sm text-espresso-800/80">
                <div>
                  <dt className="font-semibold text-espresso-900">Adres</dt>
                  <dd>Ul. Kawiarniana 12, 00-123 Warszawa</dd>
                </div>
                <div>
                  <dt className="font-semibold text-espresso-900">Telefon</dt>
                  <dd>
                    <a href="tel:+48123456789" className="link-underline transition-colors hover:text-caramel-500">
                      +48 123 456 789
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-espresso-900">E-mail</dt>
                  <dd>
                    <a
                      href="mailto:kontakt@cafeluna.pl"
                      className="link-underline transition-colors hover:text-caramel-500"
                    >
                      kontakt@cafeluna.pl
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="rounded-2xl bg-latte-100 p-4">
                <p className="prose-muted text-sm">
                  Wpadnij na warsztaty parzenia kawy w każdy pierwszy piątek miesiąca – limitowana liczba miejsc!
                </p>
              </div>
            </div>

            <form className="space-y-6 rounded-xl2 border border-espresso-900/10 bg-cream-100 p-8 shadow-soft">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm">
                  <span className="font-semibold text-espresso-900">Imię</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="given-name"
                    placeholder="Twoje imię"
                    className="rounded-xl border border-espresso-900/15 bg-cream-50 px-4 py-3 text-espresso-700 shadow-sm outline-none transition focus:border-caramel-500 focus:ring-2 focus:ring-caramel-500/40"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  <span className="font-semibold text-espresso-900">E-mail</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="Twój e-mail"
                    className="rounded-xl border border-espresso-900/15 bg-cream-50 px-4 py-3 text-espresso-700 shadow-sm outline-none transition focus:border-caramel-500 focus:ring-2 focus:ring-caramel-500/40"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm">
                <span className="font-semibold text-espresso-900">Wiadomość</span>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Napisz, kiedy chcesz nas odwiedzić"
                  className="rounded-xl border border-espresso-900/15 bg-cream-50 px-4 py-3 text-espresso-700 shadow-sm outline-none transition focus:border-caramel-500 focus:ring-2 focus:ring-caramel-500/40"
                />
              </label>
              <button type="submit" className="btn w-full">
                Wyślij zgłoszenie
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-espresso-900 py-10 text-center text-sm text-cream-200/80">
        © {new Date().getFullYear()} Café Luna. Wszystkie prawa zastrzeżone.
      </footer>
    </div>
  );
}

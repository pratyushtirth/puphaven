
import Header from "../components/Header";

const WHATSAPP_URL = "https://wa.me/918252909863";

const heroPuppies = [
  {
    name: "Maltipoo",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=900",
  },
  {
    name: "Golden Retriever",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=900",
  },
  {
    name: "French Bulldog",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=900",
  },
  {
    name: "Cavapoo",
    image:
      "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=900",
  },
  {
    name: "Shih Tzu",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=900",
  },
  {
    name: "Puppy",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900",
  },
];

const puppies = [
  {
    name: "Maltipoo",
    description: "Girl, 3 months, with video",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700",
    color: "#d99548",
  },
  {
    name: "Pomeranian",
    description: "Girl, 3 months",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=700",
    color: "#b76b4d",
  },
  {
    name: "Copper",
    description: "Cavapoo, boy, 2 months",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=700",
    color: "#d99548",
  },
  {
    name: "Shih Tzu",
    description: "Girl, 2 months",
    image:
      "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=700",
    color: "#bd7058",
  },
  {
    name: "Shih Tzu",
    description: "Boy, 2 months",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=700",
    color: "#805039",
  },
];

const familyMoments = [
  {
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700",
    caption: "A new best friend for life 🧸❤️",
    rotation: "-rotate-2",
    position: "mt-0",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=700",
    caption: "First cuddles at home 🐾",
    rotation: "rotate-2",
    position: "mt-14",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=700",
    caption: "Our little bundle of joy ❤️",
    rotation: "-rotate-1",
    position: "mt-5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=700",
    caption: "Welcome to the family 🧸",
    rotation: "rotate-2",
    position: "mt-16",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=700",
    caption: "Happiness has four paws 🐾",
    rotation: "rotate-1",
    position: "mt-10",
  },
  {
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700",
    caption: "The sweetest little companion ❤️",
    rotation: "-rotate-2",
    position: "mt-0",
  },
  {
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700",
    caption: "Love at first sight 🐶",
    rotation: "rotate-2",
    position: "mt-14",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=700",
    caption: "Our family is complete ❤️",
    rotation: "-rotate-1",
    position: "mt-6",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#fff8ed] text-[#32190f]">
      <Header />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative flex min-h-[900px] flex-col items-center overflow-hidden bg-[radial-gradient(ellipse_at_center,#fff0d3_0%,#fffaf2_72%)] px-5 pb-[300px] pt-24 text-center sm:min-h-[950px] md:pb-[320px] md:pt-28 lg:min-h-[1050px] lg:pt-32"
      >
        <p
          className="mb-8 text-[24px] font-medium text-[#a94f1c] md:text-[34px] lg:text-[40px]"
          style={{ fontFamily: "cursive" }}
        >
          every puppy is family
        </p>

        <div className="mb-12 h-[3px] w-[320px] max-w-[70vw] rounded-full bg-[#bd612b] md:w-[440px]" />

        <h1 className="mx-auto w-full max-w-[1550px] font-serif text-[clamp(58px,8vw,148px)] font-black leading-[0.91] tracking-[-0.055em] text-[#32190f]">
          Premium teacup
          <br />
          puppies in Dubai
        </h1>

        <p className="mt-9 max-w-[1050px] text-[19px] leading-relaxed text-[#684936] md:text-[27px] lg:text-[32px]">
          Meet your new best friend in our Dubai showroom, or order a rare
          miniature breed from trusted breeders worldwide.
        </p>

        <div className="mt-12 flex w-full flex-col items-center justify-center gap-6 sm:w-auto sm:flex-row">
          <a
            href="#puppies"
            className="flex min-h-[76px] w-full items-center justify-center rounded-full bg-[#a94f1c] px-10 py-5 text-lg font-bold text-white shadow-[0_8px_0_#32190f] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_0_#32190f] sm:w-auto md:min-h-[88px] md:px-14 md:text-[23px]"
          >
            View available puppies
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[76px] w-full items-center justify-center rounded-full border-[3px] border-[#32190f] bg-transparent px-10 py-5 text-lg font-bold text-[#32190f] transition-all duration-200 hover:bg-[#32190f] hover:text-white sm:w-auto md:min-h-[88px] md:px-14 md:text-[23px]"
          >
            Enquire on WhatsApp
          </a>
        </div>

        <span className="absolute right-[19%] top-[65%] hidden -rotate-3 rounded-full border-2 border-[#32190f] bg-white px-6 py-3 text-xl font-medium shadow-sm md:block">
          Shih Tzu
        </span>

        <span className="absolute left-[11%] top-[32%] hidden rotate-12 text-5xl text-[#92552f] lg:block">
          🐾
        </span>

        <span className="absolute right-[8%] top-[38%] hidden -rotate-12 text-5xl text-[#92552f] lg:block">
          🐾
        </span>

        {/* Puppy image gallery */}
        <div className="absolute bottom-0 left-0 flex h-[245px] w-full items-end justify-center gap-2 overflow-hidden px-2 sm:h-[280px] sm:gap-3 md:h-[320px] md:gap-5 md:px-4 lg:h-[365px]">
          {heroPuppies.map((puppy, index) => (
            <div
              key={puppy.name}
              className={`relative h-full w-[16.66%] max-w-[280px] shrink-0 overflow-hidden rounded-t-[150px] border-[3px] border-b-0 border-[#32190f] bg-[#f2d9bd] ${
                index % 2 === 0
                  ? "h-[72%]"
                  : "h-[94%]"
              }`}
            >
              <img
                src={puppy.image}
                alt={puppy.name}
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Scalloped transition */}
        <div className="absolute bottom-0 left-0 z-10 h-12 w-full translate-y-1 bg-[#fff0d0] [clip-path:polygon(0_35%,3%_0,6%_35%,9%_0,12%_35%,15%_0,18%_35%,21%_0,24%_35%,27%_0,30%_35%,33%_0,36%_35%,39%_0,42%_35%,45%_0,48%_35%,51%_0,54%_35%,57%_0,60%_35%,63%_0,66%_35%,69%_0,72%_35%,75%_0,78%_35%,81%_0,84%_35%,87%_0,90%_35%,93%_0,96%_35%,100%_0,100%_100%,0_100%)]" />
      </section>

      {/* MEET THE PUPS */}
      <section
        id="puppies"
        className="relative min-h-[800px] bg-gradient-to-b from-[#ffedca] to-[#ffe4b5] px-5 pb-32 pt-20 md:px-10 md:pt-24"
      >
        <div className="mx-auto max-w-[1550px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-serif text-5xl font-black tracking-tight md:text-7xl lg:text-[90px]">
                Meet the pups
              </h2>

              <p className="mt-4 text-lg text-[#684936] md:text-2xl">
                Real puppies, real photos, looking for their families right now.
              </p>
            </div>

            <a
              href="#contact"
              className="w-fit rounded-full bg-[#a94f1c] px-8 py-5 text-lg font-bold text-white shadow-[0_7px_0_#32190f] transition hover:-translate-y-1"
            >
              See all available puppies
            </a>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-7">
            {puppies.map((puppy, index) => (
              <article
                key={index}
                className="group relative flex flex-col items-center text-center"
              >
                <h3 className="font-serif text-3xl font-black">
                  {puppy.name}
                </h3>

                <p className="mt-2 min-h-8 text-base text-[#684936]">
                  {puppy.description}
                </p>

                <div
                  className="relative mt-5 h-[320px] w-full max-w-[260px] overflow-visible rounded-t-full border-[3px] border-[#32190f] pt-3"
                  style={{ backgroundColor: puppy.color }}
                >
                  <div className="absolute inset-[18px] overflow-hidden rounded-t-full border-2 border-white/30">
                    <img
                      src={puppy.image}
                      alt={puppy.name}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute left-1/2 top-12 -translate-x-1/2 text-3xl text-white/50">
                    🐾
                  </div>

                  <span className="absolute -right-4 top-12 z-10 rotate-6 rounded-full border-2 border-[#32190f] bg-[#fffaf2] px-5 py-2 font-medium shadow-[2px_3px_0_#32190f]">
                    Available
                  </span>

                  <div className="absolute bottom-[35%] right-5 h-5 w-5 rounded-full border-[3px] border-[#32190f] bg-[#f5bd66]" />
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 rounded-full border-2 border-[#32190f] px-6 py-3 font-bold transition hover:bg-[#32190f] hover:text-white"
                >
                  Enquire about {puppy.name}
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-24 w-full border-t-[6px] border-[#32190f] bg-[#dca15e]">
          <div className="h-full w-full bg-[linear-gradient(90deg,transparent_48%,#b97c3f_49%,#b97c3f_50%,transparent_51%)] bg-[length:220px_100%]" />
        </div>
      </section>

      {/* HAPPY FAMILIES */}
      <section
        id="families"
        className="relative overflow-hidden bg-[#fff1d9] px-5 pb-28 pt-24 md:px-10 md:pt-28"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0px, transparent 58px, rgba(190,140,85,0.09) 60px, transparent 63px)",
        }}
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <p
                className="mb-6 text-xl text-[#a34c20] md:text-2xl"
                style={{ fontFamily: "cursive" }}
              >
                our wall of happy endings
              </p>

              <h2 className="font-serif text-7xl font-black leading-[0.95] tracking-tight text-[#28130b] md:text-8xl lg:text-[112px]">
                Happy
                <br />
                families <span className="font-normal text-[#c66a37]">♡</span>
              </h2>

              <p className="mt-10 max-w-3xl text-lg leading-9 text-[#684936] md:text-2xl">
                Nothing makes us happier than seeing our puppies in loving
                homes! Here are some beautiful moments shared by our amazing
                clients after welcoming their furry friends.
              </p>

              <p
                className="mt-7 text-2xl text-[#a34c20] md:text-3xl"
                style={{ fontFamily: "cursive" }}
              >
                64 moments and counting
              </p>
            </div>

            <div className="relative mx-auto mt-8 w-full max-w-[520px] rotate-[1.5deg] rounded-md bg-[#fffdf7] px-6 py-7 shadow-[0_15px_25px_rgba(65,40,20,0.16)] md:px-7 md:py-8">
              <div className="absolute -top-4 left-1/2 h-7 w-32 -translate-x-1/2 rotate-[-3deg] rounded-sm bg-sky-200/60" />

              <div
                className="text-base leading-[1.8] text-[#32190f] md:text-lg"
                style={{
                  fontFamily: "Georgia, serif",
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent 0px, transparent 31px, rgba(140,170,180,0.18) 32px)",
                }}
              >
                “TeddyPups truly made our dream a reality. They supported us at
                every step of the import journey. Our Maltipoo arrived healthy,
                cheerful, and absolutely perfect. Having 24/7 support throughout
                the process gave us complete peace of mind.”
              </div>

              <p
                className="mt-4 text-xl text-[#a34c20] md:text-2xl"
                style={{ fontFamily: "cursive" }}
              >
                Sarah M., Dubai, UAE
              </p>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-2 items-start gap-x-5 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-16">
            {familyMoments.map((moment, index) => (
              <article
                key={index}
                className={`relative ${moment.position} ${moment.rotation} rounded-sm bg-white p-3 pb-5 shadow-[0_12px_20px_rgba(65,40,20,0.18)] transition duration-300 hover:z-10 hover:rotate-0 hover:scale-105`}
              >
                <div
                  className={`absolute -top-3 left-1/2 z-10 h-7 w-24 -translate-x-1/2 rotate-[-5deg] rounded-sm ${
                    index % 3 === 0
                      ? "bg-amber-200/70"
                      : index % 3 === 1
                        ? "bg-sky-200/70"
                        : "bg-rose-200/70"
                  }`}
                />

                <div className="aspect-[4/5] overflow-hidden bg-[#f3e5d0]">
                  <img
                    src={moment.image}
                    alt={moment.caption}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <p
                  className="mt-4 text-center text-sm text-[#513020] md:text-lg"
                  style={{ fontFamily: "cursive" }}
                >
                  {moment.caption}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p
              className="text-2xl text-[#a34c20] md:text-3xl"
              style={{ fontFamily: "cursive" }}
            >
              Every puppy has a story. Every family has a little more love. ❤️
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="bg-[#ffedca] px-6 py-24 text-center"
      >
        <p
          className="mb-4 text-xl text-[#a34c20]"
          style={{ fontFamily: "cursive" }}
        >
          your journey starts here
        </p>

        <h2 className="font-serif text-5xl font-black md:text-7xl">
          How it works
        </h2>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#fff8ed] px-6 py-24 text-center">
        <p
          className="mb-4 text-xl text-[#a34c20]"
          style={{ fontFamily: "cursive" }}
        >
          we are here to help
        </p>

        <h2 className="font-serif text-5xl font-black md:text-7xl">
          Frequently asked questions
        </h2>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="relative overflow-hidden bg-[#241109] px-6 pb-7 pt-20 text-[#fff0cf] md:px-10 md:pt-24"
      >
        <div className="pointer-events-none absolute left-[7%] top-12 text-2xl text-[#e9b85f]">
          ✦
        </div>

        <div className="pointer-events-none absolute left-[24%] top-8 text-sm text-[#e9b85f]">
          ✦
        </div>

        <div className="pointer-events-none absolute left-[45%] top-10 text-lg text-[#e9b85f]">
          ✦
        </div>

        <div className="pointer-events-none absolute right-[7%] top-8 text-6xl text-[#ffe0a1]">
          ☾
        </div>

        <div className="mx-auto grid max-w-[1500px] gap-16 pb-20 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.8fr]">
          <div>
            <h2 className="font-serif text-5xl font-black leading-tight text-[#ffe5b2] md:text-6xl">
              Home, at last.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-9 text-white/80 md:text-xl">
              TeddyPups U.A.E. is a Dubai-based brand specializing in
              miniature puppies, offering premium services and worldwide
              shipping.
            </p>

            <div
              className="relative mt-12 h-[220px] w-[280px]"
              aria-label="A puppy sitting inside a wooden basket"
            >
              <svg
                viewBox="0 0 300 260"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="A puppy sitting inside a wooden basket"
                className="absolute bottom-0 left-0 h-auto w-full"
              >
                <path
                  d="M190 112 Q225 80 230 105 Q232 122 210 130"
                  fill="none"
                  stroke="#9b623a"
                  strokeWidth="13"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="150"
                  cy="139"
                  rx="57"
                  ry="43"
                  fill="#d99b5c"
                  stroke="#754326"
                  strokeWidth="3"
                />
                <ellipse cx="119" cy="164" rx="14" ry="22" fill="#e8b77d" stroke="#754326" strokeWidth="2" />
                <ellipse cx="151" cy="164" rx="14" ry="22" fill="#e8b77d" stroke="#754326" strokeWidth="2" />
                <ellipse cx="184" cy="158" rx="14" ry="22" fill="#bd7b45" stroke="#754326" strokeWidth="2" />
                <ellipse cx="105" cy="65" rx="22" ry="34" fill="#a66a40" transform="rotate(-25 105 65)" stroke="#754326" strokeWidth="3" />
                <ellipse cx="191" cy="65" rx="22" ry="34" fill="#a66a40" transform="rotate(25 191 65)" stroke="#754326" strokeWidth="3" />
                <circle cx="150" cy="83" r="51" fill="#edbd83" stroke="#754326" strokeWidth="3" />
                <ellipse cx="150" cy="101" rx="31" ry="22" fill="#fff0d9" />
                <circle cx="132" cy="82" r="5" fill="#32190f" />
                <circle cx="168" cy="82" r="5" fill="#32190f" />
                <circle cx="134" cy="80" r="1.8" fill="white" />
                <circle cx="170" cy="80" r="1.8" fill="white" />
                <ellipse cx="150" cy="99" rx="8" ry="6" fill="#32190f" />
                <path d="M150 105 Q140 117 133 108 M150 105 Q160 117 167 108" fill="none" stroke="#754326" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="121" cy="103" r="7" fill="#e99b87" opacity=".7" />
                <circle cx="179" cy="103" r="7" fill="#e99b87" opacity=".7" />
                <path d="M34 158 Q150 182 266 158 L241 245 Q150 265 59 245 Z" fill="#d99d50" stroke="#32190f" strokeWidth="5" />
                <path d="M53 193 Q150 214 248 193 M59 222 Q150 242 241 222" fill="none" stroke="#a96e35" strokeWidth="5" />
                <path d="M95 181 L104 251 M150 190 L150 257 M205 181 L196 251" fill="none" stroke="#a96e35" strokeWidth="4" />
                <path d="M34 158 Q150 185 266 158 Q274 178 150 190 Q26 178 34 158Z" fill="#f0bd70" stroke="#32190f" strokeWidth="5" />
              </svg>
            </div>
          </div>

          <div>
            <h3
              className="mb-7 text-2xl text-[#e9b85f]"
              style={{ fontFamily: "cursive" }}
            >
              Explore
            </h3>

            <nav className="flex flex-col gap-5 text-lg font-semibold text-white/85">
              <a href="#puppies" className="transition hover:text-[#e9b85f]">
                Available puppies
              </a>
              <a href="#families" className="transition hover:text-[#e9b85f]">
                Gone home
              </a>
              <a href="#families" className="transition hover:text-[#e9b85f]">
                Happy families
              </a>
              <a href="#how-it-works" className="transition hover:text-[#e9b85f]">
                How it works
              </a>
              <a href="#how-it-works" className="transition hover:text-[#e9b85f]">
                Delivery & collection
              </a>
              <a href="#faq" className="transition hover:text-[#e9b85f]">
                FAQ
              </a>
              <a href="#contact" className="transition hover:text-[#e9b85f]">
                Visit & contact
              </a>
            </nav>
          </div>

          <div>
            <h3
              className="mb-7 text-2xl text-[#e9b85f]"
              style={{ fontFamily: "cursive" }}
            >
              Say hello
            </h3>

            <div className="space-y-5 text-lg leading-relaxed text-white/85">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-[#e9b85f]"
              >
                WhatsApp +91 8252909863
              </a>

              <a
                href="mailto:info@instabizweb.com"
                className="block transition hover:text-[#e9b85f]"
              >
                info@instabizweb.com
              </a>

              <p>Downtown Dubai, United Arab Emirates</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Instagram", "TikTok", "Facebook"].map((social) => (
                <a
                  key={social}
                  href="#contact"
                  className="rounded-full border-2 border-white/30 px-5 py-3 font-bold transition hover:border-[#e9b85f] hover:text-[#e9b85f]"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-5 pt-7 text-white/65 sm:flex-row">
            <p className="text-base">🧸 &nbsp; © 2026 TeddyPups U.A.E.</p>

            <p
              className="text-xl text-[#e9b85f]"
              style={{ fontFamily: "cursive" }}
            >
              every puppy is family
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

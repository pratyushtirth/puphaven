
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Puppies", href: "#puppies" },
  { label: "Happy families", href: "#families" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Visit & contact", href: "#contact" },
];

const WHATSAPP_URL = "https://wa.me/918252909863";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#eadcc9] bg-[#fffdf8] shadow-sm">
      <div className="mx-auto flex min-h-[100px] w-full max-w-[1800px] items-center justify-between gap-5 px-5 py-4 md:min-h-[120px] md:px-8 lg:px-10 2xl:px-14">

        {/* Logo */}
        <a
          href="#home"
          className="flex shrink-0 items-center gap-3"
        >
          <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-[5px] border-[#c77c35] bg-[#fff0d5] text-3xl shadow-sm md:h-[84px] md:w-[84px] md:text-4xl">
            🐶
          </div>

          <span className="font-serif text-[27px] font-extrabold tracking-tight text-[#32190f] md:text-[38px]">
            TeddyPups
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-4 xl:flex 2xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-base font-semibold text-[#32190f] transition-colors duration-200 hover:text-[#a94f1c] xl:text-lg 2xl:text-xl"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* WhatsApp Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 whitespace-nowrap rounded-full bg-[#197b50] px-6 py-4 text-base font-bold text-white shadow-[0_7px_0_#32190f] transition-all duration-200 hover:-translate-y-1 hover:bg-[#146b44] md:px-8 md:py-5 md:text-lg"
        >
          WhatsApp us
        </a>
      </div>

      {/* Decorative bottom edge */}
      <div className="h-2 w-full bg-[radial-gradient(ellipse_at_50%_0%,#fffdf8_65%,transparent_70%)] bg-[length:45px_16px] bg-repeat-x" />
    </header>
  );
}

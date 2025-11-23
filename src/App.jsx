import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  FlaskConical,
  HeartHandshake,
  Sparkles,
  MessagesSquare,
  Video,
  Megaphone,
  Feather,
  Globe,
  ShieldCheck,
  ScrollText,
  Menu,
  X,
} from "lucide-react";

// ---------- Utilities ----------
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24 py-16 md:py-24">
    <div className="mx-auto w-full max-w-6xl px-4">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
        {title && (
          <header className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#444444] italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 max-w-3xl text-base md:text-lg leading-relaxed text-[#444444]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                {subtitle}
              </p>
            )}
            <div className="mt-6 h-px bg-gradient-to-r from-[#D8B27E]/0 via-[#D8B27E] to-[#D8B27E]/0" />
          </header>
        )}
        {children}
      </motion.div>
    </div>
  </section>
);

// ---------- Head / Fonts / Favicon injector ----------
const HeadLinks = () => {
  useEffect(() => {
    document.title = "Renata Davydova — Рената Ю. Давыдова";

    const links = [];
    const pre1 = document.createElement("link");
    pre1.rel = "preconnect";
    pre1.href = "https://fonts.googleapis.com";
    links.push(pre1);

    const pre2 = document.createElement("link");
    pre2.rel = "preconnect";
    pre2.href = "https://fonts.gstatic.com";
    pre2.crossOrigin = "anonymous";
    links.push(pre2);

    const fonts = document.createElement("link");
    fonts.rel = "stylesheet";
    fonts.href =
      "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Raleway:wght@400;600&display=swap";
    links.push(fonts);

    const favicon = document.createElement("link");
    favicon.rel = "icon";
    const svg =
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
        <rect width='64' height='64' rx='12' fill='%23D8B27E'/>
        <text x='18' y='41' font-size='28' font-family='Times, \\'Playfair Display\\'' fill='%23FAF8F5' font-weight='600'>RD</text>
      </svg>`;
    favicon.href = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    links.push(favicon);

    links.forEach((el) => document.head.appendChild(el));
    return () => links.forEach((el) => document.head.removeChild(el));
  }, []);
  return null;
};

// ---------- Decorative Background ----------
const Background = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
    {/* soft light fabric-like gradient */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(1200px 800px at 10% 0%, #FFFFFF 0%, #FAF8F5 40%, #F3EDE7 100%)",
      }}
    />
    {/* subtle noise overlay */}
    <div
      className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,\
            <svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 100\\' width=\\'100\\' height=\\'100\\'>\
              <filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.9\\' numOctaves=\\'2\\'/></filter>\
              <rect width=\\'100\\' height=\\'100\\' filter=\\'url(%23n)\\' opacity=\\'0.5\\'/>\
            </svg>')",
        backgroundSize: "200px 200px",
      }}
    />
    {/* corner ornaments - цветочные узоры */}
    <div className="absolute right-0 top-0 h-40 w-40 opacity-30">
      <svg width="160" height="160" viewBox="0 0 160 160" className="text-[#D8B27E]">
        <path
          d="M120 20 Q140 30, 140 50 Q140 70, 120 70 Q100 70, 100 50 Q100 30, 120 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
        <path
          d="M110 30 Q125 35, 125 45 Q125 55, 110 55 Q95 55, 95 45 Q95 35, 110 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.4"
        />
        <circle cx="120" cy="40" r="3" fill="currentColor" opacity="0.5" />
      </svg>
    </div>
    <div className="absolute left-0 bottom-0 h-40 w-40 opacity-30">
      <svg width="160" height="160" viewBox="0 0 160 160" className="text-[#D8B27E]" transform="rotate(180 80 80)">
        <path
          d="M120 20 Q140 30, 140 50 Q140 70, 120 70 Q100 70, 100 50 Q100 30, 120 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
        <path
          d="M110 30 Q125 35, 125 45 Q125 55, 110 55 Q95 55, 95 45 Q95 35, 110 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.4"
        />
        <circle cx="120" cy="40" r="3" fill="currentColor" opacity="0.5" />
      </svg>
    </div>
    {/* дополнительные мягкие акценты */}
    <div className="absolute right-10 top-20 h-32 w-32 rounded-full bg-[#EFD8D0]/20 blur-2xl" />
    <div className="absolute left-10 bottom-20 h-32 w-32 rounded-full bg-[#EFD8D0]/20 blur-2xl" />
  </div>
);

// ---------- Pill value chip ----------
const ValueChip = ({ children }) => (
  <span className="mr-2 mb-2 inline-block rounded-full border border-[#D8B27E] bg-[#EFD8D0]/30 px-3 py-1 text-sm text-[#7C3E2E] shadow-sm">
    {children}
  </span>
);

// ---------- Floating nav button ----------
const NavButton = ({ href, label, onClick, className = "", variant = "ghost" }) => {
  const base =
    "relative inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5";
  const ghost =
    "border border-[#D8B27E]/40 bg-white/80 text-[#7C3E2E] shadow-[0_6px_18px_rgba(124,62,46,0.18)] hover:bg-[#FAF8F5] hover:shadow-[0_12px_28px_rgba(124,62,46,0.2)]";
  const filled =
    "border border-[#D8B27E] bg-[#D8B27E] text-[#FAF8F5] shadow-[0_8px_20px_rgba(216,178,126,0.4)] hover:bg-[#c49a62] hover:shadow-[0_14px_30px_rgba(124,62,46,0.3)]";

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${base} ${variant === "filled" ? filled : ghost} ${className}`}
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      <span className="relative z-10">{label}</span>
      <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-black/10 opacity-70" />
    </a>
  );
};

// ---------- Card ----------
const Card = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -2, transition: { duration: 0.2 } }}
    className={`rounded-2xl border border-[#D8B27E]/50 bg-[#F3EDE7] p-6 shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] ${className}`}
  >
    {children}
  </motion.div>
);

// ---------- Main Component ----------
export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    ["Обо мне", "about"],
    ["Наука и образование", "science"],
    ["Школа RUSSIA", "school"],
    ["Путь в науку РАН", "ran"],
    ["Культура и женственность", "culture"],
    ["Медиа", "media"],
    ["@RENARUSSIA", "renarussia"],
    ["Фото", "gallery"],
    ["Обратная связь", "contact"],
  ];

  const galleryPhotos = [
    { src: "/photos/hero.jpg", label: "Портрет" },
    { src: "/photos/photo1.jpg", label: "Научный форум" },
    { src: "/photos/photo2.jpg", label: "Образовательный проект" },
    { src: "/photos/photo3.jpg", label: "Выступление" },
    { src: "/photos/photo4.jpg", label: "Общение с участниками" },
    { src: "/photos/photo5.jpg", label: "Культурная встреча" },
    { src: "/photos/photo6.jpg", label: "Совместный проект" },
    { src: "/photos/photo7.jpg", label: "Организация событий" },
    { src: "/photos/photo8.jpg", label: "Наставничество" },
    { src: "/photos/photo9.jpg", label: "Работа с молодежью" },
    { src: "/photos/photo10.jpg", label: "Командная работа" },
    { src: "/photos/school.png", label: "Школа «RUSSIA»" },
  ];

  return (
    <div className="min-h-screen text-[#444444]" style={{ fontFamily: "'Open Sans', sans-serif", scrollBehavior: "smooth" }}>
      <HeadLinks />
      <Background />

      {/* Header / Nav */}
      <header className="sticky top-0 z-40 border-b border-[#D8B27E]/40 backdrop-blur bg-[#FAF8F5]/80">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8B27E] text-[#FAF8F5] shadow-md">
              <span className="text-lg font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>RD</span>
            </div>
            <div className="leading-tight">
              <div className="text-base font-semibold tracking-wide" style={{ fontFamily: "'Raleway', sans-serif" }}>
                Renata Davydova
              </div>
              <div className="text-xs italic opacity-80" style={{ fontFamily: "'Playfair Display', serif" }}>
                наука · культура · воспитание
              </div>
            </div>
          </a>
          <nav className="hidden gap-4 md:flex flex-wrap">
            {navItems.map(([label, href]) => (
              <NavButton key={href} href={`#${href}`} label={label} />
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden md:inline-block">
              <NavButton href="#contact" label="Связаться" variant="filled" />
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#EFD8D0]/30 transition-colors"
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-[#7C3E2E]" /> : <Menu className="h-6 w-6 text-[#7C3E2E]" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-[#D8B27E]/40 bg-[#FAF8F5]/95 backdrop-blur"
            >
              <nav className="px-4 py-4 space-y-2">
                <div className="grid gap-3">
                  {navItems.map(([label, href]) => (
                    <NavButton
                      key={href}
                      href={`#${href}`}
                      label={label}
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full justify-center"
                    />
                  ))}
                </div>
                <div className="px-4">
                  <NavButton
                    href="#contact"
                    label="Связаться"
                    variant="filled"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full justify-center"
                  />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl leading-tight text-[#444444]" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              Рената Юнировна Давыдова
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed">
              Общественный деятель, учёный, популяризатор науки и организатор междисциплинарных проектов в сфере образования, культуры и патриотического воспитания молодёжи.
            </p>
            <p className="mt-6 text-[#7C3E2E] font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>
              Моя миссия — напомнить, что женственность, культура и наука не противоположны, а дополняют друг друга, создавая новое качество жизни и мышления.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#about" className="rounded-full border border-[#D8B27E] bg-white/70 px-5 py-2 text-sm shadow hover:bg-[#EFD8D0]/30 transition-all hover:shadow-md">
                Узнать больше
              </a>
              <a href="#contact" className="rounded-full bg-[#D8B27E] px-5 py-2 text-sm font-semibold text-[#FAF8F5] shadow hover:shadow-md transition-all active:scale-[0.98]">
                Присоединиться к проектам
              </a>
            </div>
            <div className="mt-6">
              {["Развитие", "Ответственность", "Культура", "Знание", "Любовь к Родине"].map((v) => (
                <ValueChip key={v}>{v}</ValueChip>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <Card className="relative overflow-hidden p-0">
              <div className="relative h-full">
                <img src="/photos/hero.jpg" alt="Рената Давыдова" className="h-80 w-full object-cover md:h-[440px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/70 via-[#2B1B12]/35 to-transparent" />
                <div className="absolute bottom-0 p-6 text-[#FAF8F5]">
                  <p className="text-lg leading-relaxed drop-shadow" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                    «Свет знания зажигается там, где встречаются разум, сердце и дух. Моя цель — соединять науку и культуру, чтобы воспитывать новое поколение созидателей».
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4 text-sm" style={{ fontFamily: "'Raleway', sans-serif" }}>
                    <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Лидер новых инициатив</span>
                    <span className="inline-flex items-center gap-2"><FlaskConical className="h-4 w-4"/> Молодой учёный</span>
                    <span className="inline-flex items-center gap-2"><GraduationCap className="h-4 w-4"/> Наставник молодёжи</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="Обо мне" subtitle="Биография, образование, общественная и научная деятельность">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <h3 className="text-xl font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Личность и путь</h3>
            <p className="mt-3 leading-relaxed">
              Рената Давыдова — общественный деятель, исследователь и популяризатор науки, автор уникальных методик патриотических детско-юношеских программ воспитания и образовательных проектов, формирующих духовно-нравственные ориентиры в обществе.
            </p>
            <div className="mt-4 rounded-xl border border-[#D8B27E]/40 bg-white/60 p-4">
              <ul className="list-disc pl-5 leading-relaxed">
                <li>Руководитель Молодёжной секции Комиссии РАН по изучению научного наследия выдающихся учёных.</li>
                <li>Создатель и руководитель проекта «Путь в науку» РАН — популяризация науки среди молодёжи и поддержка молодых учёных России.</li>
                <li>Основатель патриотической детско-юношеской школы «RUSSIA», где воспитываются ценности гражданственности, уважения к традициям и любви к Родине.</li>
                <li>Модератор научных и образовательных мероприятий, форумов и конференций РАН.</li>
                <li>Организатор Международной Молодёжной Лаборатории Будущего — объединение потенциала молодёжи, науки и образования.</li>
                <li>Участник культурных и образовательных инициатив, связанных с развитием женского образования, просвещения и благотворительности.</li>
              </ul>
            </div>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Философия</h3>
            <p className="mt-3 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              Женственность, культура и наука не противоположны — они дополняют друг друга, раскрывая внутреннюю силу личности и создавая новое качество мышления.
            </p>
            <div className="mt-6 h-px bg-gradient-to-r from-[#D8B27E]/0 via-[#D8B27E] to-[#D8B27E]/0" />
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm" style={{ fontFamily: "'Raleway', sans-serif" }}>
              <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4"/> Свет</span>
              <span className="inline-flex items-center gap-2"><Feather className="h-4 w-4"/> Женственность</span>
              <span className="inline-flex items-center gap-2"><ScrollText className="h-4 w-4"/> Достоинство</span>
              <span className="inline-flex items-center gap-2"><HeartHandshake className="h-4 w-4"/> Гармония</span>
            </div>
          </Card>
        </div>
      </Section>

      {/* Science & Education */}
      <Section id="science" title="Наука и образование" subtitle="Исследования, участие в РАН, публикации">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <div className="flex items-center gap-3">
              <FlaskConical className="h-5 w-5" />
              <h4 className="font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Исследования</h4>
            </div>
            <p className="mt-2 text-sm leading-relaxed">
              Междисциплинарные направления, соединяющие гуманитарные и естественно-научные подходы, ориентированные на воспитание и развитие молодёжи.
            </p>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5" />
              <h4 className="font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Российская академия наук</h4>
            </div>
            <p className="mt-2 text-sm leading-relaxed">
              Руководство молодёжной секцией, организация форумов и конференций, популяризация научного наследия выдающихся учёных.
            </p>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5" />
              <h4 className="font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Публикации</h4>
            </div>
            <p className="mt-2 text-sm leading-relaxed">
              Научные и просветительские статьи, методические материалы и программы воспитания. (Здесь можно разместить ссылки на публикации.)
            </p>
          </Card>
        </div>
      </Section>

      {/* School RUSSIA */}
      <Section id="school" title="Школа «RUSSIA»" subtitle="Патриотическое воспитание молодёжи: программы, фото и видео">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h4 className="font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Программы</h4>
            <p className="mt-2 text-sm leading-relaxed">
              Образовательные модули, клубы и наставничество, формирующие ценности гражданственности, уважения к традициям и любви к Родине.
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Мастерские и проекты</h4>
            <p className="mt-2 text-sm leading-relaxed">
              Командные исследования, волонтёрские инициативы, творческие и научные лаборатории, межрегиональные обмены.
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Медиа-галерея</h4>
            <p className="mt-2 text-sm leading-relaxed">
              Фото и видео мероприятий, вдохновляющие истории участников. (Здесь можно встроить альбом или плейлист.)
            </p>
          </Card>
        </div>
      </Section>

      {/* Path to Science RAN */}
      <Section id="ran" title="Проект «Путь в науку» РАН" subtitle="История проекта, партнёры, возможности для молодёжи">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h4 className="font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>О проекте</h4>
            <p className="mt-2 text-sm leading-relaxed">
              «Путь в науку» — инициатива, открывающая молодёжи практические шаги к исследовательской деятельности: лекции, стажировки, конкурсы и совместные лаборатории с учёными.
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Партнёры</h4>
            <p className="mt-2 text-sm leading-relaxed">
              Российская академия наук, научные институты, образовательные организации, культурные центры и благотворительные фонды. (Список партнёров и логотипы.)
            </p>
          </Card>
        </div>
      </Section>

      {/* Culture & Femininity */}
      <Section id="culture" title="Культура и женственность" subtitle="Проекты для женщин, просвещение, благотворительность. Здесь же — мои книги.">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h4 className="font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Просветительские циклы</h4>
            <p className="mt-2 text-sm leading-relaxed">
              Встречи, лекции и дискуссии о гармонии внутреннего мира, лидерстве и семейных ценностях.
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Благотворительные инициативы</h4>
            <p className="mt-2 text-sm leading-relaxed">
              Поддержка проектов для девочек и молодых женщин, развитие культурных практик и наставничество.
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Книги</h4>
            <p className="mt-2 text-sm leading-relaxed">
              Отдельная страница с аннотациями и возможностью скачать/заказать. (Кнопки и карточки книг появятся, когда будут данные.)
            </p>
          </Card>
        </div>
      </Section>

      {/* Media */}
      <Section id="media" title="Медиа" subtitle="Выступления, интервью, пресс-материалы, RuTube и соцсети">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <div className="flex items-center gap-3"><Video className="h-5 w-5"/><h4 className="font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Выступления</h4></div>
            <p className="mt-2 text-sm">Подборка лекций и докладов. (Добавим ссылки/видео.)</p>
          </Card>
          <Card>
            <div className="flex items-center gap-3"><Megaphone className="h-5 w-5"/><h4 className="font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Интервью и пресса</h4></div>
            <p className="mt-2 text-sm">Интервью и публикации в СМИ с цитатами и материалами для прессы.</p>
          </Card>
          <Card>
            <div className="flex items-center gap-3"><Globe className="h-5 w-5"/><h4 className="font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Социальные сети</h4></div>
            <p className="mt-2 text-sm">Ссылки на официальные каналы: RuTube, VK, Telegram и др. (Подставим реальные ссылки.)</p>
          </Card>
        </div>
      </Section>

      {/* @RENARUSSIA */}
      <Section id="renarussia" title="@RENARUSSIA" subtitle="Интеллектуально-культурное патриотическое объединение">
        <Card>
          <p className="leading-relaxed">
            RENARUSSIA — это пространство, где наука, духовность и культура соединяются в созидательную силу развития. Проект вдохновляет молодёжь к познанию, женщину — к раскрытию внутренней силы, а общество — к осознанию своей идентичности и родовой преемственности, где знания и ценности становятся опорой личности, семьи и страны.
          </p>
          <a
            href="https://t.me/RENARUSSIA"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#D8B27E] bg-white/80 px-4 py-2 text-sm shadow hover:bg-[#EFD8D0]/30"
          >
            <MessagesSquare className="h-4 w-4"/> Перейти в Telegram-канал
          </a>
        </Card>
      </Section>

      {/* Gallery */}
      <Section id="gallery" title="Фотоархив" subtitle="Свежие кадры с мероприятий, лекций и встреч">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {galleryPhotos.map(({ src, label }, idx) => (
            <motion.div
              key={src}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.03 } },
              }}
              className="group relative overflow-hidden rounded-2xl border border-[#D8B27E]/50 bg-white/70 shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
            >
              <img src={src} alt={label} className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2B1B12]/60 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-3 rounded-full bg-[#FAF8F5]/90 px-3 py-1 text-xs font-semibold text-[#7C3E2E] shadow">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Обратная связь" subtitle="Оставьте контакты и вопрос — и получите приглашение к участию в проектах">
        <Card>
          <form
            className="grid gap-4 md:grid-cols-2"
            method="POST"
            action="#"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Спасибо! Ваша заявка отправлена. Мы свяжемся с вами по email.");
            }}
          >
            <div className="md:col-span-1">
              <label className="mb-1 block text-sm font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Имя</label>
              <input required type="text" name="name" placeholder="Ваше имя" className="w-full rounded-xl border border-[#D8B27E]/50 bg-white/80 px-4 py-2 outline-none placeholder:opacity-60 focus:ring-2 focus:ring-[#D8B27E]/50" />
            </div>
            <div className="md:col-span-1">
              <label className="mb-1 block text-sm font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Email</label>
              <input required type="email" name="email" placeholder="name@example.com" className="w-full rounded-xl border border-[#D8B27E]/50 bg-white/80 px-4 py-2 outline-none placeholder:opacity-60 focus:ring-2 focus:ring-[#D8B27E]/50" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1 block text-sm font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Сообщение</label>
              <textarea required name="message" rows={5} placeholder="Кратко опишите, как вы хотите присоединиться или какой вопрос вас интересует" className="w-full rounded-xl border border-[#D8B27E]/50 bg-white/80 px-4 py-2 outline-none placeholder:opacity-60 focus:ring-2 focus:ring-[#D8B27E]/50" />
            </div>
            <div className="md:col-span-2 flex items-center justify-between">
              <div className="text-xs opacity-70">Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных.</div>
              <button type="submit" className="rounded-full bg-[#D8B27E] px-6 py-2 text-sm font-semibold text-[#FAF8F5] shadow hover:shadow-md transition-all active:scale-[0.98]">
                Отправить
              </button>
            </div>
          </form>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="border-t border-[#D8B27E]/40 bg-[#FAF8F5]/80">
        <div className="mx-auto w-full max-w-6xl px-4 py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D8B27E] text-[#FAF8F5] shadow-md">
                <span className="text-sm font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>RD</span>
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>Renata Davydova</div>
                <div className="text-xs italic opacity-80" style={{ fontFamily: "'Playfair Display', serif" }}>разум · сердце · дух</div>
              </div>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm" style={{ fontFamily: "'Raleway', sans-serif" }}>
              <a href="#about" className="hover:text-[#7C3E2E]">Обо мне</a>
              <a href="#science" className="hover:text-[#7C3E2E]">Наука</a>
              <a href="#school" className="hover:text-[#7C3E2E]">Школа</a>
              <a href="#ran" className="hover:text-[#7C3E2E]">РАН</a>
              <a href="#culture" className="hover:text-[#7C3E2E]">Культура</a>
              <a href="#media" className="hover:text-[#7C3E2E]">Медиа</a>
              <a href="#contact" className="hover:text-[#7C3E2E]">Контакты</a>
            </nav>
          </div>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 text-xs opacity-70 md:flex-row">
            <div>© {year} Renata Davydova. Все права защищены.</div>
            <div>Сделано с любовью к науке, культуре и России.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

# SKAN JUS — Landing Page

Премиум лендинг юридических услуг для норвежской юридической фирмы. Построен на React 19, TypeScript, Framer Motion, Lenis и Tailwind CSS v4.

## 🎨 О Проекте

SKAN JUS — это изысканный лендинг для вымышленной норвежской юридической фирмы, демонстрирующий премиум юридические услуги с элегантными анимациями, плавной прокруткой и кастомным курсором. Включает темную эстетику с золотыми акцентами, независимые от частоты кадров анимации и полностью адаптивный дизайн.

## ✨ Возможности

- **Кастомный Треугольный Курсор** — Только для pointer-fine устройств, нативный курсор на touch
- **Lenis Smooth Scroll** — Временной (1.2s длительность), независимый от частоты кадров
- **Framer Motion Анимации** — Scroll-триггерные входные анимации с поддержкой reduced-motion
- **Адаптивный Дизайн** — Mobile-first подход, анимации отключены на мобильных
- **Tailwind CSS v4** — Современный utility-first стилинг с кастомными дизайн-токенами
- **TypeScript** — Полная типобезопасность
- **React 19** — Последний React с оптимизациями компилятора

## 🛠️ Технологии

| Инструмент | Назначение |
|------|---------|
| React 19 + TypeScript | UI фреймворк |
| Vite 8 | Инструмент сборки |
| Tailwind CSS v4 | Utility-first стилинг |
| Framer Motion | Scroll и входные анимации |
| Lenis | Smooth scroll (независимый от частоты кадров) |

## 🚀 Начало Работы

```bash
bun install
bun run dev
```

```bash
bun run build
bun run preview
```

## 📁 Структура Проекта

```
src/
├── components/
│   ├── ui/
│   │   ├── GoldDivider.tsx       # Анимированная золотая разделительная линия
│   │   ├── EyebrowLabel.tsx      # Small-caps метка с декоративной линией
│   │   ├── Section.tsx           # Адаптивная обертка секции
│   │   └── SectionHeader.tsx     # Eyebrow + h2 паттерн заголовка
│   ├── CustomCursor.tsx          # Треугольный курсор (только pointer:fine)
│   ├── Navbar.tsx                # Sticky навигация с мобильным бургером
│   ├── Hero.tsx                  # Полноэкранный hero с параллаксом
│   ├── Expertise.tsx             # 3-колоночные области практики
│   ├── TrustBlock.tsx            # Статистика + изображение split
│   ├── TransitionDivider.tsx     # Орнаментальный алмазный разделитель
│   ├── Biography.tsx             # Биография партнера с фото
│   ├── Process.tsx               # 4-шаговый процесс grid
│   ├── Testimonials.tsx          # Отзывы клиентов
│   ├── CTASection.tsx            # Финальный CTA
│   └── Footer.tsx                # Footer с навигационными колонками
├── constants/content.ts          # Весь контент/данные в одном месте
├── hooks/useScrollAnimation.ts   # Варианты анимации + useAnimationConfig
├── lib/lenis.ts                  # Инициализация Lenis
└── types/index.ts                # TypeScript интерфейсы
```

## 🎯 Ключевые Секции

- **Navbar** — Sticky навигация с мобильным бургер-меню
- **Hero** — Полноэкранный hero с параллакс-эффектом
- **Expertise** — Трехколоночная демонстрация областей практики
- **TrustBlock** — Статистика и изображение split-макет
- **Biography** — Биография партнера с фото
- **Process** — Четырехшаговый процесс grid
- **Testimonials** — Секция отзывов клиентов
- **CTASection** — Финальный call-to-action
- **Footer** — Многоколоночный footer с навигацией

## 🎨 Дизайн-Токены

Определены в `src/index.css` через Tailwind v4 `@theme` — автогенерирует utility-классы:

```css
@theme {
  --color-gold: #D4AF37;   /* → text-gold, bg-gold, border-gold */
  --color-bg: #0A0A0A;     /* → bg-bg */
  --font-fraunces: ...;    /* → font-fraunces */
  --font-instrument: ...;  /* → font-instrument */
}
```

## 🎯 Заметки по Анимации

**Lenis** инициализирован с `duration: 1.2s` (временной, не `lerp`) — полностью независим от частоты кадров, корректен при 60 Hz, 120 Hz и 144 Hz+.

**Framer Motion** анимации отключены на:
- Мобильных экранах (`< 768px`) — элементы рендерятся немедленно, без задержки входа
- OS-уровне настройки `prefers-reduced-motion`

**Кастомный курсор** (треугольная стрелка) показывается только на `pointer: fine` устройствах. На touch/мобильных сохраняется нативный курсор.

## 🎯 Цели Обучения

- React 19 с TypeScript 6
- Tailwind CSS v4 дизайн-токены
- Интеграция Lenis smooth scroll
- Реализация кастомного курсора
- Framer Motion scroll анимации
- Адаптивный дизайн с учетом анимаций
- Доступность (поддержка reduced-motion)

---

**Примечание:** Портфолио-проект, демонстрирующий премиум дизайн лендинга с изысканными анимациями.

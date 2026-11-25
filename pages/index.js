import Head from "next/head";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";
import data from "../data.json";

// WebGL only exists in the browser; the static export renders the labels without it.
const Docent = dynamic(() => import("../components/docent"), { ssr: false });

const EMAIL = "mailto:bnguimeya007@gmail.com";
const RESUME = "https://resume.io/r/7bUEJMzgT";
const GITHUB = "https://github.com/nobill1";

const ROOMS = [
  ["top", "Kosi"],
  ["profile", "Profile"],
  ["work", "Work"],
  ["assessments", "Assessments"],
  ["inquiry", "Inquiry"],
];

const MATERIALS = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Vue",
  "Svelte", "Angular", "Node.js", "Python", "Django", "SQL", "PostgreSQL",
  "Git", "Figma", "UI/UX", "Adobe Suite",
];

const ext = { target: "_blank", rel: "noopener noreferrer" };

// One label schema for every object on the page: name, what, built with, where.
function Label({ as: H = "h3", name, what, built, children }) {
  return (
    <div className="kn-label">
      <H className="kn-label__name">{name}</H>
      <dl>
        <div><dt>What</dt><dd>{what}</dd></div>
        {built && <div><dt>Built with</dt><dd>{built}</dd></div>}
        <div><dt>Where</dt><dd className="kn-links">{children}</dd></div>
      </dl>
    </div>
  );
}

// How far the visitor is through a pinned section, 0..1.
function progress(el, vh) {
  if (!el) return 0;
  const r = el.getBoundingClientRect();
  return Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - vh)));
}

export default function Index() {
  const docent = useRef({ yaw: 0, reduced: false });
  const dockEl = useRef(null);
  const [room, setRoom] = useState("top");
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false); // theme is unknown during the static render
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === "dark";

  // Mount the scroll engine on the page and tear it down on route change.
  useEffect(() => {
    let api;
    let dead = false;
    import("../lib/scrollcraft").then(() => {
      if (!dead) api = window.ScrollCraft.mount(document.getElementById("kn"));
    });
    return () => {
      dead = true;
      api && api.destroy && api.destroy();
    };
  }, []);

  // Signature move: the docent's dock position and gaze follow the scroll.
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame;
    const tick = () => {
      const vh = innerHeight;
      const s = docent.current;
      s.reduced = reduced.matches;
      const heroP = progress(document.getElementById("top"), vh);
      const dock = Math.min(1, Math.max(0, (heroP - 0.45) / 0.5));
      dockEl.current && dockEl.current.style.setProperty("--dock", dock.toFixed(4));
      dockEl.current && dockEl.current.style.setProperty("--focus", (s.focus || 0).toFixed(4));

      let current = "top";
      for (const [id] of ROOMS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= vh * 0.5) current = id;
      }
      setRoom((r) => (r === current ? r : current));
      // The peak: he steps forward while the work passes, then settles back.
      const want = current === "work" ? 1 : 0;
      s.focus = (s.focus || 0) + (want - (s.focus || 0)) * 0.08;

      if (s.reduced) s.yaw = 0;
      else if (current === "top") s.yaw = heroP * Math.PI * 2;
      else if (current === "profile") s.yaw = 0.55;
      else if (current === "work") {
        // Sweep from screen right to centre once per exhibit, as each one passes.
        const n = data.projects.length + 2;
        const f = (progress(document.getElementById("work"), vh) * n) % 1;
        s.yaw = 0.15 + 0.8 * (1 - f);
      } else if (current === "assessments") s.yaw = 0.35;
      else s.yaw = 0; // inquiry: he turns to face you
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <Head>
        <title>Kosi Nguimeya · Fullstack developer, Yaounde</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap"
        />
        <link rel="stylesheet" href="/scrollcraft/scrollcraft.css" />
        <link rel="stylesheet" href="/scrollcraft/kosi.css" />
      </Head>

      <div id="kn">
        <div className="sc-grain" aria-hidden="true"></div>

        <header className="kn-bar">
          <a href="#top" className="kn-mark" aria-label="Kosi Nguimeya, back to top">
            <img src="/logo_dark.svg" width="47" height="48" alt="" />
          </a>
          <nav aria-label="Index of rooms" className="kn-index">
            <ul>
              {ROOMS.map(([id, name]) => (
                <li key={id}>
                  <a href={`#${id}`} aria-current={room === id ? "true" : undefined}>{name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="kn-bar__end">
            {mounted && (
              <button
                type="button"
                className="kn-theme"
                aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
                onClick={() => setTheme(dark ? "light" : "dark")}
              >
                {dark ? <HiSun aria-hidden="true" /> : <HiMoon aria-hidden="true" />}
              </button>
            )}
            <a href={EMAIL} className="kn-bar__cta">Get in touch</a>
          </div>
        </header>

        <div className="kn-docent" ref={dockEl}>
          <Docent state={docent.current} dark={dark} />
        </div>

        <main>
          {/* Maker: the developer as object one. Wordmark behind him, label in front. */}
          <section id="top" data-sc-act="pin" data-sc-span="2.2">
            <div data-sc-stage className="kn-hero">
              <div className="kn-hero__glow" data-sc-parallax="-0.6" aria-hidden="true"></div>
              <p className="kn-hero__word" data-sc-parallax="-1.4" aria-hidden="true">Kosi</p>
              <div className="sc-copy sc-copy--lead kn-hero__copy" data-sc-cue="0 0.72 0">
                <Label
                  as="h1"
                  name="Kosi Nguimeya"
                  what="Fullstack developer from Yaounde, Cameroon. Web development first, and now and then the design of the whole experience."
                  built="Self-taught. JavaScript, Python, React, Next.js, Node.js, Django."
                >
                  <a href={RESUME} {...ext}>Resume</a>
                  <a href={GITHUB} {...ext}>GitHub</a>
                  <a href="https://www.linkedin.com/in/bill-nguimeya-9b614b146/" {...ext}>LinkedIn</a>
                </Label>
              </div>
            </div>
          </section>

          {/* Person: authored quiet before the peak. Only the photo moves. */}
          <section id="profile" className="sc-section kn-room kn-profile">
            <div className="kn-profile__text sc-stack" data-sc-in data-sc-stagger="70">
              <h2 className="sc-display sc-display--md">The person behind the model</h2>
              <p className="sc-body">
                I&apos;m Kosi, a self-taught web developer. I take a product from
                the first brainstorm of an idea to a deployed app, and I like
                working in a team where I get to teach and keep learning.
              </p>
            </div>
            <figure className="kn-profile__photo" data-sc-reveal="up" data-sc-reveal-at="0.12 0.5">
              <img
                src="https://res.cloudinary.com/nobill/image/upload/v1695285989/portfolio2021/1000006634.jpg"
                width="3072"
                height="4080"
                alt="Kosi Nguimeya, portrait"
                loading="lazy"
              />
            </figure>
          </section>

          {/* Work: the peak. The rail passes, the docent watches each exhibit go by. */}
          <section id="work" data-sc-act="pan" data-sc-span="6">
            <div data-sc-stage className="kn-work">
              <div className="kn-rail" data-sc-pan="0.06">
                <div className="kn-rail__lead sc-stack">
                  <h2 className="sc-display sc-display--lg">Work</h2>
                  <p className="sc-body">
                    {data.projects.length} things I built and shipped. Each one is live.
                  </p>
                </div>
                {data.projects.map((p) => (
                  <article className="kn-exhibit" key={p.title}>
                    <div className="kn-exhibit__shot" data-sc-tilt="6">
                      <img src={p.image} width="2880" height="1674" alt={`${p.title}, screenshot`} loading="lazy" />
                    </div>
                    <Label name={p.title} what={p.description} built={p.tech.join(", ")}>
                      {p.live && <a href={p.live} {...ext}>Live</a>}
                      {p.repo && <a href={p.repo} {...ext}>Source</a>}
                    </Label>
                  </article>
                ))}
                <div className="kn-rail__end sc-stack">
                  <p className="sc-body">The rest lives on GitHub, including the experiments.</p>
                  <a href={GITHUB} {...ext} className="kn-textlink">github.com/nobill1</a>
                </div>
              </div>
            </div>
          </section>

          {/* Assessments and materials: administrative, so compressed. */}
          <section id="assessments" className="sc-section kn-room kn-assess">
            <div className="sc-stack" data-sc-in data-sc-stagger="60">
              <h2 className="sc-display sc-display--md">Interview assessments</h2>
              <p className="sc-body">Take-home tasks from hiring processes, kept as they were submitted.</p>
            </div>
            <div className="kn-assess__grid" data-sc-in data-sc-stagger="60">
              {data.interviews.map((i) => (
                <Label key={i.title} name={i.title} what={i.description} built={i.tech.join(", ")}>
                  {i.live ? <a href={i.live} {...ext}>Live</a> : <span>Private, not deployed</span>}
                </Label>
              ))}
            </div>
            <div className="kn-materials" data-sc-in>
              <h2 className="sc-label">Materials</h2>
              <p>{MATERIALS.join(" · ")}</p>
            </div>
          </section>

          {/* Inquiry: the page stops, the plate holds, the docent faces you. */}
          <section id="inquiry" data-sc-act="pin" data-sc-span="1.3">
            <div data-sc-stage className="kn-close">
              <div className="kn-close__plate" data-sc-cue="0 1 0 0">
                <Label
                  as="h2"
                  name="Inquiry"
                  what="Need help with a project, or just want to say hi? Go ahead. Don't be shy."
                >
                  <a href={EMAIL} className="kn-cta">Get in touch</a>
                  <a href={RESUME} {...ext}>Resume</a>
                </Label>
              </div>
              <footer className="kn-foot">
                <p>© Kosi Nguimeya</p>
                <ul>
                  <li><a href="https://www.hackerrank.com/no_bill" {...ext}>HackerRank</a></li>
                  <li><a href="https://codepen.io/Bill1" {...ext}>CodePen</a></li>
                  <li><a href="https://www.instagram.com/go_bill_go/" {...ext}>Instagram</a></li>
                </ul>
              </footer>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

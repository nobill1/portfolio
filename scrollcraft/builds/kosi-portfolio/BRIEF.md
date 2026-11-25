# BRIEF: Kosi Nguimeya portfolio

**Self-authored under explicit creative delegation.** The owner said "You decide",
"Rebuild the pages/index.js", "Use my own assets". Everything below that is not
one of those three lines is an authored decision, not a quote.

## Evidence (from the repo, not assumed)

- Kosi Nguimeya, fullstack developer, Yaounde, Cameroon. Self-taught.
- Assets owned: a custom 3D character of Kosi (`public/stylized+adult+3d+model.glb`),
  a studio HDR, a portrait photo, four project screenshots, four interview
  assessments, a logo, brand navy `#1b1464` and teal `#71c4bd`, the Nippo face.
- One action already on the site: email (`bnguimeya007@gmail.com`). Resume link,
  GitHub, LinkedIn, CodePen, HackerRank, Instagram.
- No verified numbers anywhere. So: no counters.

## The eight topics (authored)

1. **Vibe:** a small private gallery, after hours. References: a museum object
   label, the turntable shot in a 3D artist's reel, a printed exhibition list.
2. **Journey:** meet the maker (the 3D Kosi) > the real person > the work >
   the assessments and the materials he works in > ask him something.
3. **Energy:** calm open, quieter still for the profile, loudest in the work,
   brisk and dense for the assessments, still at the end.
4. **Feeling:** see the curve below. The one moment: the little 3D Kosi turning
   his head to watch each project slide past.
5. **Only this site:** the developer's own 3D double is the gallery docent. He
   follows the work with his eyes and turns to face you when you reach the end.
6. **Range:** editorial-dense, not premium-minimal. Labels, lists, small type
   against one big object.
7. **Structure:** distinct rooms, not one continuous world.
8. **Assets:** owner's own only. No generation, no kie.ai spend.

## Grammar

**Gallery / catalog.** A portfolio's real question is "what has he built", which
is exactly what this grammar answers. Why the others lost:

- Filmic one-shot: there is no single argument, and there is no footage to carry it.
- Chaptered editorial: there is not enough long-form text to fill chapters.
- Live surface: tempting for a developer, but the projects live on other domains; faking them is banned.
- Continuous world: there is no geography.
- Typographic poster: it would waste the 3D character, the best asset he owns.
- Split stage: there is no two-sided argument.
- Rhythmic cutlist: wrong energy for someone you are about to email.

Grammar rules held: no kinetic headlines, no spotlight, no magnet, no scrub. Every
object (Kosi, each project, each assessment) uses one label schema:
**name / what it is / built with / where to see it**.

## Journey and feeling curve

| Act | Beat | Feeling | What causes it |
|---|---|---|---|
| 1 | Meet the maker | Curiosity | His 3D double stands behind a museum label with his name and turns a full circle under your thumb, while the giant wordmark behind him recedes |
| 2 | The real person | Intimacy (authored quiet) | A real photo wipes in beside one short plain paragraph. Nothing else moves |
| 3 | The work | **Delight (peak)** | The projects slide past sideways, and the small 3D Kosi in the corner turns his head to watch each one go by |
| 4 | Assessments and materials | Confidence | Plain labels, dense and checkable, arriving in reading order |
| 5 | Inquiry | Resolve | Everything stops. An inquiry plate set like an object label, and the docent turns to face you |

**Peak:** "there's a little 3D version of him in the corner, and he turns his
head to watch each project slide past." Act 3. It gets the largest span on the
page, and act 2 is deliberately quiet in front of it.

**Tell someone:** it's the site where a 3D Kosi turns to watch his own projects
go by as you scroll.

**Authored silence:** act 2 is intentionally still apart from the photo wipe.

## Signature move

**The docent.** One fixed, transparent WebGL canvas holds the 3D character for
the whole page. In the hero he is large and spins under scroll. As the hero ends
he docks to the bottom-left corner at a third of the size, and from then on his
yaw follows whatever object is in view. In the work rail he tracks the rail's
progress, so his head sweeps left to right as each exhibit passes. At the inquiry
he faces the visitor. Page-local code, the engine is untouched.

Phones: he is the hero only and fades out as he docks. Reduced motion: no spin
and no tracking. He stands facing the visitor in the hero, then fades.

## Score

| Act | Device | Span | Why |
|---|---|---|---|
| Maker | `pin` + `parallax` + bespoke 3D | 2.2 | The frame holds while depth planes separate around a real object |
| Person | `flow` + `reveal` | natural | A wipe is a change of state: the avatar becomes a real face |
| Work | `pan` + `tilt` | 6 | Lateral travel reads as a range. Largest span on the page, because it is the peak |
| Assessments, materials | `flow` + `in` | natural | Administrative content, so it is compressed |
| Inquiry | `pin`, hold cue | 1.3 | The page stops, and the last screen holds its content |

Families: pin, parallax, reveal, pan, tilt, in. That is five acts at about
11vh, which is outside the 6-7 acts at 13.6-13.8vh band. No device repeats in
adjacent acts.

## Fingerprint gate

Registry is empty (first build in this workspace). Passes trivially.

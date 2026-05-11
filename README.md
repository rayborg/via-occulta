# Via Occulta

**Via Occulta** is a **1-bit monochrome dark-fantasy shared-world RPG / MMO-lite** built as a **tile-based 2D JRPG with a top-down / overhead overworld, towns, interiors, shrines, caves, ruins, and dungeon exploration**.

This is more specific than simply saying “top-down.” The intended feel is a classic tile-based JRPG world: players move through readable overhead maps, enter towns and interiors, discover routes, investigate shrines, and enter dungeons. Combat-heavy scenes, especially in **Luciphilus**, may shift into a separate side-view ATB / turn-based battle screen.

The world is designed as three linked role lenses sharing one setting, economy, and restoration arc:

- **Tenebrio** — a weak shriner exploration game about mapping forbidden places, shrine rites, disguise, and monster transformation.
- **Luciphilus** — the adventurer / escort lens about clearing threats, guarding routes, escorting fragile travelers, getting paid, recovering relics, and fighting monsters.
- **Opiphilus** — the crafter / guild lens about fragile travel outside settlements, posting escort requests, reaching villages, accessing shops and guild jobs, crafting, repairs, trade orders, and restoration projects.

---

## Camera / Format Decision

Via Occulta should be described precisely as:

> **A tile-based 2D JRPG with a top-down / overhead overworld, town, interior, shrine, cave, ruin, and dungeon exploration layer, plus separate battle-screen combat where needed.**

This is not a Tibia-style real-time top-down MMO and not a generic open-world MMO. It is a classic JRPG world structure adapted into a linked online / MMO-lite format.

---

## Core Direction

> **A 1-bit occult shared-world JRPG: Tenebrio discovers, Luciphilus secures, Opiphilus rebuilds.**

The earlier “online FF4-style structure + guild economy + instanced dungeons” idea remains useful, but the artwork direction points toward something more distinctive than a generic FF4 clone: a monochrome occult world where exploration, dungeon combat, crafting, shrine restoration, maps, and guild projects reinforce each other.

## Shared Map Decision

Via Occulta uses **one canonical shared world map / area graph**.

Tenebrio, Luciphilus, and Opiphilus are role lenses on the same world, not separate maps. A shrine road, guild gate, village, cave, chapel, dungeon, or workshop exists once in the shared world and is used differently depending on role.

Short version:

> **One world graph. Three ways to survive it.**

## Hero Roles

- **Tenebrio hero:** weak shriner / forbidden-route mapper. Main candidates are base male unarmed and base female unarmed, with sword variants reserved for later defensive or disguise-capable states.
- **Luciphilus hero:** adventurer / escort / monster-clearer. The Swordsman line is the clearest active player hero, supported by guards, fighters, archers, expedition members, mages, and dungeon parties.
- **Opiphilus hero:** guild worker / crafter / trade traveler. Main candidates include Smith, Herbalist, Priest / ritual support, Guild Mage, Monk, and Glassblower / Blacksmith worker where animation supports it.

Short trio:

> **Tenebrio = shriner scout. Luciphilus = paid adventurer escort. Opiphilus = guild crafter / trader.**

---

## Start Here

Recommended reading order:

1. **This README** — high-level format, repo navigation, and production constraints.
2. [`docs/design/VIA_OCCULTA_AREA_FEASIBILITY_FROM_ARTWORK.md`](docs/design/VIA_OCCULTA_AREA_FEASIBILITY_FROM_ARTWORK.md) — what areas the current artwork can actually support.
3. [`docs/story/VIA_OCCULTA_WORLD_STORY.md`](docs/story/VIA_OCCULTA_WORLD_STORY.md) — the current world story bible.
4. [`docs/design/VIA_OCCULTA_ONLINE_FF4_CONCEPT.md`](docs/design/VIA_OCCULTA_ONLINE_FF4_CONCEPT.md) — the earlier MMO-lite / FF4-style design concept.

The companion artwork repo is:

- `rayborg/via_occulta_artwork`

Use that repo as the asset-source and worldkit reference. Use this repo as the **clean design, story, and game-direction repo**.

---

## Repository Layout

```text
via-occulta/
├── README.md
└── docs/
    ├── design/
    │   ├── VIA_OCCULTA_AREA_FEASIBILITY_FROM_ARTWORK.md
    │   └── VIA_OCCULTA_ONLINE_FF4_CONCEPT.md
    └── story/
        └── VIA_OCCULTA_WORLD_STORY.md
```

### What Belongs Here

This repo should contain:

- world story bible
- design direction
- area feasibility notes
- gameplay loop docs
- prototype scope docs
- terminology decisions
- repo navigation and planning notes

### What Belongs In `via_occulta_artwork`

The artwork repo should contain:

- monochrome derived PNGs
- asset manifests
- casting reports
- world-builder MVP
- per-game asset folders
- normalization notes
- art-source provenance and copy-policy docs

Do not duplicate large art assets into this repo.

---

## What Areas Can Be Built With The Current Artwork?

The current artwork strongly supports a compact 1-bit occult JRPG world made of:

### Build Now

- shrine-town hubs
- roads and crossroads
- forest paths and glades
- caves and rocky underways
- sewers / under-town routes
- cursed chapels
- shrine ruins
- undead / cursed lands
- occult dungeons
- trap rooms
- guild halls
- blacksmith workshops
- herbalist huts
- glassblower workshops
- markets
- taverns
- homes
- mage towers / ritual rooms
- training arenas / guard yards
- small fishing village / dock edges

### Feasible With Composition

- Crystal Court outposts
- ruined court gates
- old keep thresholds
- drowned sanctuaries
- monster dens
- ritual archives / forbidden libraries

### Defer Until New Art Exists

- full castles
- full palaces
- large fortified keeps
- large capital cities
- snow regions
- deserts
- volcano regions
- large swamps
- open ocean maps
- modern or sci-fi facilities

Important production rule:

> **Do not design the first playable region around castles. Design it around shrines, roads, guild halls, caves, sewers, cursed chapels, ruins, workshops, and dungeons.**

For the detailed matrix, see:

- [`docs/design/VIA_OCCULTA_AREA_FEASIBILITY_FROM_ARTWORK.md`](docs/design/VIA_OCCULTA_AREA_FEASIBILITY_FROM_ARTWORK.md)

---

## Recommended First Region

The first region should be **The Pilgrim Verge**, a compact shrine-town region that uses only well-supported art categories.

| Area | Type | Why It Fits The Art |
|---|---|---|
| **Greybell Shrine** | shrine-town hub | chapel, shrine support, road, market, and guild-adjacent assets |
| **The Broken Road** | road / forest approach | path, grassland, rocks, trees, bushes, bridges |
| **Mistfall Chapel** | cursed chapel / shrine ruin | chapel, cursed land, undead, ruins, priest/monk support |
| **The Underwell** | sewer / cave under-route | cave, sewer, rocky, glowing-cave, under-town assets |
| **The Chapel Undercrypt** | occult dungeon | dungeon tiles, traps, cursed props, magic book effects |
| **The Guild Hearth** | guild hall / workshop | guild hall, blacksmith, herbalist, glassblower, market support |
| **The Old Crystal Gate** | composed court gate / ruin threshold | ruins, dungeon props, mage tower flavor, crystal-law story framing |

This region avoids unsupported castle/palace promises while still feeling like a complete JRPG opening zone.

---

## Design Pillars

1. **Tile-based JRPG readability** — clear overhead maps, strong 1-bit silhouettes, readable interiors, clean UI, and minimal clutter.
2. **Three role lenses on one map** — Tenebrio discovers routes and shrine secrets; Luciphilus clears, guards, and escorts through them for pay; Opiphilus posts escort requests, travels to villages, and turns access into crafting, guild jobs, repairs, and restoration.
3. **Online without chaos** — shared towns and guild spaces, but private party-based dungeons, story rooms, shrine trials, and key combat encounters.
4. **Guilds shape the world** — players restore shrines, reopen routes, build workshops, craft equipment, recover relics, and unlock new expeditions.
5. **Occult story first** — the world is built around hidden roads, failing shrines, forbidden maps, monster disguises, cursed ruins, guild politics, and a veiled lunar / underworld threat.

---

## First Prototype Goal

Build a vertical slice that proves the shared-world loop at small scale.

Minimum loop:

1. A player starts in **Greybell Shrine**.
2. Tenebrio-style exploration reveals a hidden route or shrine fragment in **Mistfall Chapel** or **The Underwell**.
3. Luciphilus-style adventuring clears a small dungeon threat, guards the route, or accepts an escort request.
4. An Opiphilus character becomes visible at the guild or gate when the escort is accepted.
5. The escort reaches a destination village, where Opiphilus accesses local shops, guild jobs, crafting stations, repairs, or restoration work.
6. The restored object unlocks **The Old Crystal Gate** or a new route off **The Broken Road**.

---

## First Playable Target

The first playable target should be a **400x240 one-screen top-down tile-map area prototype** that can support:

- a shrine-town hub room,
- one exterior road or forest approach,
- one cave / chapel / ruin entrance,
- one small instanced dungeon room,
- one workshop or guild-hall contribution screen,
- and a clean monochrome visual language suitable for the existing Via Occulta artwork direction.

---

## Guiding Summary

Via Occulta should be framed as:

> **A 1-bit tile-based top-down occult JRPG shared world where hidden roads are discovered by shriners, secured by paid adventurers, and rebuilt by guild crafters traveling under escort.**

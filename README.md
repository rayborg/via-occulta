# Via Occulta

**Via Occulta** is a 1-bit monochrome dark-fantasy shared-world RPG / MMO-lite built around **top-down / overhead tile-based 2D JRPG exploration**: overworld routes, towns, interiors, shrines, caves, ruins, and dungeons are explored from a classic overhead tile-map view.

The world is designed as three linked game lines sharing one setting and economy:

- **Tenebrio** — a weak shriner exploration game about mapping forbidden places, shrine rites, disguise, and monster transformation.
- **Luciphilus** — the main adventurer RPG about dungeon expeditions, combat, relic recovery, monsters, and crystal-era conflict.
- **Opiphilus** — the crafter / guild game about workshops, town interiors, trade orders, ritual support, and world-restoration projects.

## Camera / Format Decision

Via Occulta should be described precisely as:

> **A top-down / overhead tile-based 2D JRPG world with shared towns, semi-shared overworld routes, instanced dungeons, and separate side-view or battle-screen combat where needed.**

This is more specific than simply “top-down.” It means the main world plays like a classic tile-based JRPG: towns, roads, caves, chapels, shrines, guild halls, interiors, ruins, and dungeons are navigated from an overhead view. Combat does not need to happen directly on the same map. Luciphilus can switch into a separate ATB / turn-based battle presentation for dungeon encounters and bosses.

## Core Direction

> **A 1-bit occult shared-world JRPG: Tenebrio discovers, Luciphilus fights, Opiphilus builds.**

The earlier “online FF4-style structure + guild economy + instanced dungeons” idea remains useful, but the actual artwork direction points toward something more distinctive than a generic FF4 clone: a monochrome shared world where exploration, dungeon combat, crafting, shrine restoration, maps, and guild projects reinforce each other.

## Current Documents

- [Via Occulta — World Story Bible](docs/story/VIA_OCCULTA_WORLD_STORY.md)
- [Via Occulta — Online FF4-Style MMO-Lite Design Concept](docs/design/VIA_OCCULTA_ONLINE_FF4_CONCEPT.md)

## Design Pillars

1. **Top-down tile-based readability** — clear overhead maps, strong 1-bit silhouettes, readable interiors, clean UI, and minimal clutter.
2. **Three linked game roles** — Tenebrio discovers routes and shrine secrets; Luciphilus clears combat threats; Opiphilus crafts, repairs, and organizes guild logistics.
3. **Online without chaos** — shared towns and guild spaces, but private party-based dungeons, story rooms, shrine trials, and key combat encounters.
4. **Guilds shape the world** — players restore shrines, reopen routes, build workshops, craft equipment, recover relics, and unlock new expeditions.
5. **Occult story first** — the world is built around hidden roads, failing shrines, forbidden maps, monster disguises, cursed ruins, guild politics, and a veiled lunar/underworld threat.

## First Prototype Goal

Build a vertical slice that proves the shared-world loop at small scale.

Minimum loop:

1. A player starts in a shared shrine-town hub.
2. Tenebrio-style exploration reveals a hidden route or shrine fragment.
3. Luciphilus-style adventuring clears a small dungeon threat or boss encounter.
4. Opiphilus-style crafting converts recovered materials into a useful item, repair, or guild upgrade.
5. The restored object unlocks a new route, room, recipe, or shrine function.

## First Playable Target

The first playable target should be a **400x240 one-screen top-down area prototype** that can support:

- a shrine-town hub room,
- one exterior road or forest approach,
- one cave / chapel / ruin entrance,
- one small instanced dungeon room,
- one workshop or guild-hall contribution screen,
- and a clean monochrome visual language suitable for the existing Via Occulta artwork direction.

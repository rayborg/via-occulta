# Via Occulta — Area Feasibility From Current Artwork

## Purpose

This document answers a practical production question:

> **Given the current `via_occulta_artwork` repo, what areas can Via Occulta actually build now?**

The answer is not “anything fantasy.” The current art set strongly supports a specific kind of world: **1-bit top-down occult JRPG spaces** built from roads, forests, shrines, chapels, caves, sewers, cursed ruins, dungeons, guild interiors, markets, workshops, taverns, mage towers, and small village / dock spaces.

It does **not** currently prove support for full castles, palaces, large cities, snow fields, deserts, sci-fi labs, or large open ocean maps.

---

## Source Basis

This guide is based on the current `rayborg/via_occulta_artwork` handoff repo, especially:

- `README.md`
- `docs/other_art_group_summary.tsv`
- `docs/other_art_group_inventory.tsv`
- `docs/environment_worldbuilding_animation_coverage/README.md`
- `world_builder/docs/environment_assembly_system.md`
- `games/tenebrio/SELECTIONS.tsv`
- `games/luciphilus/SELECTIONS.tsv`
- `games/opiphilus/SELECTIONS.tsv`

Current environment/support-art summary from the artwork repo:

| Game Line | Environment Groups | Environment PNGs | Support Loop Groups | Effect / Trap Groups | UI / Icon Groups |
|---|---:|---:|---:|---:|---:|
| Tenebrio | 32 | 2,799 | 1 | 6 | 5 |
| Luciphilus | 33 | 2,150 | 11 | 5 | 7 |
| Opiphilus | 12 | 223 | 11 | 1 | 7 |

Interpretation:

- **Tenebrio** is very strong for exterior danger, shrine ruin, cave/sewer, forest/glade, cursed land, undead, and occult exploration spaces.
- **Luciphilus** is very strong for overworld routes, town hubs, dungeons, caves, occult ruins, and battle-adventure staging.
- **Opiphilus** is strong for town interiors, guild services, workshops, markets, shrine support, and crafting/shop spaces.

---

# Area Feasibility Tiers

## Tier A — Build Now

These areas are directly supported by named current art groups and should be safe for early prototypes.

### 1. Shrine-Town Hub

**Recommended story name:** Greybell Shrine

Best use:

- starting hub
- shrine courtyard
- road-bell plaza
- small chapel edge
- guild notice board
- route entrance

Supported by:

- chapel packs
- shrine support NPCs
- guild hall packs
- market and town support loops
- road/path/grassland/tree/bush/bridge assets

Gameplay fit:

- player spawn
- party formation
- shrine rite tutorial
- map board
- guild contribution board
- first route unlock

Best game lines:

- Tenebrio
- Luciphilus
- Opiphilus

---

### 2. Roads, Crossroads, Camp Edges

**Recommended story names:** The Broken Road, Pilgrim Road, Lantern Crossing

Best use:

- overworld route screens
- road thresholds
- forest entrances
- camp outskirts
- shrine approaches

Supported by:

- path and road top-down tiles
- grassland tiles
- rocks and stones
- trees and bushes
- bridges
- road/camp/town-edge kits

Gameplay fit:

- route discovery
- low-risk exploration
- ambush marker
- resource gathering
- entrance to forest/cave/chapel

Best game lines:

- Tenebrio
- Luciphilus

---

### 3. Forests and Glades

**Recommended story names:** Blackbough Glade, The Pilgrim Wood, The White-Fog Grove

Best use:

- ritual grove
- hidden shrine path
- monster disguise area
- forest road
- natural puzzle room

Supported by:

- forest top-down tiles
- glade objects
- trees
- bushes
- bridges
- rocks
- plants

Gameplay fit:

- Tenebrio stealth/disguise
- Luciphilus encounter approach
- hidden map fragments
- gathering herbs or ritual wood

Best game lines:

- Tenebrio
- Luciphilus

---

### 4. Caves and Rocky Underways

**Recommended story names:** The Underwell, Bellroot Cave, The Hollow Road

Best use:

- early dungeon entrance
- cave threshold
- underground road section
- crystal shard chamber
- monster lair

Supported by:

- cave tilesets
- cave objects
- rocky area objects
- glowing cave objects
- rocky top-down tiles

Gameplay fit:

- first dungeon room
- cave traversal
- crystal gathering
- monster disguise
- boss approach

Best game lines:

- Tenebrio
- Luciphilus

---

### 5. Sewers / Underwell Spaces

**Recommended story names:** The Underwell, Greybell Drain, The Old Channel

Best use:

- under-town routes
- sewer threshold
- hidden passage
- damp monster habitat
- road-network corruption space

Supported by:

- sewer tileset and environment pack
- sewer NPC/effect loops
- cave/sewer kit grouping

Gameplay fit:

- hidden route under town
- low-level monster forms
- tunnel puzzle
- route instability event

Best game lines:

- Tenebrio
- Luciphilus

---

### 6. Cursed Chapels and Shrine Ruins

**Recommended story names:** Mistfall Chapel, The Drowned Chapel, Saintless Aisle

Best use:

- first major story dungeon
- cursed shrine interior/exterior
- undead threshold
- ritual puzzle
- Tenebrio disguise trial

Supported by:

- chapel top-down packs
- cursed land objects
- cursed land tilesets
- ruins packs
- undead tilesets
- undead land objects
- priest/monk support loops

Gameplay fit:

- map fragment recovery
- undead disguise rite
- Wraith boss gate
- shrine repair objective

Best game lines:

- Tenebrio
- Luciphilus

---

### 7. Dungeons and Occult Deep Ruins

**Recommended story names:** The Road Below, The Black Reliquary, The Deep Aisle

Best use:

- instanced dungeon rooms
- trap rooms
- relic chambers
- occult puzzle spaces
- boss thresholds

Supported by:

- dungeon top-down tilesets
- dungeon object packs
- dungeon prop packs
- magic book effects
- trap effects
- mage tower support packs

Gameplay fit:

- Luciphilus dungeon combat
- Tenebrio ritual/infiltration
- boss relic recovery
- trap navigation
- crystal locks

Best game lines:

- Tenebrio
- Luciphilus

---

### 8. Guild Halls and Workshops

**Recommended story names:** The Guild Hearth, Bellwright Hall, The Lantern House

Best use:

- guild hub
- contribution screen
- crafting station
- order board
- workshop upgrade room

Supported by:

- guild hall pack
- blacksmith interior/exterior pack
- blacksmith NPCs
- glassblower workshop pack
- herbalist hut pack
- market square pack
- guild hall mages

Gameplay fit:

- Opiphilus crafting loop
- guild project contribution
- weapon/armor crafting
- lantern glass crafting
- shrine repair kit assembly

Best game lines:

- Opiphilus
- Luciphilus support hub

---

### 9. Markets, Shops, Taverns, Homes

**Recommended story names:** Greybell Market, The Bell Inn, The Pilgrim House

Best use:

- social hub
- shop interiors
- merchant orders
- tavern board
- home/rest space

Supported by:

- market square assets
- market citizens
- trader loops
- tavern pack
- tavern NPCs
- main character home pack
- fishing village NPCs where suitable

Gameplay fit:

- buying/selling
- guild order pickup
- rumor system
- companion recruitment
- economy tutorial

Best game lines:

- Opiphilus
- Luciphilus

---

### 10. Mage Towers and Ritual Rooms

**Recommended story names:** The Bell Astrolabe, Moon-Index Tower, The White Ledger

Best use:

- occult archive
- ritual station
- spell research room
- crystal-law scene
- magical UI/tutorial space

Supported by:

- mage tower packs
- mage tower support sprites
- guild hall mages
- magic book effects
- ritual/caster ambience

Gameplay fit:

- unlock lore
- decode maps
- identify cursed relics
- introduce Crystal Court story without needing a full castle

Best game lines:

- Opiphilus
- Luciphilus
- Tenebrio story scenes

---

### 11. Training Arena / Guard Yard

**Recommended story names:** Lantern Yard, Guild Drill Court

Best use:

- combat tutorial
- guard staging
- weapons practice
- adventurer recruitment

Supported by:

- training arena tiles
- training arena characters
- sword fighters
- archers
- mannequins

Gameplay fit:

- Luciphilus combat onboarding
- party role tutorial
- town defense prep

Best game lines:

- Luciphilus
- Opiphilus support scenes

---

### 12. Fishing Village / Docks / Small Port Edge

**Recommended story names:** Lowdock, Bellwater Landing, Pilgrim Quay

Best use:

- waterside village
- dock route
- boat travel hint
- trade edge

Supported by:

- fishing village pack
- docks / boats / interiors support
- fishing village NPCs

Gameplay fit:

- trade-route recovery
- side region
- water-adjacent road instability

Best game lines:

- Luciphilus
- Opiphilus

---

## Tier B — Feasible With Composition / Reinterpretation

These can be created, but they should be framed carefully because the art does not provide a perfect dedicated area type.

### 1. Crystal Court Outpost Instead Of Full Castle

Do **not** promise a full castle yet.

What can be built now:

- court archive
- crystal gate room
- guard yard
- chapel-like court shrine
- mage tower annex
- ruined court checkpoint

Use these packs together:

- guild hall
- training arena
- mage tower
- chapel
- dungeon/ruin pieces
- crystal/occult UI and props

Story framing:

> The Crystal Courts are encountered through annexes, sealed gates, shrines, archives, and ruined checkpoints before the game ever shows a full palace.

### 2. Castle Ruin / Old Keep Threshold

A full castle is unsupported, but a **ruined court gate** or **broken keep approach** can be implied using:

- ruins packs
- dungeon tiles
- chapel pieces
- training arena / guard-yard pieces
- mage tower props

Use as:

- a locked gate
- a ruined wall line
- a crystal-law checkpoint
- a story threshold, not a full explorable castle.

### 3. Drowned Sanctuary

Feasible as a blend of:

- chapel
- sewer
- cave
- cursed land
- undead tiles

Good for:

- Mistfall Chapel lower floors
- Wraith of the Drowned Gate
- flooded shrine rooms

### 4. Monster Dens

Feasible using:

- cave kits
- forest/glade kits
- cursed land kits
- dungeon/occult kits
- local monster families

Best as small one-screen or few-screen spaces, not giant organic lairs yet.

### 5. Ritual Archive / Forbidden Library

Feasible using:

- magic book effects
- mage tower packs
- guild hall interiors
- dungeon props
- chapel / occult pieces

Good for:

- map decoding
- Crystal Court law
- Tenebrio forbidden rite scenes

---

## Tier C — Defer Until New Art Exists

Do not design the first prototype around these.

### 1. Full Castles / Palaces / Keeps

Current named docs do not show a dedicated castle, palace, keep, or fortress pack.

Allowed now:

- imply court power through towers, chapels, archives, ruins, training yards, and gates.

Defer:

- full royal castle town
- throne room
- palace exterior
- fortress wall system
- large keep interior

### 2. Large Cities

The repo supports town hubs, markets, taverns, guild halls, homes, and workshops. It does not yet prove support for a large city with districts, walls, roads, nobles, and dense urban variety.

Allowed now:

- small shrine-town
- market street
- guild quarter
- workshop cluster

Defer:

- capital city
- multi-district metropolis

### 3. Snow, Desert, Volcano, Swamp, Open Ocean

Do not make these first-region pillars unless new packs are added or existing assets are reclassified to support them.

Allowed now:

- forest
- glade
- road
- cave
- sewer
- cursed land
- ruins
- chapel
- town/guild spaces

### 4. High-Tech Facilities

The current art language is occult, guild, medieval-fantasy, shrine, cave, dungeon, town, and workshop. Avoid sci-fi labs or modern facilities unless the art set expands.

---

# Recommended First Region Area List

The first region should be **The Pilgrim Verge**, built only from Tier A and simple Tier B areas.

## Region Hub

### Greybell Shrine

Type:

- shrine-town hub

Area ingredients:

- chapel support
- road/path tiles
- guild notice board implied through guild hall support
- market/town NPCs

Gameplay:

- spawn
- shrine rite tutorial
- map board
- guild project board

## Exterior Route

### The Broken Road

Type:

- road / forest approach

Area ingredients:

- path tiles
- grassland
- rocks
- trees
- bushes
- bridges

Gameplay:

- first route exploration
- route instability events
- hidden entrance markers

## Tenebrio Area

### Mistfall Chapel

Type:

- cursed chapel / shrine ruin

Area ingredients:

- chapel
- cursed land
- undead land
- ruins
- priest/monk support where needed

Gameplay:

- map fragment discovery
- disguise rite
- hidden room

## Luciphilus Area

### The Chapel Undercrypt

Type:

- dungeon / cave / cursed ruin

Area ingredients:

- dungeon tiles
- cave tiles
- undead/cursed props
- traps
- magic book / occult effects

Gameplay:

- boss route
- Wraith encounter
- crystal shard recovery

## Opiphilus Area

### The Guild Hearth

Type:

- guild hall + blacksmith / workshop

Area ingredients:

- guild hall
- blacksmith
- herbalist
- glassblower
- market support

Gameplay:

- craft Road Lantern
- repair bell housing
- contribute materials to guild project

## Region Gate

### The Old Crystal Gate

Type:

- composed court gate / ruin threshold

Area ingredients:

- ruins
- dungeon props
- mage tower / crystal-law flavor
- chapel/gate framing

Gameplay:

- first-region completion gate
- unlock to later region

---

# Story Rules From The Art Set

Use area names and worldbuilding that fit the available art:

- **Shrines, chapels, roads, caves, sewers, guild halls, workshops, taverns, markets, mage towers, forests, glades, ruins, and dungeons** should be common.
- **Castles, palaces, giant capitals, deserts, snowfields, volcanoes, and open seas** should be rare, off-screen, implied, or deferred until new art exists.
- The Crystal Courts should first appear as **archives, gates, tower annexes, ruined checkpoints, and court shrines**, not as a full castle.
- The first playable arc should happen in a compact shrine-town region, not a kingdom-scale overworld.

---

# Practical Builder Guidance

The current `world_builder` system already thinks in curated environment kits:

| Builder Environment Kit | Use In Story |
|---|---|
| `road_shrine` | shrine approach, road threshold, Greybell Shrine exterior |
| `forest_glade` | ritual grove, forest road, hidden route |
| `cave_sewer` | Underwell, cave room, sewer threshold |
| `cursed_chapel` | Mistfall Chapel, shrine ruin, undead threshold |
| `town_guild` | Guild Hearth, workshop, market, service interior |

Early development should use these kits before expanding into the full art library.

---

# Bottom Line

The current artwork supports a very coherent first game world:

> **A compact 1-bit occult JRPG region made of shrine towns, broken roads, forests, caves, sewers, cursed chapels, occult dungeons, guild halls, workshops, markets, taverns, mage towers, and small dock/village edges.**

The world should not start with castles. It should start with **shrines, roads, guilds, chapels, underways, and ruins**. That is where the current art is strongest.

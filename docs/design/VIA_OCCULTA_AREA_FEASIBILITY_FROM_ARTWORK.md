# Via Occulta — Area Feasibility From Current Artwork

## Purpose

This document answers practical production questions:

1. **Given the current `via_occulta_artwork` repo, what areas can Via Occulta actually build now?**
2. **For those areas, does the current art support the outside, the inside, or both?**

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

These are gameplay lenses on one canonical shared world map, not separate duplicate maps. A `Best game lines` entry means the area type strongly supports that role's interactions, actors, services, hazards, contracts, and unlocks.

---

# Interior vs. Exterior Support Summary

The current art does **not** support every place equally inside and outside. Some areas are naturally exterior, some are naturally interior/underground, and some have both indoor and outdoor support.

| Area Type | Exterior Support | Interior Support | Current Verdict | Notes |
|---|---|---|---|---|
| Shrine-town hub | Strong | Moderate | Build now | Strong as shrine approach / town hub. Interior shrine rooms can be composed from chapel/guild/ritual assets. |
| Roads / crossroads / camp edges | Strong | Not applicable | Build now | These are exterior route screens. |
| Forests / glades | Strong | Not applicable | Build now | Exterior outdoor biome. Interior equivalent would be cave/shrine/ruin entered from forest. |
| Caves / rocky underways | Entrance/threshold support | Strong | Build now | Use exterior as cave mouth / rocky threshold; main cave gameplay is interior/underground. |
| Sewers / underwell | Entrance/threshold support | Strong | Build now | Best as under-town interior route; exterior is usually well, drain, hatch, or town threshold. |
| Cursed chapels / shrine ruins | Moderate to strong | Moderate to strong | Build now | Good for chapel exterior, ruined threshold, cursed grounds, and small interior chapel/aisle/crypt scenes. |
| Dungeons / occult deep ruins | Threshold support | Strong | Build now | Best as interior rooms, undercrypts, trap rooms, relic chambers, and boss thresholds. Exterior should be a ruin door, cave mouth, chapel stair, or gate. |
| Guild halls | Moderate | Strong | Build now | Best for interiors and service rooms; exterior/frontage can be composed with town/guild assets. |
| Blacksmith workshops | Moderate to strong | Strong | Build now | Named pack includes interior/exterior support; very good for Opiphilus. |
| Herbalist huts | Moderate | Strong | Build now | Best as service interior plus hut/frontage scene. |
| Glassblower workshops | Moderate | Strong | Build now | Best as workshop interior/service space; exterior/frontage possible. |
| Markets / shops | Strong | Moderate | Build now | Market square is exterior; shop interiors can be composed, but not every shop type has a dedicated full interior. |
| Taverns | Moderate | Strong | Build now | Tavern pack and NPC loops support interior/social scenes; exterior can be town frontage. |
| Homes | Moderate | Strong | Build now | Main-character/home assets support small house scenes. |
| Mage towers / ritual rooms | Moderate | Moderate to strong | Build now / compose | Strong for ritual interiors and tower rooms; exterior tower identity may need composition. |
| Training arena / guard yard | Strong | Weak / not central | Build now | Best as exterior or open training yard. Interior barracks are not a proven strength. |
| Fishing village / docks | Strong | Moderate | Build now | Named pack includes dock/interior/boats/NPCs, so small port edge and interiors are feasible. |
| Crystal Court outpost | Composed | Composed | Feasible with composition | Use gates, tower annexes, archives, guard yards, court-shrine hybrids; not a full castle. |
| Castle / palace / keep | Weak | Weak | Defer | Current named docs do not prove full castle exterior or interior support. |

## Practical Interpretation

- **Caves, sewers, dungeons, undercrypts, and occult ruins are mostly interior-first.** The art supports the playable inside more than a large exterior facade.
- **Roads, forests, glades, crossroads, docks, and training yards are exterior-first.** They do not need interiors.
- **Guild halls, workshops, taverns, homes, herbalists, blacksmiths, and glassblowers are interior-strong.** These are excellent for Opiphilus.
- **Chapels and shrine ruins can support both inside and outside at small scale.** Avoid huge cathedral promises unless new art is added.
- **Castle/palace interiors and exteriors should be deferred.** The Crystal Courts should be represented through smaller supported pieces: gates, archives, tower annexes, court shrines, guard yards, and ruined checkpoints.

---

# Area Feasibility Tiers

## Tier A — Build Now

These areas are directly supported by named current art groups and should be safe for early prototypes.

Area feasibility should assume **one canonical shared map / area graph**. Tenebrio, Luciphilus, and Opiphilus differences should usually be stored as lens data over the same area geometry. When the fiction requires different geometry, model it as a separate canonical shared area, such as a chapel surface versus an undercrypt, not as a per-game duplicate map.

### 1. Shrine-Town Hub

**Recommended story name:** Greybell Shrine

Interior/exterior verdict:

- **Exterior:** strong for shrine approach, road-bell plaza, town edge, market-adjacent shrine space.
- **Interior:** moderate, best as small chapel/ritual room composed from chapel, guild, and ritual assets.

Best use:

- starting hub
- shrine courtyard
- road-bell plaza
- small chapel edge/interior
- guild notice board
- guild / gate escort board
- accepted Opiphilus traveler spawn point
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
- route contract pickup
- origin settlement for escort requests
- first route unlock

Best game lines:

- Tenebrio
- Luciphilus
- Opiphilus

---

### 2. Roads, Crossroads, Camp Edges

**Recommended story names:** The Broken Road, Pilgrim Road, Lantern Crossing

Interior/exterior verdict:

- **Exterior:** strong.
- **Interior:** not applicable.

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
- Luciphilus escort route
- accepted Opiphilus client traversal
- route defense / route clearing
- delivery and trade-route activation after Tenebrio discovery

Best game lines:

- Tenebrio
- Luciphilus
- Opiphilus as escorted economic purpose, not solo traversal

---

### 3. Forests and Glades

**Recommended story names:** Blackbough Glade, The Pilgrim Wood, The White-Fog Grove

Interior/exterior verdict:

- **Exterior:** strong.
- **Interior:** not applicable, except by entering a cave, shrine, chapel, or ruin from the forest.

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

---

### 4. Caves and Rocky Underways

**Recommended story names:** The Underwell, Bellroot Cave, The Hollow Road

Interior/exterior verdict:

- **Exterior:** moderate as cave mouth / rocky entrance / threshold.
- **Interior:** strong.

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

---

### 5. Sewers / Underwell Spaces

**Recommended story names:** The Underwell, Greybell Drain, The Old Channel

Interior/exterior verdict:

- **Exterior:** weak-to-moderate as a well, hatch, drain, cellar door, or town threshold.
- **Interior:** strong.

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

---

### 6. Cursed Chapels and Shrine Ruins

**Recommended story names:** Mistfall Chapel, The Drowned Chapel, Saintless Aisle

Interior/exterior verdict:

- **Exterior:** moderate-to-strong for chapel facade, shrine ruin, cursed grounds, cemetery-like approach.
- **Interior:** moderate-to-strong for small chapel aisle, ritual room, ruined underchapel, crypt threshold.

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

---

### 7. Dungeons and Occult Deep Ruins

**Recommended story names:** The Road Below, The Black Reliquary, The Deep Aisle

Interior/exterior verdict:

- **Exterior:** weak-to-moderate as entrance, ruin gate, cave mouth, chapel stair, or threshold.
- **Interior:** strong.

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

---

### 8. Guild Halls and Workshops

**Recommended story names:** The Guild Hearth, Bellwright Hall, The Lantern House

Interior/exterior verdict:

- **Exterior:** moderate as frontage / town service entrance.
- **Interior:** strong.

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
- Opiphilus escort request creation
- repair and delivery contracts
- route-linked craft jobs
- post-arrival service unlocks
- weapon/armor crafting
- lantern glass crafting
- shrine repair kit assembly

Best game lines:

- Opiphilus
- Luciphilus support hub

---

### 9. Markets, Shops, Taverns, Homes

**Recommended story names:** Greybell Market, The Bell Inn, The Pilgrim House

Interior/exterior verdict:

- **Exterior:** strong for market street / shopfront / town frontage.
- **Interior:** moderate-to-strong for tavern/home/shop service rooms, depending on exact location type.

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
- destination village economy unlock
- local shop inventory unlocked after successful escort
- local guild/craft job board unlock
- trade demand generation for future escort requests
- rumor system
- companion recruitment
- economy tutorial

Best game lines:

- Opiphilus
- Luciphilus

---

### 10. Mage Towers and Ritual Rooms

**Recommended story names:** The Bell Astrolabe, Moon-Index Tower, The White Ledger

Interior/exterior verdict:

- **Exterior:** moderate as tower approach / annex / ritual building facade.
- **Interior:** moderate-to-strong for ritual rooms, archives, magic study, spell-presence scenes.

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

---

### 11. Training Arena / Guard Yard

**Recommended story names:** Lantern Yard, Guild Drill Court

Interior/exterior verdict:

- **Exterior:** strong.
- **Interior:** weak / not a current strength.

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

---

### 12. Fishing Village / Docks / Small Port Edge

**Recommended story names:** Lowdock, Bellwater Landing, Pilgrim Quay

Interior/exterior verdict:

- **Exterior:** strong for docks / village edge / boats.
- **Interior:** moderate; the named pack includes interior support, but keep it small.

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
- destination village for escort contracts
- dock shop and local guild counter unlock
- fishing supply orders
- boat repair jobs
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

Interior/exterior verdict:

- **Exterior:** feasible as gate, tower annex, ruined checkpoint, shrine-court threshold.
- **Interior:** feasible as archive, court shrine, crystal-law chamber, ritual room.

Use these packs together:

- guild hall
- training arena
- mage tower
- chapel
- dungeon/ruin pieces
- crystal/occult UI and props

### 2. Castle Ruin / Old Keep Threshold

A full castle is unsupported, but a **ruined court gate** or **broken keep approach** can be implied.

Interior/exterior verdict:

- **Exterior:** feasible as threshold only.
- **Interior:** weak; use dungeon/ruin interiors rather than full castle rooms.

### 3. Drowned Sanctuary

Feasible as a blend of:

- chapel
- sewer
- cave
- cursed land
- undead tiles

Interior/exterior verdict:

- **Exterior:** moderate as drowned chapel or cursed grounds.
- **Interior:** strong as flooded underchapel / sewer-sanctuary / cursed crypt.

### 4. Monster Dens

Feasible using:

- cave kits
- forest/glade kits
- cursed land kits
- dungeon/occult kits
- local monster families

Interior/exterior verdict:

- **Exterior:** feasible for forest/cursed-land dens.
- **Interior:** strong for cave/dungeon dens.

### 5. Ritual Archive / Forbidden Library

Feasible using:

- magic book effects
- mage tower packs
- guild hall interiors
- dungeon props
- chapel / occult pieces

Interior/exterior verdict:

- **Exterior:** weak-to-moderate as tower/annex/guild frontage.
- **Interior:** moderate-to-strong.

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

### 4. High-Tech Facilities

The current art language is occult, guild, medieval-fantasy, shrine, cave, dungeon, town, and workshop. Avoid sci-fi labs or modern facilities unless the art set expands.

---

# Recommended First Region Area List

The first region should be **The Pilgrim Verge**, built only from Tier A and simple Tier B areas.

| Area | Type | Interior / Exterior Plan |
|---|---|---|
| **Greybell Shrine** | shrine-town hub | exterior plaza + small shrine/chapel interior |
| **The Broken Road** | road / forest approach | exterior-only route screen |
| **Mistfall Chapel** | cursed chapel / shrine ruin | exterior cursed chapel approach + small interior aisle / underchapel |
| **The Underwell** | sewer / cave under-route | small exterior entry point + strong interior sewer/cave route |
| **The Chapel Undercrypt** | dungeon / cave / cursed ruin | interior-first dungeon rooms and boss threshold |
| **The Guild Hearth** | guild hall + blacksmith / workshop | interior-strong guild/workshop with optional town frontage |
| **The Old Crystal Gate** | composed court gate / ruin threshold | exterior threshold first; interior court archive later if needed |

---

# Story Rules From The Art Set

Use area names and worldbuilding that fit the available art:

- **Shrines, chapels, roads, caves, sewers, guild halls, workshops, taverns, markets, mage towers, forests, glades, ruins, and dungeons** should be common.
- **Castles, palaces, giant capitals, deserts, snowfields, volcanoes, and open seas** should be rare, off-screen, implied, or deferred until new art exists.
- The Crystal Courts should first appear as **archives, gates, tower annexes, ruined checkpoints, and court shrines**, not as a full castle.
- The first playable arc should happen in a compact shrine-town region, not a kingdom-scale overworld.
- **Opiphilus** uses escorting as an economy loop: move workers, buyers, tools, goods, and craft cargo safely to villages, shops, guild counters, and repair sites.
- **Luciphilus** uses escorting as paid contracts: guard fragile clients, caravans, relic couriers, supply runs, and route workers for guild standing and combat rewards.
- Destination villages should unlock shops, crafting stations, guild services, repair boards, and local jobs through completed routes, escorts, deliveries, and guild contributions.

---

# Practical Builder Guidance

The current `world_builder` system already thinks in curated environment kits:

| Builder Environment Kit | Use In Story | Interior / Exterior Bias |
|---|---|---|
| `road_shrine` | shrine approach, road threshold, Greybell Shrine exterior | exterior-first |
| `forest_glade` | ritual grove, forest road, hidden route | exterior-first |
| `cave_sewer` | Underwell, cave room, sewer threshold | interior-first, with threshold support |
| `cursed_chapel` | Mistfall Chapel, shrine ruin, undead threshold | mixed interior/exterior |
| `town_guild` | Guild Hearth, workshop, market, service interior | interior/service-first with town frontage support |

Early development should use these kits before expanding into the full art library.

Build each area once in the canonical shared map. Export shared geometry once, then export per-game lens data for visible actors, prompts, rewards, services, hazards, contracts, economy, and unlocks. If geometry truly differs, create another canonical shared area rather than a duplicate per-game map.

---

# Bottom Line

The current artwork supports **both inside and outside** for some area families, but not all.

Strongest full indoor/outdoor candidates:

- cursed chapel / shrine ruin,
- guild hall / workshop,
- blacksmith,
- tavern/home/shop scenes,
- fishing village / dock edges,
- composed Crystal Court outpost.

Strong interior-first candidates:

- caves,
- sewers,
- dungeons,
- undercrypts,
- ritual archives,
- occult ruins.

Strong exterior-first candidates:

- roads,
- crossroads,
- forests,
- glades,
- camp edges,
- training yards.

The first region should therefore use **outside-to-inside transitions** like:

- road → shrine plaza → chapel interior,
- town square → well hatch → sewer interior,
- forest path → cave mouth → cave interior,
- chapel ruin → undercrypt dungeon,
- market street → guild hall / workshop interior.

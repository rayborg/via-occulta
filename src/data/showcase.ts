import generated from './showcase.generated.json';
import { withBase } from '../paths';

export type FlatEntry = {
  key: string;
  label: string;
  slug: string;
  image: string;
  sourcePath: string;
  width: number;
  height: number;
};

export type ShowcasePage = {
  slug: string;
  title: string;
  kind: 'character' | 'monster';
  summary: string;
  description: readonly string[];
  tags: readonly string[];
  entries: FlatEntry[];
};

const characterEntries = (generated.characters as FlatEntry[]).map((entry) => ({
  ...entry,
  image: withBase(entry.image)
}));
const monsterEntries = (generated.monsters as FlatEntry[]).map((entry) => ({
  ...entry,
  image: withBase(entry.image)
}));
const entryIndex = new Map<string, FlatEntry>([...characterEntries, ...monsterEntries].map((entry) => [entry.slug, entry]));

function resolveEntries(slugs: readonly string[]): FlatEntry[] {
  return slugs.map((slug) => {
    const entry = entryIndex.get(slug);
    if (!entry) throw new Error(`Missing showcase entry for slug: ${slug}`);
    return entry;
  });
}

const characterPageDefs = [
  {
    slug: 'swordsman',
    title: 'Swordsman',
    summary: 'The clearest Luciphilus progression line, showing the main battle-role adventurer from level one through level nine.',
    description: [
      'The Swordsman line is the most straightforward expression of Luciphilus as a classic JRPG expedition game. Each level reads like a cleaner, more disciplined stage of the same road-tested fighter rather than a completely different character.',
      'The Swordsman line is the spine of the adventuring cast: the person who takes the route after Tenebrio has found it and before Opiphilus has fully rebuilt it.'
    ],
    tags: ['Luciphilus', 'Player Line', 'Adventurer', 'Levels 1-9'],
    entrySlugs: ['swordsman-l1', 'swordsman-l2', 'swordsman-l3', 'swordsman-l4', 'swordsman-l5', 'swordsman-l6', 'swordsman-l7', 'swordsman-l8', 'swordsman-l9']
  },
  {
    slug: 'base-human',
    title: 'Base Human Adventurers',
    summary: 'The baseline human combat and exploration forms that anchor the shared-world cast across Tenebrio and Luciphilus.',
    description: [
      'These base human forms matter because they define the simplest readable body language in the whole setting: unarmed vulnerability, ready steel, and the difference between a pilgrim who survives and a fighter who can push forward.',
      'Together, they show that Via Occulta is not only about monsters and relic hunters. It is also about ordinary bodies carrying extraordinary burdens through cursed roads.'
    ],
    tags: ['Shared World', 'Base Forms', 'Male and Female', 'Human Baseline'],
    entrySlugs: ['base-male-unarmed', 'base-female-unarmed', 'base-male-sword', 'base-female-sword']
  },
  {
    slug: 'guild-mage',
    title: 'Guild Mage',
    summary: 'The clearest walk-capable mage line for Opiphilus, presented as four readable guild-hall silhouettes.',
    description: [
      'The Guild Mages represent the practical magical side of Opiphilus rather than the remote, ritual-heavy mystery of the tower rooms. They belong in halls, ledgers, workshops, archives, and contracts, where magic is a trained profession instead of a haunted inheritance.',
      'They make the world feel inhabited by learned workers, not only priests and warriors. They suggest a town that studies, records, and administers power instead of merely surviving it.'
    ],
    tags: ['Guild Hall', 'Mage Line', 'Variants 1-4'],
    entrySlugs: ['guild-mage-1', 'guild-mage-2', 'guild-mage-3', 'guild-mage-4']
  },
  {
    slug: 'tower-mage',
    title: 'Tower Mage',
    summary: 'A more isolated magical line whose silhouettes feel closer to occult research and sealed ritual work than to everyday guild life.',
    description: [
      'The Tower Mages feel like people shaped by old archives, crystal-law rooms, and restricted rites. They are less social than the guild line and more bound to the architecture of towers, thresholds, and forbidden reading rooms.',
      'They help show that magic in Via Occulta has two tones: communal and procedural in the guilds, secretive and unsettling in the towers.'
    ],
    tags: ['Occult Study', 'Tower Rooms', 'Variants 1-2'],
    entrySlugs: ['tower-mage-1', 'tower-mage-2']
  },
  {
    slug: 'tower-reader',
    title: 'Tower Reader',
    summary: 'A solitary archive figure tied to old texts, ritual rooms, and the patient labor of occult interpretation.',
    description: [
      'The Tower Reader exists at the edge between scholarship and danger. This is the kind of figure who does not clear the dungeon or forge the lantern, but understands why the door opens and what name should never be spoken inside it.',
      'The Reader gives the setting a quieter intellectual presence and helps the world feel deeper than a simple combat-and-crafting split.'
    ],
    tags: ['Archive', 'Ritual Reading'],
    entrySlugs: ['tower-reader']
  },
  {
    slug: 'priest',
    title: 'Priest',
    summary: 'The clearest shrine authority in the cast, standing at the line between community ritual and failing road-law.',
    description: [
      'Priests in Via Occulta are not merely flavor NPCs. They embody the old compact that once kept the roads legible, the bells resonant, and the threshold rites trustworthy.',
      'The Priest is a reminder that the crisis of the world is spiritual and infrastructural at once: if the priesthood forgets the road, the town itself begins to lose direction.'
    ],
    tags: ['Shrine Orders', 'Ritual Authority', 'Shared World'],
    entrySlugs: ['priest']
  },
  {
    slug: 'monk',
    title: 'Monk',
    summary: 'A disciplined shrine-adjacent line whose forms suggest different temperaments of devotion, labor, and guarded restraint.',
    description: [
      'The Monk variants feel less ceremonial than the Priest and more bodily tied to the maintenance of place: carrying things, watching doors, tending routines, and enduring fear through repetition.',
      'Grouped together, they suggest a living order rather than a single hero figure. Via Occulta depends on institutions, not only protagonists.'
    ],
    tags: ['Shrine Orders', 'Support Line', 'Variants'],
    entrySlugs: ['monk-1', 'monk-2', 'monk-3']
  },
  {
    slug: 'blacksmith',
    title: 'Blacksmith and Smith',
    summary: 'The forge-facing identity cluster that connects practical labor, town survival, and weapon craft.',
    description: [
      'The Smith and Blacksmith Girl together define one of the most grounded parts of Opiphilus. They are not abstract crafters; they belong to heat, timing, tool wear, and the daily making of things that must survive the road outside town.',
      'Craft in Via Occulta is not decorative. The workshop is one of the world’s defensive organs.'
    ],
    tags: ['Workshop', 'Forge'],
    entrySlugs: ['smith', 'blacksmith-girl']
  },
  {
    slug: 'herbalist',
    title: 'Herbalist',
    summary: 'A practical support figure tied to remedies, ingredients, and the soft maintenance of bodies under pressure.',
    description: [
      'The Herbalist represents another side of survival work: not the making of steel, but the preparation of treatments, tonics, and gathered knowledge. This is the craft of keeping living people stable long enough to attempt another descent.',
      'The Herbalist helps Via Occulta feel like a world of restoration and preparation rather than a pure gauntlet of fights.'
    ],
    tags: ['Support Craft', 'Remedies'],
    entrySlugs: ['herbalist']
  },
  {
    slug: 'glassblower',
    title: 'Glassblower Folk',
    summary: 'Trade and craft identities centered on glass, display, vessels, and the quiet materials of ritual civilization.',
    description: [
      'Glasswork matters in Via Occulta because the world’s rites need containers, lenses, bell casings, and lantern bodies as much as they need weapons. The glassblower family is where fragile material becomes civic infrastructure.',
      'Glasswork reads less like combat preparation and more like proof that town life has specialist labor with its own dignity and visual identity.'
    ],
    tags: ['Workshop', 'Glass and Trade'],
    entrySlugs: ['glassblower-seller', 'glassblower-customer']
  },
  {
    slug: 'market-citizen',
    title: 'Market Citizens',
    summary: 'The town crowd that gives the market a lived rhythm instead of leaving it as a decorative empty square.',
    description: [
      'Citizens matter because they are the measure of whether the hidden-road world is worth saving. Markets, bells, and chapels only matter if ordinary people still pass through them, argue in them, buy food in them, and notice when the routes begin to fail.',
      'Grouped together, these citizens make the world feel inhabited and social instead of reading like a cast made only of specialists and fighters.'
    ],
    tags: ['Town Life', 'Market', 'Variants 1-5'],
    entrySlugs: ['citizen-1', 'citizen-2', 'citizen-3', 'citizen-4', 'citizen-5']
  },
  {
    slug: 'trader',
    title: 'Trader',
    summary: 'A merchant identity that represents circulation, exchange, and the practical economy that ties restored routes back to daily life.',
    description: [
      'The Trader stands at the point where adventure becomes value. If relics, ingredients, lantern glass, and forged goods cannot move through a social economy, then the road is only a wound and never a lifeline.',
      'The Trader stands as proof that Opiphilus is not just crafting in isolation. It is about reconnecting people, goods, and obligations.'
    ],
    tags: ['Market', 'Economy'],
    entrySlugs: ['trader']
  },
  {
    slug: 'flutist',
    title: 'Flutist',
    summary: 'A small but important reminder that the town has sound, ceremony, and leisure even while the roads are failing.',
    description: [
      'The Flutist keeps the world from becoming only functional and tragic. Music implies gathering, memory, and repeated communal habits that survive even when the map itself begins to lie.',
      'In a game this stark, one musician can do a lot of narrative work by suggesting what a town sounds like when it is not yet lost.'
    ],
    tags: ['Town Life', 'Performance', 'Atmosphere'],
    entrySlugs: ['flutist']
  },
  {
    slug: 'arena-archer',
    title: 'Arena Archers',
    summary: 'Guard-yard and training identities that imply organized practice, local defense, and disciplined ranged support.',
    description: [
      'The Arena Archers belong to drill yards and supervised readiness. They are not glamorous champions so much as evidence that settlements still invest in collective defense and technique.',
      'As grouped variants, they show that Luciphilus is not only a hero fantasy. It also includes systems of training, patrol, and preparation.'
    ],
    tags: ['Training Arena', 'Guards', 'Variants 1-3'],
    entrySlugs: ['arena-archer-1', 'arena-archer-2', 'arena-archer-3']
  },
  {
    slug: 'arena-fighter',
    title: 'Arena Fighters',
    summary: 'Weapon-specialized training-yard identities that show combat practice as a social system rather than a single heroic role.',
    description: [
      'The Arena Fighters show how different equipment reshapes posture, reach, and risk. Sword, shield, and halberd do not just change damage output; they change the visual grammar of how a body occupies space in danger.',
      'Together, they present combat identity as a spectrum of roles instead of a pile of disconnected poses.'
    ],
    tags: ['Training Arena', 'Weapon Roles'],
    entrySlugs: ['arena-fighter-sword', 'arena-fighter-shield', 'arena-fighter-halberd']
  },
  {
    slug: 'trainer',
    title: 'Trainer',
    summary: 'The figure who turns fear and repetition into something teachable inside the yard and hall.',
    description: [
      'A Trainer implies institutional memory. Someone has to know how to pass on stance, caution, timing, and survival habits before the road claims another generation of novices.',
      'In the larger setting, the Trainer is one of the quiet proofs that the world still produces continuity instead of only collapse.'
    ],
    tags: ['Training Arena', 'Instruction'],
    entrySlugs: ['trainer']
  },
  {
    slug: 'tavern-players',
    title: 'Tavern Players',
    summary: 'Fantasy player-facing bodies seen in a social interior rather than in a shrine or battle corridor.',
    description: [
      'These tavern player figures are useful because they make the world feel cross-populated and social. Adventurers, unusual travelers, and off-shift fighters do not vanish when they are not in the dungeon; they sit, watch, drink, and wait for rumor.',
      'They make Via Occulta feel like a place where characters pass through ordinary rooms with history, not only map gates and battle screens.'
    ],
    tags: ['Tavern', 'Social Interior', 'Fantasy Travelers'],
    entrySlugs: ['tavern-orc-player', 'tavern-drow-player', 'tavern-dwarf-player']
  },
  {
    slug: 'tavern-patrons',
    title: 'Tavern Patrons',
    summary: 'The interior crowd that turns an inn into a living checkpoint full of pauses, suspicions, and overheard stories.',
    description: [
      'The tavern patron line is important because Via Occulta needs rooms where danger is processed socially rather than fought directly. Drinkers, watchers, and thinkers are how a town metabolizes rumor, fatigue, and dread.',
      'They add temperature: the sense that travel produces waiting, reflection, and unease before anyone opens the next gate.'
    ],
    tags: ['Tavern', 'Atmosphere', 'Social Cast'],
    entrySlugs: ['tavern-drinker', 'tavern-thinker', 'tavern-watcher']
  },
  {
    slug: 'tavern-guards',
    title: 'Tavern Guards and Enforcers',
    summary: 'Harder-edged interior figures who suggest that common rooms in Via Occulta are never entirely safe or neutral.',
    description: [
      'The Killer and Knight together imply different kinds of pressure within social space: sanctioned force, implied violence, and the tension between law and intimidation.',
      'They present taverns as places of negotiation and danger rather than harmless decorative resting spots.'
    ],
    tags: ['Tavern', 'Threat', 'Authority'],
    entrySlugs: ['tavern-killer', 'tavern-knight']
  },
  {
    slug: 'fishing-village',
    title: 'Fishing Village Folk',
    summary: 'Small dock-edge and waterside community figures that hint at a quieter frontier beyond the shrine roads.',
    description: [
      'The fishing-village cast broadens the world beyond the shrine-town spine. These are people shaped by shoreline labor, local trade, and a more intimate relationship with weather and waiting.',
      'Their presence matters because not every settlement in Via Occulta should feel like a chapel or guild annex. Some should feel older, smaller, and more local.'
    ],
    tags: ['Village', 'Dock Edge', 'Community'],
    entrySlugs: ['village-boy', 'old-man', 'village-seller']
  },
  {
    slug: 'sewer-npcs',
    title: 'Sewer and Underway Survivors',
    summary: 'A rougher social line of alchemists, thieves, and poor laborers tied to under-town routes and dangerous necessity.',
    description: [
      'The under-route cast shows what life looks like closer to the hidden infrastructure itself. These are people who work, steal, survive, and improvise near channels, drains, and broken mechanisms the surface would rather ignore.',
      'They connect the world’s occult mystery to its social underside: the places where route failure becomes a class condition, not only a story event.'
    ],
    tags: ['Underwell', 'Sewer Route', 'Marginal Lives'],
    entrySlugs: ['poor-man', 'thief', 'alchemist']
  }
] as const;

const monsterPageDefs = [
  {
    slug: 'beholder',
    title: 'Beholder',
    summary: 'Floating occult predators whose gaze turns space itself into a form of pressure.',
    description: [
      'Beholders embody the idea that not every threat in Via Occulta charges or hunts like an animal. Some dangers hover, observe, and dominate space by making vision itself feel unsafe.',
      'The Beholder line adds arcane menace to the bestiary and helps the setting feel stranger than a simple graveyard of threats.'
    ],
    tags: ['Occult Monster', 'Caster Threat'],
    entrySlugs: ['beholder-1', 'beholder-2', 'beholder-3']
  },
  {
    slug: 'demon',
    title: 'Demon',
    summary: 'A direct expression of infernal violence and corrupted will inside the hidden-road collapse.',
    description: [
      'Demons in Via Occulta should feel less like abstract fire monsters and more like concentrated trespass: beings that do not belong in stable road-law but appear when the old compact fails.',
      'Their forms mark the upper edge of what the setting’s ritual failure can let through.'
    ],
    tags: ['Infernal', 'High Threat'],
    entrySlugs: ['demon-1', 'demon-2', 'demon-3']
  },
  {
    slug: 'ent',
    title: 'Ent',
    summary: 'Forest-burdened giants that make the wild edges of the world feel old, slow, and heavy with memory.',
    description: [
      'Ents are not just big monsters; they are environmental presences given will. They make glades, roots, and broken paths feel like places that can answer back if pushed too hard.',
      'They connect the forest spaces of the Pilgrim Verge to the hidden-road crisis without turning every threat undead or demonic.'
    ],
    tags: ['Forest', 'Heavy Form'],
    entrySlugs: ['ent-1', 'ent-2', 'ent-3']
  },
  {
    slug: 'free-slime',
    title: 'Free Slime',
    summary: 'Loose, unstable creatures that read like spillover from magical failure rather than coherent natural life.',
    description: [
      'Free Slimes feel like things that escaped containment, whether from old alchemy, dungeon residue, or the failing geometry of the roads themselves. Their shapelessness is part of the threat.',
      'Even low-silhouette enemies can still belong to the occult logic of the setting.'
    ],
    tags: ['Alchemical', 'Unstable'],
    entrySlugs: ['free-slime-1', 'free-slime-2', 'free-slime-3']
  },
  {
    slug: 'ghost',
    title: 'Ghost',
    summary: 'Road-bound remnants that suggest the dead are not staying where the old rites once placed them.',
    description: [
      'Ghosts are important to Via Occulta because they turn memory into a navigational hazard. A failed rite does not just create sadness; it creates a threshold where the dead continue to interfere with the living map.',
      'Their presence communicates that the world’s spiritual crisis is one of lingering displacement, not only of evil invasion.'
    ],
    tags: ['Undead', 'Ritual Failure'],
    entrySlugs: ['ghost-1', 'ghost-2', 'ghost-3']
  },
  {
    slug: 'giant-rat',
    title: 'Giant Rat',
    summary: 'A filthy and immediate under-route menace rooted in sewers, tunnels, and neglect.',
    description: [
      'Giant Rats ground the bestiary in physical degradation. They belong to damp routes, broken channels, and places where human systems have been left to rot long enough for appetite to take over.',
      'They keep the bestiary from becoming too abstract or too noble. Some threats are ugly, close, and hungry.'
    ],
    tags: ['Underway', 'Vermin'],
    entrySlugs: ['giant-rat-1', 'giant-rat-2', 'giant-rat-3']
  },
  {
    slug: 'gnoll',
    title: 'Gnoll',
    summary: 'Lean raider forms that suggest mobility, predation, and road-edge violence.',
    description: [
      'Gnolls carry a social threat as much as a physical one: the sense that roads are watched by things that understand movement, weakness, and opportunity. They feel like ambush logic made flesh.',
      'Their silhouettes instantly sell danger at the edges of travel.'
    ],
    tags: ['Raider', 'Ambush'],
    entrySlugs: ['gnoll-1', 'gnoll-2', 'gnoll-3']
  },
  {
    slug: 'goblin',
    title: 'Goblin',
    summary: 'The classic small monster line, readable, quick, and ideal for showing how the world mutates common danger into occult hostility.',
    description: [
      'Goblins are familiar enough to orient the player and strange enough to belong in the road-bound ecosystem. They act as a bridge between classic fantasy expectations and Via Occulta’s darker infrastructure-driven collapse.',
      'Because they are immediately legible, they make a good anchor family for the bestiary.'
    ],
    tags: ['Classic Monster', 'Small Threat'],
    entrySlugs: ['goblin-1', 'goblin-2', 'goblin-3']
  },
  {
    slug: 'golem',
    title: 'Golem',
    summary: 'Construct-like heavy forms that imply old protections still walking long after their makers are gone.',
    description: [
      'Golems make the world feel engineered and ancient at the same time. They are less beasts than old commands still moving through matter, indifferent to whether anyone remembers why they were built.',
      'They add a valuable mechanical tone to the bestiary, connecting magic, law, and craftsmanship in one hostile body.'
    ],
    tags: ['Construct', 'Ancient Defense'],
    entrySlugs: ['golem-1', 'golem-2', 'golem-3']
  },
  {
    slug: 'imp',
    title: 'Imp',
    summary: 'A mischievous but dangerous infernal line that makes corruption feel nimble rather than monumental.',
    description: [
      'Imps are useful because they suggest that the infernal side of the setting has grades, not just bosses. Some corruption is small, taunting, and agile, always ready to slip through the cracks of old protections.',
      'They help make demonic presence feel ecological rather than singular.'
    ],
    tags: ['Infernal', 'Agile Threat'],
    entrySlugs: ['imp-1', 'imp-2', 'imp-3']
  },
  {
    slug: 'lich',
    title: 'Lich',
    summary: 'One of the clearest symbols of forbidden persistence: intelligence refusing the terms of death.',
    description: [
      'Liches belong naturally in a world of shrines, archives, sealed thresholds, and broken ritual contracts. They represent memory made predatory and knowledge that has chosen survival over order.',
      'They give the setting an unmistakable necromantic axis.'
    ],
    tags: ['Undead Caster', 'Forbidden Knowledge'],
    entrySlugs: ['lich-1', 'lich-2', 'lich-3']
  },
  {
    slug: 'mushroom',
    title: 'Mushroom',
    summary: 'Fungal bodies that connect damp growth, decay, and uncanny life to the dungeon ecology.',
    description: [
      'Mushroom monsters help the world feel organic in a wrong way. They suggest places where rot is not passive, but a living pattern that pushes back against human order.',
      'They are a good reminder that corruption in Via Occulta is not always ghostly or demonic. Sometimes it is simply the wrong life thriving in the dark.'
    ],
    tags: ['Fungal', 'Dungeon Ecology'],
    entrySlugs: ['mushroom-1', 'mushroom-2', 'mushroom-3']
  },
  {
    slug: 'orc',
    title: 'Orc',
    summary: 'A brutish combat line whose forms suggest disciplined violence rather than mindless chaos.',
    description: [
      'Orcs bring physical certainty to the bestiary. They are the sort of threat that makes a route feel blocked by force rather than by puzzle, haunting, or contamination.',
      'The Orc line helps round out the bestiary with a more direct martial adversary.'
    ],
    tags: ['Martial Monster', 'Frontline Threat'],
    entrySlugs: ['orc-1', 'orc-2', 'orc-3']
  },
  {
    slug: 'predator-plant',
    title: 'Predator Plant',
    summary: 'A hostile botanical line that turns overgrowth into active hunger.',
    description: [
      'Predator Plants make the land itself feel complicit. Their threat is not movement across the road, but the possibility that the verge, root, or shrine edge has already become a mouth.',
      'They reinforce the idea that the world’s failure is environmental as well as spiritual.'
    ],
    tags: ['Plant Horror', 'Forest Edge'],
    entrySlugs: ['predator-plant-1', 'predator-plant-2', 'predator-plant-3']
  },
  {
    slug: 'skeleton',
    title: 'Skeleton',
    summary: 'A stripped-down undead line that makes the old roads feel excavated, emptied, and still active.',
    description: [
      'Skeletons are useful because they are pure structure. They make undead threat feel less mournful than ghosts and less calculating than liches: simple remains still moving under dead instruction.',
      'They suit crypts, ruins, chapels, and forgotten roadwork equally well.'
    ],
    tags: ['Undead', 'Crypt Guard'],
    entrySlugs: ['skeleton-1', 'skeleton-2', 'skeleton-3']
  },
  {
    slug: 'slime-boss',
    title: 'Slime Boss',
    summary: 'A larger-scale ooze line that feels more like a territory or event than a mere roaming creature.',
    description: [
      'The Slime Boss family shows how even a mutable, formless threat can become monumental. These are less pests than accumulations, dangerous precisely because they make contamination feel large and difficult to contain.',
      'They suggest escalation without needing a humanoid villain.'
    ],
    tags: ['Boss Form', 'Corruption Mass'],
    entrySlugs: ['slime-boss-1', 'slime-boss-2', 'slime-boss-3']
  },
  {
    slug: 'slime-monster',
    title: 'Slime Monster',
    summary: 'A more conventional slime line that helps define the lower and middle tiers of dungeon corruption.',
    description: [
      'Slime Monsters are the everyday face of instability: things that should not hold shape but do, things that should be harmless residue but instead hunt. They make alchemical and under-route failure feel persistently alive.',
      'They complement the more imposing Slime Boss forms without duplicating them.'
    ],
    tags: ['Slime', 'Dungeon Hazard'],
    entrySlugs: ['slime-monster-1', 'slime-monster-2', 'slime-monster-3']
  },
  {
    slug: 'vampire',
    title: 'Vampire',
    summary: 'An aristocratic undead line that pushes the bestiary toward elegance, hunger, and predatory self-control.',
    description: [
      'Vampires add a different undead mood from ghosts, skeletons, or liches. They are not only remnants or violations, but refined predators whose danger lies in intention and appetite.',
      'They widen the tonal range of the setting’s darkness.'
    ],
    tags: ['Undead Noble', 'Predatory Grace'],
    entrySlugs: ['vampire-1', 'vampire-2', 'vampire-3']
  },
  {
    slug: 'zombie',
    title: 'Zombie',
    summary: 'The bluntest undead expression of road failure: bodies that should be gone but still clog the world.',
    description: [
      'Zombies in Via Occulta are less about spectacle than about the stubborn refusal of decay to stay quiet. They make collapsed rites feel physical, common, and impossible to ignore.',
      'They close out the bestiary with a threat that is immediately legible and thematically central to cursed land and chapel ruin spaces.'
    ],
    tags: ['Undead', 'Cursed Land'],
    entrySlugs: ['zombie-1', 'zombie-2', 'zombie-3']
  }
] as const;

export const characterPages: ShowcasePage[] = characterPageDefs.map((page) => ({
  ...page,
  kind: 'character',
  entries: resolveEntries(page.entrySlugs)
}));

export const monsterPages: ShowcasePage[] = monsterPageDefs.map((page) => ({
  ...page,
  kind: 'monster',
  entries: resolveEntries(page.entrySlugs)
}));

export const homepageFeaturedCharacters = characterPages.filter((page) => ['swordsman', 'guild-mage', 'blacksmith', 'herbalist', 'priest'].includes(page.slug));
export const homepageFeaturedMonsters = monsterPages.filter((page) => ['goblin', 'ghost', 'demon', 'slime-boss'].includes(page.slug));

export function getCharacterPage(slug: string): ShowcasePage | undefined {
  return characterPages.find((page) => page.slug === slug);
}

export function getMonsterPage(slug: string): ShowcasePage | undefined {
  return monsterPages.find((page) => page.slug === slug);
}

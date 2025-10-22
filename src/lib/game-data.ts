// Flames of Orion - Game Data and Types

export type FrameType = "light" | "medium" | "heavy";

export interface FrameProfile {
  id: FrameType;
  name: string;
  description: string;
  baseStats: MechStats;
}

export interface MechStats {
  speed: number;
  combatSkill: string;
  armor: string;
  hullPoints: number;
  heatLimit: number;
  platforms: number;
}

export interface Upgrade {
  id: string;
  name: string;
  cost: number;
  description: string;
  special?: string;
  stackable?: boolean;
  platformSlots?: number; // How many platform slots this uses (default 1)
}

export interface RangedWeapon {
  id: string;
  name: string;
  cost: number;
  damage: string;
  maxRange?: string;
  special?: string;
  platformSlots?: number; // Default 1, Heavy Weapon uses 2
}

export interface Ammo {
  id: string;
  name: string;
  cost: number;
  description: string;
}

export interface MeleeWeapon {
  id: string;
  name: string;
  cost: number;
  damage: string;
  range?: string;
  special?: string;
  platformSlots?: number; // Default 1
}

export interface Mech {
  id: string;
  callSign: string;
  baseCost: number;
  frameType: FrameType;
  stats: MechStats;
  upgrades: string[]; // Array of upgrade IDs
  rangedWeapons: string[]; // Array of ranged weapon IDs
  meleeWeapons: string[]; // Array of melee weapon IDs
  weaponAmmo: Record<number, string>; // Maps ranged weapon index to ammo ID
}

export type VehicleType = "mech" | "ground-vehicle" | "aircraft" | "infantry";

export interface BunkerBay {
  id: string;
  content: {
    type: VehicleType;
    ids: string[]; // IDs of mechs/vehicles in this bay
  } | null;
}

export interface Bunker {
  id: string;
  bays: BunkerBay[];
  credits: number;
  name: string;
}

// Base Mech Stats
export const BASE_MECH_STATS: MechStats = {
  speed: 6,
  combatSkill: "4+",
  armor: "6+",
  hullPoints: 6,
  heatLimit: 10,
  platforms: 4,
};

export const BASE_MECH_COST = 0;

// Bunker Constants
export const BUNKER_STARTING_CREDITS = 150000;
export const BUNKER_STARTING_MECHS = 4;
export const BUNKER_TOTAL_BAYS = 6;

// Bay capacity rules:
// 1 Mech per bay, OR
// 2 ground vehicles per bay, OR
// 2 aircraft per bay, OR
// 3 infantry per bay
export const BAY_CAPACITY = {
  mech: 1,
  "ground-vehicle": 2,
  aircraft: 2,
  infantry: 3,
};

// Frame Profiles
export const FRAME_PROFILES: FrameProfile[] = [
  {
    id: "light",
    name: "Light Frame",
    description: "Faster and more HEAT efficient but more susceptible to damage.",
    baseStats: {
      speed: 7,
      combatSkill: "4+",
      armor: "6+",
      hullPoints: 4,
      heatLimit: 12,
      platforms: 3,
    },
  },
  {
    id: "medium",
    name: "Medium Frame",
    description: "The baseline chassis. A good mix of speed, armor, and HEAT efficiency.",
    baseStats: {
      speed: 6,
      combatSkill: "4+",
      armor: "6+",
      hullPoints: 6,
      heatLimit: 10,
      platforms: 4,
    },
  },
  {
    id: "heavy",
    name: "Heavy Frame",
    description: "More durable but slower with poor HEAT control.",
    baseStats: {
      speed: 5,
      combatSkill: "4+",
      armor: "5+",
      hullPoints: 7,
      heatLimit: 9,
      platforms: 5,
    },
  },
];

// Upgrades
export const UPGRADES: Upgrade[] = [
  {
    id: "armor-mk1",
    name: "Armor MK I",
    cost: 10000,
    description: "AR becomes 5+.",
    platformSlots: 1,
  },
  {
    id: "armor-mk2",
    name: "Armor MK II",
    cost: 25000,
    description: "AR becomes 4+.",
    platformSlots: 1,
  },
  {
    id: "reactive-armor",
    name: "Reactive Armor",
    cost: 50000,
    description: "Ignore the first 1 point of Damage this model takes per turn.",
    platformSlots: 1,
  },
  {
    id: "vtol",
    name: "VTOL",
    cost: 25000,
    description: "Ignore terrain when making a Move Action.",
    platformSlots: 1,
  },
  {
    id: "thrusters",
    name: "Thrusters",
    cost: 10000,
    description: "Gain +1 Speed.",
    special: "Stackable",
    stackable: true,
    platformSlots: 1,
  },
  {
    id: "heat-sink",
    name: "Heat Sink",
    cost: 10000,
    description: "New HEAT Check values; 1=2 HEAT, 2=1 HEAT, 3-6=0 HEAT",
    platformSlots: 1,
  },
  {
    id: "sensor-array",
    name: "Sensor Array",
    cost: 25000,
    description: "Critical Hits deal an extra +1 damage.",
    platformSlots: 1,
  },
  {
    id: "heavy-plating",
    name: "Heavy Plating",
    cost: 20000,
    description: "Increase HP by 1.",
    special: "Stackable",
    stackable: true,
    platformSlots: 1,
  },
  {
    id: "core-stabilizers",
    name: "Core Stabilizers",
    cost: 10000,
    description: "Increase your HEAT limit by 2.",
    special: "Stackable",
    stackable: true,
    platformSlots: 1,
  },
  {
    id: "extra-platforms",
    name: "Extra Platforms",
    cost: 15000,
    description: "Increase your model's Platforms by 1. This does not take up a PF slot.",
    special: "Stackable. Does not use a PF slot.",
    stackable: true,
    platformSlots: 0,
  },
  {
    id: "self-destruct",
    name: "Self Destruct",
    cost: 10000,
    description:
      "During your turn if you have 7 or more HEAT, you may make a <Self Destruct Action>. Your model explodes.",
    platformSlots: 1,
  },
  {
    id: "camouflage",
    name: "Camouflage",
    cost: 30000,
    description:
      "You may use an action to gain the <Active Camo> status until this model's next action. While under the effects of <Active Camo>, enemy models making Ranged attacks modify their CS rolls by -1.",
    platformSlots: 1,
  },
  {
    id: "nuclear-core",
    name: "Nuclear Core",
    cost: 10000,
    description: "When this Mech explodes, it explodes as if it were at HEAT 10.",
    platformSlots: 1,
  },
  {
    id: "targeting-system",
    name: "Targeting System",
    cost: 45000,
    description: "This model improves their CS rolls by +1.",
    platformSlots: 1,
  },
  {
    id: "up-link",
    name: "Up-Link",
    cost: 15000,
    description:
      "You may spend an Action and target an enemy model in Line of Sight; the target model gains Position Compromised.",
    platformSlots: 1,
  },
  {
    id: "long-range-targeting",
    name: "Long Range Targeting",
    cost: 15000,
    description: "When making Ranged Actions, ignore the Long Range rule.",
    platformSlots: 1,
  },
  {
    id: "defense-array",
    name: "Defense Array",
    cost: 10000,
    description:
      'Any time an enemy model gets within 1", roll a d6. On a 4+ the enemy model instead is placed just outside 1".',
    platformSlots: 1,
  },
  {
    id: "thermal-imaging",
    name: "Thermal Imaging",
    cost: 20000,
    description: "When targeting a model with 5 or more HEAT, gain +1 to your CS roll.",
    platformSlots: 1,
  },
  {
    id: "counter-missiles",
    name: "Counter Missiles",
    cost: 10000,
    description: "When hit with a ranged critical hit, negate all extra damage from the critical hit.",
    platformSlots: 1,
  },
  {
    id: "virus-program",
    name: "Virus Program",
    cost: 20000,
    description:
      "Once per game: When you activate the model equipped with this Upgrade, you may select an enemy model to infect. The infected model may take only one action this turn. That action cannot be bolstered.",
    platformSlots: 1,
  },
];

// Ranged Weapons
export const RANGED_WEAPONS: RangedWeapon[] = [
  {
    id: "flame-thrower",
    name: "Flame Thrower",
    cost: 10000,
    damage: "1",
    maxRange: '10"',
    special:
      "On a successful Hit, increase target models HEAT by 1d2. May not be equipped with Specialty Ammunition.",
    platformSlots: 1,
  },
  {
    id: "light-weapon",
    name: "Light Weapon",
    cost: 10000,
    damage: "1",
    platformSlots: 1,
  },
  {
    id: "medium-weapon",
    name: "Medium Weapon",
    cost: 15000,
    damage: "2",
    platformSlots: 1,
  },
  {
    id: "heavy-weapon",
    name: "Heavy Weapon",
    cost: 25000,
    damage: "4",
    special: "Equipped model may only move at half speed if it fires this weapon this turn. Takes up 2 PFs.",
    platformSlots: 2,
  },
  {
    id: "rail-weapon",
    name: "Rail Weapon",
    cost: 45000,
    damage: "d3",
    special:
      "Pick a visible point on the battlefield. Draw a straight line starting from the firing model to the chosen point. Roll one attack for each model and destructible terrain the line passes over. This attack hits friendly models. The firing model gains +1 HEAT when this weapon is used.",
    platformSlots: 1,
  },
  {
    id: "ai-missile-system",
    name: "A.I. Missile System",
    cost: 15000,
    damage: "1",
    maxRange: '20"',
    special:
      "When making a Ranged Attack, this weapon does not require line of sight. Ignore any cover bonus.",
    platformSlots: 1,
  },
  {
    id: "long-range-systems",
    name: "Long Range Systems",
    cost: 25000,
    damage: "2 (AP)",
    special: "Ignore the -1 CS from firing at Long Range.",
    platformSlots: 1,
  },
  {
    id: "large-missile-battery",
    name: "Large Missile Battery",
    cost: 30000,
    damage: "d2",
    special:
      'When targeting a model, roll to hit with this weapon against all models and terrain within 2" of the original target.',
    platformSlots: 1,
  },
];

// Melee Weapons
export const MELEE_WEAPONS: MeleeWeapon[] = [
  {
    id: "basic-combat-attachment",
    name: "Basic Combat Attachment",
    cost: 5000,
    damage: "1",
    platformSlots: 1,
  },
  {
    id: "close-combat-weapon",
    name: "Close Combat Weapon",
    cost: 10000,
    damage: "2",
    platformSlots: 1,
  },
  {
    id: "cable-whip",
    name: "Cable Whip",
    cost: 15000,
    damage: "2",
    range: '3"',
    special: 'This weapon has an Engagement range of 3" and may treat enemies as if they are within 1".',
    platformSlots: 1,
  },
  {
    id: "lance",
    name: "Lance",
    cost: 20000,
    damage: "1",
    special:
      "If this model made a Move Action this turn, increase this weapon's Damage by +2, and gains AP for this Action.",
    platformSlots: 1,
  },
  {
    id: "power-weapon",
    name: "Power Weapon",
    cost: 15000,
    damage: "2 (AP)",
    special: "On an attack roll of 1, the power core burns out, losing AP for the rest of the match.",
    platformSlots: 1,
  },
  {
    id: "electric-field",
    name: "Electric Field",
    cost: 10000,
    damage: "1",
    special:
      'Make an attack against all other models within 2" of you. Each model that takes damage is pushed back 1".',
    platformSlots: 1,
  },
  {
    id: "piston-gauntlet",
    name: "Piston Gauntlet",
    cost: 10000,
    damage: "2",
    special: 'When this weapon hits, you may move the target model 1" directly away from you.',
    platformSlots: 1,
  },
  {
    id: "energy-sword",
    name: "Energy Sword",
    cost: 15000,
    damage: "2",
    special:
      "Causes Critical Hits on attack rolls of 5+. On an attack roll of 1, the fusion core burns out and this weapon becomes a 1 Damage melee weapon for the rest of the game.",
    platformSlots: 1,
  },
];

// Ammo
export const AMMO: Ammo[] = [
  {
    id: "flechette-rounds",
    name: "Flechette Rounds",
    cost: 5000,
    description: "Weapons with this Ammo gain AP.",
  },
  {
    id: "hellfire-rounds",
    name: "Hellfire Rounds",
    cost: 10000,
    description: "Increase Weapon Damage by 1.",
  },
  {
    id: "emf-rounds",
    name: "EMF Rounds",
    cost: 10000,
    description:
      "The model damaged by a weapon with this Ammo has its Speed reduced by 2 until the end of the target's next activation.",
  },
  {
    id: "concussive-rounds",
    name: "Concussive Rounds",
    cost: 5000,
    description:
      'When a weapon equipped with this Ammo hits an enemy model, the target is immediately moved 2" directly away from the firing model. If this causes the model to make contact with another model, or Terrain, apply 1 Damage to each of them.',
  },
  {
    id: "rapid-fire-rounds",
    name: "Rapid Fire Rounds",
    cost: 20000,
    description:
      "When a weapon loaded with this Ammo rolls a 6 to hit, apply critical damage normally, then you may roll another Ranged Attack with this weapon.",
  },
  {
    id: "tracer-rounds",
    name: "Tracer Rounds",
    cost: 5000,
    description:
      "Apply Position Compromised to the model hit with this Ammo. The firing model also gains Position Compromised.",
  },
];

// Helper functions
export function getFrameProfileById(id: FrameType): FrameProfile | undefined {
  return FRAME_PROFILES.find((f) => f.id === id);
}

export function getUpgradeById(id: string): Upgrade | undefined {
  return UPGRADES.find((u) => u.id === id);
}

export function getRangedWeaponById(id: string): RangedWeapon | undefined {
  return RANGED_WEAPONS.find((w) => w.id === id);
}

export function getMeleeWeaponById(id: string): MeleeWeapon | undefined {
  return MELEE_WEAPONS.find((w) => w.id === id);
}

export function getAmmoById(id: string): Ammo | undefined {
  return AMMO.find((a) => a.id === id);
}

export function calculateMechCost(mech: Mech, mechIndex: number = 0): number {
  // First 4 mechs are free, 5th and beyond cost 50,000
  let total = mechIndex >= 4 ? 50000 : mech.baseCost;

  // Add upgrade costs
  mech.upgrades.forEach((upgradeId) => {
    const upgrade = getUpgradeById(upgradeId);
    if (upgrade) total += upgrade.cost;
  });

  // Add ranged weapon costs
  mech.rangedWeapons.forEach((weaponId) => {
    const weapon = getRangedWeaponById(weaponId);
    if (weapon) total += weapon.cost;
  });

  // Add melee weapon costs
  mech.meleeWeapons.forEach((weaponId) => {
    const weapon = getMeleeWeaponById(weaponId);
    if (weapon) total += weapon.cost;
  });

  // Add ammo costs
  Object.values(mech.weaponAmmo ?? {}).forEach((ammoId) => {
    const ammo = getAmmoById(ammoId);
    if (ammo) total += ammo.cost;
  });

  return total;
}

export function calculateUsedPlatforms(mech: Mech): number {
  let used = 0;

  // Count upgrades (excluding Extra Platforms which don't use slots)
  mech.upgrades.forEach((upgradeId) => {
    const upgrade = getUpgradeById(upgradeId);
    if (upgrade) used += upgrade.platformSlots ?? 1;
  });

  // Count ranged weapons
  mech.rangedWeapons.forEach((weaponId) => {
    const weapon = getRangedWeaponById(weaponId);
    if (weapon) used += weapon.platformSlots ?? 1;
  });

  // Count melee weapons
  mech.meleeWeapons.forEach((weaponId) => {
    const weapon = getMeleeWeaponById(weaponId);
    if (weapon) used += weapon.platformSlots ?? 1;
  });

  return used;
}

export function calculateTotalPlatforms(mech: Mech): number {
  const frameProfile = getFrameProfileById(mech.frameType);
  let total = frameProfile ? frameProfile.baseStats.platforms : BASE_MECH_STATS.platforms;

  // Count Extra Platforms upgrades
  const extraPlatformsCount = mech.upgrades.filter((id) => id === "extra-platforms").length;
  total += extraPlatformsCount;

  // Max 8 platforms
  return Math.min(total, 8);
}

export function calculateModifiedStats(mech: Mech): MechStats {
  const frameProfile = getFrameProfileById(mech.frameType);
  const stats = frameProfile ? { ...frameProfile.baseStats } : { ...BASE_MECH_STATS };

  // Apply upgrade modifications
  mech.upgrades.forEach((upgradeId) => {
    switch (upgradeId) {
      case "armor-mk1":
        stats.armor = "5+";
        break;
      case "armor-mk2":
        stats.armor = "4+";
        break;
      case "thrusters":
        stats.speed += 1;
        break;
      case "heavy-plating":
        stats.hullPoints += 1;
        break;
      case "core-stabilizers":
        stats.heatLimit += 2;
        break;
    }
  });

  // Apply Targeting System if equipped
  if (mech.upgrades.includes("targeting-system")) {
    // CS improves by +1 (e.g., 4+ becomes 3+)
    const csValue = parseInt(stats.combatSkill);
    stats.combatSkill = `${Math.max(2, csValue - 1)}+`;
  }

  stats.platforms = calculateTotalPlatforms(mech);

  return stats;
}

export function formatCredits(amount: number): string {
  return `₡${amount.toLocaleString()}`;
}

// Bunker Helper Functions
export function createEmptyBunker(name: string = "My Bunker"): Bunker {
  const bays: BunkerBay[] = Array.from({ length: BUNKER_TOTAL_BAYS }, (_, i) => ({
    id: `bay-${i}`,
    content: null,
  }));

  return {
    id: `bunker-${Date.now()}`,
    bays,
    credits: BUNKER_STARTING_CREDITS,
    name,
  };
}

export function canAddToBay(bay: BunkerBay, vehicleType: VehicleType, count: number): boolean {
  if (bay.content === null) {
    return count <= BAY_CAPACITY[vehicleType];
  }

  // Bay already has content
  if (bay.content.type !== vehicleType) {
    return false;
  }

  // Check if adding would exceed capacity
  const totalCount = bay.content.ids.length + count;
  return totalCount <= BAY_CAPACITY[vehicleType];
}

export function getBayUsagePercent(bay: BunkerBay): number {
  if (bay.content === null) {
    return 0;
  }

  const capacity = BAY_CAPACITY[bay.content.type];
  const used = bay.content.ids.length;
  return (used / capacity) * 100;
}

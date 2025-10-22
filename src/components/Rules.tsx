import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircleWarning, TriangleAlert } from "lucide-react";
import { RulesSection } from "./RulesSection";

export default function Rules() {
  return (
    <div className="flex flex-col gap-2">
      <RulesSection title="INTRO BRIEFING / TOOLS">
        <h3 className="text-xl pt-4">MODELS</h3>
        <p>
          To play a game each player needs at minimum 4 models. Use any miniatures you like on 28mm-40mm bases
          in roughly 6mm scale. These make up your Combat Unit.
        </p>

        <h3 className="text-xl pt-4">BATTLEFIELD</h3>
        <p>
          Flames of Orion takes place among desolate and destroyed landscapes on ancient planets. Anything
          from desert wasteland, to lunar rock, to destroyed and cluttered city blocks will fit the theme.
          Battlefields should be anywhere from 2x2' to 4x4' with a good spread of terrain scattered around to
          fill the board and block lines of sight. Some terrain is destructible.
        </p>

        <h3 className="text-xl pt-4">DICE</h3>
        <p>
          The game uses mostly d6, but a set of standard RPG dice is needed for rolling on random tables. d10
          are also helpful for tracking HEAT and Hull Points. You may occasionally need to roll things such
          as: d2, d3, d66.
        </p>
        <p>
          <span className="text-title">D66:</span> If you are unfamiliar with a d66: roll a d6 for the tens
          digit, roll another for the ones digit, producing a number from 11 to 66.
        </p>

        <h3 className="text-xl pt-4">MEASURING</h3>
        <p>
          Measurements are in inches. Measure from the edge of the model's base. Any player may measure
          anything at any time without committing to any actions.
        </p>

        <h3 className="text-xl pt-4">ACTIVATION TOKENS</h3>
        <p>
          When playing; after a model activates, place an Activation token next to them. This could be a bead,
          a piece of cotton, or any small object on hand. At the end of the round, after performing a HEAT
          Check with the model, remove the token to signify it is ready for the next round.
        </p>
      </RulesSection>

      <RulesSection title="INTRO TO MECHS">
        <p>
          During a game you will field your Combat Unit, which typically consists of 4 Mechs. You may also
          choose to swap some Mechs for ground forces as described on Page 30. Below are the stats for the
          different aspects of each Mech in your combat unit.
        </p>

        <h4 className="text-lg pt-3">HULL POINTS (HP)</h4>
        <p>
          <span className="text-title font-bold">HP</span> is how much damage a model can take before it is destroyed. Each time a model receives a point of
          damage, reduce its <span className="text-title font-bold">HP</span> by 1. If a model is reduced to 0<span className="text-title font-bold">HP</span>, it immediately makes an <span className="text-title font-bold">Explode Check</span>
          (p.18) and is then removed from play. That model is now <span className="text-title font-bold">Out Of Action</span>.
        </p>

        <h4 className="text-lg pt-3">ARMOR (AR)</h4>
        <p>
          <span className="text-title font-bold">AR</span> is the model's ability to ignore damage. For each point of damage that a model suffers, make a
          separate armor save. Roll equal to or greater than your <span className="text-title font-bold">AR</span> value to ignore the point of damage.
        </p>

        <h4 className="text-lg pt-3">COMBAT SKILL (CS)</h4>
        <p>
          <span className="text-title font-bold">CS</span> is your model's ability to target and attack enemy models with <span className="text-title font-bold">Melee</span> and <span className="text-title font-bold">Ranged</span> attacks. Roll
          equal to or greater than your <span className="text-title font-bold">CS</span> value to deal damage.
        </p>

        <h4 className="text-lg pt-3">SPEED (S)</h4>
        <p><span className="text-title font-bold">S</span> is the distance your model can move, measured in inches.</p>

        <h4 className="text-lg pt-3">HEAT LIMIT (HL)</h4>
        <p>
          Throughout the game, your models gain <span className="text-title font-bold">HEAT</span>. <span className="text-title font-bold">HEAT</span> represents the amount of strain a model can
          withstand, and its ability to continue performing. If a model reaches or exceeds its <span className="text-title font-bold">HEAT Limit</span>, it
          is immediately reduced to 0 <span className="text-title font-bold">HP</span>.
        </p>

        <h4 className="text-lg pt-3">PLATFORMS (PF)</h4>
        <p>
          <span className="text-title font-bold">PF</span> is the number of weapons & upgrades that can be equipped to a model. All Mechs begin with 4 <span className="text-title font-bold">PF</span>
          slots, and may not have more than 8 <span className="text-title font-bold">PF</span> slots. There are two types of <span className="text-title font-bold">Platforms</span>; weapons and
          upgrades.
        </p>
        <ul className="list-disc pl-6">
          <li>
            <span className="text-title">Weapon Platforms</span> - The weapons equipped to a model. There are
            two types: Ranged, and Melee.
          </li>
          <li>
            <span className="text-title">Upgrade Platforms</span> - Items that affect a model's abilities &
            stats.
          </li>
        </ul>
      </RulesSection>

      <RulesSection title="GAME STRUCTURE">
        <p>
          A game of Flames of Orion is broken down into <span className="text-title font-bold">Phases</span> and <span className="text-title font-bold">Rounds</span>, with players taking alternating
          turns in each <span className="text-title font-bold">Phase</span>.
        </p>

        <h4 className="text-lg pt-3">ROUNDS</h4>
        <p>
          A game lasts 5 <span className="text-title font-bold">Rounds</span>, and every <span className="text-title font-bold">Round</span> is split into three <span className="text-title font-bold">Phases</span>. Once all three <span className="text-title font-bold">Phases</span> have been
          completed, the next <span className="text-title font-bold">Round</span> begins. The game ends at the completion of the 5th <span className="text-title font-bold">Round</span> unless otherwise
          noted.
        </p>

        <h4 className="text-lg pt-3">PHASES</h4>
        <p>
          <span className="text-title font-bold">Rounds</span> are split into three <span className="text-title font-bold">Phases</span>, performed in this order: <span className="text-title font-bold">Initiative Phase</span>, <span className="text-title font-bold">Activation Phase</span> and
          <span className="text-title font-bold">HEAT Phase</span>. Players take turns Activating their models. After all <span className="text-title font-bold">Phases</span> have been completed a new
          <span className="text-title font-bold">Round</span> begins, starting again with the <span className="text-title font-bold">Initiative Phase</span>.
        </p>

        <h4 className="text-2xl pt-3">PHASE ORDER</h4>
        <h3 className="text-lg pt-2">1 <span className="text-title font-bold">INITIATIVE PHASE</span></h3>
        <p>
          All players roll a d6. The highest roll wins the <span className="text-title font-bold">Initiative</span> and takes the first turn, then next
          highest, and so on. In case of ties, roll off. Whoever finishes activating their models first adds
          +1 to their <span className="text-title font-bold">Initiative</span> roll on the next <span className="text-title font-bold">Round</span>.
        </p>

        <h3 className="text-lg pt-2">2 <span className="text-title font-bold">ACTIVATION PHASE</span></h3>
        <p>
          Players take turns activating their models to perform Actions. Each model may only activate once per
          <span className="text-title font-bold">Round</span>. When a model is chosen to activate, it may perform up to 2 Actions. When that model finishes
          its activation, the next player in initiative order does the same. This continues until all models
          have been activated and the next <span className="text-title font-bold">Phase</span> begins.
        </p>
        <p>
          If a player has no models left to activate, the rest of the players continue activating in
          initiative order until all models have activated.
        </p>

        <h3 className="text-lg pt-2">3 <span className="text-title font-bold">HEAT PHASE</span></h3>
        <p>
          Players take turns making <span className="text-title font-bold">HEAT Checks</span> for their models, in Initiative Order, until all models have
          taken <span className="text-title font-bold">HEAT Checks</span>. When it is their turn, the player selects a model with an <span className="text-title font-bold">Activation Token</span>, makes
          a <span className="text-title font-bold">HEAT Check</span> for that model, and then discards that model's activation token. Then the next player
          selects a model to make a <span className="text-title font-bold">HEAT Check</span>, and so on.
        </p>

        <div className="alert alert-warning alert-soft">
          <p className="text-sm">
            <span className="font-bold">re: RETREAT & SURRENDER</span> At the start of a player's turn, they
            may retreat from battle and concede the game. If only one player remains, they are declared the
            winner.
          </p>
        </div>
      </RulesSection>

      <RulesSection title="ACTIVATIONS">
        <p>When chosen to activate, a model performs up to 2 Actions and then generates HEAT.</p>

        <h4 className="text-lg pt-3">ACTIONS</h4>
        <p>
          There are five basic Actions a model may make in a turn: <span className="text-title font-bold">Move</span>, <span className="text-title font-bold">Ranged Attack</span>, <span className="text-title font-bold">Melee Attack</span>,
          <span className="text-title font-bold">Disengage</span>, or <span className="text-title font-bold">Purge HEAT</span>. You may perform actions in any order, and you may perform the same action
          twice.
        </p>
        <p>
          You may perform <span className="text-title font-bold">Bolstered Actions</span> in place of standard Actions, but they generate additional HEAT.
        </p>

        <h4 className="text-lg pt-3">GENERATE HEAT</h4>
        <p>After resolving all your actions, generate HEAT as follows:</p>
        <ul className="list-disc pl-6">
          <li>+1 HEAT if you performed a second action.</li>
          <li>+1 HEAT for each <span className="text-title font-bold">Bolstered Action</span> you performed.</li>
        </ul>
        <p className="italic pt-2">
          <span className="font-semibold">Example:</span> Your Mech Activates and makes a <span className="text-title font-bold">Bolstered Move</span>
          Action, it follows up with a second <span className="text-title font-bold">Move</span> Action. After resolving the movement, the model gains 1
          HEAT for performing a <span className="text-title font-bold">Bolstered Action</span>, and 1 HEAT for performing a second Action, for a total of 2
          HEAT.
        </p>

        <div className="card-1 p-4">
          <h4 className="text-2xl"><span className="text-title font-bold">MOVE</span></h4>
          <p>
            Move the model a number of inches up to its Speed (S). Models may move through friendly units, but
            must go around enemy units. You may pivot as much as you like, as often as you like, at any point
            during your movement.
          </p>

          <h4 className="text-lg pt-3"><span className="text-title font-bold">BOLSTERED MOVE</span></h4>
          <p>Choose one:</p>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-semibold"><span className="text-title font-bold">Charge</span>:</span> Move your model up to its (S), then make a free
              <span className="text-title font-bold">Melee Action</span>, or <span className="text-title font-bold">Ram</span> within 1".
            </li>
            <li>
              <span className="font-semibold"><span className="text-title font-bold">Run</span>:</span> Move your model up to its (S), then move up to an
              additional 3".
            </li>
            <li>
              <span className="font-semibold"><span className="text-title font-bold">Snapshot</span>:</span> Move your model up to its (S), but you may
              pause at any time during the move to make a basic <span className="text-title font-bold">Ranged Attack</span>, at -1 to the Combat Skill roll.
              After resolving the attack, the model completes its movement.
            </li>
          </ul>
        </div>

        <div className="card-1 p-4">
          <h4 className="text-2xl"><span className="text-title font-bold">DISENGAGE</span></h4>
          <p>
            You may move out of combat at ½ Speed. The enemy may make a free <span className="text-title font-bold">Melee</span> attack with a Melee Weapon.
          </p>

          <h4 className="text-lg pt-3">BOLSTERED DISENGAGE</h4>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-semibold"><span className="text-title font-bold">Dodge</span>:</span> You may move out of combat at ½ Speed. The enemy
              Mech does not get a free <span className="text-title font-bold">Melee</span> attack.
            </li>
          </ul>
        </div>

        <div className="card-1 p-4">
          <h4 className="text-2xl"><span className="text-title font-bold">RANGED ATTACK</span></h4>
          <p>
            Attack a model with a Ranged weapon not previously fired this turn. Roll equal to or greater than
            your CS value on a single d6 to strike your target, dealing the damage listed on the weapon. Most
            ranged weapons have no maximum range.
          </p>

          <h4 className="text-lg pt-3">BOLSTERED RANGED</h4>
          <p>Choose One:</p>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-semibold"><span className="text-title font-bold">Unleash Hell</span>:</span> Shoot all Ranged weapons equipped to the
              model that have not previously fired this turn. Roll each attack separately.
            </li>
            <li>
              <span className="font-semibold"><span className="text-title font-bold">Focused Fire</span>:</span> Make an attack with a single Ranged weapon
              not previously fired this turn and add +1 your CS roll.
            </li>
          </ul>
        </div>

        <div className="card-1 p-4">
          <h4 className="text-2xl"><span className="text-title font-bold">MELEE ATTACK</span></h4>
          <p>
            Attack a model with a Melee weapon not previously used this turn. Roll equal to or greater than
            your CS value on a single d6 to strike your target, dealing the damage listed on the weapon.
          </p>

          <h4 className="text-lg pt-3">BOLSTERED MELEE</h4>
          <p>Choose One:</p>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-semibold"><span className="text-title font-bold">Fury</span>:</span> Attack with all Melee Weapons not previously used
              this turn.
            </li>
            <li>
              <span className="font-semibold"><span className="text-title font-bold">Focused Strike</span>:</span> Make an attack with a single Melee weapon
              not previously used this turn and add +1 to your CS roll.
            </li>
            <li>
              <span className="font-semibold"><span className="text-title font-bold">Ram</span>:</span> Deal 1d3 Damage to yourself, and 1d3 Damage to a
              model within 1".
            </li>
          </ul>
        </div>

        <div className="card-1 p-4">
          <h4 className="text-2xl"><span className="text-title font-bold">PURGE HEAT</span></h4>
          <p>
            Remove d3 HEAT and gain <span className="text-title font-bold">Position Compromised</span>. You may only perform this Action with the model once
            per turn. You do not gain HEAT for this Action.
          </p>

          <h4 className="text-lg pt-3">BOLSTERED PURGE</h4>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-semibold"><span className="text-title font-bold">Reboot</span>:</span> Remove 2d3 HEAT. This must be the models only
              Action for the turn. You do not gain any HEAT for this Action, nor do you gain <span className="text-title font-bold">Position
              Compromised</span>.
            </li>
          </ul>
        </div>

        <div className="alert alert-info alert-soft">
          <p className="text-sm">
            <span className="font-bold text-sm">re: <span className="text-title">POSITION COMPROMISED</span></span> Any model gains +1 CS on it's
            next activation if targeting a model affected by <span className="text-title font-bold">Position Compromised</span>. Remove <span className="text-title font-bold">Position Compromised</span>
            after the attack resolves.
          </p>
        </div>
      </RulesSection>

      <RulesSection title="GAME MECHANICS">
        <h4 className="text-lg pt-3"><span className="text-title font-bold">MOVEMENT</span></h4>
        <p>
          Models may move in any direction a number of inches equal to their Speed. Models may move vertically
          onto or over terrain at an additional move cost equal to the vertical distance.
        </p>
        <p>Models may not move across gaps larger than 2". (<span className="text-title font-bold">VTOL</span> ignores this rule).</p>
        <p>
          A model may traverse onto terrain vertically within reason, but you must end your turn on a flat
          level.
        </p>

        <h4 className="text-lg pt-3"><span className="text-title font-bold">FALLING</span></h4>
        <p>
          If a model falls, it is dealt 1 damage. <span className="text-title font-bold">VTOL</span> ignores falling damage on a single d6 roll of a 3+.
        </p>

        <h4 className="text-lg pt-3"><span className="text-title font-bold">COMBAT</span></h4>
        <p>
          Models have <span className="text-title font-bold">360 line of sight</span>. Attackers must have <span className="text-title font-bold">line of sight</span> to target a model or terrain.
          Ranged and Melee attacks are resolved with a d6 roll. Roll equal to or greater than your CS value to
          hit a target, dealing damage listed on the weapon.
        </p>
        <ul className="list-disc pl-6">
          <li>A roll of a 1 is always a miss.</li>
          <li>A roll of 6 is always a <span className="text-title font-bold">Critical Hit</span>.</li>
        </ul>
        <p>
          The target then attempts an Armor (AR) roll to prevent the damage. Roll a separate d6 for each point
          of damage received. For each die that meets or exceeds the victim's AR value, ignore one point of
          damage. For each unignored point of damage a model receives, reduce its HP by 1.
        </p>
        <p>
          If a model is reduced to 0HP, it immediately makes an <span className="text-title font-bold">Explode Check</span> (p.18) and is removed from play.
        </p>

        <h4 className="text-lg pt-3"><span className="text-title font-bold">LONG RANGE</span></h4>
        <p>If firing a Ranged Weapon 10" or more, modify your CS rolls by -1.</p>

        <h4 className="text-lg pt-3"><span className="text-title font-bold">LINE OF SIGHT</span></h4>
        <p>
          If any part of a model can draw an unbroken line to any part of the target model, <span className="text-title font-bold">LOS</span> is
          established. If you are unsure, stoop down and get a model's eye view.
        </p>

        <h4 className="text-lg pt-3"><span className="text-title font-bold">COVER</span></h4>
        <p>
          If <span className="text-title font-bold">line of sight</span> is partially obscured by either terrain or models while making a <span className="text-title font-bold">Ranged Attack</span>, the
          targets AR is increased by +1 for the attack.
        </p>

        <h4 className="text-lg pt-3"><span className="text-title font-bold">ENGAGED</span></h4>
        <p>
          If you are within 1" of an enemy model, you are considered <span className="text-title font-bold">Engaged</span>. You may not take <span className="text-title font-bold">Move</span> or <span className="text-title font-bold">Ranged
          Attack</span> actions while <span className="text-title font-bold">Engaged</span>.
        </p>
        <p>You use the <span className="text-title font-bold">Disengage</span> Action to get away.</p>

        <h4 className="text-lg pt-3"><span className="text-title font-bold">CRITICAL HITS</span></h4>
        <p>
          When you use an Attack Action, a die roll of 6 is always a <span className="text-title font-bold">Critical Hit</span>. The damage is increased by
          +1. Then roll to see if there is <span className="text-title font-bold">Catastrophic Damage</span> (p.17).
        </p>

        <h4 className="text-lg pt-3"><span className="text-title font-bold">CATASTROPHIC DAMAGE</span></h4>
        <p>
          When you score a <span className="text-title font-bold">Critical Hit</span>, roll another d6. If you meet or exceed your model's CS, you have
          caused <span className="text-title font-bold">Catastrophic Damage</span>! Roll 2d6 on the <span className="text-title font-bold">Catastrophic Damage</span> table and apply the results to the
          target model. This is in addition to the +1 damage. All effects are temporary and last until the end
          of the game.
        </p>
        <table className="table z-0">
          <thead>
            <tr>
              <th>2D6 Result</th>
              <th>Effect</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold">2</td>
              <td className="font-semibold"><span className="text-title font-bold">Ammo Explodes</span></td>
              <td>Deal d3 additional damage. If the model has special ammo, it is lost.</td>
            </tr>
            <tr>
              <td className="font-semibold">3</td>
              <td className="font-semibold"><span className="text-title font-bold">Platform Disabled</span></td>
              <td>A random platform is disabled.</td>
            </tr>
            <tr>
              <td className="font-semibold">4</td>
              <td className="font-semibold"><span className="text-title font-bold">Targeting System Disrupted</span></td>
              <td>-1 CS.</td>
            </tr>
            <tr>
              <td className="font-semibold">5</td>
              <td className="font-semibold"><span className="text-title font-bold">Cracked Reactor Core</span></td>
              <td><span className="text-title font-bold">HEAT Limit</span> reduced by 1.</td>
            </tr>
            <tr>
              <td className="font-semibold">6</td>
              <td className="font-semibold"><span className="text-title font-bold">Ricochet</span></td>
              <td>Deal 1 damage to a random model within 3".</td>
            </tr>
            <tr>
              <td className="font-semibold">7</td>
              <td className="font-semibold"><span className="text-title font-bold">Heavy Fire</span></td>
              <td>+1 Damage.</td>
            </tr>
            <tr>
              <td className="font-semibold">8</td>
              <td className="font-semibold"><span className="text-title font-bold">Leaking Hydraulics</span></td>
              <td>-1 S.</td>
            </tr>
            <tr>
              <td className="font-semibold">9</td>
              <td className="font-semibold"><span className="text-title font-bold">Armor Compromised</span></td>
              <td>All models firing against this model gain <span className="text-title font-bold">Armor Penetration</span>.</td>
            </tr>
            <tr>
              <td className="font-semibold">10</td>
              <td className="font-semibold"><span className="text-title font-bold">Oil Burn</span></td>
              <td><span className="text-title font-bold">HEAT Limit</span> reduced by 1.</td>
            </tr>
            <tr>
              <td className="font-semibold">11</td>
              <td className="font-semibold"><span className="text-title font-bold">Weapon Disabled</span></td>
              <td>A random weapon is disabled.</td>
            </tr>
            <tr>
              <td className="font-semibold">12</td>
              <td className="font-semibold"><span className="text-title font-bold">Cockpit Fire</span></td>
              <td>Model is reduced to 0HP.</td>
            </tr>
          </tbody>
        </table>
      </RulesSection>

      <RulesSection title="HEAT">
        <p>
          Mechs generate immense <span className="text-title font-bold">HEAT</span> while performing their duties in battle. This can occur when performing
          certain actions, and also when making <span className="text-title font-bold">HEAT checks</span> at the end of a <span className="text-title font-bold">Round</span>.
        </p>
        <p>Performing a second Action or any <span className="text-title font-bold">Bolstered Action</span> accrues +1 <span className="text-title font-bold">HEAT</span>.</p>
        <p>
          <span className="text-title font-bold">HEAT</span> is applied after all of a model's actions are resolved. If a model reaches or exceeds its <span className="text-title font-bold">HEAT
          Limit</span>, it is immediately reduced to 0 HP.
        </p>

        <h4 className="text-lg pt-3"><span className="text-title font-bold">HEAT CHECK</span></h4>
        <p>
          When a model is selected during the <span className="text-title font-bold">HEAT Phase</span>, roll a d6 and consult the <span className="text-title font-bold">HEAT Check</span> chart below.
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>HEAT Check Roll</th>
              <th>1</th>
              <th>2-4</th>
              <th>5-6</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold">HEAT Generated</td>
              <td>+2</td>
              <td>+1</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </RulesSection>

      <RulesSection title="OUT OF ACTION & EXPLODING">
        <h4 className="text-lg pt-3">OUT OF ACTION</h4>
        <p>
          If a model is reduced to 0HP, it immediately makes an explode Check and is then removed from play.
          That model is now Out of Action.
        </p>

        <h4 className="text-lg pt-3">EXPLODE CHECK</h4>
        <p>Roll a d6. On a roll of 3-6, the model Explodes.</p>
        <ul className="list-disc pl-6">
          <li>Damage from Exploding is equal to half your current HEAT rounded down to a minimum of 1.</li>
          <li>The range of the explosion is equal to your current HEAT in inches.</li>
          <li>Terrain blocks Explosion Damage.</li>
          <li>Destructible Terrain (p.20) takes damage from Explosions as normal.</li>
        </ul>
        <p className="italic pt-2">
          <span className="font-semibold">Example:</span> A model removes it's final HP while it has 7 HEAT,
          if you Explode, it would deal 3 damage to all models within 7".
        </p>
      </RulesSection>

      <RulesSection title="TERRAIN">
        <p>
          A model may traverse onto terrain vertically within reason, but you must end your turn on a flat
          level. Some terrain in a game can be targeted, damaged & destroyed. If terrain is destroyed, remove
          it from the board.
        </p>
        <p>
          Before the game begins, designate what is Indestructible Terrain and what is Destructible Terrain
          with your opponents. If a disagreement arises, roll a die to decide.
        </p>

        <h4 className="text-lg pt-3">DESTRUCTIBLE TERRAIN</h4>
        <p>
          If terrain is dealt any damage from an Action, place a counter on it. When a piece of terrain
          receives a second damage that turn, OR if it is dealt 3 or more damage in one Action, it is
          destroyed. Remove the terrain from the table, and deal 1 damage to all models within 2".
        </p>
        <p>
          If a Mech moves onto destructible terrain roll a d6, on a roll of a 1-2, the building is destroyed.
        </p>

        <h4 className="text-lg pt-3">INDESTRUCTIBLE TERRAIN</h4>
        <p>Indestructible Terrain cannot be destroyed.</p>
        <ul className="list-disc pl-6">
          <li>Rail Weapons may not fire through Indestructible terrain.</li>
        </ul>

        <h4 className="text-lg pt-3">COVER</h4>
        <p>
          If line of sight is partially obscured by either terrain or other models while making a Ranged
          Attack, the targets AR is increased by +1 for the attack. If the attack misses, it hits the
          obscuring terrain or model.
        </p>
      </RulesSection>

      <RulesSection title="STARTING A GAME">
        <h4 className="text-lg pt-3">MISSION</h4>
        <p>
          Pick or roll to determine which mission to play. Decide if you are using Special Objectives (p.39),
          they are optional.
        </p>

        <h4 className="text-lg pt-3">TERRAIN</h4>
        <p>
          You and your opponent(s) take turns placing and designating destructible and indestructible terrain
          on the map that suits your mission and game. We recommend lots of line of sight blocking terrain
          evenly placed across the board.
        </p>

        <h4 className="text-lg pt-3">DEPLOYMENT ZONE</h4>
        <p>
          If the Mission does not have a Deployment requirement, players roll off to determine who picks their
          Deployment Zone. The winner chooses a board edge or corner and the other player deploys opposite.
          Players alternate placing models. Models may be placed anywhere within 3" from their table edge or
          8" from a corner. Alternate placing your models until all models have been placed.
        </p>

        <h4 className="text-lg pt-3">THREE OR MORE PLAYERS</h4>
        <p>
          If playing with multiple opponents, players pick a board edge and deploy as normal, but may not
          place a model within 8" of an enemy model. Roll off to determine who picks the first deployment
          zone, then continue in initiative order or an order that makes sense.
        </p>

        <div className="alert alert-info alert-soft">
          <div>
            <p className="font-bold text-sm">re: OUTNUMBERED!</p>
            <p className="text-sm">
              At the start of the first Round, if you have fewer models than the player with the most models,
              you are Outnumbered. You gain 1 Pass Activation token for each model that the player has more
              than you.
            </p>
            <p className="text-sm">
              When it is your turn to activate a model, you may instead discard one of your Pass Activation
              tokens, and play passes to the next player.
            </p>
            <p className="text-sm">
              You discard a Pass Activation token whenever the player with the most models in play loses a
              model.
            </p>
          </div>
        </div>

        <h4 className="text-lg pt-3">SPECIAL OBJECTIVES</h4>
        <p>
          Before a game begins, but after missions are selected, choose in secret one Special Objective and
          write it down. Completing a Special Objective rewards a single dice roll on the Salvage Gear table.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-bold text-sm mb-2">SYSTEMS HOT</p>
            <p className="text-sm">Gain 10 HEAT & then Explode with a Mech.</p>
          </div>
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-bold text-sm mb-2">NOTHING IN OUR WAY</p>
            <p className="text-sm">Destroy 2 pieces of terrain.</p>
          </div>
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-bold text-sm mb-2">DEATH BY A THOUSAND CUTS</p>
            <p className="text-sm">Deal at minimum 1 damage to each enemy model on the field.</p>
          </div>
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-bold text-sm mb-2">DEADLY GRUDGE</p>
            <p className="text-sm">
              Land the killing blow on at least two enemy models, removing their last HP with an Attack
              Action.
            </p>
          </div>
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-bold text-sm mb-2">FILL THE COFFERS</p>
            <p className="text-sm">End the game with the most Loot Tokens.</p>
          </div>
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-bold text-sm mb-2">NEVER LET THEM SEE YOU BURN</p>
            <p className="text-sm">Purge 6 or more total HEAT over the course of the game.</p>
          </div>
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-bold text-sm mb-2">COOL, CALM & COLLECTED</p>
            <p className="text-sm">Finish a game with at least one Mech at 3 or less HEAT.</p>
          </div>
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-bold text-sm mb-2">LAST ONE STANDING</p>
            <p className="text-sm">End the game with one and only one Mech remaining.</p>
          </div>
        </div>
      </RulesSection>
    </div>
  );
}

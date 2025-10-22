import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircleWarning, TriangleAlert } from "lucide-react";

export default function Rules() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="sticky-title">INTRO BRIEFING / TOOLS</h2>

      <h3 className="text-xl pt-4">MODELS</h3>
      <p>
        To play a game each player needs at minimum 4 models. Use any miniatures you like on 28mm-40mm bases
        in roughly 6mm scale. These make up your Combat Unit.
      </p>

      <h3 className="text-xl pt-4">BATTLEFIELD</h3>
      <p>
        Flames of Orion takes place among desolate and destroyed landscapes on ancient planets. Anything from
        desert wasteland, to lunar rock, to destroyed and cluttered city blocks will fit the theme.
        Battlefields should be anywhere from 2x2' to 4x4' with a good spread of terrain scattered around to
        fill the board and block lines of sight. Some terrain is destructible.
      </p>

      <h3 className="text-xl pt-4">DICE</h3>
      <p>
        The game uses mostly d6, but a set of standard RPG dice is needed for rolling on random tables. d10
        are also helpful for tracking HEAT and Hull Points. You may occasionally need to roll things such as:
        d2, d3, d66.
      </p>
      <p>
        <span className="text-title">D66:</span> If you are unfamiliar with a d66: roll a d6 for the tens
        digit, roll another for the ones digit, producing a number from 11 to 66.
      </p>

      <h3 className="text-xl pt-4">MEASURING</h3>
      <p>
        Measurements are in inches. Measure from the edge of the model's base. Any player may measure anything
        at any time without committing to any actions.
      </p>

      <h3 className="text-xl pt-4">ACTIVATION TOKENS</h3>
      <p>
        When playing; after a model activates, place an Activation token next to them. This could be a bead, a
        piece of cotton, or any small object on hand. At the end of the round, after performing a HEAT Check
        with the model, remove the token to signify it is ready for the next round.
      </p>

      <div className="divider"></div>

      <h3 className="sticky-title">INTRO TO MECHS</h3>
      <p>
        During a game you will field your Combat Unit, which typically consists of 4 Mechs. You may also
        choose to swap some Mechs for ground forces as described on Page 30. Below are the stats for the
        different aspects of each Mech in your combat unit.
      </p>

      <h4 className="text-lg pt-3">HULL POINTS (HP)</h4>
      <p>
        HP is how much damage a model can take before it is destroyed. Each time a model receives a point of
        damage, reduce its HP by 1. If a model is reduced to 0HP, it immediately makes an Explode Check (p.18)
        and is then removed from play. That model is now Out Of Action.
      </p>

      <h4 className="text-lg pt-3">ARMOR (AR)</h4>
      <p>
        AR is the model's ability to ignore damage. For each point of damage that a model suffers, make a
        separate armor save. Roll equal to or greater than your AR value to ignore the point of damage.
      </p>

      <h4 className="text-lg pt-3">COMBAT SKILL (CS)</h4>
      <p>
        CS is your model's ability to target and attack enemy models with Melee and Ranged attacks. Roll equal
        to or greater than your CS value to deal damage.
      </p>

      <h4 className="text-lg pt-3">SPEED (S)</h4>
      <p>S is the distance your model can move, measured in inches.</p>

      <h4 className="text-lg pt-3">HEAT LIMIT (HL)</h4>
      <p>
        Throughout the game, your models gain HEAT. HEAT represents the amount of strain a model can
        withstand, and its ability to continue performing. If a model reaches or exceeds its HEAT Limit, it is
        immediately reduced to 0 HP.
      </p>

      <h4 className="text-lg pt-3">PLATFORMS (PF)</h4>
      <p>
        PF is the number of weapons & upgrades that can be equipped to a model. All Mechs begin with 4 PF
        slots, and may not have more than 8 PF slots. There are two types of Platforms; weapons and upgrades.
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

      <div className="divider"></div>

      <h3 className="sticky-title">GAME STRUCTURE</h3>
      <p>
        A game of Flames of Orion is broken down into Phases and Rounds, with players taking alternating turns
        in each Phase.
      </p>

      <h4 className="text-lg pt-3">ROUNDS</h4>
      <p>
        A game lasts 5 Rounds, and every Round is split into three Phases. Once all three Phases have been
        completed, the next Round begins. The game ends at the completion of the 5th Round unless otherwise
        noted.
      </p>

      <h4 className="text-lg pt-3">PHASES</h4>
      <p>
        Rounds are split into three Phases, performed in this order: Initiative Phase, Activation Phase and
        HEAT Phase. Players take turns Activating their models. After all Phases have been completed a new
        Round begins, starting again with the Initiative Phase.
      </p>

      <h4 className="text-2xl pt-3">PHASE ORDER</h4>
      <h3 className="text-lg pt-2">1 INITIATIVE PHASE</h3>
      <p>
        All players roll a d6. The highest roll wins the Initiative and takes the first turn, then next
        highest, and so on. In case of ties, roll off. Whoever finishes activating their models first adds +1
        to their Initiative roll on the next Round.
      </p>

      <h3 className="text-lg pt-2">2 ACTIVATION PHASE</h3>
      <p>
        Players take turns activating their models to perform Actions. Each model may only activate once per
        Round. When a model is chosen to activate, it may perform up to 2 Actions. When that model finishes
        its activation, the next player in initiative order does the same. This continues until all models
        have been activated and the next Phase begins.
      </p>
      <p>
        If a player has no models left to activate, the rest of the players continue activating in initiative
        order until all models have activated.
      </p>

      <h3 className="text-lg pt-2">3 HEAT PHASE</h3>
      <p>
        Players take turns making HEAT Checks for their models, in Initiative Order, until all models have
        taken HEAT Checks. When it is their turn, the player selects a model with an Activation Token, makes a
        HEAT Check for that model, and then discards that model's activation token. Then the next player
        selects a model to make a HEAT Check, and so on.
      </p>

      <div className="alert alert-warning alert-soft">
        <p className="text-sm">
          <span className="font-bold">re: RETREAT & SURRENDER</span> At the start of a player's turn, they may
          retreat from battle and concede the game. If only one player remains, they are declared the winner.
        </p>
      </div>

      <div className="divider"></div>

      <h3 className="sticky-title">ACTIVATIONS</h3>
      <p>When chosen to activate, a model performs up to 2 Actions and then generates HEAT.</p>

      <h4 className="text-lg pt-3">ACTIONS</h4>
      <p>
        There are five basic Actions a model may make in a turn: Move, Ranged Attack, Melee Attack, Disengage,
        or Purge HEAT. You may perform actions in any order, and you may perform the same action twice.
      </p>
      <p>
        You may perform Bolstered Actions in place of standard Actions, but they generate additional HEAT.
      </p>

      <h4 className="text-lg pt-3">GENERATE HEAT</h4>
      <p>After resolving all your actions, generate HEAT as follows:</p>
      <ul className="list-disc pl-6">
        <li>+1 HEAT if you performed a second action.</li>
        <li>+1 HEAT for each Bolstered Action you performed.</li>
      </ul>
      <p className="italic pt-2">
        <span className="font-semibold">Example:</span> Your Mech Activates and makes a Bolstered Move Action,
        it follows up with a second Move Action. After resolving the movement, the model gains 1 HEAT for
        performing a Bolstered Action, and 1 HEAT for performing a second Action, for a total of 2 HEAT.
      </p>

      <h4 className="text-2xl pt-3">MOVE</h4>
      <p>
        Move the model a number of inches up to its Speed (S). Models may move through friendly units, but
        must go around enemy units. You may pivot as much as you like, as often as you like, at any point
        during your movement.
      </p>

      <h4 className="text-lg pt-3">BOLSTERED MOVE</h4>
      <p>Choose one:</p>
      <ul className="list-disc pl-6">
        <li>
          <span className="font-semibold">Charge:</span> Move your model up to its (S), then make a free Melee
          Action, or Ram within 1".
        </li>
        <li>
          <span className="font-semibold">Run:</span> Move your model up to its (S), then move up to an
          additional 3".
        </li>
        <li>
          <span className="font-semibold">Snapshot:</span> Move your model up to its (S), but you may pause at
          any time during the move to make a basic Ranged Attack, at -1 to the Combat Skill roll. After
          resolving the attack, the model completes its movement.
        </li>
      </ul>

      <h4 className="text-2xl pt-3">DISENGAGE</h4>
      <p>
        You may move out of combat at ½ Speed. The enemy may make a free Melee attack with a Melee Weapon.
      </p>

      <h4 className="text-lg pt-3">BOLSTERED DISENGAGE</h4>
      <ul className="list-disc pl-6">
        <li>
          <span className="font-semibold">Dodge:</span> You may move out of combat at ½ Speed. The enemy Mech
          does not get a free Melee attack.
        </li>
      </ul>

      <h4 className="text-2xl pt-3">RANGED ATTACK</h4>
      <p>
        Attack a model with a Ranged weapon not previously fired this turn. Roll equal to or greater than your
        CS value on a single d6 to strike your target, dealing the damage listed on the weapon. Most ranged
        weapons have no maximum range.
      </p>

      <h4 className="text-lg pt-3">BOLSTERED RANGED</h4>
      <p>Choose One:</p>
      <ul className="list-disc pl-6">
        <li>
          <span className="font-semibold">Unleash Hell:</span> Shoot all Ranged weapons equipped to the model
          that have not previously fired this turn. Roll each attack separately.
        </li>
        <li>
          <span className="font-semibold">Focused Fire:</span> Make an attack with a single Ranged weapon not
          previously fired this turn and add +1 your CS roll.
        </li>
      </ul>

      <h4 className="text-2xl pt-3">MELEE ATTACK</h4>
      <p>
        Attack a model with a Melee weapon not previously used this turn. Roll equal to or greater than your
        CS value on a single d6 to strike your target, dealing the damage listed on the weapon.
      </p>

      <h4 className="text-lg pt-3">BOLSTERED MELEE</h4>
      <p>Choose One:</p>
      <ul className="list-disc pl-6">
        <li>
          <span className="font-semibold">Fury:</span> Attack with all Melee Weapons not previously used this
          turn.
        </li>
        <li>
          <span className="font-semibold">Focused Strike:</span> Make an attack with a single Melee weapon not
          previously used this turn and add +1 to your CS roll.
        </li>
        <li>
          <span className="font-semibold">Ram:</span> Deal 1d3 Damage to yourself, and 1d3 Damage to a model
          within 1".
        </li>
      </ul>

      <h4 className="text-2xl pt-3">PURGE HEAT</h4>
      <p>
        Remove d3 HEAT and gain Position Compromised. You may only perform this Action with the model once per
        turn. You do not gain HEAT for this Action.
      </p>

      <h4 className="text-lg pt-3">BOLSTERED PURGE</h4>
      <ul className="list-disc pl-6">
        <li>
          <span className="font-semibold">Reboot:</span> Remove 2d3 HEAT. This must be the models only Action
          for the turn. You do not gain any HEAT for this Action, nor do you gain Position Compromised.
        </li>
      </ul>

      <div className="alert alert-info alert-soft">
        <p className="text-sm">
          <span className="font-bold text-sm">re: POSITION COMPROMISED</span> Any model gains +1 CS on it's
          next activation if targeting a model affected by Position Compromised. Remove Position Compromised
          after the attack resolves.
        </p>
      </div>

      <div className="divider"></div>

      <h3 className="sticky-title">GAME MECHANICS</h3>

      <h4 className="text-lg pt-3">MOVEMENT</h4>
      <p>
        Models may move in any direction a number of inches equal to their Speed. Models may move vertically
        onto or over terrain at an additional move cost equal to the vertical distance.
      </p>
      <p>Models may not move across gaps larger than 2". (VTOL ignores this rule).</p>
      <p>
        A model may traverse onto terrain vertically within reason, but you must end your turn on a flat
        level.
      </p>

      <h4 className="text-lg pt-3">FALLING</h4>
      <p>If a model falls, it is dealt 1 damage. VTOL ignores falling damage on a single d6 roll of a 3+.</p>

      <h4 className="text-lg pt-3">COMBAT</h4>
      <p>
        Models have 360 line of sight. Attackers must have line of sight to target a model or terrain. Ranged
        and Melee attacks are resolved with a d6 roll. Roll equal to or greater than your CS value to hit a
        target, dealing damage listed on the weapon.
      </p>
      <ul className="list-disc pl-6">
        <li>A roll of a 1 is always a miss.</li>
        <li>A roll of 6 is always a Critical Hit.</li>
      </ul>
      <p>
        The target then attempts an Armor (AR) roll to prevent the damage. Roll a separate d6 for each point
        of damage received. For each die that meets or exceeds the victim's AR value, ignore one point of
        damage. For each unignored point of damage a model receives, reduce its HP by 1.
      </p>
      <p>
        If a model is reduced to 0HP, it immediately makes an Explode Check (p.18) and is removed from play.
      </p>

      <h4 className="text-lg pt-3">LONG RANGE</h4>
      <p>If firing a Ranged Weapon 10" or more, modify your CS rolls by -1.</p>

      <h4 className="text-lg pt-3">LINE OF SIGHT</h4>
      <p>
        If any part of a model can draw an unbroken line to any part of the target model, LOS is established.
        If you are unsure, stoop down and get a model's eye view.
      </p>

      <h4 className="text-lg pt-3">COVER</h4>
      <p>
        If line of sight is partially obscured by either terrain or models while making a Ranged Attack, the
        targets AR is increased by +1 for the attack.
      </p>

      <h4 className="text-lg pt-3">ENGAGED</h4>
      <p>
        If you are within 1" of an enemy model, you are considered Engaged. You may not take Move or Ranged
        Attack actions while Engaged.
      </p>
      <p>You use the Disengage Action to get away.</p>

      <h4 className="text-lg pt-3">CRITICAL HITS</h4>
      <p>
        When you use an Attack Action, a die roll of 6 is always a Critical Hit. The damage is increased by
        +1. Then roll to see if there is Catastrophic Damage (p.17).
      </p>

      <div className="divider"></div>

      <h4 className="sticky-title">CATASTROPHIC DAMAGE</h4>
      <p>
        When you score a Critical Hit, roll another d6. If you meet or exceed your model's CS, you have caused
        Catastrophic Damage! Roll 2d6 on the Catastrophic Damage table and apply the results to the target
        model. This is in addition to the +1 damage. All effects are temporary and last until the end of the
        game.
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
            <td className="font-semibold">Ammo Explodes</td>
            <td>Deal d3 additional damage. If the model has special ammo, it is lost.</td>
          </tr>
          <tr>
            <td className="font-semibold">3</td>
            <td className="font-semibold">Platform Disabled</td>
            <td>A random platform is disabled.</td>
          </tr>
          <tr>
            <td className="font-semibold">4</td>
            <td className="font-semibold">Targeting System Disrupted</td>
            <td>-1 CS.</td>
          </tr>
          <tr>
            <td className="font-semibold">5</td>
            <td className="font-semibold">Cracked Reactor Core</td>
            <td>HEAT Limit reduced by 1.</td>
          </tr>
          <tr>
            <td className="font-semibold">6</td>
            <td className="font-semibold">Ricochet</td>
            <td>Deal 1 damage to a random model within 3".</td>
          </tr>
          <tr>
            <td className="font-semibold">7</td>
            <td className="font-semibold">Heavy Fire</td>
            <td>+1 Damage.</td>
          </tr>
          <tr>
            <td className="font-semibold">8</td>
            <td className="font-semibold">Leaking Hydraulics</td>
            <td>-1 S.</td>
          </tr>
          <tr>
            <td className="font-semibold">9</td>
            <td className="font-semibold">Armor Compromised</td>
            <td>All models firing against this model gain Armor Penetration.</td>
          </tr>
          <tr>
            <td className="font-semibold">10</td>
            <td className="font-semibold">Oil Burn</td>
            <td>HEAT Limit reduced by 1.</td>
          </tr>
          <tr>
            <td className="font-semibold">11</td>
            <td className="font-semibold">Weapon Disabled</td>
            <td>A random weapon is disabled.</td>
          </tr>
          <tr>
            <td className="font-semibold">12</td>
            <td className="font-semibold">Cockpit Fire</td>
            <td>Model is reduced to 0HP.</td>
          </tr>
        </tbody>
      </table>

      <div className="divider"></div>

      <h3 className="sticky-title">HEAT</h3>
      <p>
        Mechs generate immense HEAT while performing their duties in battle. This can occur when performing
        certain actions, and also when making HEAT checks at the end of a Round.
      </p>
      <p>Performing a second Action or any Bolstered Action accrues +1 HEAT.</p>
      <p>
        HEAT is applied after all of a model's actions are resolved. If a model reaches or exceeds its HEAT
        Limit, it is immediately reduced to 0 HP.
      </p>

      <h4 className="text-lg pt-3">HEAT CHECK</h4>
      <p>When a model is selected during the HEAT Phase, roll a d6 and consult the HEAT Check chart below.</p>
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

      <div className="divider"></div>

      <h3 className="sticky-title">OUT OF ACTION & EXPLODING</h3>

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
        <span className="font-semibold">Example:</span> A model removes it's final HP while it has 7 HEAT, if
        you Explode, it would deal 3 damage to all models within 7".
      </p>

      <div className="divider"></div>

      <h3 className="sticky-title">TERRAIN</h3>
      <p>
        A model may traverse onto terrain vertically within reason, but you must end your turn on a flat
        level. Some terrain in a game can be targeted, damaged & destroyed. If terrain is destroyed, remove it
        from the board.
      </p>
      <p>
        Before the game begins, designate what is Indestructible Terrain and what is Destructible Terrain with
        your opponents. If a disagreement arises, roll a die to decide.
      </p>

      <h4 className="text-lg pt-3">DESTRUCTIBLE TERRAIN</h4>
      <p>
        If terrain is dealt any damage from an Action, place a counter on it. When a piece of terrain receives
        a second damage that turn, OR if it is dealt 3 or more damage in one Action, it is destroyed. Remove
        the terrain from the table, and deal 1 damage to all models within 2".
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
        If line of sight is partially obscured by either terrain or other models while making a Ranged Attack,
        the targets AR is increased by +1 for the attack. If the attack misses, it hits the obscuring terrain
        or model.
      </p>

      <div className="divider"></div>

      <h3 className="sticky-title">STARTING A GAME</h3>

      <h4 className="text-lg pt-3">MISSION</h4>
      <p>
        Pick or roll to determine which mission to play. Decide if you are using Special Objectives (p.39),
        they are optional.
      </p>

      <h4 className="text-lg pt-3">TERRAIN</h4>
      <p>
        You and your opponent(s) take turns placing and designating destructible and indestructible terrain on
        the map that suits your mission and game. We recommend lots of line of sight blocking terrain evenly
        placed across the board.
      </p>

      <h4 className="text-lg pt-3">DEPLOYMENT ZONE</h4>
      <p>
        If the Mission does not have a Deployment requirement, players roll off to determine who picks their
        Deployment Zone. The winner chooses a board edge or corner and the other player deploys opposite.
        Players alternate placing models. Models may be placed anywhere within 3" from their table edge or 8"
        from a corner. Alternate placing your models until all models have been placed.
      </p>

      <h4 className="text-lg pt-3">THREE OR MORE PLAYERS</h4>
      <p>
        If playing with multiple opponents, players pick a board edge and deploy as normal, but may not place
        a model within 8" of an enemy model. Roll off to determine who picks the first deployment zone, then
        continue in initiative order or an order that makes sense.
      </p>

      <div className="alert alert-info alert-soft">
        <div>
          <p className="font-bold text-sm">re: OUTNUMBERED!</p>
          <p className="text-sm">
            At the start of the first Round, if you have fewer models than the player with the most models,
            you are Outnumbered. You gain 1 Pass Activation token for each model that the player has more than
            you.
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
            Land the killing blow on at least two enemy models, removing their last HP with an Attack Action.
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
    </div>
  );
}

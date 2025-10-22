import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircleWarning, TriangleAlert } from "lucide-react";
import { RulesSection } from "./RulesSection";
import Keyword from "./ui/keyword";

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
          are also helpful for tracking <Keyword>HEAT</Keyword> and <Keyword>Hull Points (HP)</Keyword>. You
          may occasionally need to roll things such as: d2, d3, d66.
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
          a piece of cotton, or any small object on hand. At the end of the round, after performing a{" "}
          <Keyword>HEAT Check</Keyword> with the model, remove the token to signify it is ready for the next
          round.
        </p>
      </RulesSection>

      <RulesSection title="INTRO TO MECHS">
        <p>
          During a game you will field your <Keyword>Combat Unit</Keyword>, which typically consists of 4
          Mechs. You may also choose to swap some Mechs for ground forces. Below are the stats for the
          different aspects of each Mech in your combat unit.
        </p>

        <h4 className="text-lg pt-3">HULL POINTS (HP)</h4>
        <p>
          <Keyword>HP</Keyword> is how much damage a model can take before it is destroyed. Each time a model
          receives a point of damage, reduce its <Keyword>HP</Keyword> by 1. If a model is reduced to 0
          <Keyword>HP</Keyword>, it immediately makes an <Keyword>Explode Check</Keyword> and is then removed
          from play. That model is now <Keyword>Out Of Action</Keyword>.
        </p>

        <h4 className="text-lg pt-3">ARMOR (AR)</h4>
        <p>
          <Keyword>AR</Keyword> is the model's ability to ignore damage. For each point of damage that a model
          suffers, make a separate armor save. Roll equal to or greater than your <Keyword>AR</Keyword> value
          to ignore the point of damage.
        </p>

        <h4 className="text-lg pt-3">COMBAT SKILL (CS)</h4>
        <p>
          <Keyword>CS</Keyword> is your model's ability to target and attack enemy models with{" "}
          <Keyword>Melee</Keyword> and <Keyword>Ranged</Keyword> attacks. Roll equal to or greater than your{" "}
          <Keyword>CS</Keyword> value to deal damage.
        </p>

        <h4 className="text-lg pt-3">SPEED (S)</h4>
        <p>
          <Keyword>S</Keyword> is the distance your model can move, measured in inches.
        </p>

        <h4 className="text-lg pt-3">HEAT LIMIT (HL)</h4>
        <p>
          Throughout the game, your models gain <Keyword>HEAT</Keyword>. <Keyword>HEAT</Keyword> represents
          the amount of strain a model can withstand, and its ability to continue performing. If a model
          reaches or exceeds its <Keyword>HEAT Limit</Keyword>, it is immediately reduced to 0{" "}
          <Keyword>HP</Keyword>.
        </p>

        <h4 className="text-lg pt-3">PLATFORMS (PF)</h4>
        <p>
          <Keyword>PF</Keyword> is the number of weapons & upgrades that can be equipped to a model. All Mechs
          begin with 4 <Keyword>PF</Keyword>
          slots, and may not have more than 8 <Keyword>PF</Keyword> slots. There are two types of{" "}
          <Keyword>Platforms</Keyword>; weapons and upgrades.
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
          A game of Flames of Orion is broken down into <Keyword>Phases</Keyword> and{" "}
          <Keyword>Rounds</Keyword>, with players taking alternating turns in each <Keyword>Phase</Keyword>.
        </p>

        <h4 className="text-lg pt-3">ROUNDS</h4>
        <p>
          A game lasts 5 <Keyword>Rounds</Keyword>, and every <Keyword>Round</Keyword> is split into three{" "}
          <Keyword>Phases</Keyword>. Once all three <Keyword>Phases</Keyword> have been completed, the next{" "}
          <Keyword>Round</Keyword> begins. The game ends at the completion of the 5th <Keyword>Round</Keyword>{" "}
          unless otherwise noted.
        </p>

        <h4 className="text-lg pt-3">PHASES</h4>
        <p>
          <Keyword>Rounds</Keyword> are split into three <Keyword>Phases</Keyword>, performed in this order:{" "}
          <Keyword>Initiative Phase</Keyword>, <Keyword>Activation Phase</Keyword> and
          <Keyword>HEAT Phase</Keyword>. Players take turns Activating their models. After all{" "}
          <Keyword>Phases</Keyword> have been completed a new
          <Keyword>Round</Keyword> begins, starting again with the <Keyword>Initiative Phase</Keyword>.
        </p>

        <h4 className="text-2xl pt-3">PHASE ORDER</h4>
        <h3 className="text-lg pt-2">
          1 <Keyword>INITIATIVE PHASE</Keyword>
        </h3>
        <p>
          All players roll a d6. The highest roll wins the <Keyword>Initiative</Keyword> and takes the first
          turn, then next highest, and so on. In case of ties, roll off. Whoever finishes activating their
          models first adds +1 to their <Keyword>Initiative</Keyword> roll on the next{" "}
          <Keyword>Round</Keyword>.
        </p>

        <h3 className="text-lg pt-2">
          2 <Keyword>ACTIVATION PHASE</Keyword>
        </h3>
        <p>
          Players take turns activating their models to perform Actions. Each model may only activate once per
          <Keyword>Round</Keyword>. When a model is chosen to activate, it may perform up to 2 Actions. When
          that model finishes its activation, the next player in initiative order does the same. This
          continues until all models have been activated and the next <Keyword>Phase</Keyword> begins.
        </p>
        <p>
          If a player has no models left to activate, the rest of the players continue activating in
          initiative order until all models have activated.
        </p>

        <h3 className="text-lg pt-2">
          3 <Keyword>HEAT PHASE</Keyword>
        </h3>
        <p>
          Players take turns making <Keyword>HEAT Checks</Keyword> for their models, in Initiative Order,
          until all models have taken <Keyword>HEAT Checks</Keyword>. When it is their turn, the player
          selects a model with an <Keyword>Activation Token</Keyword>, makes a <Keyword>HEAT Check</Keyword>{" "}
          for that model, and then discards that model's activation token. Then the next player selects a
          model to make a <Keyword>HEAT Check</Keyword>, and so on.
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
          There are five basic Actions a model may make in a turn: <Keyword>Move</Keyword>,{" "}
          <Keyword>Ranged Attack</Keyword>, <Keyword>Melee Attack</Keyword>,<Keyword>Disengage</Keyword>, or{" "}
          <Keyword>Purge HEAT</Keyword>. You may perform actions in any order, and you may perform the same
          action twice.
        </p>
        <p>
          You may perform <Keyword>Bolstered Actions</Keyword> in place of standard Actions, but they generate
          additional HEAT.
        </p>

        <h4 className="text-lg pt-3">GENERATE HEAT</h4>
        <p>After resolving all your actions, generate HEAT as follows:</p>
        <ul className="list-disc pl-6">
          <li>+1 HEAT if you performed a second action.</li>
          <li>
            +1 HEAT for each <Keyword>Bolstered Action</Keyword> you performed.
          </li>
        </ul>
        <p className="italic pt-2">
          <span className="font-semibold">Example:</span> Your Mech Activates and makes a{" "}
          <Keyword>Bolstered Move</Keyword>
          Action, it follows up with a second <Keyword>Move</Keyword> Action. After resolving the movement,
          the model gains 1 HEAT for performing a <Keyword>Bolstered Action</Keyword>, and 1 HEAT for
          performing a second Action, for a total of 2 HEAT.
        </p>

        <div className="card-1 p-4">
          <h4 className="text-2xl">
            <Keyword>MOVE</Keyword>
          </h4>
          <p>
            Move the model a number of inches up to its Speed (S). Models may move through friendly units, but
            must go around enemy units. You may pivot as much as you like, as often as you like, at any point
            during your movement.
          </p>

          <h4 className="text-lg pt-3">
            <Keyword>BOLSTERED MOVE</Keyword>
          </h4>
          <p>Choose one:</p>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-semibold">
                <Keyword>Charge</Keyword>:
              </span>{" "}
              Move your model up to its (S), then make a free
              <Keyword>Melee Action</Keyword>, or <Keyword>Ram</Keyword> within 1".
            </li>
            <li>
              <span className="font-semibold">
                <Keyword>Run</Keyword>:
              </span>{" "}
              Move your model up to its (S), then move up to an additional 3".
            </li>
            <li>
              <span className="font-semibold">
                <Keyword>Snapshot</Keyword>:
              </span>{" "}
              Move your model up to its (S), but you may pause at any time during the move to make a basic{" "}
              <Keyword>Ranged Attack</Keyword>, at -1 to the Combat Skill roll. After resolving the attack,
              the model completes its movement.
            </li>
          </ul>
        </div>

        <div className="card-1 p-4">
          <h4 className="text-2xl">
            <Keyword>DISENGAGE</Keyword>
          </h4>
          <p>
            You may move out of combat at ½ Speed. The enemy may make a free <Keyword>Melee</Keyword> attack
            with a Melee Weapon.
          </p>

          <h4 className="text-lg pt-3">BOLSTERED DISENGAGE</h4>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-semibold">
                <Keyword>Dodge</Keyword>:
              </span>{" "}
              You may move out of combat at ½ Speed. The enemy Mech does not get a free{" "}
              <Keyword>Melee</Keyword> attack.
            </li>
          </ul>
        </div>

        <div className="card-1 p-4">
          <h4 className="text-2xl">
            <Keyword>RANGED ATTACK</Keyword>
          </h4>
          <p>
            Attack a model with a Ranged weapon not previously fired this turn. Roll equal to or greater than
            your CS value on a single d6 to strike your target, dealing the damage listed on the weapon. Most
            ranged weapons have no maximum range.
          </p>

          <h4 className="text-lg pt-3">BOLSTERED RANGED</h4>
          <p>Choose One:</p>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-semibold">
                <Keyword>Unleash Hell</Keyword>:
              </span>{" "}
              Shoot all Ranged weapons equipped to the model that have not previously fired this turn. Roll
              each attack separately.
            </li>
            <li>
              <span className="font-semibold">
                <Keyword>Focused Fire</Keyword>:
              </span>{" "}
              Make an attack with a single Ranged weapon not previously fired this turn and add +1 your CS
              roll.
            </li>
          </ul>
        </div>

        <div className="card-1 p-4">
          <h4 className="text-2xl">
            <Keyword>MELEE ATTACK</Keyword>
          </h4>
          <p>
            Attack a model with a Melee weapon not previously used this turn. Roll equal to or greater than
            your CS value on a single d6 to strike your target, dealing the damage listed on the weapon.
          </p>

          <h4 className="text-lg pt-3">BOLSTERED MELEE</h4>
          <p>Choose One:</p>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-semibold">
                <Keyword>Fury</Keyword>:
              </span>{" "}
              Attack with all Melee Weapons not previously used this turn.
            </li>
            <li>
              <span className="font-semibold">
                <Keyword>Focused Strike</Keyword>:
              </span>{" "}
              Make an attack with a single Melee weapon not previously used this turn and add +1 to your CS
              roll.
            </li>
            <li>
              <span className="font-semibold">
                <Keyword>Ram</Keyword>:
              </span>{" "}
              Deal 1d3 Damage to yourself, and 1d3 Damage to a model within 1".
            </li>
          </ul>
        </div>

        <div className="card-1 p-4">
          <h4 className="text-2xl">
            <Keyword>PURGE HEAT</Keyword>
          </h4>
          <p>
            Remove d3 HEAT and gain <Keyword>Position Compromised</Keyword>. You may only perform this Action
            with the model once per turn. You do not gain HEAT for this Action.
          </p>

          <h4 className="text-lg pt-3">BOLSTERED PURGE</h4>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-semibold">
                <Keyword>Reboot</Keyword>:
              </span>{" "}
              Remove 2d3 HEAT. This must be the models only Action for the turn. You do not gain any HEAT for
              this Action, nor do you gain <Keyword>Position Compromised</Keyword>.
            </li>
          </ul>
        </div>

        <div className="alert alert-info alert-soft">
          <p className="text-sm">
            <span className="font-bold text-sm">
              re: <span className="text-title">POSITION COMPROMISED</span>
            </span>{" "}
            Any model gains +1 CS on it's next activation if targeting a model affected by{" "}
            <Keyword>Position Compromised</Keyword>. Remove <Keyword>Position Compromised</Keyword>
            after the attack resolves.
          </p>
        </div>
      </RulesSection>

      <RulesSection title="GAME MECHANICS">
        <h4 className="text-lg pt-3">
          <Keyword>MOVEMENT</Keyword>
        </h4>
        <p>
          Models may move in any direction a number of inches equal to their Speed. Models may move vertically
          onto or over terrain at an additional move cost equal to the vertical distance.
        </p>
        <p>
          Models may not move across gaps larger than 2". (<Keyword>VTOL</Keyword> ignores this rule).
        </p>
        <p>
          A model may traverse onto terrain vertically within reason, but you must end your turn on a flat
          level.
        </p>

        <h4 className="text-lg pt-3">
          <Keyword>FALLING</Keyword>
        </h4>
        <p>
          If a model falls, it is dealt 1 damage. <Keyword>VTOL</Keyword> ignores falling damage on a single
          d6 roll of a 3+.
        </p>

        <h4 className="text-lg pt-3">
          <Keyword>COMBAT</Keyword>
        </h4>
        <p>
          Models have <Keyword>360 line of sight</Keyword>. Attackers must have{" "}
          <Keyword>line of sight</Keyword> to target a model or terrain. Ranged and Melee attacks are resolved
          with a d6 roll. Roll equal to or greater than your CS value to hit a target, dealing damage listed
          on the weapon.
        </p>
        <ul className="list-disc pl-6">
          <li>A roll of a 1 is always a miss.</li>
          <li>
            A roll of 6 is always a <Keyword>Critical Hit</Keyword>.
          </li>
        </ul>
        <p>
          The target then attempts an Armor (AR) roll to prevent the damage. Roll a separate d6 for each point
          of damage received. For each die that meets or exceeds the victim's AR value, ignore one point of
          damage. For each unignored point of damage a model receives, reduce its HP by 1.
        </p>
        <p>
          If a model is reduced to 0HP, it immediately makes an <Keyword>Explode Check</Keyword> and is
          removed from play.
        </p>

        <h4 className="text-lg pt-3">
          <Keyword>LONG RANGE</Keyword>
        </h4>
        <p>If firing a Ranged Weapon 10" or more, modify your CS rolls by -1.</p>

        <h4 className="text-lg pt-3">
          <Keyword>LINE OF SIGHT</Keyword>
        </h4>
        <p>
          If any part of a model can draw an unbroken line to any part of the target model,{" "}
          <Keyword>LOS</Keyword> is established. If you are unsure, stoop down and get a model's eye view.
        </p>

        <h4 className="text-lg pt-3">
          <Keyword>COVER</Keyword>
        </h4>
        <p>
          If <Keyword>line of sight</Keyword> is partially obscured by either terrain or models while making a{" "}
          <Keyword>Ranged Attack</Keyword>, the targets AR is increased by +1 for the attack.
        </p>

        <h4 className="text-lg pt-3">
          <Keyword>ENGAGED</Keyword>
        </h4>
        <p>
          If you are within 1" of an enemy model, you are considered <Keyword>Engaged</Keyword>. You may not
          take <Keyword>Move</Keyword> or <Keyword>Ranged Attack</Keyword> actions while{" "}
          <Keyword>Engaged</Keyword>.
        </p>
        <p>
          You use the <Keyword>Disengage</Keyword> Action to get away.
        </p>

        <h4 className="text-lg pt-3">
          <Keyword>CRITICAL HITS</Keyword>
        </h4>
        <p>
          When you use an Attack Action, a die roll of 6 is always a <Keyword>Critical Hit</Keyword>. The
          damage is increased by +1. Then roll to see if there is <Keyword>Catastrophic Damage</Keyword>.
        </p>

        <h4 className="text-lg pt-3">
          <Keyword>CATASTROPHIC DAMAGE</Keyword>
        </h4>
        <p>
          When you score a <Keyword>Critical Hit</Keyword>, roll another d6. If you meet or exceed your
          model's CS, you have caused <Keyword>Catastrophic Damage</Keyword>! Roll 2d6 on the{" "}
          <Keyword>Catastrophic Damage</Keyword> table and apply the results to the target model. This is in
          addition to the +1 damage. All effects are temporary and last until the end of the game.
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
              <td className="font-semibold">
                <Keyword>Ammo Explodes</Keyword>
              </td>
              <td>Deal d3 additional damage. If the model has special ammo, it is lost.</td>
            </tr>
            <tr>
              <td className="font-semibold">3</td>
              <td className="font-semibold">
                <Keyword>Platform Disabled</Keyword>
              </td>
              <td>A random platform is disabled.</td>
            </tr>
            <tr>
              <td className="font-semibold">4</td>
              <td className="font-semibold">
                <Keyword>Targeting System Disrupted</Keyword>
              </td>
              <td>-1 CS.</td>
            </tr>
            <tr>
              <td className="font-semibold">5</td>
              <td className="font-semibold">
                <Keyword>Cracked Reactor Core</Keyword>
              </td>
              <td>
                <Keyword>HEAT Limit</Keyword> reduced by 1.
              </td>
            </tr>
            <tr>
              <td className="font-semibold">6</td>
              <td className="font-semibold">
                <Keyword>Ricochet</Keyword>
              </td>
              <td>Deal 1 damage to a random model within 3".</td>
            </tr>
            <tr>
              <td className="font-semibold">7</td>
              <td className="font-semibold">
                <Keyword>Heavy Fire</Keyword>
              </td>
              <td>+1 Damage.</td>
            </tr>
            <tr>
              <td className="font-semibold">8</td>
              <td className="font-semibold">
                <Keyword>Leaking Hydraulics</Keyword>
              </td>
              <td>-1 S.</td>
            </tr>
            <tr>
              <td className="font-semibold">9</td>
              <td className="font-semibold">
                <Keyword>Armor Compromised</Keyword>
              </td>
              <td>
                All models firing against this model gain <Keyword>Armor Penetration</Keyword>.
              </td>
            </tr>
            <tr>
              <td className="font-semibold">10</td>
              <td className="font-semibold">
                <Keyword>Oil Burn</Keyword>
              </td>
              <td>
                <Keyword>HEAT Limit</Keyword> reduced by 1.
              </td>
            </tr>
            <tr>
              <td className="font-semibold">11</td>
              <td className="font-semibold">
                <Keyword>Weapon Disabled</Keyword>
              </td>
              <td>A random weapon is disabled.</td>
            </tr>
            <tr>
              <td className="font-semibold">12</td>
              <td className="font-semibold">
                <Keyword>Cockpit Fire</Keyword>
              </td>
              <td>Model is reduced to 0HP.</td>
            </tr>
          </tbody>
        </table>
      </RulesSection>

      <RulesSection title="HEAT">
        <p>
          Mechs generate immense <Keyword>HEAT</Keyword> while performing their duties in battle. This can
          occur when performing certain actions, and also when making <Keyword>HEAT checks</Keyword> at the
          end of a <Keyword>Round</Keyword>.
        </p>
        <p>
          Performing a second Action or any <Keyword>Bolstered Action</Keyword> accrues +1{" "}
          <Keyword>HEAT</Keyword>.
        </p>
        <p>
          <Keyword>HEAT</Keyword> is applied after all of a model's actions are resolved. If a model reaches
          or exceeds its <Keyword>HEAT Limit</Keyword>, it is immediately reduced to 0 HP.
        </p>

        <h4 className="text-lg pt-3">
          <Keyword>HEAT CHECK</Keyword>
        </h4>
        <p>
          When a model is selected during the <Keyword>HEAT Phase</Keyword>, roll a d6 and consult the{" "}
          <Keyword>HEAT Check</Keyword> chart below.
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
        <h4 className="text-lg pt-3">
          <Keyword>OUT OF ACTION</Keyword>
        </h4>
        <p>
          If a model is reduced to 0HP, it immediately makes an <Keyword>Explode Check</Keyword> and is then
          removed from play. That model is now <Keyword>Out of Action</Keyword>.
        </p>

        <h4 className="text-lg pt-3">
          <Keyword>EXPLODE CHECK</Keyword>
        </h4>
        <p>
          Roll a d6. On a roll of 3-6, the model <Keyword>Explodes</Keyword>.
        </p>
        <ul className="list-disc pl-6">
          <li>
            Damage from <Keyword>Exploding</Keyword> is equal to half your current HEAT rounded down to a
            minimum of 1.
          </li>
          <li>The range of the explosion is equal to your current HEAT in inches.</li>
          <li>
            Terrain blocks <Keyword>Explosion</Keyword> Damage.
          </li>
          <li>
            <Keyword>Destructible Terrain</Keyword> takes damage from <Keyword>Explosions</Keyword> as normal.
          </li>
        </ul>
        <p className="italic pt-2">
          <span className="font-semibold">Example:</span> A model removes it's final HP while it has 7 HEAT,
          if you <Keyword>Explode</Keyword>, it would deal 3 damage to all models within 7".
        </p>
      </RulesSection>

      <RulesSection title="TERRAIN">
        <p>
          A model may traverse onto terrain vertically within reason, but you must end your turn on a flat
          level. Some terrain in a game can be targeted, damaged & destroyed. If terrain is destroyed, remove
          it from the board.
        </p>
        <p>
          Before the game begins, designate what is <Keyword>Indestructible Terrain</Keyword> and what is{" "}
          <Keyword>Destructible Terrain</Keyword>
          with your opponents. If a disagreement arises, roll a die to decide.
        </p>

        <h4 className="text-lg pt-3">
          <Keyword>DESTRUCTIBLE TERRAIN</Keyword>
        </h4>
        <p>
          If terrain is dealt any damage from an Action, place a counter on it. When a piece of terrain
          receives a second damage that turn, OR if it is dealt 3 or more damage in one Action, it is
          destroyed. Remove the terrain from the table, and deal 1 damage to all models within 2".
        </p>
        <p>
          If a Mech moves onto <Keyword>destructible terrain</Keyword> roll a d6, on a roll of a 1-2, the
          building is destroyed.
        </p>

        <h4 className="text-lg pt-3">
          <Keyword>INDESTRUCTIBLE TERRAIN</Keyword>
        </h4>
        <p>
          <Keyword>Indestructible Terrain</Keyword> cannot be destroyed.
        </p>
        <ul className="list-disc pl-6">
          <li>
            <Keyword>Rail Weapons</Keyword> may not fire through <Keyword>Indestructible terrain</Keyword>.
          </li>
        </ul>

        <h4 className="text-lg pt-3">COVER</h4>
        <p>
          If <Keyword>line of sight</Keyword> is partially obscured by either terrain or other models while
          making a <Keyword>Ranged Attack</Keyword>, the targets AR is increased by +1 for the attack. If the
          attack misses, it hits the obscuring terrain or model.
        </p>
      </RulesSection>

      <RulesSection title="STARTING A GAME">
        <h4 className="text-lg pt-3">
          <Keyword>MISSION</Keyword>
        </h4>
        <p>
          Pick or roll to determine which <Keyword>Mission</Keyword> to play. Decide if you are using{" "}
          <Keyword>Special Objectives</Keyword>, they are optional.
        </p>

        <h4 className="text-lg pt-3">TERRAIN</h4>
        <p>
          You and your opponent(s) take turns placing and designating destructible and indestructible terrain
          on the map that suits your mission and game. We recommend lots of line of sight blocking terrain
          evenly placed across the board.
        </p>

        <h4 className="text-lg pt-3">
          <Keyword>DEPLOYMENT ZONE</Keyword>
        </h4>
        <p>
          If the <Keyword>Mission</Keyword> does not have a <Keyword>Deployment</Keyword> requirement, players
          roll off to determine who picks their
          <Keyword>Deployment Zone</Keyword>. The winner chooses a board edge or corner and the other player
          deploys opposite. Players alternate placing models. Models may be placed anywhere within 3" from
          their table edge or 8" from a corner. Alternate placing your models until all models have been
          placed.
        </p>

        <h4 className="text-lg pt-3">THREE OR MORE PLAYERS</h4>
        <p>
          If playing with multiple opponents, players pick a board edge and deploy as normal, but may not
          place a model within 8" of an enemy model. Roll off to determine who picks the first deployment
          zone, then continue in initiative order or an order that makes sense.
        </p>

        <div className="alert alert-info alert-soft">
          <div>
            <p className="font-bold text-sm">
              re: <span className="text-title">OUTNUMBERED!</span>
            </p>
            <p className="text-sm">
              At the start of the first <Keyword>Round</Keyword>, if you have fewer models than the player
              with the most models, you are <Keyword>Outnumbered</Keyword>. You gain 1{" "}
              <Keyword>Pass Activation</Keyword> token for each model that the player has more than you.
            </p>
            <p className="text-sm">
              When it is your turn to activate a model, you may instead discard one of your{" "}
              <Keyword>Pass Activation</Keyword>
              tokens, and play passes to the next player.
            </p>
            <p className="text-sm">
              You discard a <Keyword>Pass Activation</Keyword> token whenever the player with the most models
              in play loses a model.
            </p>
          </div>
        </div>

        <h4 className="text-lg pt-3">
          <Keyword>SPECIAL OBJECTIVES</Keyword>
        </h4>
        <p>
          Before a game begins, but after missions are selected, choose in secret one{" "}
          <Keyword>Special Objective</Keyword> and write it down. Completing a{" "}
          <Keyword>Special Objective</Keyword> rewards a single dice roll on the Salvage Gear table.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-bold text-sm mb-2">SYSTEMS HOT</p>
            <p className="text-sm">
              Gain 10 <Keyword>HEAT</Keyword> & then <Keyword>Explode</Keyword> with a Mech.
            </p>
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
              Land the killing blow on at least two enemy models, removing their last HP with an{" "}
              <Keyword>Attack</Keyword>
              Action.
            </p>
          </div>
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-bold text-sm mb-2">FILL THE COFFERS</p>
            <p className="text-sm">End the game with the most Loot Tokens.</p>
          </div>
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-bold text-sm mb-2">NEVER LET THEM SEE YOU BURN</p>
            <p className="text-sm">
              <Keyword>Purge</Keyword> 6 or more total <Keyword>HEAT</Keyword> over the course of the game.
            </p>
          </div>
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-bold text-sm mb-2">COOL, CALM & COLLECTED</p>
            <p className="text-sm">
              Finish a game with at least one Mech at 3 or less <Keyword>HEAT</Keyword>.
            </p>
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

import random
from dataclasses import dataclass

# Hit distribution
MISS_PROB = 0.20
OUTER_PROB = 0.35
MIDDLE_PROB = 0.30
INNER_PROB = 0.15

ZONES = ['miss', 'outer', 'middle', 'inner']
ZONE_WEIGHTS = [MISS_PROB, OUTER_PROB, MIDDLE_PROB, INNER_PROB]

NUM_SIMS = 10_000
MAX_ROUNDS = 30

@dataclass
class Fighter:
    hp: int
    actions: int
    dmg_outer: int
    dmg_middle: int
    dmg_inner: int

def roll_damage(fighter: Fighter) -> int:
    total = 0
    for _ in range(fighter.actions):
        zone = random.choices(ZONES, weights=ZONE_WEIGHTS, k=1)[0]
        if zone == 'outer':
            total += fighter.dmg_outer
        elif zone == 'middle':
            total += fighter.dmg_middle
        elif zone == 'inner':
            total += fighter.dmg_inner
    return total

def get_hero_actions(level: int) -> int:
    if level >= 10:
        return 3
    elif level >= 5:
        return 2
    else:
        return 1

def build_hero(level: int, build_name: str) -> Fighter:
    base_hp = 20
    base_outer = 1
    base_middle = 3
    base_inner = 5

    upgrades = level - 1  # number of level-up choices

    if build_name == 'All HP':
        for _ in range(upgrades):
            base_hp += 10
    elif build_name == 'All Inner':
        for _ in range(upgrades):
            base_inner += 3
    elif build_name == 'Balanced':
        # alternate: HP, inner, HP, inner, ...
        for i in range(upgrades):
            if i % 2 == 0:
                base_hp += 10
            else:
                base_inner += 3
    elif build_name == 'Mixed':
        pattern = ['hp10', 'inner3', 'middle2', 'inner3', 'hp10', 'middle2',
                    'inner3', 'hp10', 'inner3', 'middle2', 'inner3', 'hp10',
                    'inner3', 'middle2']
        for i in range(upgrades):
            choice = pattern[i % len(pattern)]
            if choice == 'hp10':
                base_hp += 10
            elif choice == 'inner3':
                base_inner += 3
            elif choice == 'middle2':
                base_middle += 2
            elif choice == 'outer1':
                base_outer += 1

    return Fighter(
        hp=base_hp,
        actions=get_hero_actions(level),
        dmg_outer=base_outer,
        dmg_middle=base_middle,
        dmg_inner=base_inner,
    )

def simulate_fight(hero: Fighter, enemy: Fighter) -> dict:
    hero_hp = hero.hp
    enemy_hp = enemy.hp

    for rnd in range(1, MAX_ROUNDS + 1):
        # Hero attacks first
        dmg = roll_damage(hero)
        enemy_hp -= dmg

        # Enemy attacks
        dmg = roll_damage(enemy)
        hero_hp -= dmg

        # Check end conditions (hero went first, so hero wins ties)
        if enemy_hp <= 0:
            return {'winner': 'hero', 'rounds': rnd, 'hero_hp': max(hero_hp, 0)}
        if hero_hp <= 0:
            return {'winner': 'enemy', 'rounds': rnd, 'hero_hp': 0}

    return {'winner': 'draw', 'rounds': MAX_ROUNDS, 'hero_hp': hero_hp}

# Enemy definitions: (name, level, actions, hp, outer, middle, inner)
ENEMIES = [
    ("Hubi Tutorial",    1,  1, 15, 1, 2, 4),
    ("Simon",            1,  1, 20, 1, 3, 5),
    ("Kai weak",         2,  1, 20, 1, 3, 5),
    ("Jess",             4,  1, 28, 1, 2, 5),
    ("Daniel",           6,  2, 38, 2, 5, 8),
    ("Mirko",            7,  2, 40, 2, 5, 9),
    ("Vater",            8,  2, 45, 2, 6, 9),
    ("Nick",             9,  2, 48, 2, 6, 10),
    ("Lukas",           10,  3, 55, 2, 6, 10),
    ("Hubi Mid-Boss",   10,  3, 55, 2, 7, 11),
    ("Eva",              9,  2, 48, 2, 5, 9),
    ("Elena",           10,  3, 52, 2, 4, 7),
    ("Katta",           12,  3, 58, 2, 5, 8),
    ("Kai strong",      13,  3, 62, 2, 5, 8),
    ("Simon Erwacht",   14,  3, 70, 2, 5, 9),
    ("Hubi Endboss",    15,  3, 80, 3, 9, 14),
]

BUILD_NAMES = ['All HP', 'All Inner', 'Balanced', 'Mixed']

def run_simulations():
    all_results = {}

    for build_name in BUILD_NAMES:
        build_results = []
        for ei, (ename, elevel, eactions, ehp, eo, em, einn) in enumerate(ENEMIES):
            hero = build_hero(elevel, build_name)
            enemy = Fighter(hp=ehp, actions=eactions, dmg_outer=eo, dmg_middle=em, dmg_inner=einn)

            wins = 0
            losses = 0
            draws = 0
            win_rounds = []
            win_hp = []
            lose_rounds = []

            for _ in range(NUM_SIMS):
                result = simulate_fight(hero, enemy)
                if result['winner'] == 'hero':
                    wins += 1
                    win_rounds.append(result['rounds'])
                    win_hp.append(result['hero_hp'])
                elif result['winner'] == 'enemy':
                    losses += 1
                    lose_rounds.append(result['rounds'])
                else:
                    draws += 1

            stats = {
                'enemy': ename,
                'level': elevel,
                'hero_hp': hero.hp,
                'hero_dmg': f"{hero.dmg_outer}/{hero.dmg_middle}/{hero.dmg_inner}",
                'hero_actions': hero.actions,
                'win_rate': wins / NUM_SIMS * 100,
                'avg_win_rounds': sum(win_rounds) / len(win_rounds) if win_rounds else 0,
                'avg_win_hp': sum(win_hp) / len(win_hp) if win_hp else 0,
                'avg_lose_rounds': sum(lose_rounds) / len(lose_rounds) if lose_rounds else 0,
                'draws': draws,
            }
            build_results.append(stats)

        all_results[build_name] = build_results

    return all_results

def print_build_table(build_name, results):
    print(f"\n{'=' * 100}")
    print(f"  BUILD: {build_name}")
    print(f"{'=' * 100}")
    header = (
        f"{'Enemy':<20s} {'Lv':>3s} {'Hero':>12s} {'Act':>3s} "
        f"{'Win%':>6s} {'WinRnd':>7s} {'WinHP':>7s} {'LoseRnd':>8s} {'Draws':>6s}"
    )
    print(header)
    print('-' * 100)
    for s in results:
        hero_str = f"{s['hero_hp']}HP {s['hero_dmg']}"
        print(
            f"{s['enemy']:<20s} {s['level']:>3d} {hero_str:>12s} {s['hero_actions']:>3d} "
            f"{s['win_rate']:>5.1f}% {s['avg_win_rounds']:>7.1f} {s['avg_win_hp']:>7.1f} "
            f"{s['avg_lose_rounds']:>8.1f} {s['draws']:>6d}"
        )

def print_summary(all_results):
    print(f"\n{'=' * 100}")
    print(f"  SUMMARY: Win Rate % by Build")
    print(f"{'=' * 100}")

    builds = BUILD_NAMES
    header = f"{'Enemy':<20s} {'Lv':>3s}"
    for b in builds:
        header += f" {b:>12s}"
    print(header)
    print('-' * 100)

    num_enemies = len(ENEMIES)
    for ei in range(num_enemies):
        ename = all_results[builds[0]][ei]['enemy']
        elevel = all_results[builds[0]][ei]['level']
        row = f"{ename:<20s} {elevel:>3d}"
        for b in builds:
            wr = all_results[b][ei]['win_rate']
            row += f" {wr:>11.1f}%"
        print(row)

    # Averages
    print('-' * 100)
    row = f"{'AVERAGE':<20s} {'':>3s}"
    for b in builds:
        avg = sum(r['win_rate'] for r in all_results[b]) / num_enemies
        row += f" {avg:>11.1f}%"
    print(row)

def main():
    random.seed(42)
    print("Cornhole RPG Combat Simulation")
    print(f"Simulations per matchup: {NUM_SIMS:,}")
    print(f"Hit distribution: Miss {MISS_PROB:.0%}, Outer {OUTER_PROB:.0%}, "
          f"Middle {MIDDLE_PROB:.0%}, Inner {INNER_PROB:.0%}")
    print(f"Hero base: 20 HP, 1/3/5 damage, actions by level (1-4: 1, 5-9: 2, 10+: 3)")

    all_results = run_simulations()

    for build_name in BUILD_NAMES:
        print_build_table(build_name, all_results[build_name])

    print_summary(all_results)

if __name__ == '__main__':
    main()

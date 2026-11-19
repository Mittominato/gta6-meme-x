# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Mittominato/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Mittominato/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty ($500 in USDC).

The joke: Jason and Lucia have been sitting on the hood of their car in Vice City, checking the watch, since 2013 — thirteen years of waiting for GTA 6. Meanwhile, the make.fun ghost is already out there winning real money. The meme (`meme.png`) is posted on X from [@Rian86671574](https://x.com/Rian86671574), with make.fun and the entry's play code in the post's text. The post itself is the entry: the house reads it from X and an AI judge ranks it against the other memes.

## The post

See [POST.json](POST.json) for the post's address on X.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) validates POST.json and copies it to `/output/POST.json`, where the gate reads it. That is all the program has to do — nothing it writes is judged.

---

<sub>Entered on [make.fun](https://make.fun/?ref=6xedf17w&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>

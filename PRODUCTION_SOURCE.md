# Production source of truth

Verified October 2, 2026.

- Domain: `myiqscores.com` and `www.myiqscores.com`
- Vercel owner: `designsdeyoungs-projects`
- Vercel project: `my-iq-scores2`
- Project ID: `prj_J0Rn8aATkAeb6LscIxIzvJqMPN98`
- Production deployment before this change: `dpl_DQseZq1U9KwCBZcPiwhZ5YSG3xJ8`
- Deployment URL: `my-iq-scores2-nq4iax791-designsdeyoungs-projects.vercel.app`
- Deployment created: September 20, 2026 at 7:22:27 AM EDT
- Confirmed source repository: `vertexdata/myiqscores`
- Confirmed source branch at deployment: `codex/worldclass-rebuild`
- Confirmed source commit: `8edbc2001c3d561be994cb05c8f1cda94f43301f`

The commit timestamp is September 20, 2026 at 7:22:17 AM EDT, ten seconds before the prebuilt production upload. The production HTML and CSS identify the September rebuild, including its prerendered homepage, no-ad quiz language, asset set, and exact CSS content hash. The Vercel deployment remains available as the rollback artifact.

The separate `designsdeyoung/MyIQScores2` repository is not the source used for the September 20 production upload. Its specific August 28 backend migration was reconciled because the authenticated Supabase account confirms `udrllbeleatwozmfkspc` is the active MyIQScores project and its functions are active; the old deployed project ref is not accessible to the current Supabase organization.

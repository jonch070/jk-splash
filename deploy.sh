#!/bin/bash
cd "/Users/jonathankawchuk/Documents/Projects/In Progress/Web Design"
git add index.html graph.md force-fdeb.html horizontal-bundle.html edge-bundle.html previews/ fonts/
git commit -m "deploy $(date '+%Y-%m-%d %H:%M')"
git push origin master
echo "Done. Live in ~60s at https://jonch070.github.io/jk-splash/"

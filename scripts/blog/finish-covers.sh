#!/bin/zsh
# Downscale every freshly-rendered 2x PNG cover to an optimized 1200x630 JPG.
set -e
cd /Users/mike/cguard-pro/website/public/blog
n=0
for png in *.png; do
  [ -e "$png" ] || continue
  jpg="${png%.png}.jpg"
  sips -z 630 1200 -s format jpeg -s formatOptions 86 "$png" --out "$jpg" >/dev/null 2>&1
  rm -f "$png"
  n=$((n+1))
done
echo "converted $n covers to jpg"

Hall of Fame photos
====================
The gallery is data-driven from the hofData array in index.html
(search for "hall of fame: data-driven render"). Each achievement can
carry 1+ photos; cards with 2+ photos auto-cycle through them.
Cards with a link open that URL in a new tab; cards without one open
an in-page lightbox (with its own prev/next through that card's photos).

1. Smart Innovation Competition 2023 – 2024        -> https://icats.edu.my/FCSE/smart-i/
   SIC-2023.jpg, SIC-23-CERT.jpg, SIC-24.png

2. Outstanding Service Award & Dean's List (FCSE)   -> https://icats.edu.my/FCSE/fcse-chinese-new-year-celebration-open-house-2024/
   OSA1.png, OSA-2.png, deanlist.png

3. IDECS Volunteer ('23-'24)                        -> (no link — opens lightbox)
   idecs-23-fp.png, WCIT_IDECS23-CERT.png, IDECS'24.png

4. LaunchX & TEGAS Bootcamp                         -> https://icats.edu.my/FCSE/launchx-pre-demo-day/
   LaunchX.jpg, launchX.png

5. AWS Community Meet Sarawak (new chapter opening) -> https://icats.edu.my/FCSE/aws-amazon-web-services-community-meet-sarawak-new-chapter-opening/
   aws1.jpg, aws2.jpg

6. Sarawak Tribune — Youth Tech Visionary           -> https://www.sarawaktribune.com/international-youth-day-2025-sarawaks-youth-tech-visionary/
   ST-2.png

7. Sarawak Tribune — Women & Girls in Science        -> https://www.sarawaktribune.com/international-day-of-women-and-girls-in-science-pioneering-the-future-of-tech/
   ST-1.png

All of the above are already sitting in this folder. Filenames are
case-sensitive on real web hosts (unlike Windows) — two got renamed to
match this list exactly: SIC-23-cert.jpg -> SIC-23-CERT.jpg, and
aws1.JPG / aws2.JPG -> aws1.jpg / aws2.jpg.

Heads up: OSA1.png (11MB), OSA-2.png (12.7MB), deanlist.png (3MB),
idecs-23-fp.png (10MB), and aws1.jpg/aws2.jpg (~5MB each) are very
large for the web — the page will work but load slowly on these.
Worth compressing/resizing them (under ~500KB each is plenty for a
4:3 card) whenever convenient. OSA1.HEIC / OSA-2.HEIC / deanlist.HEIC
are the original iPhone photos, unused by the site (browsers can't
display HEIC) — safe to delete once you're happy with the .png
versions, or keep as backups.

Adding more photos later: add filenames to an item's `images` array in
index.html — no other change needed. Missing files just fall back to a
neat icon placeholder instead of breaking.

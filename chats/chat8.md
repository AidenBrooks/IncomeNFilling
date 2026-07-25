# Missing testimonials and footer issue

_Started 2026-07-25 11:52 UTC_

---

## User

In Service page and contact page Testimonials option is missing and if i open the Conatct page its show footer not front of the page

## Assistant

_[tool: list_files]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

Both issues are clear. Two fixes: (1) the V2 subpages' nav arrays are missing the Testimonials item, and (2) the router never resets scroll on page change, so you land wherever the previous page was scrolled (the footer).

_[tool: run_script]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Fixed both. Added **Testimonials** to the nav on the Services, Service detail, Contact and Live Chat pages (it was only present on Home), and the router now resets scroll to the top on every page change — so Contact opens at its hero, not the footer. Clicking Testimonials from any page jumps to that section on the home page.


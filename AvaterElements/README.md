# Avatar Elements 🌪️🔥💧🌍

A JavaScript program that dynamically corrects character data and renders 
colored element circles based on each character's attributes themed 
around Avatar: The Last Airbender.

## How It Works
1. Reads each character's `class` (good/evil/unknown) and `data-element` attribute
2. Fixes missing or invalid attributes automatically
3. Dynamically creates a colored circle for each element a character controls
4. Characters with no element get a circle with a line through it
5. Works for any character data. Nothing is hardcoded

## Elements & Colors
| Element | Color |
|---------|-------|
| Air | Light Blue |
| Water | Dark Blue |
| Earth | Green |
| Fire | Red |
| None | Grey with a line |

## Built With
- HTML
- CSS — Flexbox, nested containers
- JavaScript — DOM manipulation, `dataset`, nested loops

## Concepts Used
- `querySelectorAll()` and `forEach()` — nested loops
- `dataset` for reading custom `data-` attributes
- `createElement()` and `appendChild()`
- Dynamic class name assignment with template literals
- Conditional logic for fixing invalid/missing attributes
- Wrapping related elements in containers for layout control

## What I Learned
How to dynamically manipulate the DOM without hardcoding values, and how 
wrapping related elements in their own containers gives more precise 
control over layout with Flexbox.

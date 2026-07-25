Primary action button (gold fill), plus secondary/ghost outlines and a terminal-style CommandButton that renders `[ book ]`.

```jsx
<Button variant="primary">Book Free Consultation</Button>
<Button variant="ghost" size="sm">Explore Services</Button>
<CommandButton onClick={runBook}>book</CommandButton>
```

Variants: `primary` (gold, for light/navy sections), `secondary` (outline, for dark hero), `ghost` (outline, for light cards), `command` (routes to CommandButton — use inside the terminal module only). `CommandButton` accepts `href` to render as a link.

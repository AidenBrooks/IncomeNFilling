Status pill for the dashboard vocabulary — "status: deployed", "3 days remaining", etc.

```jsx
<Badge status="positive" pulse>status: deployed</Badge>
<Badge status="warning">2 filings due</Badge>
```

Four tones only: positive / warning / critical / neutral. Use `pulse` sparingly — for genuinely live indicators (office online, deadline approaching).

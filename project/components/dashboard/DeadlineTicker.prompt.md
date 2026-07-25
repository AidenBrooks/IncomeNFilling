Scrolling compliance-deadline ticker for the dashboard-logic motif — treat stats as live ops data, not static numbers.

```jsx
<DeadlineTicker items={[{label:'GSTR-3B',date:'20 Jul'},{label:'TDS Return',date:'31 Jul'}]}/>
```
Duplicate the list once internally for a seamless loop; pass 4–8 items.

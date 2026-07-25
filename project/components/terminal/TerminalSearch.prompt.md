The hero's CLI-styled live search — monospace, blinking cursor, cycling placeholder queries, filters the service directory in real time.

```jsx
<TerminalSearch value={q} onChange={e=>setQ(e.target.value)} placeholders={['search gst registration','search company incorporation']}>
  <CommandOutputLine label="gst-registration" status="available"/>
</TerminalSearch>
```
Pass filtered results as children using the `feedback/CommandOutputLine` pattern (see Feedback group) to keep the CLI-response look consistent.

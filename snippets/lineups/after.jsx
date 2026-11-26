// Drawings for the guide's "after" section, in order.
// Made by docs-site/scripts/lineups-drawings.mjs from the Lineups tester guide. Don't edit by hand.

// After_1: Home: your teams with status pills
export const After_1 = () => (
  <div className="rn-lshot not-prose">
    <div className="phone sm" role="img" aria-label="Home: your teams with status pills">{" "}
      <div className="scr">{" "}
        <div className="sb">
          <b>9:15</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="body" style={{ gap: ".9em" }}>{" "}
          <div className="gh">
            <svg style={{ width: "1.8em", height: "1.8em", color: "var(--a-gb)" }} viewBox="0 0 100 100" aria-hidden="true"><rect x="10" y="28" width="80" height="44" rx="15" fill="none" stroke="currentColor" strokeWidth="5.5" /><circle cx="32" cy="42" r="4.3" fill="currentColor" /><circle cx="50" cy="42" r="4.3" fill="currentColor" /><circle cx="68" cy="42" r="4.3" fill="currentColor" /><circle cx="41" cy="58" r="4.3" fill="currentColor" /><circle cx="59" cy="58" r="4.3" fill="currentColor" /></svg>
            <span className="k" style={{ letterSpacing: ".2em" }}>Lineups</span>
            <svg className="ic mu" style={{ marginLeft: "auto" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" /></svg>
          </div>
          {" "}
          <div className="t">Hi, Sam</div>
          {" "}
          <div className="k">Your teams · 3</div>
          {" "}
          <div className="tcard">
            <div className="tt">
              <i className="dot"></i>
              <b>Wolves U13 A</b>
              <span className="pill g">✓ Lines set</span>
            </div>
            <small>Next: vs Harbour Hawks ·{" "}
              <span className="mn">Sat 7:00 PM</span>
            </small>
          </div>
          {" "}
          <div className="tcard">
            <div className="tt">
              <i className="dot o"></i>
              <b>Wolves U11 B</b>
              <span className="pill">Set lines</span>
            </div>
            <small>Next: @ Coast Kings ·{" "}
              <span className="mn">Sun 9:30 AM</span>
            </small>
          </div>
          {" "}
          <div className="tcard">
            <div className="tt">
              <i className="dot p"></i>
              <b>Spring Select</b>
              <span className="pill">Add roster</span>
            </div>
            <small>No roster yet</small>
          </div>
          {" "}
          <div className="lk" style={{ textAlign: "left", color: "var(--a-gb)" }}>+ Add a team</div>
          {" "}</div>
        {" "}
        <div className="foot">
          <div className="lock">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 3l18 18M8.5 16.5a5 5 0 0 1 7 0M5 12.5a10 10 0 0 1 4-2.4M19 12.5a10 10 0 0 0-3-2M2 8.8a15 15 0 0 1 4.2-2.6M22 8.8A15 15 0 0 0 11 5.1" /><circle cx="12" cy="20" r=".8" fill="currentColor" /></svg>
            Works with no signal.</div>
        </div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
  </div>
);

// After_2: Team hub, Games tab
export const After_2 = () => (
  <div className="rn-lshot not-prose">
    <div className="phone sm" role="img" aria-label="Team hub, Games tab">{" "}
      <div className="scr">{" "}
        <div className="sb">
          <b>9:16</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="body" style={{ gap: ".85em" }}>{" "}
          <div className="gh">
            <span className="bk mu" style={{ fontSize: "1.5em", lineHeight: "1" }}>‹</span>
            <span className="gp" style={{ background: "var(--a-card)", color: "var(--a-text)", borderColor: "var(--a-border2)" }}>
              <i className="dot"></i>
              Wolves U13 A ▾</span>
            <span className="mu" style={{ marginLeft: "auto", fontWeight: "700" }}>···</span>
          </div>
          {" "}
          <div className="box" style={{ padding: "1em", display: "grid", gap: ".5em" }}>{" "}
            <div className="gh">
              <span className="k g">Next game</span>
              <svg className="ic mu" style={{ marginLeft: "auto" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12M8 7l4-4 4 4M6 11H5v10h14V11h-1" /></svg>
            </div>
            {" "}
            <div style={{ fontWeight: "700", fontSize: "1.3em" }}>vs Harbour Hawks</div>
            {" "}
            <div className="mn mu" style={{ fontSize: ".85em" }}>Sat Sep 26 · 7:00 PM</div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".5em", marginTop: ".3em" }}>
              <span className="gbtn" style={{ height: "3em", fontSize: ".88em" }}>Edit lines · 16 dressed</span>
              <span className="pb" style={{ height: "3em", fontSize: ".88em" }}>Start game</span>
            </div>
            {" "}</div>
          {" "}
          <div className="sl" style={{ margin: "0" }}>Upcoming games</div>
          {" "}
          <div className="box" style={{ padding: ".7em 1em" }}>
            <b>@ Coast Kings</b>
            {" "}
            <span className="mn mu" style={{ fontSize: ".85em" }}>· Sat Oct 3</span>
          </div>
          {" "}
          <div className="sl" style={{ margin: "0" }}>Past games</div>
          {" "}
          <div className="box" style={{ padding: ".7em 1em", display: "flex" }}>
            <span>
              <b>vs North Stars</b>
              {" "}
              <span className="mn mu" style={{ fontSize: ".85em" }}>· Sep 19</span>
            </span>
            <span className="pill" style={{ marginLeft: "auto" }}>Final</span>
          </div>
          {" "}
          <div className="box" style={{ padding: ".7em 1em", display: "flex" }}>
            <b>Line totals</b>
            <span className="mu" style={{ marginLeft: "auto" }}>›</span>
          </div>
          {" "}</div>
        {" "}
        <div style={{ flex: "none", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: "1px solid var(--a-border)", padding: ".8em 0 2.4em", textAlign: "center", fontWeight: "600", fontSize: ".9em" }}>
          <span className="gr">Games</span>
          <span className="mu">Roster</span>
          <span className="mu">Notes</span>
        </div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
  </div>
);

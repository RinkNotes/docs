// Drawings for the guide's "setup" section, in order.
// Made by docs-site/scripts/lineups-drawings.mjs from the Lineups tester guide. Don't edit by hand.

// Setup_1: Welcome screen
export const Setup_1 = () => (
  <div className="rn-lshot not-prose">
    <div className="phone sm welcome" role="img" aria-label="Welcome screen">{" "}
      <div className="scr">{" "}
        <div className="art">
          <svg viewBox="0 0 800 480" viewBox="0 0 800 480" aria-hidden="true"><rect x="3" y="3" width="794" height="474" rx="151" fill="none" stroke="#303e49" strokeWidth="3" /><path d="M275 7L275 473" stroke="#234264" strokeWidth="5" /><path d="M525 7L525 473" stroke="#234264" strokeWidth="5" /><path d="M400 7L400 473" stroke="#573035" strokeWidth="4" /><circle cx="400" cy="240" r="81" fill="none" stroke="#234264" strokeWidth="3" /><circle cx="143" cy="140" r="48" fill="none" stroke="#25313d" strokeWidth="2" /><circle cx="143" cy="140" r="3" fill="#48515c" /><circle cx="143" cy="340" r="48" fill="none" stroke="#25313d" strokeWidth="2" /><circle cx="143" cy="340" r="3" fill="#48515c" /><circle cx="657" cy="140" r="48" fill="none" stroke="#25313d" strokeWidth="2" /><circle cx="657" cy="140" r="3" fill="#48515c" /><circle cx="657" cy="340" r="48" fill="none" stroke="#25313d" strokeWidth="2" /><circle cx="657" cy="340" r="3" fill="#48515c" />
            <g stroke="#3fb950" strokeWidth="2" opacity=".28" fill="none"><path d="M240 180L400 150L560 180M240 180L310 325L400 150L490 325L560 180M310 325H490" /></g>
            <circle cx="240" cy="180" r="34" fill="#0d1117" stroke="#3fb950" strokeWidth="3" /><circle cx="240" cy="180" r="10" fill="#3fb950" /><circle cx="400" cy="150" r="34" fill="#0d1117" stroke="#3fb950" strokeWidth="3" /><circle cx="400" cy="150" r="10" fill="#3fb950" /><circle cx="560" cy="180" r="34" fill="#0d1117" stroke="#3fb950" strokeWidth="3" /><circle cx="560" cy="180" r="10" fill="#3fb950" /><circle cx="310" cy="325" r="34" fill="#0d1117" stroke="#3fb950" strokeWidth="3" /><circle cx="310" cy="325" r="10" fill="#3fb950" /><circle cx="490" cy="325" r="34" fill="#0d1117" stroke="#3fb950" strokeWidth="3" /><circle cx="490" cy="325" r="10" fill="#3fb950" /></svg>
        </div>
        {" "}
        <div className="shade"></div>
        {" "}
        <div className="sb" style={{ position: "relative", zIndex: "2" }}>
          <b>7:02</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="body">{" "}
          <div>
            <div className="wm">Lineups</div>
            <div className="by">by RinkNotes</div>
          </div>
          {" "}
          <div className="wpro">{" "}
            <div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="8" y="3" width="11" height="16" rx="2" /><path d="M5 7v12a2 2 0 0 0 2 2h9" /></svg>
              <span>
                <b>Rosters from screenshots.</b>
              </span>
            </div>
            {" "}
            <div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
              <span>
                <b>Lines by drag and drop.</b>
              </span>
            </div>
            {" "}
            <div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
              <span>
                <b>Voice notes during the game.</b>
              </span>
            </div>
            {" "}
            <div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 3l18 18M8.5 16.5a5 5 0 0 1 7 0M5 12.5a10 10 0 0 1 4-2.4M19 12.5a10 10 0 0 0-3-2M2 8.8a15 15 0 0 1 4.2-2.6M22 8.8A15 15 0 0 0 11 5.1" /><circle cx="12" cy="20" r=".8" fill="currentColor" /></svg>
              <span>
                <b>Works at the rink.</b>
              </span>
            </div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="foot">
          <div className="pb">Get started</div>
        </div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
  </div>
);

// Setup_2: Name step: What should we call you?
export const Setup_2 = () => (
  <div className="rn-lshot not-prose">
    <div className="phone sm" role="img" aria-label="Name step: What should we call you?">{" "}
      <div className="scr">{" "}
        <div className="sb">
          <b>7:02</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="body">{" "}
          <div className="prog">
            <i className="on"></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          {" "}
          <div style={{ display: "grid", gap: ".7em", marginTop: ".6em" }}>
            <div className="k g">Welcome to Lineups</div>
            <div className="t">What should we call you?</div>
          </div>
          {" "}
          <div>
            <span className="fl">Your name</span>
            <div className="in f">Sam Ortiz
              <span className="caret"></span>
            </div>
          </div>
          {" "}
          <div className="rn-s">It goes on lineup cards you share, so your assistants know who sent them.</div>
          {" "}</div>
        {" "}
        <div className="foot">
          <div className="pb">Continue</div>
        </div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
  </div>
);

// Setup_3: Teams step: Which teams do you coach?
export const Setup_3 = () => (
  <div className="rn-lshot not-prose">
    <div className="phone sm" role="img" aria-label="Teams step: Which teams do you coach?">{" "}
      <div className="scr">{" "}
        <div className="sb">
          <b>7:03</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="body" style={{ gap: ".85em" }}>{" "}
          <div className="prog">
            <i className="on"></i>
            <i className="on"></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          {" "}
          <div style={{ display: "grid", gap: ".6em", marginTop: ".4em" }}>
            <div className="k g">Hi, Sam</div>
            <div className="t">Which teams do you coach?</div>
          </div>
          {" "}
          <div className="trow">
            <i className="dot"></i>
            <div>
              <b>Wolves U13 A</b>
              <small>U13 A</small>
            </div>
            <span className="x">✕</span>
          </div>
          {" "}
          <div className="trow">
            <i className="dot o"></i>
            <div>
              <b>Wolves U11 B</b>
              <small>U11 B</small>
            </div>
            <span className="x">✕</span>
          </div>
          {" "}
          <div className="box2" style={{ padding: ".9em", display: "grid", gap: ".8em" }}>{" "}
            <div>
              <span className="fl">Team name</span>
              <div className="in f">
                <span className="ph">e.g. Wolves U13 A</span>
              </div>
            </div>
            {" "}
            <div>
              <span className="fl">Colour</span>
              <div className="sw">
                <i style={{ background: "var(--t-blue)" }}></i>
                <i style={{ background: "var(--t-orange)" }}></i>
                <i className="sel" style={{ background: "var(--t-purple)" }}></i>
                <i style={{ background: "var(--t-cyan)" }}></i>
                <i style={{ background: "var(--t-pink)" }}></i>
                <i style={{ background: "var(--t-teal)" }}></i>
              </div>
            </div>
            {" "}
            <div>
              <span className="gp">+ Add team</span>
            </div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="foot">
          <div className="pb">Continue with 2 teams</div>
        </div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
  </div>
);

// Setup_4: Add your roster: four ways to start
export const Setup_4 = () => (
  <div className="rn-lshot not-prose">
    <div className="phone sm" role="img" aria-label="Add your roster: four ways to start">{" "}
      <div className="scr">{" "}
        <div className="sb">
          <b>7:04</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="body" style={{ gap: ".8em" }}>{" "}
          <div className="prog">
            <i className="on"></i>
            <i className="on"></i>
            <i className="on"></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          {" "}
          <div style={{ display: "grid", gap: ".6em", marginTop: ".4em" }}>
            <div className="k">
              <i className="dot"></i>
              Wolves U13 A</div>
            <div className="t">Add your roster</div>
          </div>
          {" "}
          <div className="rn-s" style={{ marginTop: "-.3em" }}>Start from what you already have.</div>
          {" "}
          <div className="ch hot">
            <span className="icb">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="8" y="3" width="11" height="16" rx="2" /><path d="M5 7v12a2 2 0 0 0 2 2h9" /></svg>
            </span>
            <div>
              <b>From screenshots{" "}
                <i className="fast">Fastest</i>
              </b>
              <span>Your team app's roster, a few screens.</span>
            </div>
          </div>
          {" "}
          <div className="ch">
            <span className="icb">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></svg>
            </span>
            <div>
              <b>Photo of a paper roster</b>
              <span>Take a photo, or choose one you already have.</span>
            </div>
          </div>
          {" "}
          <div className="ch">
            <span className="icb">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M7 10h0M10.5 10h0M14 10h0M17.5 10h0M8 14h8" /></svg>
            </span>
            <div>
              <b>Type or paste a list</b>
              <span>One per line, like “17 Jonah Pike LW”.</span>
            </div>
          </div>
          {" "}
          <div className="ch">
            <span className="icb">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
            </span>
            <div>
              <b>Say it</b>
              <span>“Seventeen, Jonah Pike, left wing…”</span>
            </div>
          </div>
          {" "}</div>
        {" "}
        <div className="foot" style={{ paddingTop: ".2em" }}>
          <div className="lk">Skip for now</div>
        </div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
  </div>
);

// Setup_5: Reading your screenshots
export const Setup_5 = () => (
  <div className="rn-lshot not-prose">
    <div className="phone sm" role="img" aria-label="Reading your screenshots">{" "}
      <div className="scr">{" "}
        <div className="sb">
          <b>7:04</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="body reading">{" "}
          <div className="thumbs">
            <i className="done"></i>
            <i className="done"></i>
            <i></i>
          </div>
          {" "}
          <div className="t" style={{ fontSize: "1.6em" }}>Reading 3 screenshots</div>
          {" "}
          <div className="rn-s">Found{" "}
            <b className="gr mn">14</b>
            {" "}players so far</div>
          {" "}
          <div className="bar">
            <b></b>
          </div>
          {" "}
          <div className="lock" style={{ marginTop: "1em" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 3l18 18M8.5 16.5a5 5 0 0 1 7 0M5 12.5a10 10 0 0 1 4-2.4M19 12.5a10 10 0 0 0-3-2M2 8.8a15 15 0 0 1 4.2-2.6M22 8.8A15 15 0 0 0 11 5.1" /><circle cx="12" cy="20" r=".8" fill="currentColor" /></svg>
            Read on your phone. The screenshots aren't kept.</div>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
  </div>
);

// Setup_6: Review: 18 players found
export const Setup_6 = () => (
  <div className="rn-lshot not-prose">
    <div className="phone sm" role="img" aria-label="Review: 18 players found">{" "}
      <div className="scr">{" "}
        <div className="sb">
          <b>7:05</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="body" style={{ gap: ".75em" }}>{" "}
          <div style={{ display: "grid", gap: ".5em" }}>
            <div className="k">
              <i className="dot"></i>
              Wolves U13 A</div>
            <div className="t">18 players found</div>
          </div>
          {" "}
          <div className="anote">
            <b>●</b>
            <span>
              <b>2 have no number.</b>
              {" "}Tap the box to add it.</span>
          </div>
          {" "}
          <div className="rv">{" "}
            <div className="rr">
              <span className="num">17</span>
              <span className="nm">Jonah Pike</span>
              <span className="seg">
                <i className="on">F</i>
                <i>D</i>
                <i>G</i>
              </span>
            </div>
            {" "}
            <div className="rr">
              <span className="num">4</span>
              <span className="nm">Leo Kowal</span>
              <span className="seg">
                <i>F</i>
                <i className="on">D</i>
                <i>G</i>
              </span>
            </div>
            {" "}
            <div className="rr amb">
              <span className="num">–</span>
              <span className="nm">Mia Nguyen
                <small>No number</small>
              </span>
              <span className="seg">
                <i className="on">F</i>
                <i>D</i>
                <i>G</i>
              </span>
            </div>
            {" "}
            <div className="rr">
              <span className="num">30</span>
              <span className="nm">Eli Brooks</span>
              <span className="seg">
                <i>F</i>
                <i>D</i>
                <i className="on">G</i>
              </span>
            </div>
            {" "}
            <div className="rr">
              <span className="num">14</span>
              <span className="nm">Ana Rivera</span>
              <span className="seg">
                <i className="on">F</i>
                <i>D</i>
                <i>G</i>
              </span>
            </div>
            {" "}</div>
          {" "}
          <div className="fold">
            <span>Not players · 3</span>
            <span>›</span>
          </div>
          {" "}</div>
        {" "}
        <div className="foot">
          <div className="pb">Add 18 players</div>
        </div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
  </div>
);

// Setup_7: Your next game form
export const Setup_7 = () => (
  <div className="rn-lshot not-prose">
    <div className="phone sm" role="img" aria-label="Your next game form">{" "}
      <div className="scr">{" "}
        <div className="sb">
          <b>7:06</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="body" style={{ gap: ".95em" }}>{" "}
          <div style={{ display: "grid", gap: ".6em", marginTop: ".4em" }}>
            <div className="k">
              <i className="dot"></i>
              Wolves U13 A</div>
            <div className="t">Your next game</div>
          </div>
          {" "}
          <div>
            <span className="fl">Opponent</span>
            <div className="in f">Harbour Hawks
              <span className="caret"></span>
            </div>
          </div>
          {" "}
          <div>
            <span className="fl">When</span>
            <div className="when">
              <div className="in mn" style={{ fontSize: ".95em" }}>Sat Sep 26</div>
              <div className="in mn" style={{ fontSize: ".95em" }}>7:00 PM</div>
            </div>
          </div>
          {" "}
          <div>
            <span className="fl">Where</span>
            <div className="hmaw">
              <i className="on">Home</i>
              <i>Away</i>
            </div>
          </div>
          {" "}</div>
        {" "}
        <div className="foot">
          <div className="pb">Set the lines</div>
          <div className="lk">Skip for now</div>
        </div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
  </div>
);

// Setup_8: An empty lineup card with a Fill by position button
export const Setup_8 = () => (
  <div className="rn-lshot not-prose">
    <div className="phone sm" role="img" aria-label="An empty lineup card with a Fill by position button">{" "}
      <div className="scr">{" "}
        <div className="sb">
          <b>7:06</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="body" style={{ gap: ".8em" }}>{" "}
          <div className="hdr">
            <span className="bk">‹</span>
            <div className="grow">
              <div className="k">
                <i className="dot"></i>
                Wolves U13 A</div>
              <div className="t" style={{ fontSize: "1.55em", marginTop: ".2em" }}>vs Harbour Hawks</div>
              <div className="mn mu" style={{ fontSize: ".85em", marginTop: ".2em" }}>Sat Sep 26 · 7:00 PM</div>
            </div>
          </div>
          {" "}
          <div className="box" style={{ padding: "1em", display: "grid", gap: ".6em", borderColor: "var(--a-gline)" }}>{" "}
            <div className="k g">First lineup</div>
            {" "}
            <div style={{ fontWeight: "700", fontSize: "1.1em" }}>Fill the card by position</div>
            {" "}
            <div className="rn-s" style={{ fontSize: ".92em" }}>Positions came from your roster. Then drag to adjust.</div>
            {" "}
            <div className="pb" style={{ height: "3.2em" }}>Fill by position</div>
            {" "}
            <div className="lk" style={{ padding: "0" }}>Start blank</div>
            {" "}</div>
          {" "}
          <div>
            <div className="sl">Goalies</div>
            <div className="u two" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
              <div className="c e">
                <small>G1</small>
                <b>Starter</b>
              </div>
              <div className="c e">
                <small>G2</small>
                <b>Backup</b>
              </div>
            </div>
          </div>
          {" "}
          <div>
            <div className="sl">Forwards</div>
            <div className="u">
              <span className="ul">L1</span>
              <div className="c e">
                <small>LW</small>
                <b>+</b>
              </div>
              <div className="c e">
                <small>C</small>
                <b>+</b>
              </div>
              <div className="c e">
                <small>RW</small>
                <b>+</b>
              </div>
            </div>
          </div>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
  </div>
);

// Setup_9: A filled lineup card with the bench tray and Start game
export const Setup_9 = () => (
  <div className="rn-lshot not-prose">
    <div className="phone sm" role="img" aria-label="A filled lineup card with the bench tray and Start game">{" "}
      <div className="scr">{" "}
        <div className="sb">
          <b>7:07</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="body" style={{ gap: ".7em" }}>{" "}
          <div className="hdr">
            <span className="bk">‹</span>
            <div className="grow">
              <div className="k">
                <i className="dot"></i>
                Wolves U13 A</div>
              <div className="t" style={{ fontSize: "1.55em", marginTop: ".2em" }}>vs Harbour Hawks</div>
            </div>
            <div className="ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16z" /></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12M8 7l4-4 4 4M6 11H5v10h14V11h-1" /></svg>
            </div>
          </div>
          {" "}
          <div className="stat">
            <span>Changes are saved as a new version.</span>
            <span className="vp">Versions · 1</span>
          </div>
          {" "}
          <div>
            <div className="sl">Goalies</div>
            <div className="u two" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
              <div className="c">
                <small>G1</small>
                <b>
                  <span className="mn">30</span>
                  Brooks</b>
              </div>
              <div className="c">
                <small>G2</small>
                <b>
                  <span className="mn">1</span>
                  Lund</b>
              </div>
            </div>
          </div>
          {" "}
          <div>
            <div className="sl">Forwards</div>
            {" "}
            <div className="u">
              <span className="ul">L1</span>
              <div className="c">
                <small>LW</small>
                <b>
                  <span className="mn">17</span>
                  Pike</b>
              </div>
              <div className="c">
                <small>C</small>
                <b>
                  <span className="mn">9</span>
                  Okafor</b>
              </div>
              <div className="c">
                <small>RW</small>
                <b>
                  <span className="mn">14</span>
                  Rivera</b>
              </div>
            </div>
            {" "}
            <div className="u">
              <span className="ul">L2</span>
              <div className="c">
                <small>LW</small>
                <b>
                  <span className="mn">11</span>
                  Hayes</b>
              </div>
              <div className="c">
                <small>C</small>
                <b>
                  <span className="mn">21</span>
                  Santos</b>
              </div>
              <div className="c">
                <small>RW</small>
                <b>Nguyen</b>
              </div>
            </div>
            {" "}
            <div className="u">
              <span className="ul">L3</span>
              <div className="c">
                <small>LW</small>
                <b>
                  <span className="mn">8</span>
                  Chen</b>
              </div>
              <div className="c">
                <small>C</small>
                <b>
                  <span className="mn">16</span>
                  Walsh</b>
              </div>
              <div className="c">
                <small>RW</small>
                <b>
                  <span className="mn">19</span>
                  Park</b>
              </div>
            </div>
            {" "}</div>
          {" "}
          <div className="fadeb"></div>
          {" "}</div>
        {" "}
        <div className="tray">{" "}
          <div className="grab"></div>
          {" "}
          <div className="trh">
            <div>
              <b>Bench · 2</b>
              <small>16 dressed</small>
            </div>
            <span className="gp" style={{ background: "none", color: "var(--a-text)", borderColor: "var(--a-border2)" }}>Roster</span>
          </div>
          {" "}
          <div className="chips">
            <span className="chip">
              <span className="mn">22</span>
              Reid</span>
            <span className="chip">
              <span className="mn">6</span>
              Dubois</span>
          </div>
          {" "}
          <div className="pb" style={{ height: "3.3em" }}>Start game ›</div>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
  </div>
);

// Setup_10: Game mode with the tip: Tap a name to add a note about that player
export const Setup_10 = () => (
  <div className="rn-lshot not-prose">
    <div className="phone sm" role="img" aria-label="Game mode with the tip: Tap a name to add a note about that player">{" "}
      <div className="scr">{" "}
        <div className="sb">
          <b>7:12</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="body" style={{ gap: ".7em" }}>{" "}
          <div className="gh">
            <span className="live">LIVE</span>
            <span className="mseg" style={{ marginLeft: "auto" }}>
              <i className="on">Notes</i>
              <i>Lines</i>
            </span>
          </div>
          {" "}
          <div className="gh">
            <div style={{ flex: "1", minWidth: "0" }}>
              <div className="k" style={{ fontSize: ".7em" }}>
                <i className="dot"></i>
                Wolves U13 A</div>
              <div style={{ fontWeight: "700", fontSize: "1.2em" }}>vs Harbour Hawks</div>
            </div>
            <span className="pseg">
              <i className="on">P1</i>
              <i>P2</i>
              <i>P3</i>
              <i>OT</i>
            </span>
          </div>
          {" "}
          <div className="sl" style={{ margin: "0" }}>Forwards</div>
          {" "}
          <div className="gu" style={{ margin: "0" }}>
            <span className="rate">
              <span className="eq">L1</span>
              <span className="nr">Rate</span>
            </span>
            <div className="tile tap">
              <small>17</small>
              <b>Pike</b>
            </div>
            <div className="tile">
              <small>9</small>
              <b>Okafor</b>
            </div>
            <div className="tile">
              <small>14</small>
              <b>Rivera</b>
            </div>
          </div>
          {" "}
          <div className="cmark" style={{ top: "14.8em" }}>
            <span>
              <b>Tap a name</b>
              {" "}to add a note about that player.</span>
            <span className="ok">Got it</span>
          </div>
          {" "}
          <div className="gu" style={{ marginTop: "4.4em" }}>
            <span className="rate">
              <span className="eq">L2</span>
              <span className="nr">Rate</span>
            </span>
            <div className="tile">
              <small>11</small>
              <b>Hayes</b>
            </div>
            <div className="tile">
              <small>21</small>
              <b>Santos</b>
            </div>
            <div className="tile">
              <small>–</small>
              <b>Nguyen</b>
            </div>
          </div>
          {" "}
          <div className="fadeb"></div>
          {" "}</div>
        {" "}
        <div className="foot" style={{ paddingTop: ".3em" }}>
          <div className="gbtns">
            <span className="gbtn f">Goal for</span>
            <span className="gbtn">Goal against</span>
          </div>
        </div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
  </div>
);

// Setup_11: Summary: You're set, Sam
export const Setup_11 = () => (
  <div className="rn-lshot not-prose">
    <div className="phone sm" role="img" aria-label="Summary: You're set, Sam">{" "}
      <div className="scr">{" "}
        <div className="sb">
          <b>7:13</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="body" style={{ alignItems: "center", textAlign: "center", gap: "1.1em" }}>{" "}
          <div className="sumc">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" /></svg>
          </div>
          {" "}
          <div className="t">You're set, Sam.</div>
          {" "}
          <div className="rn-s">Here's where each team stands.</div>
          {" "}
          <div className="box" style={{ width: "100%", textAlign: "left" }}>{" "}
            <div className="srow">
              <i className="dot"></i>
              <div>
                <b>Wolves U13 A</b>
                <small>18 players · vs Harbour Hawks · 1 note</small>
              </div>
            </div>
            {" "}
            <div className="srow">
              <i className="dot o"></i>
              <div>
                <b>Wolves U11 B</b>
                <small>No roster yet</small>
              </div>
            </div>
            {" "}</div>
          {" "}
          <div className="lock">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 3l18 18M8.5 16.5a5 5 0 0 1 7 0M5 12.5a10 10 0 0 1 4-2.4M19 12.5a10 10 0 0 0-3-2M2 8.8a15 15 0 0 1 4.2-2.6M22 8.8A15 15 0 0 0 11 5.1" /><circle cx="12" cy="20" r=".8" fill="currentColor" /></svg>
            Works at the rink with no signal.</div>
          {" "}</div>
        {" "}
        <div className="foot">
          <div className="pb">Go to my teams</div>
        </div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
  </div>
);

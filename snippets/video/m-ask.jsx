// Drawings for the guide's "m-ask" section, one per step.
// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (9)). Don't edit by hand.

// m6-1: Ask in words
export const M6_1 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Ask: a question, an answer, and the Ask about this game box">{" "}
      <div className="chat">
        <div className="bubble me">goals in the second</div>
        <div className="bubble it">2 moments, in game order.</div>
      </div>
      {" "}
      <div className="inbar tap">Ask about this game
        <span className="mic">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
        </span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// m6-2: Or say it
export const M6_2 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="keys" role="img" aria-label="Hold the T key to talk">
      <kbd>T</kbd>
      <span>hold, then talk</span>
    </div>
    {" "}
  </div>
);

// m6-3: Find what was said
export const M6_3 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Listen to this game, then What Ask hears stays on this Mac while this game is open. It's never saved.">{" "}
      <span className="b sm g tap">Listen to this game</span>
      {" "}
      <span className="sm mu">What Ask hears stays on this Mac while this game is open. It's never saved.</span>
      {" "}</div>
    {" "}
  </div>
);

// m6-4: Look closer
export const M6_4 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="mac" role="img" aria-label="Look closer over the whole window: the picture, a solid box on one player, the strip, and the controls">{" "}
      <div className="rn-s">{" "}
        <div className="tb">
          <span className="tl">
            <i></i>
            <i></i>
            <i></i>
          </span>
          RN Video</div>
        {" "}
        <div className="main" style={{ padding: ".8em 1.4em", flex: "1" }}>{" "}
          <div className="nav" style={{ minHeight: "1.6em" }}>
            <span>
              <b>Look closer</b>
              {" "}
              <span className="mn sm mu">P2 12:41.3 · Frame 41 of 600</span>
            </span>
            <span className="l">Done (Esc)</span>
          </div>
          {" "}
          <div className="player" style={{ flex: "1", aspectRatio: "auto" }}>
            <div className="cam">
              <i className="circ"></i>
            </div>
            <i className="box f tap" style={{ left: "44%", top: "40%", width: "5%", height: "24%" }}></i>
            <i className="box" style={{ left: "60%", top: "44%", width: "5%", height: "22%" }}></i>
          </div>
          {" "}
          <div className="lane" style={{ height: "1em" }}>
            <span style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "55%", background: "var(--a-gsoft)", borderRadius: ".5em" }}></span>
          </div>
          {" "}
          <span className="sm mu">Staying on this player. If it moves to someone else, click the right player.</span>
          {" "}
          <div style={{ display: "flex", gap: ".3em", flexWrap: "wrap" }}>
            <span className="b sm g">Previous 10 s ([)</span>
            <span className="b sm g">Play slowly (space)</span>
            <span className="b sm g">Next 10 s (])</span>
            <span className="b sm g">Zoom 2x</span>
            <span className="b sm g">Fit</span>
            <span className="b sm p">This is the moment (M)</span>
            <span className="b sm g">Hold to talk (T)</span>
          </div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// Drawings for the guide's "ask" section, one per step.
// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (9)). Don't edit by hand.

// s8-1: Open Ask
export const S8_1 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="Ask, at half height over the game: What do you want to find in this game? with examples, and the Ask about this game box with a microphone">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>9:30</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="player" style={{ margin: "0 1em" }}>
          <div className="cam">
            <i className="circ"></i>
          </div>
        </div>
        {" "}
        <div className="sheet" style={{ top: "38%", alignContent: "start", gap: ".6em" }}>{" "}
          <div className="grab"></div>
          {" "}
          <div className="nav" style={{ minHeight: "1.6em" }}>
            <b>Ask</b>
            <span className="l">Done</span>
          </div>
          {" "}
          <span className="sm mu">Chat about this game</span>
          {" "}
          <div className="bubble it">What do you want to find in this game?</div>
          {" "}
          <div className="chips">
            <span className="chip">goals in the second</span>
            <span className="chip">blocker saves</span>
            <span className="chip">my untagged marks</span>
            <span className="chip">saves I missed</span>
          </div>
          {" "}
          <div className="inbar tap">Ask about this game
            <span className="mic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
            </span>
          </div>
          {" "}
          <span className="cap">Nothing you type or say here is kept.</span>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s8-2: Ask a question
export const S8_2 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="A question, blocker saves in the second, and the answer: 3 moments, in game order">{" "}
      <div className="chat">{" "}
        <div className="bubble me">blocker saves in the second</div>
        {" "}
        <div className="bubble it">3 moments, in game order.<br />
          <span className="mu sm">Looked for: blocker saves, in P2.</span>
        </div>
        {" "}
        <div className="card rows sm">
          <div className="mom tap">
            <span className="lt" style={{ background: "var(--a-blue)" }}>S</span>
            <span className="mn">P2 · 3:12</span>
            <span></span>
          </div>
          <div className="mom">
            <span className="lt" style={{ background: "var(--a-blue)" }}>S</span>
            <span className="mn">P2 · 8:40</span>
            <span></span>
          </div>
        </div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s8-3: Or say it
export const S8_3 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Holding the microphone: it turns red and says Listening">{" "}
      <div className="inbar">blocker saves in the…
        <span className="mic hold tap" style={{ background: "var(--a-red)", color: "#fff" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
        </span>
      </div>
      {" "}
      <span className="cap" style={{ textAlign: "right" }}>Listening…</span>
      {" "}</div>
    {" "}
  </div>
);

// s8-4: Find what was said
export const S8_4 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Ask hasn't listened to this game's sound yet, with a Listen to this game button">{" "}
      <div className="bubble me">where does someone say "trainer"</div>
      {" "}
      <div className="bubble it">Ask hasn't listened to this game's sound yet.</div>
      {" "}
      <span className="b sm g tap">Listen to this game</span>
      {" "}</div>
    {" "}
  </div>
);

// s8-5: Keep what you find
export const S8_5 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="A heard result with Keep as a mark, Skip and Look closer">{" "}
      <div className="bubble it">Heard "trainer" 3 times, in game order.</div>
      {" "}
      <div style={{ display: "flex", gap: ".35em" }}>
        <span className="b sm p tap" style={{ flex: "1" }}>Keep as a mark</span>
        <span className="b sm g">Skip</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s8-6: Look closer
export const S8_6 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph land" role="img" aria-label="Look closer: the picture with dashed player boxes, a 10-second strip, frame steps, zoom, This is the moment and Done">{" "}
      <div className="rn-s">{" "}
        <div className="bd" style={{ padding: ".6em 3.2em 1.6em", gap: ".5em" }}>{" "}
          <div className="nav" style={{ minHeight: "1.6em" }}>
            <span>
              <b>Look closer</b>
              {" "}
              <span className="mn sm mu">P2 12:41 · Frame 12 of 600</span>
            </span>
            <span className="l">Done</span>
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 13em", gap: "1em", flex: "1", minHeight: "0" }}>{" "}
            <div className="player" style={{ aspectRatio: "auto" }}>
              <div className="cam">
                <i className="circ"></i>
              </div>
              {" "}
              <i className="box" style={{ left: "30%", top: "40%", width: "6%", height: "22%" }}></i>
              <i className="box" style={{ left: "48%", top: "46%", width: "6%", height: "22%" }}></i>
              <i className="box" style={{ left: "62%", top: "38%", width: "6%", height: "22%" }}></i>
            </div>
            {" "}
            <div style={{ display: "grid", gap: ".35em", alignContent: "start" }} className="sm">{" "}
              <div style={{ display: "flex", gap: ".2em" }}>
                <span className="b sm g">‹ 1 s</span>
                <span className="b sm g">‹ 10</span>
                <span className="b sm g tap">‹ 1</span>
                <span className="b sm g">1 ›</span>
                <span className="b sm g">10 ›</span>
              </div>
              {" "}
              <div style={{ display: "flex", gap: ".2em" }}>
                <span className="b sm g">−</span>
                <span className="b sm g" style={{ flex: "1" }}>Zoom 2x</span>
                <span className="b sm g">+</span>
                <span className="b sm g">Fit</span>
              </div>
              {" "}
              <span className="b sm g">Play slowly</span>
              {" "}
              <span className="b sm p">This is the moment</span>
              {" "}
              <span className="b sm g">Hold to talk</span>
              {" "}</div>
            {" "}</div>
          {" "}
          <div className="lane" style={{ height: "1.2em" }}>
            <span style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "30%", background: "var(--a-gsoft)", borderRadius: ".5em" }}></span>
          </div>
          {" "}
          <span className="sm mu">Tap a player to stay on them. Tap anywhere else to centre the zoom there.</span>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s8-7: Follow a player
export const S8_7 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="A player's box drawn solid, and the line Staying on this player. If it moves to someone else, tap the right player.">{" "}
      <div className="player">
        <div className="cam">
          <i className="circ"></i>
        </div>
        <i className="box f tap" style={{ left: "42%", top: "36%", width: "10%", height: "34%" }}></i>
      </div>
      {" "}
      <span className="sm mu">Staying on this player. If it moves to someone else, tap the right player.</span>
      {" "}</div>
    {" "}
  </div>
);

// s8-8: Mark the exact frame
export const S8_8 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="This is the moment, then Marked P2 12:41. It has no tag and is out of the reel. with Undo">{" "}
      <span className="b sm p tap">This is the moment</span>
      {" "}
      <span className="sm mu">Marked P2 12:41. It has no tag and is out of the reel.{" "}
        <span className="gr">Undo</span>
      </span>
      {" "}</div>
    {" "}
  </div>
);

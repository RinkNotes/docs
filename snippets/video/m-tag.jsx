// Drawings for the guide's "m-tag" section, one per step.
// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (9)). Don't edit by hand.

// m4-1: Go through the moments
export const M4_1 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="mac" role="img" aria-label="The Game step: the player, buttons under it, the timeline with lettered moments and its key line, and the picked moment on the right">{" "}
      <div className="rn-s">{" "}
        <div className="tb">
          <span className="tl">
            <i></i>
            <i></i>
            <i></i>
          </span>
          RN Video
          <span style={{ marginLeft: "auto" }} className="stepsbar">
            <i className="on">Game</i>
            <i>Reel</i>
            <i>Export</i>
          </span>
        </div>
        {" "}
        <div className="mwin" style={{ gridTemplateColumns: "1fr 30%" }}>{" "}
          <div className="main">{" "}
            <span className="k">Moments</span>
            {" "}
            <div className="player" style={{ maxHeight: "42%" }}>
              <div className="cam">
                <i className="circ"></i>
              </div>
              <div className="pc">
                <span className="mn">P2 · 12:41</span>
              </div>
            </div>
            {" "}
            <div style={{ display: "flex", gap: ".3em", flexWrap: "wrap" }}>
              <span className="b sm g">Previous (↑)</span>
              <span className="b sm g">Next (↓)</span>
              <span className="b sm g">Look closer (L)</span>
              <span className="b sm g">New moment here (N)</span>
            </div>
            {" "}
            <div className="lane">
              <span className="ph-label">P1</span>
              <i className="rn-s" style={{ left: "20%" }}>S</i>
              <i className="g" style={{ left: "45%" }}>G</i>
              <i className="o pmark" style={{ left: "62%" }}>O</i>
              <i className="rn-s" style={{ left: "78%" }}>S</i>
              <span className="soft" style={{ left: "50%", width: "14%" }}></span>
            </div>
            {" "}
            <div className="lane">
              <span className="ph-label">P2</span>
              <i className="rn-s" style={{ left: "30%" }}>S</i>
              <i className="a" style={{ left: "55%" }}>A</i>
              <i className="m" style={{ left: "80%" }}>M</i>
            </div>
            {" "}
            <span className="sm mu">On the timeline: S save · G goal for · A goal against · O other · M mark not tagged yet. A purple person on a letter is a player moment.</span>
            {" "}</div>
          {" "}
          <div className="side" style={{ borderRight: "0", borderLeft: "1px solid var(--a-border)", gap: ".4em" }}>{" "}
            <b>Picked moment</b>
            <span className="mn sm mu">P2 · 12:41</span>
            {" "}
            <span className="h">What happened</span>
            {" "}
            <div className="chips">
              <span className="chip on">Save (S)</span>
              <span className="chip">Goal for (G)</span>
              <span className="chip">Goal against (A)</span>
              <span className="chip">Other</span>
            </div>
            {" "}
            <span className="h">Save type</span>
            {" "}
            <div className="chips">
              <span className="chip">1 Glove</span>
              <span className="chip on">2 Blocker</span>
              <span className="chip">3 Stick</span>
              <span className="chip">4 Pad</span>
            </div>
            {" "}
            <div className="rw" style={{ padding: "0" }}>
              <span className="sm">In the reel (X)</span>
              <span className="sw"></span>
            </div>
            {" "}
            <div className="rw" style={{ padding: "0" }}>
              <span className="sm">Slow motion (R)</span>
              <span className="sw off"></span>
            </div>
            {" "}
            <div className="rw" style={{ padding: "0" }}>
              <span className="sm">Player moment (P)</span>
              <span className="sw off"></span>
            </div>
            {" "}</div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// m4-2: Say what happened
export const M4_2 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="keys" role="img" aria-label="The keys S, G and A, then 1 to 8">
      <kbd>S</kbd>
      <kbd>G</kbd>
      <kbd>A</kbd>
      <span>then</span>
      <kbd>1</kbd>
      …
      <kbd>8</kbd>
    </div>
    {" "}
  </div>
);

// m4-3: More keys
export const M4_3 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="keys" role="img" aria-label="The keys H, I, O, X, R and N">
      <kbd>H</kbd>
      <kbd>I</kbd>
      <kbd>O</kbd>
      <kbd>X</kbd>
      <kbd>R</kbd>
      <kbd>N</kbd>
    </div>
    {" "}
  </div>
);

// m4-4: Whose saves
export const M4_4 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="5 saves have no side yet, with All to Home and All to Away">{" "}
      <span className="sm">5 saves have no side yet.</span>
      {" "}
      <div className="side-btns">
        <span className="b sm g tap">All to Home</span>
        <span className="b sm g">All to Away</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// m4-5: A moment for one player
export const M4_5 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Player moment (P) turned on, and the Number field with 17 and Add, under it a recent number, plus #9">{" "}
      <div className="rw" style={{ padding: "0" }}>
        <span className="sm">
          <span style={{ color: "var(--a-purple)" }}>●</span>
          {" "}Player moment (P)</span>
        <span className="sw"></span>
      </div>
      {" "}
      <span className="k">Number</span>
      {" "}
      <div className="side-btns">
        <div className="fbox mn" style={{ flex: "2" }}>17</div>
        <span className="b sm p tap">Add</span>
      </div>
      {" "}
      <div className="chips">
        <span className="num add">
          <b>+</b>
          {" "}#9</span>
      </div>
      {" "}
      <span className="cap">Type a number and press Return. Esc leaves the field.</span>
      {" "}</div>
    {" "}
  </div>
);

// m4-6: Show one player
export const M4_6 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Filters over the timeline: All, Player moments, #17 and #9">{" "}
      <div className="chips">
        <span className="chip">All</span>
        <span className="chip">Player moments</span>
        <span className="chip on tap">#17</span>
        <span className="chip">#9</span>
      </div>
      {" "}
      <div className="lane">
        <i className="rn-s" style={{ left: "20%", opacity: ".3" }}>S</i>
        <i className="o pmark" style={{ left: "50%" }}>O</i>
        <i className="g" style={{ left: "78%", opacity: ".3" }}>G</i>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// m4-7: Soft or upside down
export const M4_7 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Mostly out of focus: 80 % of this moment. Press X to leave it out. And Turn 180°">{" "}
      <span className="am sm">Mostly out of focus: 80 % of this moment. Press X to leave it out.</span>
      {" "}
      <span className="b sm g tap">Turn 180°</span>
      {" "}</div>
    {" "}
  </div>
);

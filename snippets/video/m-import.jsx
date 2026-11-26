// Drawings for the guide's "m-import" section, one per step.
// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (9)). Don't edit by hand.

// m3-1: Pick the video
export const M3_1 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Import, a menu with From Finder and From Photos">{" "}
      <span className="b sm g tap" style={{ justifySelf: "start" }}>Import…</span>
      {" "}
      <div className="card rows sm">
        <div className="rw">
          <span>From Finder…</span>
        </div>
        <div className="rw">
          <span>From Photos…</span>
        </div>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// m3-2: Game or moments?
export const M3_2 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="mac" role="img" aria-label="Game or moments? Two cards, Game and Moments, then Your team, The other team and Rink or place, each optional, the space line, and Import">{" "}
      <div className="rn-s">{" "}
        <div className="tb">
          <span className="tl">
            <i></i>
            <i></i>
            <i></i>
          </span>
          RN Video</div>
        {" "}
        <div className="main" style={{ padding: "1em 3em", gap: ".6em" }}>{" "}
          <span className="k">Import</span>
          {" "}
          <div className="t2">Game or moments?</div>
          {" "}
          <div style={{ display: "flex", gap: ".6em" }}>
            <div className="mode" style={{ flex: "1" }}>
              <b>Game</b>
              <span>A whole game: one long file, or clips you put in periods.</span>
            </div>
            <div className="mode on tap" style={{ flex: "1" }}>
              <b>Moments</b>
              <span>Each video of 5 minutes or less is a moment. No periods.</span>
            </div>
          </div>
          {" "}
          <span className="sm">12 videos · 41:08 of video · 3.1 GB · Nov 1</span>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: ".4em .8em", alignItems: "center" }} className="sm">
            <span>Your team (optional)</span>
            <div className="fbox">Northside Owls</div>
            <span>The other team (optional)</span>
            <div className="fbox">Harbour Gulls</div>
            <span>Rink or place (optional)</span>
            <div className="fbox ph">Maple Arena</div>
          </div>
          {" "}
          <span className="cap">RN Video copies the videos into its own folder. The originals stay where they are.</span>
          {" "}
          <div style={{ display: "flex", gap: ".5em", justifyContent: "flex-end" }}>
            <span className="b sm g">Cancel</span>
            <span className="b sm p">Import</span>
          </div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// m3-3: A game in clips: say where periods start
export const M3_3 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="The periods for a folder of clips: Clip 12 of 55, with P2 starts here, P3 starts here, OT starts here and One period">{" "}
      <b>The periods</b>
      {" "}
      <span className="sm mu">Pick the first clip of each period.</span>
      {" "}
      <span className="sm mn">Clip 12 of 55 · P1 · 0:08</span>
      {" "}
      <div className="chips">
        <span className="chip on tap">P2 starts here (2)</span>
        <span className="chip">P3 starts here (3)</span>
        <span className="chip">OT starts here</span>
        <span className="chip">One period</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// m3-4: One long file: find the breaks
export const M3_4 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Periods for one long file: Suggest the breaks, Use the suggested periods, Save the periods">{" "}
      <span className="k">Periods</span>
      {" "}
      <span className="gr sm tap">Suggest the breaks</span>
      {" "}
      <span className="sm mu">Suggested from the ice: 2 breaks, 3 periods.</span>
      {" "}
      <span className="b sm g">Use the suggested periods</span>
      {" "}
      <span className="b sm p">Save the periods</span>
      {" "}</div>
    {" "}
  </div>
);

// m3-5: Add more moments
export const M3_5 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Add videos, beside Moments, in a Moments session">{" "}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="k">Moments</span>
        <span className="b sm g tap">+ Add videos…</span>
      </div>
      {" "}
      <span className="sm mu">They go after the last moment in Moments vs Harbour Gulls.</span>
      {" "}</div>
    {" "}
  </div>
);

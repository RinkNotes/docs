// Drawings for the guide's "m-arrive" section, one per step.
// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (9)). Don't edit by hand.

// m2-1: Drop the game in
export const M2_1 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="mac" role="img" aria-label="A game that just arrived: Arrived from iPhone, the check's lines with green ticks, Check again, Show in Finder and Delete from this Mac">{" "}
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
          <span className="b sm g" style={{ marginLeft: "1em" }}>Add a game…</span>
          <span className="b sm g">Import…</span>
        </div>
        {" "}
        <div className="mwin">{" "}
          <div className="side">{" "}
            <span className="h">Library</span>
            {" "}
            <div className="it on">
              <b>Northside Owls vs Harbour Gulls</b>
              <small>Sun 2 Nov · Maple Arena</small>
              <small>Checked · 21.4 GB</small>
            </div>
            {" "}
            <div className="foot">
              <span className="mn">1 game · 21.4 GB</span>
            </div>
            {" "}</div>
          {" "}
          <div className="main">{" "}
            <span className="k">Arrived from iPhone · Sun 2 Nov, 10:42</span>
            {" "}
            <div className="t2">Northside Owls vs Harbour Gulls</div>
            {" "}
            <span className="sm mu">Sun 2 Nov 2026 · Maple Arena · 21.4 GB</span>
            {" "}
            <div className="card rows sm">{" "}
              <div className="rw">
                <span>
                  <span className="gr">✓</span>
                  {" "}15 clips, every file matches its checksum</span>
              </div>
              {" "}
              <div className="rw">
                <span>
                  <span className="gr">✓</span>
                  {" "}No frames missing where one clip hands over to the next</span>
              </div>
              {" "}
              <div className="rw">
                <span>
                  <span className="gr">✓</span>
                  {" "}Every clip upright, from the phone's motion log</span>
              </div>
              {" "}
              <div className="rw">
                <span>
                  <span className="gr">✓</span>
                  {" "}64 marks in 3 periods</span>
              </div>
              {" "}</div>
            {" "}
            <span className="sm mu">Checked Sun 2 Nov, 10:42 ·{" "}
              <span className="gr">Check again</span>
            </span>
            {" "}
            <div style={{ display: "flex", gap: ".5em" }}>
              <span className="b sm g">Show in Finder</span>
              <span className="b sm g">Delete from this Mac…</span>
            </div>
            {" "}</div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// m2-2: Read the check
export const M2_2 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="The check's lines with green ticks, an amber line, and Check again">{" "}
      <span className="sm">
        <span className="gr">✓</span>
        {" "}15 clips, every file matches its checksum</span>
      {" "}
      <span className="sm">
        <span className="gr">✓</span>
        {" "}64 marks in 3 periods</span>
      {" "}
      <span className="sm am">⚠ C003 and C004 were saved at the wrong angle. The reels play them upright, from the motion log.</span>
      {" "}
      <span className="sm mu">Checked Sun 2 Nov, 10:42 ·{" "}
        <span className="gr tap">Check again</span>
      </span>
      {" "}</div>
    {" "}
  </div>
);

// m2-3: Check an older game
export const M2_3 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="This game hasn't been checked on this Mac yet, with Check it">{" "}
      <span className="sm mu">This game hasn't been checked on this Mac yet.</span>
      {" "}
      <span className="b sm g tap">Check it</span>
      {" "}</div>
    {" "}
  </div>
);

// m2-4: A coach's lesson
export const M2_4 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="A goalie lesson in the sidebar: Goalie #30, Northside Goalie School, Maple Arena">{" "}
      <div className="side" style={{ border: "1px solid var(--a-border)", borderRadius: ".6em" }}>
        <div className="it on">
          <b>Goalie #30 · Northside Goalie School · Maple Arena</b>
          <small>Sun 16 Nov</small>
          <small>Checked · 15.1 GB</small>
        </div>
      </div>
      {" "}</div>
    {" "}
  </div>
);

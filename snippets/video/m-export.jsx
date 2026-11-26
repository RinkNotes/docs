// Drawings for the guide's "m-export" section, one per step.
// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (9)). Don't edit by hand.

// m8-1: Make the reel
export const M8_1 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="mac" role="img" aria-label="The Export step: the 16:9 and 9:16 cards, the frame rate, the file name, the folder, and Export game reel">{" "}
      <div className="rn-s">{" "}
        <div className="tb">
          <span className="tl">
            <i></i>
            <i></i>
            <i></i>
          </span>
          RN Video
          <span style={{ marginLeft: "auto" }} className="stepsbar">
            <i>Game</i>
            <i>Reel</i>
            <i className="on">Export</i>
          </span>
        </div>
        {" "}
        <div className="main" style={{ padding: "1em 2em" }}>{" "}
          <div className="t2">Export the game reel</div>
          {" "}
          <div style={{ display: "flex", gap: ".6em" }}>
            <div className="mode on" style={{ flex: "1" }}>
              <b>16:9 · 1920×1080</b>
              <span>YouTube, a TV, a laptop.</span>
            </div>
            <div className="mode" style={{ flex: "1" }}>
              <b>9:16 · 1080×1920</b>
              <span>Reels, Shorts and TikTok. The frame follows the play.</span>
            </div>
          </div>
          {" "}
          <span className="sm mu">Frame rate</span>
          {" "}
          <div className="seg" style={{ maxWidth: "14em" }}>
            <i className="on">60 fps</i>
            <i>30 fps</i>
          </div>
          {" "}
          <div className="fbox mn sm">2026-11-02_HarbourGulls_game-reel.mp4</div>
          {" "}
          <span className="sm mu">Saves in Movies ·{" "}
            <span className="gr">Change folder…</span>
          </span>
          {" "}
          <span className="b p tap" style={{ maxWidth: "16em" }}>Export game reel…</span>
          {" "}
          <span className="k" style={{ marginTop: ".6em" }}>Share with the team's families</span>
          {" "}
          <div style={{ display: "flex", gap: ".5em" }}>
            <span className="b sm g">Export the highlight pack…</span>
            <span className="b sm g">1080p copy…</span>
            <span className="b sm g">Original quality…</span>
          </div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// m8-2: Every moment as its own clip
export const M8_2 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Export the highlight pack, then Saved the highlight pack in the game's highlights folder">{" "}
      <span className="b sm g tap">Export the highlight pack…</span>
      {" "}
      <span className="sm mu">Saved the highlight pack in 2026-11-02_maple-arena/highlights</span>
      {" "}</div>
    {" "}
  </div>
);

// m8-3: The whole game in one video
export const M8_3 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="The full game: Original quality and 1080p copy">{" "}
      <b>The full game</b>
      {" "}
      <span className="sm mu">Every clip joined in order.</span>
      {" "}
      <div className="side-btns">
        <span className="b sm g">Original quality…</span>
        <span className="b sm g tap">1080p copy…</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

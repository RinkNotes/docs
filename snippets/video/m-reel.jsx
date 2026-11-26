// Drawings for the guide's "m-reel" section, one per step.
// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (9)). Don't edit by hand.

// m7-1: Pick the reel and its moments
export const M7_1 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="mac" role="img" aria-label="The Reel step: Game reel and Goalie reel, the moments table with In and Slow motion, and Reel settings">{" "}
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
            <i className="on">Reel</i>
            <i>Export</i>
          </span>
        </div>
        {" "}
        <div className="mwin" style={{ gridTemplateColumns: "1fr 34%" }}>{" "}
          <div className="main">{" "}
            <div style={{ display: "flex", gap: ".6em" }}>
              <div className="mode on" style={{ flex: "1" }}>
                <b>Game reel</b>
                <span>The game's moments in order, with the score.</span>
              </div>
              <div className="mode" style={{ flex: "1" }}>
                <b>Goalie reel</b>
                <span>Saves by type, each replayed slower.</span>
              </div>
            </div>
            {" "}
            <div className="card rows sm">{" "}
              <div className="rw mu">
                <span>In · When · What</span>
                <span>Slow motion</span>
              </div>
              {" "}
              <div className="rw">
                <span>☑{" "}
                  <span className="mn">P1 2:10</span>
                  {" "}Home · Glove save</span>
                <span>Half speed</span>
              </div>
              {" "}
              <div className="rw">
                <span>☑{" "}
                  <span className="mn">P1 9:05</span>
                  {" "}Goal for</span>
                <span>Half speed</span>
              </div>
              {" "}
              <div className="rw">
                <span>☐{" "}
                  <span className="mn">P2 7:42</span>
                  {" "}Mark</span>
                <span>Off</span>
              </div>
              {" "}</div>
            {" "}
            <span className="sm mu">9 of 12 in the reel · about 2:40</span>
            {" "}</div>
          {" "}
          <div className="side" style={{ borderRight: "0", borderLeft: "1px solid var(--a-border)", gap: ".4em" }}>{" "}
            <b>Reel settings</b>
            {" "}
            <span className="h">Replays</span>
            {" "}
            <div className="rw" style={{ padding: "0" }}>
              <span className="sm">Zoom replays: saves on the goalie, goals on the whole shot</span>
              <span className="sw"></span>
            </div>
            {" "}
            <span className="h">Sound</span>
            {" "}
            <div className="seg">
              <i>Original</i>
              <i>Off</i>
              <i className="on">Remove nearby voices</i>
            </div>
            {" "}</div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// m7-2: Zoom the replays
export const M7_2 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="The Zoom replays switch, turned on">{" "}
      <span className="k">Replays</span>
      {" "}
      <div className="rw" style={{ padding: "0" }}>
        <span className="sm">Zoom replays: saves on the goalie, goals on the whole shot</span>
        <span className="tap" style={{ display: "inline-flex", borderRadius: "1em" }}>
          <span className="sw"></span>
        </span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// m7-3: Take out talking near you
export const M7_3 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Sound: Original, Off, Remove nearby voices">{" "}
      <span className="k">Sound</span>
      {" "}
      <div className="seg">
        <i>Original</i>
        <i>Off</i>
        <i className="on tap">Remove nearby voices</i>
      </div>
      {" "}</div>
    {" "}
  </div>
);

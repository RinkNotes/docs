// Drawings for the guide's "m-window" section, one per step.
// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (9)). Don't edit by hand.

// m1-1: Pick a game
export const M1_1 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="mac" role="img" aria-label="The RN Video window with nothing picked: Library, Choose a game in the sidebar, and Or drop videos on this window to import them">{" "}
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
            <div className="it tap">
              <b>Northside Owls vs Harbour Gulls</b>
              <small>Sun 2 Nov · Maple Arena</small>
              <small>Checked · 21.4 GB</small>
            </div>
            {" "}
            <div className="it">
              <b>Moments vs Harbour Gulls</b>
              <small>Sat 1 Nov · Maple Arena</small>
              <small>Imported · 3.1 GB</small>
            </div>
            {" "}
            <div className="foot">
              <span className="gr">+ Add a game…</span>
              <br />
              <span className="gr">Import…</span>
              <br />
              <span className="mn">2 games · 24.5 GB</span>
            </div>
            {" "}</div>
          {" "}
          <div className="main">{" "}
            <div className="t2">Library</div>
            {" "}
            <div className="cardp sm">
              <span>Choose a game in the sidebar.</span>
            </div>
            {" "}
            <span className="sm mu">Or drop videos on this window to import them.</span>
            {" "}</div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// m1-2: The three steps
export const M1_2 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Game, Reel and Export at the top of the window">{" "}
      <div className="stepsbar" style={{ justifyContent: "center" }}>
        <i className="on tap">Game</i>
        <i>Reel</i>
        <i>Export</i>
      </div>
      {" "}
      <span className="cap" style={{ textAlign: "center" }}>Tag moments · pick them · make the video</span>
      {" "}</div>
    {" "}
  </div>
);

// m1-3: How it learned hockey
export const M1_3 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="mac" style={{ aspectRatio: "16/8" }} role="img" aria-label="The RN Video menu with About RN Video, then Acknowledgements">{" "}
      <div className="rn-s">{" "}
        <div className="tb" style={{ background: "#21262d" }}>
          <b>RN Video</b>
          <span className="mu" style={{ fontWeight: "500" }}>File · Edit · View · Window</span>
        </div>
        {" "}
        <div className="menu" style={{ left: "1em", top: "2.8em" }}>
          <span>About RN Video</span>
          <span className="on">Acknowledgements</span>
          <hr />
          <span>Quit RN Video{" "}
            <small>⌘Q</small>
          </span>
        </div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

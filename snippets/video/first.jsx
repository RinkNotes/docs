// Drawings for the guide's "first" section, one per step.
// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (9)). Don't edit by hand.

// s1-1: Pick how to record
export const S1_1 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="The Library with the four cards: Moments, Game, Skills with a lock, and Stream, then Import videos">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>6:40</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="bd" style={{ gap: ".6em" }}>{" "}
          <div>
            <div className="k">RN Video</div>
            <div className="big">Library</div>
          </div>
          {" "}
          <div className="k">Record</div>
          {" "}
          <div className="mode">
            <b>Moments</b>
            <span>Record single moments of a player or a game. Stop when it's over.</span>
          </div>
          {" "}
          <div className="mode on tap">
            <b>Game{" "}
              <span className="pill g">Last used</span>
            </b>
            <span>Record a whole game, period by period, with marks.</span>
          </div>
          {" "}
          <div className="mode">
            <b>
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
              Skills</b>
            <span>For coaches. Enter your coach code to start.</span>
          </div>
          {" "}
          <div className="mode">
            <b>Stream</b>
            <span>Stream a game live to YouTube or Facebook while it records.</span>
          </div>
          {" "}
          <div className="b sm g" style={{ justifyContent: "flex-start" }}>Import videos</div>
          {" "}
          <p className="cap">Nothing here yet. Games and sessions you record, or send here from another device, show up here.</p>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s1-2: A short notice
export const S1_2 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="The notice: You're about to record, with a Start recording button">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>6:41</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="dim"></div>
        {" "}
        <div className="sheet" style={{ top: "18%", alignContent: "start", gap: "1em" }}>{" "}
          <div className="grab"></div>
          {" "}
          <div style={{ display: "grid", placeItems: "center", marginTop: "1em" }}>
            <svg style={{ width: "3em", height: "3em", color: "var(--a-gb)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></svg>
          </div>
          {" "}
          <div className="t2" style={{ textAlign: "center" }}>You're about to record</div>
          {" "}
          <p className="mu" style={{ textAlign: "center" }}>RN Video records video and sound with this iPhone's camera.</p>
          {" "}
          <p className="mu" style={{ textAlign: "center" }}>Your videos stay on this iPhone until you send them to your Mac or share them.</p>
          {" "}
          <div className="b p tap" style={{ marginTop: "2em" }}>Start recording</div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s1-3: Videos you already have
export const S1_3 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Import videos, with a menu: From Photos and From Files">{" "}
      <span className="b sm g tap" style={{ justifyContent: "flex-start" }}>Import videos</span>
      {" "}
      <div className="card rows sm">
        <div className="rw">
          <span>From Photos</span>
        </div>
        <div className="rw">
          <span>From Files</span>
        </div>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s1-4: How it learned hockey
export const S1_4 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="Acknowledgements: How the app learned to see hockey">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>6:43</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="bd" style={{ gap: ".9em" }}>{" "}
          <div className="nav">
            <span className="l">‹ Library</span>
            <span className="c">Acknowledgements</span>
            <span></span>
          </div>
          {" "}
          <div className="k">RN Video</div>
          {" "}
          <div className="t2">How the app learned to see hockey</div>
          {" "}
          <p className="mu sm">RN Video can find the goalies, skaters, referees and nets in your video. First it had to learn what they look like. This is how it learned.</p>
          {" "}
          <b>It started with a helper</b>
          {" "}
          <b>Then it learned hockey</b>
          {" "}
          <b>Where the pictures came from</b>
          {" "}
          <b>No family's video taught it</b>
          {" "}
          <b>It doesn't know who anyone is</b>
          {" "}
          <b>It works on your device</b>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

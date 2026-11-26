// Drawings for the guide's "send" section, one per step.
// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (9)). Don't edit by hand.

// s9-1: Open the game's details
export const S9_1 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="The top of a game's moments: Undo, Details and Reel">{" "}
      <div style={{ display: "flex", gap: ".4em" }}>
        <span className="b sm g">Undo</span>
        <span className="b sm g tap">Details</span>
        <span className="b sm gs" style={{ marginLeft: "auto" }}>Reel ›</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s9-2: Send it by AirDrop
export const S9_2 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="Send to Mac: AirDrop, Cable and iCloud Drive, each with a short line">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>9:40</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="bd" style={{ gap: ".7em" }}>{" "}
          <div className="nav">
            <span className="l">Cancel</span>
            <span className="c">Send to Mac</span>
            <span></span>
          </div>
          {" "}
          <span className="sm mu">The game goes as one package: 15 clips, the marks and the logs, 21.4 GB. The Mac checks every file when it arrives.</span>
          {" "}
          <div className="cardp">
            <b>AirDrop</b>
            <span className="sm mu">The fastest way. Keep the Mac nearby and awake, and this screen open until it finishes.</span>
            <span className="b sm p tap">AirDrop to a Mac…</span>
          </div>
          {" "}
          <div className="cardp">
            <b>Cable</b>
            <span className="sm mu">Plug the iPhone into the Mac. In Finder, choose the iPhone, then Files › RN Video, and drag the game onto RN Video on the Mac.</span>
          </div>
          {" "}
          <div className="cardp">
            <b>iCloud Drive</b>
            <span className="sm mu">Save it to Files › iCloud Drive, then open it on the Mac. Needs 21.4 GB free in your iCloud.</span>
            <span className="b sm g">Save to Files…</span>
          </div>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s9-3: Or use a cable
export const S9_3 = () => (
  <div className="rn-shot not-prose">
    <span className="ill">Picture</span>
    {" "}
    <div className="hw" role="img" aria-label="A cable from the iPhone to the Mac, then Finder, the iPhone, Files, RN Video">{" "}
      <span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2.4" /><path d="M11 18.5h2" /></svg>
        iPhone</span>
      {" "}
      <span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        Cable</span>
      {" "}
      <span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="5" width="16" height="11" rx="1.5" /><path d="M2 19h20" /></svg>
        Finder › Files › RN Video</span>
      {" "}</div>
    {" "}
  </div>
);

// s9-4: Or use iCloud Drive
export const S9_4 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="iCloud Drive: Save it to Files, iCloud Drive, with a Save to Files button">{" "}
      <b>iCloud Drive</b>
      {" "}
      <span className="sm mu">Save it to Files › iCloud Drive, then open it on the Mac.</span>
      {" "}
      <span className="b sm g tap">Save to Files…</span>
      {" "}</div>
    {" "}
  </div>
);

// s9-5: Free up space
export const S9_5 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="Delete this game from the phone? with Delete 15 clips and Keep it">{" "}
      <div className="rn-s">{" "}
        <div className="dim"></div>
        {" "}
        <div className="alert">{" "}
          <div className="at">
            <b>Delete this game from the phone?</b>
            <span>It was sent by AirDrop on Sun, Nov 2, 2026 · 9:40 PM. Check it arrived on your Mac first. This frees 21.4 GB and can't be undone.</span>
          </div>
          {" "}
          <div className="ab">
            <span className="x tap">Delete 15 clips</span>
            <span>Keep it</span>
          </div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

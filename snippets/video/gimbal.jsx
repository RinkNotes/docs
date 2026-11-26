// Drawings for the guide's "gimbal" section, one per step.
// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (9)). Don't edit by hand.

// s6-1: Phone in first
export const S6_1 = () => (
  <div className="rn-shot not-prose">
    <span className="ill">Picture</span>
    {" "}
    <div className="hw" role="img" aria-label="The phone goes in the gimbal first, then the gimbal is turned on">{" "}
      <span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2.4" /><path d="M11 18.5h2" /></svg>
        1. Phone in</span>
      {" "}
      <span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="7" y="3" width="10" height="6" rx="1.5" /><path d="M12 9v4M8 13h8v3H8zM12 16v5M8 21h8" /></svg>
        2. Gimbal on</span>
      {" "}</div>
    {" "}
  </div>
);

// s6-2: Do the setup once
export const S6_2 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="Gimbal setup: the status, Test the gimbal, and the steps to do once">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>6:50</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="bd" style={{ gap: ".7em" }}>{" "}
          <div className="nav">
            <span></span>
            <span className="c">Gimbal setup</span>
            <span className="l">Done</span>
          </div>
          {" "}
          <div className="cardp">
            <span className="gr sm">Connected and answering · 80 %</span>
            <span className="b sm g tap">Test the gimbal</span>
          </div>
          {" "}
          <span className="k">Once, on this iPhone</span>
          {" "}
          <div className="cardp sm">
            <span>1 Stop the Insta360 app taking the gimbal.</span>
            <span>2 Turn off its notifications.</span>
            <span>3 Pair the gimbal once.</span>
          </div>
          {" "}
          <span className="k">Each game</span>
          {" "}
          <div className="cardp sm">
            <span>Put your phone in, or turn it, with the gimbal switched off. Then turn the gimbal on: it connects by itself.</span>
          </div>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s6-3: Follow the play
export const S6_3 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="The gimbal panel: Gimbal connected, 80 %, with Follow the play and Hold, Set the rink's ends and Wait for the faceoff">{" "}
      <span className="sm gr">Gimbal connected · 80 %</span>
      {" "}
      <div className="seg">
        <i className="on tap">Follow the play</i>
        <i>Hold</i>
      </div>
      {" "}
      <span className="b sm g">Set the rink's ends</span>
      {" "}
      <span className="sm mu">☑ Wait for the faceoff</span>
      {" "}</div>
    {" "}
  </div>
);

// s6-4: Set the ends of the rink
export const S6_4 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph land" role="img" aria-label="Set the rink's ends: a green line in the picture, arrows at the sides, Left end here, Right end here and Done">{" "}
      <div className="rn-s">{" "}
        <div className="cam">
          <i className="circ"></i>
        </div>
        {" "}
        <div style={{ position: "absolute", left: "30%", top: "19%", bottom: "0", width: ".3em", background: "#3fb950", zIndex: "2" }}></div>
        {" "}
        <span className="arrowb tap" style={{ left: "2.6em" }}>‹</span>
        <span className="arrowb" style={{ right: "2.6em" }}>›</span>
        {" "}
        <div className="ov">
          <div className="strip">
            <b>Set the rink's ends</b>
            <span className="mu sm">Ends 85° apart</span>
          </div>
          {" "}
          <div style={{ marginTop: "auto", display: "flex", gap: ".6em", justifyContent: "center", padding: "1em 1em 1.8em" }}>
            <span className="b sm ctrl">Left end here</span>
            <span className="b sm ctrl">Right end here</span>
            <span className="b sm ctrl p">Done</span>
          </div>
        </div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s6-5: It waits for the faceoff
export const S6_5 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="The gimbal chip says Waiting for the faceoff, with a Puck dropped button">{" "}
      <span className="pill a">Waiting for the faceoff</span>
      {" "}
      <span className="b sm g tap">Puck dropped</span>
      {" "}</div>
    {" "}
  </div>
);

// s6-6: Help it turn
export const S6_6 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph land" role="img" aria-label="Recording while following: a Following chip, and arrows at the left and right edges">{" "}
      <div className="rn-s">{" "}
        <div className="cam">
          <i className="circ"></i>
        </div>
        {" "}
        <span className="arrowb hold tap" style={{ left: "2.6em" }}>‹</span>
        <span className="arrowb" style={{ right: "2.6em" }}>›</span>
        {" "}
        <div className="ov">
          <div className="strip">
            <span className="recdot"></span>
            <span className="rd">REC</span>
            <span>P1 · Clip 2</span>
            <span className="pill g">Following</span>
          </div>
        </div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s6-7: Hold it still for a bit
export const S6_7 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Hold to stop following, pressed, and then HOLDING in amber in the top strip">{" "}
      <span className="b sm g hold tap">Hold to stop following</span>
      {" "}
      <div className="sbar">
        <span className="recdot"></span>
        <span className="rd">REC</span>
        <span className="am" style={{ fontWeight: "700" }}>HOLDING</span>
        <span>P1</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s6-8: Follow again
export const S6_8 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Hold to follow, pressed">{" "}
      <span className="b sm g hold tap">Hold to follow</span>
      {" "}
      <span className="cap" style={{ textAlign: "center" }}>While you hold: Keep holding…</span>
      {" "}</div>
    {" "}
  </div>
);

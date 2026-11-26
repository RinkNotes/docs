// Drawings for the guide's "record" section, one per step.
// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (9)). Don't edit by hand.

// s2-1: Name the rink
export const S2_1 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="The New game sheet: Rink, team names, Hold the phone, Lens and Focus, with Ready at the top">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>6:45</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="bd" style={{ gap: ".65em" }}>{" "}
          <div className="nav">
            <span className="l">Cancel</span>
            <span className="c">New game</span>
            <span className="l tap" style={{ fontWeight: "600" }}>Ready</span>
          </div>
          {" "}
          <div className="fld">
            <span className="k">Rink</span>
            <div className="fbox">Maple Arena</div>
          </div>
          {" "}
          <div className="fld">
            <span className="k">Our team (optional)</span>
            <div className="fbox">Northside Owls</div>
          </div>
          {" "}
          <div className="fld">
            <span className="k">Opponent (optional)</span>
            <div className="fbox">Harbour Gulls</div>
          </div>
          {" "}
          <div className="fld">
            <span className="k">Hold the phone</span>
            <div className="seg">
              <i className="on">Landscape</i>
              <i>Portrait</i>
            </div>
          </div>
          {" "}
          <div className="fld">
            <span className="k">Lens</span>
            <div className="seg">
              <i>1x</i>
              <i className="on">2x</i>
              <i>Telephoto</i>
            </div>
          </div>
          {" "}
          <div className="fld">
            <span className="k">Focus</span>
            <div className="seg">
              <i className="on">Locked on the ice</i>
              <i>Auto</i>
            </div>
          </div>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s2-2: Pick which way to hold it
export const S2_2 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Hold the phone: Landscape picked, Portrait beside it">{" "}
      <span className="k">Hold the phone</span>
      {" "}
      <div className="seg">
        <i className="on tap">Landscape</i>
        <i>Portrait</i>
      </div>
      {" "}
      <span className="cap">Landscape keeps the whole play. Portrait follows one skater.</span>
      {" "}</div>
    {" "}
  </div>
);

// s2-3: Pick a lens
export const S2_3 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Lens: 1x, 2x picked, and Telephoto">{" "}
      <span className="k">Lens</span>
      {" "}
      <div className="seg">
        <i>1x</i>
        <i className="on tap">2x</i>
        <i>Telephoto</i>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s2-4: Keep focus locked
export const S2_4 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Focus: Locked on the ice picked, Auto beside it">{" "}
      <span className="k">Focus</span>
      {" "}
      <div className="seg">
        <i className="on tap">Locked on the ice</i>
        <i>Auto</i>
      </div>
      {" "}
      <span className="cap">Focuses once on the ice, then holds, so it never hunts. Refocus is one tap away.</span>
      {" "}</div>
    {" "}
  </div>
);

// s2-5: Get ready
export const S2_5 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="The top of the New game sheet, with Ready at the right">{" "}
      <div className="nav">
        <span className="l">Cancel</span>
        <span className="c">New game</span>
        <span className="l tap" style={{ fontWeight: "600" }}>Ready</span>
      </div>
      {" "}
      <span className="cap">Lens, holding and focus are remembered for Maple Arena next time.</span>
      {" "}</div>
    {" "}
  </div>
);

// s2-6: Let it use the camera
export const S2_6 = () => (
  <div className="rn-shot not-prose">
    <span className="ill">Picture</span>
    {" "}
    <div className="alert" style={{ position: "static", transform: "none", width: "250px" }} role="img" aria-label="iOS asks if RN Video may use the camera, with Allow">{" "}
      <div className="at">
        <b>"RN Video" Would Like to Access the Camera</b>
        <span>Video records your games with the camera. The video stays on this device unless you stream it or send it.</span>
      </div>
      {" "}
      <div className="ab">
        <span>Don't Allow</span>
        <span className="tap">Allow</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s2-7: Aim at the ice
export const S2_7 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph land" role="img" aria-label="The Ready screen: the rink in the camera, Focus locked with Refocus, Start warm-up and a big Start P1">{" "}
      <div className="rn-s">{" "}
        <div className="cam">
          <i className="circ"></i>
        </div>
        {" "}
        <div className="ov">{" "}
          <div className="strip">
            <span>‹ Home</span>
            <span style={{ marginLeft: "auto" }} className="mu">Maple Arena · vs Harbour Gulls · 2x · Landscape · Change</span>
          </div>
          {" "}
          <div className="ready">{" "}
            <div></div>
            {" "}
            <div className="pn">{" "}
              <span className="am sm">Turn on Do Not Disturb before the game.</span>
              {" "}
              <span className="sm mu">Storage for about 3 h 10 min · battery for about 2 h 20 min</span>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: ".5em" }}>
                <span className="sm">Focus locked</span>
                <span className="b sm ctrl tap" style={{ marginLeft: "auto" }}>Refocus</span>
              </div>
              {" "}
              <span className="b sm ctrl">Start warm-up</span>
              {" "}
              <span className="b p">Start P1</span>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s2-8: Stop calls and alerts
export const S2_8 = () => (
  <div className="rn-shot not-prose">
    <span className="ill">Picture</span>
    {" "}
    <div className="frag" role="img" aria-label="The Focus button in Control Centre, with Do Not Disturb">{" "}
      <div className="b g tap" style={{ justifyContent: "flex-start" }}>
        <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" /></svg>
        Do Not Disturb</div>
      {" "}</div>
    {" "}
  </div>
);

// s2-9: Record the warm-up (if you like)
export const S2_9 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Start warm-up and Start P1 on the Ready screen">{" "}
      <span className="b g tap">Start warm-up</span>
      {" "}
      <span className="b p">Start P1</span>
      {" "}</div>
    {" "}
  </div>
);

// s2-10: Mark the big moments
export const S2_10 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph land" role="img" aria-label="Recording P1: REC in the top strip, Pause, Hold to refocus and Hold to end P1 on the left, the score, saves, goals and a big MARK on the right">{" "}
      <div className="rn-s">{" "}
        <div className="cam">
          <i className="circ"></i>
        </div>
        {" "}
        <div className="ov">{" "}
          <div className="strip">
            <span className="recdot"></span>
            <span className="rd">REC</span>
            <span>P1 · Clip 3 · 12 marks</span>
            <span style={{ marginLeft: "auto" }} className="mu">1 h 40 min left · 82% · Cool</span>
          </div>
          {" "}
          <div className="recl">{" "}
            <div className="lft">
              <span className="b sm ctrl">Pause</span>
              <span className="b sm ctrl">Hold to refocus</span>
              <span className="b sm ctrl">Hold to end P1</span>
            </div>
            {" "}
            <div className="rgt">{" "}
              <span className="score" style={{ justifySelf: "end" }}>NOR{" "}
                <span className="mn">1</span>
                {" "}–{" "}
                <span className="mn">0</span>
                {" "}HAR{" "}
                <span className="pen">✎</span>
              </span>
              {" "}
              <div className="side-btns">
                <span className="b sm ctrl">Home save</span>
                <span className="b sm ctrl">Away save</span>
              </div>
              {" "}
              <div className="side-btns">
                <span className="b sm ctrl">Goal for</span>
                <span className="b sm ctrl">Goal against</span>
              </div>
              {" "}
              <div className="markbtn tap" style={{ borderRadius: "50%" }}>MARK
                <small>12</small>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s2-11: Saves
export const S2_11 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Home save and Away save">{" "}
      <div className="side-btns">
        <span className="b sm g tap">Home save</span>
        <span className="b sm g">Away save</span>
      </div>
      {" "}
      <span className="cap">A save is also a mark.</span>
      {" "}</div>
    {" "}
  </div>
);

// s2-12: Goals keep the score
export const S2_12 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Goal for and Goal against, and the score NOR 1 – 0 HAR with a pencil">{" "}
      <div className="side-btns">
        <span className="b sm g tap">Goal for</span>
        <span className="b sm g">Goal against</span>
      </div>
      {" "}
      <span className="score" style={{ justifySelf: "center" }}>NOR{" "}
        <span className="mn">1</span>
        {" "}–{" "}
        <span className="mn">0</span>
        {" "}HAR{" "}
        <span className="pen">✎</span>
      </span>
      {" "}</div>
    {" "}
  </div>
);

// s2-13: Tapped a goal by mistake?
export const S2_13 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="A note for 5 seconds: Goal for, NOR 1–0 HAR, with Undo">{" "}
      <div className="sbar" style={{ justifyContent: "space-between" }}>
        <span>Goal for · NOR 1–0 HAR</span>
        <span className="gr tap" style={{ fontWeight: "700" }}>Undo</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s2-14: Fix the score
export const S2_14 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="Fix the score: minus and plus for each team, Changes the score only. Your Goal marks stay as they are., and Done">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>7:31</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="dim"></div>
        {" "}
        <div className="sheet" style={{ top: "30%", alignContent: "start", gap: ".9em" }}>{" "}
          <div className="grab"></div>
          {" "}
          <div className="nav" style={{ justifyContent: "center" }}>
            <b>Fix the score</b>
          </div>
          {" "}
          <div className="rw card">
            <span>Northside Owls</span>
            <span style={{ display: "flex", gap: ".6em", alignItems: "center" }}>
              <span className="b sm g">−</span>
              <b className="mn">2</b>
              <span className="b sm g tap">+</span>
            </span>
          </div>
          {" "}
          <div className="rw card">
            <span>Harbour Gulls</span>
            <span style={{ display: "flex", gap: ".6em", alignItems: "center" }}>
              <span className="b sm g">−</span>
              <b className="mn">1</b>
              <span className="b sm g">+</span>
            </span>
          </div>
          {" "}
          <span className="sm mu">Changes the score only. Your Goal marks stay as they are.</span>
          {" "}
          <span className="b p">Done</span>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s2-15: Mark without looking
export const S2_15 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="hw" role="img" aria-label="Other ways to mark: a volume button, Camera Control, an AirPods stem, and the gimbal's button">{" "}
      <span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2.4" /><path d="M11 18.5h2" /></svg>
        Volume button</span>
      {" "}
      <span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></svg>
        Camera Control</span>
      {" "}
      <span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
        AirPods stem</span>
      {" "}
      <span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="7" y="3" width="10" height="6" rx="1.5" /><path d="M12 9v4M8 13h8v3H8zM12 16v5M8 21h8" /></svg>
        Gimbal button</span>
      {" "}</div>
    {" "}
  </div>
);

// s2-16: New clips start by themselves
export const S2_16 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph land" role="img" aria-label="A note at the top: Clip 4 started">{" "}
      <div className="rn-s">{" "}
        <div className="cam">
          <i className="circ"></i>
        </div>
        {" "}
        <div className="ov">
          <div className="strip">
            <span className="recdot"></span>
            <span className="rd">REC</span>
            <span>P1 · Clip 4 · 14 marks</span>
          </div>
        </div>
        {" "}
        <div className="toast" style={{ top: "22%", left: "30%", right: "30%", textAlign: "center" }}>Clip 4 started</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s2-17: The screen goes dim
export const S2_17 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph land" role="img" aria-label="The screen dimmed: Dimmed to save battery. Tap to brighten. Mark still works.">{" "}
      <div className="rn-s" style={{ background: "#05070a" }}>{" "}
        <div className="cam" style={{ opacity: ".25" }}>
          <i className="circ"></i>
        </div>
        {" "}
        <div className="toast" style={{ top: "40%", left: "18%", right: "18%", textAlign: "center", background: "#21262d", color: "#e6edf3" }}>Dimmed to save battery. Tap to brighten. Mark still works.</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s2-18: Fix soft focus
export const S2_18 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Hold to refocus, shown as Keep holding while pressed">{" "}
      <span className="b sm g hold tap">Hold to refocus</span>
      {" "}
      <span className="cap" style={{ textAlign: "center" }}>While you hold: Keep holding…</span>
      {" "}</div>
    {" "}
  </div>
);

// s2-19: Pause and go on
export const S2_19 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph land" role="img" aria-label="Paused: PAUSED in amber, Paused. Tap Resume to keep recording., a big Resume P1 and Hold to end P1">{" "}
      <div className="rn-s">{" "}
        <div className="cam">
          <i className="circ"></i>
        </div>
        {" "}
        <div className="ov">{" "}
          <div className="strip">
            <span className="am">PAUSED</span>
            <span>P1 · Clip 5</span>
          </div>
          {" "}
          <div className="recl">{" "}
            <div className="lft">
              <span className="b sm ctrl">Hold to end P1</span>
            </div>
            {" "}
            <div className="rgt">
              <span className="b p tall tap">Resume P1</span>
            </div>
            {" "}</div>
          {" "}</div>
        {" "}
        <div className="toast" style={{ top: "22%", left: "22%", right: "22%", textAlign: "center" }}>Paused. Tap Resume to keep recording.</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s2-20: End the period
export const S2_20 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Hold to end P1, pressed: Keep holding">{" "}
      <span className="b sm g hold tap">Keep holding…</span>
      {" "}
      <span className="cap" style={{ textAlign: "center" }}>Hold to end P1</span>
      {" "}</div>
    {" "}
  </div>
);

// s2-21: Start the next period
export const S2_21 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph land" role="img" aria-label="Between periods: READY, P1 ended, 12 marks so far, the score, with Start P2, Review marks and Game over">{" "}
      <div className="rn-s">{" "}
        <div className="cam">
          <i className="circ"></i>
        </div>
        {" "}
        <div className="ov">{" "}
          <div className="strip">
            <span>READY · P1</span>
            <span className="mu">12 marks so far</span>
            <span className="score" style={{ marginLeft: "auto" }}>NOR{" "}
              <span className="mn">1</span>
              {" "}–{" "}
              <span className="mn">0</span>
              {" "}HAR{" "}
              <span className="pen">✎</span>
            </span>
          </div>
          {" "}
          <div className="recl">{" "}
            <div className="lft">
              <span className="b sm ctrl">Review marks</span>
              <span className="b sm ctrl">Game over</span>
            </div>
            {" "}
            <div className="rgt">
              <span className="b p tall tap">Start P2</span>
            </div>
            {" "}</div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s2-22: End the game
export const S2_22 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="Is the game over? Final score: NOR 3–2 HAR. With Yes, the game is over, Fix the score first, and No, not yet">{" "}
      <div className="rn-s">{" "}
        <div className="cam" style={{ opacity: ".6" }}></div>
        {" "}
        <div className="dim"></div>
        {" "}
        <div className="alert">{" "}
          <div className="at">
            <b>Is the game over?</b>
            <span>Final score: NOR 3–2 HAR.</span>
          </div>
          {" "}
          <div className="ab">
            <span className="tap">Yes, the game is over</span>
            <span>Fix the score first</span>
            <span>No, not yet</span>
          </div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s2-23: Left the app at a break?
export const S2_23 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="A game card in the Library with a Continue button">{" "}
      <div className="gcard">
        <span className="k">Maple Arena</span>
        <b>Northside Owls vs Harbour Gulls</b>
        <span className="sm">1 period · 4 clips · 9 marks</span>
      </div>
      {" "}
      <span className="b sm p tap">Continue</span>
      {" "}</div>
    {" "}
  </div>
);

// Drawings for the guide's "skills" section, one per step.
// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (9)). Don't edit by hand.

// s5-1: Enter your code
export const S5_1 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="The coach code sheet: Enter your coach code, a box for XXXX-XXXX-XXXX, Unlock, and Scan the QR code">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>4:10</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="bd" style={{ gap: ".75em" }}>{" "}
          <div className="nav">
            <span className="l">Cancel</span>
            <span className="c">Coach code</span>
            <span></span>
          </div>
          {" "}
          <div className="k">Skills</div>
          {" "}
          <div className="t2">Enter your coach code</div>
          {" "}
          <p className="mu sm">A coach code comes from RinkNotes. It unlocks Skills for your academy on this iPhone.</p>
          {" "}
          <div className="fbox mn tap" style={{ textAlign: "center", letterSpacing: ".1em" }}>XXXX-XXXX-XXXX</div>
          {" "}
          <span className="b p">Unlock</span>
          {" "}
          <span className="b g">Scan the QR code</span>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s5-2: Your academy's page
export const S5_2 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="The academy page: Skills, Northside Goalie School, Goalie skills. Where do you teach? with Add a location, and Remove coach code">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>4:11</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="bd" style={{ gap: ".75em" }}>{" "}
          <div className="nav">
            <span className="l">‹ Library</span>
            <span></span>
            <span></span>
          </div>
          {" "}
          <div>
            <div className="k">Skills</div>
            <div className="t2">Northside Goalie School</div>
            <span className="mu sm">Goalie skills</span>
          </div>
          {" "}
          <div className="cardp">
            <b>Where do you teach?</b>
            <span className="sm mu">Add each place you teach, like a rink or a training pad. Each one keeps its own camera setup.</span>
            <span className="b p tap">Add a location</span>
          </div>
          {" "}
          <span className="rd sm" style={{ marginTop: "auto" }}>Remove coach code</span>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s5-3: Name the place
export const S5_3 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Add a location: Location name, Maple Arena, Places on this iPhone, and Add">{" "}
      <div className="nav">
        <span className="l">Cancel</span>
        <span className="c">Add a location</span>
        <span className="l tap" style={{ fontWeight: "600" }}>Add</span>
      </div>
      {" "}
      <span className="k">Location name</span>
      {" "}
      <div className="fbox">Maple Arena</div>
      {" "}
      <span className="cap">Its lens, holding and focus are remembered for next time.</span>
      {" "}
      <span className="k">Places on this iPhone</span>
      {" "}
      <span className="sm">
        <span className="gr">+</span>
        {" "}Maple Arena</span>
      {" "}</div>
    {" "}
  </div>
);

// s5-4: Pick the place
export const S5_4 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Start a session: Tap where you're teaching today. A Maple Arena card with Last used, and a menu button">{" "}
      <span className="k">Start a session</span>
      {" "}
      <span className="sm mu">Tap where you're teaching today.</span>
      {" "}
      <div className="rw card tap">
        <span>
          <b>Maple Arena</b>
          {" "}
          <span className="pill g">Last used</span>
          <br />
          <span className="mu sm">Last session Sun, Nov 16</span>
        </span>
        <span className="mu">⋯</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s5-5: Type the goalie's number
export const S5_5 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="New session: Location Maple Arena, Goalie number 30, A number only, never a name, Drills planned in order: T-push, Shuffle, and Add a drill">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>4:20</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="bd" style={{ gap: ".6em" }}>{" "}
          <div className="nav">
            <span className="l">Cancel</span>
            <span className="c">New session</span>
            <span className="l" style={{ fontWeight: "600" }}>Ready</span>
          </div>
          {" "}
          <div className="fld">
            <span className="k">Location</span>
            <div className="fbox">Maple Arena</div>
          </div>
          {" "}
          <div className="fld">
            <span className="k">Goalie</span>
            <div className="fbox mn tap">30</div>
            <span className="cap">A number only, never a name.</span>
          </div>
          {" "}
          <div className="fld">
            <span className="k">Drills planned, in order (optional)</span>
            {" "}
            <div className="card rows sm">
              <div className="rw">
                <span>
                  <span className="mu mn">1</span>
                  {" "}T-push</span>
                <span className="mu">⊖</span>
              </div>
              <div className="rw">
                <span>
                  <span className="mu mn">2</span>
                  {" "}Shuffle</span>
                <span className="mu">⊖</span>
              </div>
              <div className="rw gr">
                <span>⊕ Add a drill</span>
              </div>
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
            <span className="cap mn">4K · 60 fps</span>
          </div>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s5-6: Plan the drills (if you like)
export const S5_6 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Add a drill: a list of drills, T-push, Shuffle, Butterfly slide, Post play (RVH), Recovery, and more">{" "}
      <span className="k">Add a drill</span>
      {" "}
      <div className="card rows sm">
        <div className="rw tap">
          <span>T-push</span>
        </div>
        <div className="rw">
          <span>Shuffle</span>
        </div>
        <div className="rw">
          <span>Butterfly slide</span>
        </div>
        <div className="rw">
          <span>Post play (RVH)</span>
        </div>
        <div className="rw">
          <span>Recovery</span>
        </div>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s5-7: Start the lesson
export const S5_7 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph land" role="img" aria-label="The Ready screen of a session: Maple Arena, Goalie #30, First drill: T-push, and a big Start recording">{" "}
      <div className="rn-s">{" "}
        <div className="cam">
          <i className="circ"></i>
        </div>
        {" "}
        <div className="ov">{" "}
          <div className="strip">
            <span>‹ Home</span>
            <span style={{ marginLeft: "auto" }} className="mu">Maple Arena · Goalie #30 · 2x · Landscape · Change</span>
          </div>
          {" "}
          <div className="ready">{" "}
            <div></div>
            {" "}
            <div className="pn">{" "}
              <div style={{ display: "flex", alignItems: "center", gap: ".5em" }}>
                <span className="sm">Focus locked</span>
                <span className="b sm ctrl" style={{ marginLeft: "auto" }}>Refocus</span>
              </div>
              {" "}
              <span className="sm">First drill: T-push</span>
              {" "}
              <span className="b p tap">Start recording</span>
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

// s5-8: Go drill by drill
export const S5_8 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph land" role="img" aria-label="Recording a session: REC, T-push, the clock, Now: T-push, Next drill: Shuffle, MARK, Pause and Hold to end session">{" "}
      <div className="rn-s">{" "}
        <div className="cam">
          <i className="circ"></i>
        </div>
        {" "}
        <div className="ov">{" "}
          <div className="strip">
            <span className="recdot"></span>
            <span className="rd">REC</span>
            <span>T-push ·{" "}
              <span className="mn">4:12</span>
              {" "}· Clip 1 · 3 marks</span>
          </div>
          {" "}
          <div style={{ padding: ".6em 3.4em 0", display: "flex", justifyContent: "space-between" }}>
            <span className="sbar">
              <b>Now: T-push</b>
            </span>
            <span className="b sm ctrl">Hold to refocus</span>
          </div>
          {" "}
          <div className="recl">{" "}
            <div className="lft">
              <span className="b sm ctrl">Pause</span>
              <span className="b sm ctrl">Hold to end session</span>
            </div>
            {" "}
            <div className="rgt">{" "}
              <span className="b ctrl tap">Next drill: Shuffle ›</span>
              {" "}
              <div className="markbtn" style={{ width: "5em", height: "5em" }}>MARK
                <small>3</small>
              </div>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s5-9: End the session
export const S5_9 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Hold to end session, then Session over: 3 drills, 6 clips, 14 marks, with Done">{" "}
      <span className="b sm g hold tap">Hold to end session</span>
      {" "}
      <b>Session over · 3 drills · 6 clips · 14 marks</b>
      {" "}
      <span className="b sm p">Done</span>
      {" "}</div>
    {" "}
  </div>
);

// s5-10: Look at the session
export const S5_10 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="The session's moments, titled Goalie #30: each moment reads by its drill, like T-push · 0:12">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>5:30</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="bd" style={{ gap: ".55em", paddingInline: "1em" }}>{" "}
          <div className="nav">
            <span className="l">‹ Library</span>
            <span className="c">Goalie #30</span>
            <span></span>
          </div>
          {" "}
          <div style={{ display: "flex", gap: ".4em" }}>
            <span className="b sm g">Undo</span>
            <span className="b sm g">Details</span>
            <span className="b sm gs" style={{ marginLeft: "auto" }}>Reel ›</span>
          </div>
          {" "}
          <div className="player">
            <div className="cam">
              <i className="circ"></i>
            </div>
            <div className="pc">
              <span className="mn">T-push 0:12</span>
            </div>
          </div>
          {" "}
          <div className="lane-name">T-push</div>
          <div className="lane">
            <i className="m" style={{ left: "40%" }}>M</i>
            <i className="m" style={{ left: "70%" }}>M</i>
          </div>
          {" "}
          <div className="lane-name">Shuffle</div>
          <div className="lane">
            <i className="m" style={{ left: "52%" }}>M</i>
          </div>
          {" "}
          <div className="card rows sm">{" "}
            <div className="mom tap">
              <span className="lt" style={{ background: "var(--a-muted)" }}>M</span>
              <span>
                <b className="mn">T-push · 0:12</b>
                <br />
                <span className="mu">Mark</span>
              </span>
              <span></span>
            </div>
            {" "}
            <div className="mom">
              <span className="lt" style={{ background: "var(--a-muted)" }}>M</span>
              <span>
                <b className="mn">Shuffle · 1:05</b>
                <br />
                <span className="mu">Mark</span>
              </span>
              <span></span>
            </div>
            {" "}</div>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s5-11: Send it to the Mac
export const S5_11 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Send to Mac for a session: The session goes as one package, with AirDrop to a Mac">{" "}
      <b>Send to Mac</b>
      {" "}
      <span className="sm mu">The session goes as one package: 6 clips, the marks and the logs, 15.1 GB.</span>
      {" "}
      <span className="b sm p tap">AirDrop to a Mac…</span>
      {" "}</div>
    {" "}
  </div>
);

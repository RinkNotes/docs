// Drawings for the guide's "moments" section, one per step.
// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (9)). Don't edit by hand.

// s4-1: Pick Moments
export const S4_1 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="The Moments card in the Library">{" "}
      <div className="mode tap">
        <b>Moments</b>
        <span>Record single moments of a player or a game. Stop when it's over.</span>
      </div>
      {" "}
      <div className="mode on">
        <b>Game</b>
        <span>Record a whole game, period by period, with marks.</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s4-2: Name the place, if you like
export const S4_2 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="The New moments sheet: Rink or place, optional, with New place and Ready">{" "}
      <div className="nav">
        <span className="l">Cancel</span>
        <span className="c">New moments</span>
        <span className="l tap" style={{ fontWeight: "600" }}>Ready</span>
      </div>
      {" "}
      <span className="k">Rink or place (optional)</span>
      {" "}
      <div className="fbox">Maple Arena</div>
      {" "}
      <span className="gr sm">New place</span>
      {" "}
      <span className="cap">With no place, the camera uses the settings you used last.</span>
      {" "}</div>
    {" "}
  </div>
);

// s4-3: Record a moment
export const S4_3 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph land" role="img" aria-label="Moments ready: 2 moments so far, a big Record button and Finish">{" "}
      <div className="rn-s">{" "}
        <div className="cam">
          <i className="circ"></i>
        </div>
        {" "}
        <div className="ov">{" "}
          <div className="strip">
            <span>‹ Home</span>
            <span className="mu">2 moments so far</span>
          </div>
          {" "}
          <div className="recl">{" "}
            <div className="lft">
              <span className="b sm ctrl">Finish</span>
            </div>
            {" "}
            <div className="rgt">
              <span className="b r tall tap">
                <span className="dot"></span>
                Record</span>
            </div>
            {" "}</div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s4-4: Stop when it's over
export const S4_4 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph land" role="img" aria-label="Recording a moment: REC Moments, Moment 3, 0:42 of 5:00, a big red Stop and MARK">{" "}
      <div className="rn-s">{" "}
        <div className="cam">
          <i className="circ"></i>
        </div>
        {" "}
        <div className="ov">{" "}
          <div className="strip">
            <span className="recdot"></span>
            <span className="rd">REC</span>
            <span>Moments · Moment 3 ·{" "}
              <span className="mn">0:42 of 5:00</span>
            </span>
          </div>
          {" "}
          <div className="recl">{" "}
            <div className="lft">
              <span className="b sm ctrl">Hold to refocus</span>
            </div>
            {" "}
            <div className="rgt">
              <div className="markbtn" style={{ width: "5em", height: "5em" }}>MARK</div>
              <span className="b r tap">Stop</span>
            </div>
            {" "}</div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s4-5: Say what it was
export const S4_5 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Moment 3, 0:42. What was it? with Player moment, Save, Goal, Other and Skip">{" "}
      <b>Moment 3 · 0:42. What was it?</b>
      {" "}
      <div className="chips">
        <span className="chip">Player moment</span>
        <span className="chip on tap">Save</span>
        <span className="chip">Goal</span>
        <span className="chip">Other</span>
        <span className="chip">Skip</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s4-6: Finish
export const S4_6 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="Finished recording moments here? with Yes, finish and Not yet">{" "}
      <div className="rn-s">{" "}
        <div className="cam" style={{ opacity: ".6" }}></div>
        {" "}
        <div className="dim"></div>
        {" "}
        <div className="alert">{" "}
          <div className="at">
            <b>Finished recording moments here?</b>
          </div>
          {" "}
          <div className="ab">
            <span className="tap">Yes, finish</span>
            <span>Not yet</span>
          </div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s4-7: Pick your videos
export const S4_7 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Import videos under the cards in the Library, with From Photos and From Files">{" "}
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

// s4-8: Bring them in
export const S4_8 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="The Import videos sheet: Our team, Opponent and Rink or place, each optional, the line about copies, and Import">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>8:02</b>
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
            <span className="c">Import videos</span>
            <span></span>
          </div>
          {" "}
          <span className="sm">
            <b>12 videos · needs 3.1 GB</b>
            <br />
            <span className="mu mn">Sat, Nov 1</span>
          </span>
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
            <span className="k">Rink or place (optional)</span>
            <div className="fbox ph">Rink or place name</div>
          </div>
          {" "}
          <span className="cap">RN Video copies the videos into its own folder. The originals stay where they are.</span>
          {" "}
          <span className="b p tap" style={{ marginTop: "auto" }}>Import</span>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s4-9: Wait for the copy
export const S4_9 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Importing 4 of 12, a progress bar, and Keep RN Video open until it's done. The screen stays on.">{" "}
      <b>Importing 4 of 12…</b>
      {" "}
      <div style={{ height: ".5em", borderRadius: "1em", background: "var(--a-border2)" }}>
        <div style={{ height: "100%", width: "33%", borderRadius: "1em", background: "var(--a-gb)" }}></div>
      </div>
      {" "}
      <span className="sm mu">Keep RN Video open until it's done. The screen stays on.</span>
      {" "}</div>
    {" "}
  </div>
);

// s4-10: Add more later
export const S4_10 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="In a Moments session: Moments, Suggestions and Ask, with Add videos under them">{" "}
      <div className="seg">
        <i className="on">Moments</i>
        <i>Suggestions</i>
        <i>Ask</i>
      </div>
      {" "}
      <span className="b sm g tap" style={{ justifyContent: "flex-start" }}>+ Add videos</span>
      {" "}</div>
    {" "}
  </div>
);

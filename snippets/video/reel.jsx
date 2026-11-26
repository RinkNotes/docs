// Drawings for the guide's "reel" section, one per step.
// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (9)). Don't edit by hand.

// s7-1: Open the game
export const S7_1 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="The game's moments: Undo, Details and Reel at the top, the player, buttons, the timeline with lettered marks, the tabs and the moment list">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>9:15</b>
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
            <span className="c">Owls vs Gulls</span>
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
              <svg className="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
              <span className="mn">P2 12:41</span>
            </div>
          </div>
          {" "}
          <div style={{ display: "flex", gap: ".3em" }}>
            <span className="b sm g" style={{ flex: "1" }}>‹ Previous</span>
            <span className="b sm g" style={{ flex: "1" }}>Look closer</span>
            <span className="b sm g" style={{ flex: "1" }}>Next ›</span>
          </div>
          {" "}
          <div className="lane">
            <span className="ph-label">P1</span>
            <i className="rn-s" style={{ left: "22%" }}>S</i>
            <i className="m" style={{ left: "40%" }}>M</i>
            <i className="g" style={{ left: "58%" }}>G</i>
            <i className="rn-s" style={{ left: "80%" }}>S</i>
            <span className="soft" style={{ left: "62%", width: "14%" }}></span>
          </div>
          {" "}
          <div className="lane">
            <span className="ph-label">P2</span>
            <i className="rn-s" style={{ left: "30%" }}>S</i>
            <i className="a" style={{ left: "52%" }}>A</i>
            <i className="rn-s" style={{ left: "70%" }}>S</i>
            <i className="o pmark" style={{ left: "88%" }}>O</i>
          </div>
          {" "}
          <div className="seg">
            <i className="on">Moments</i>
            <i>Suggestions 8</i>
            <i>Ask</i>
          </div>
          {" "}
          <span className="sm mu">8 moments · 7 in the reel · about 1:50 long</span>
          {" "}
          <div className="card rows sm">{" "}
            <div className="mom tap">
              <span className="lt" style={{ background: "var(--a-blue)" }}>S</span>
              <span>
                <b className="mn">P1 · 2:10</b>
                <br />
                <span className="mu">Glove save</span>
              </span>
              <span className="pill">Slow</span>
            </div>
            {" "}
            <div className="mom">
              <span className="lt" style={{ background: "var(--a-muted)" }}>M</span>
              <span>
                <b className="mn">P1 · 7:42</b>
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

// s7-2: Say what happened
export const S7_2 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="The picked moment sheet: What happened, Whose save, Save type, The moment, In the reel and Slow motion">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>9:16</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="player" style={{ margin: "0 1em", borderRadius: ".7em" }}>
          <div className="cam">
            <i className="circ"></i>
          </div>
        </div>
        {" "}
        <div className="sheet" style={{ top: "30%", alignContent: "start", gap: ".55em" }}>{" "}
          <div className="grab"></div>
          {" "}
          <div className="nav" style={{ minHeight: "1.6em" }}>
            <b>Picked moment</b>
            <span className="l">Done</span>
          </div>
          {" "}
          <span className="mn sm mu">P1 · 2:10</span>
          {" "}
          <span className="k">What happened</span>
          {" "}
          <div className="chips">
            <span className="chip on tap">Save ✓</span>
            <span className="chip">Goal for</span>
            <span className="chip">Goal against</span>
            <span className="chip">Other</span>
          </div>
          {" "}
          <span className="k">Whose save</span>
          {" "}
          <div className="chips">
            <span className="chip on">Home ✓</span>
            <span className="chip">Away</span>
          </div>
          {" "}
          <span className="k">Save type</span>
          {" "}
          <div className="chips">
            <span className="chip on">Glove ✓</span>
            <span className="chip">Blocker</span>
            <span className="chip">Stick</span>
            <span className="chip">Pad</span>
            <span className="chip">Body</span>
            <span className="chip">Diving</span>
            <span className="chip">Mask</span>
            <span className="chip">Movement</span>
          </div>
          {" "}
          <span className="k">The moment</span>
          {" "}
          <span className="sm mn">2:06 to 2:14 · 8 s</span>
          {" "}
          <div style={{ display: "flex", gap: ".35em" }}>
            <span className="b sm g" style={{ flex: "1" }}>Start here</span>
            <span className="b sm g" style={{ flex: "1" }}>End here</span>
            <span className="b sm g" style={{ flex: "1" }}>Look closer</span>
          </div>
          {" "}
          <div className="rw" style={{ padding: "0" }}>
            <span>In the reel</span>
            <span className="sw"></span>
          </div>
          {" "}
          <div className="rw" style={{ padding: "0" }}>
            <span>Slow motion</span>
            <span className="sw"></span>
          </div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s7-3: Add the save type
export const S7_3 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Whose save: Home and Away. Save type: Glove, Blocker, Stick, Pad, Body, Diving, Mask, Movement">{" "}
      <span className="k">Whose save</span>
      {" "}
      <div className="chips">
        <span className="chip on">Home ✓</span>
        <span className="chip">Away</span>
      </div>
      {" "}
      <span className="k">Save type</span>
      {" "}
      <div className="chips">
        <span className="chip on tap">Glove ✓</span>
        <span className="chip">Blocker</span>
        <span className="chip">Stick</span>
        <span className="chip">Pad</span>
        <span className="chip">Body</span>
        <span className="chip">Diving</span>
        <span className="chip">Mask</span>
        <span className="chip">Movement</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s7-4: All the saves at once
export const S7_4 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="5 saves have no side yet, with All to Home and All to Away">{" "}
      <span className="sm">5 saves have no side yet.</span>
      {" "}
      <div className="side-btns">
        <span className="b sm g tap">All to Home</span>
        <span className="b sm g">All to Away</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s7-5: Trim a moment
export const S7_5 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="The moment: 2:06 to 2:14, 8 s, with Start here and End here">{" "}
      <span className="k">The moment</span>
      {" "}
      <span className="mn">2:06 to 2:14 · 8 s</span>
      {" "}
      <div className="side-btns">
        <span className="b sm g tap">Start here</span>
        <span className="b sm g">End here</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s7-6: Add a moment you missed
export const S7_6 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Start here, End here and New moment here under the player, then Saved: P2 12:41. Tag it below.">{" "}
      <div style={{ display: "flex", gap: ".35em" }}>
        <span className="b sm g" style={{ flex: "1" }}>Start here</span>
        <span className="b sm g" style={{ flex: "1" }}>End here</span>
      </div>
      {" "}
      <span className="b sm g tap">New moment here</span>
      {" "}
      <span className="sm gr">✓ Saved: P2 12:41. Tag it below.</span>
      {" "}</div>
    {" "}
  </div>
);

// s7-7: A moment for one player
export const S7_7 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="The Player moment switch, turned on, with a person beside it">{" "}
      <div className="rw card" style={{ padding: ".5em .8em" }}>
        <span>
          <span style={{ color: "var(--a-purple)" }}>●</span>
          {" "}Player moment</span>
        <span className="sw tap"></span>
      </div>
      {" "}
      <span className="cap">The letter on the timeline gets a purple person.</span>
      {" "}</div>
    {" "}
  </div>
);

// s7-8: Add the player's number
export const S7_8 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="The player's numbers: #17 with an x, Add number, and a recent number, plus #9">{" "}
      <div className="chips">
        <span className="num">#17{" "}
          <span className="mu">×</span>
        </span>
        <span className="num" style={{ borderColor: "var(--a-gline)", background: "var(--a-gsoft)", color: "var(--a-gb)", fontFamily: "var(--sans)" }}>+ Add number</span>
        <span className="num add tap">
          <b>+</b>
          {" "}#9</span>
      </div>
      {" "}
      <span className="k">Number</span>
      {" "}
      <div className="side-btns">
        <div className="fbox mn" style={{ flex: "2" }}>17</div>
        <span className="b sm p">Add</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s7-9: One number for all
export const S7_9 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="3 player moments have no number yet. Give #17 to every player moment with no number">{" "}
      <span className="sm mu">3 player moments have no number yet.</span>
      {" "}
      <span className="b sm g tap" style={{ justifyContent: "flex-start" }}>Give{" "}
        <span className="mn" style={{ color: "var(--a-purple)" }}>#17</span>
        {" "}to every player moment with no number</span>
      {" "}</div>
    {" "}
  </div>
);

// s7-10: Show one player
export const S7_10 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Filters over the list: All, Player moments, #17 and #9">{" "}
      <div className="chips">
        <span className="chip">All</span>
        <span className="chip">Player moments</span>
        <span className="chip on tap">#17</span>
        <span className="chip">#9</span>
      </div>
      {" "}
      <div className="card rows sm">
        <div className="mom">
          <span className="lt pmark" style={{ background: "var(--a-purple)" }}>O</span>
          <span>
            <b className="mn">P1 · 4:31</b>
            <br />
            <span className="mu">#17</span>
          </span>
          <span></span>
        </div>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s7-11: In or out, fast or slow
export const S7_11 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="In the reel switched off, Slow motion switched on">{" "}
      <div className="rw" style={{ padding: "0" }}>
        <span>In the reel</span>
        <span className="tap" style={{ display: "inline-flex", borderRadius: "1em" }}>
          <span className="sw off"></span>
        </span>
      </div>
      {" "}
      <div className="rw" style={{ padding: "0" }}>
        <span>Slow motion</span>
        <span className="sw"></span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s7-12: Soft moments
export const S7_12 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="An amber note: Mostly out of focus: 80 % of this moment. Turn off In the reel to leave it out.">{" "}
      <span className="am sm">Mostly out of focus: 80 % of this moment. Turn off In the reel to leave it out.</span>
      {" "}
      <div className="lane">
        <span className="soft" style={{ left: "20%", width: "60%" }}></span>
        <i className="rn-s" style={{ left: "50%" }}>S</i>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s7-13: Upside down?
export const S7_13 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Turn 180°, then Filmed upside down: turned the right way up, with Undo">{" "}
      <span className="b sm g tap">Turn 180°</span>
      {" "}
      <span className="sm mu">Filmed upside down: turned the right way up.{" "}
        <span className="gr">Undo</span>
      </span>
      {" "}</div>
    {" "}
  </div>
);

// s7-14: Find saves you missed
export const S7_14 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Suggestions: Suggest moments looks through the video for saves and goalie action you didn't mark, with a Suggest moments button">{" "}
      <div className="seg">
        <i>Moments</i>
        <i className="on">Suggestions</i>
        <i>Ask</i>
      </div>
      {" "}
      <span className="sm mu">Suggest moments looks through the video for saves and goalie action you didn't mark. Nothing leaves this iPhone. Plug in first if you can.</span>
      {" "}
      <span className="b sm p tap">Suggest moments</span>
      {" "}</div>
    {" "}
  </div>
);

// s7-15: Keep or skip each one
export const S7_15 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="A suggested moment with Why, Keep as a save, Skip and Look closer">{" "}
      <b>Suggested moment</b>
      <span className="mn sm mu">P2 · 1:44</span>
      {" "}
      <span className="sm mu">Why: goalie down, players at the net, crowd</span>
      {" "}
      <div style={{ display: "flex", gap: ".35em" }}>
        <span className="b sm p tap" style={{ flex: "1" }}>Keep as a save</span>
        <span className="b sm g">Skip</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s7-16: Open the reel
export const S7_16 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="The Reel screen: Game reel and Goalie reel, 9:16 and 16:9, the moments with boxes and Slow motion, Reel settings, and Export the game reel">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>9:20</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="bd" style={{ gap: ".6em" }}>{" "}
          <div className="nav">
            <span className="l">‹ Back</span>
            <span className="c">Reel</span>
            <span></span>
          </div>
          {" "}
          <div className="mode on">
            <b>Game reel</b>
            <span>The game's moments in order, with the score, an opening screen, the celebration and the final score.</span>
          </div>
          {" "}
          <div className="mode">
            <b>Goalie reel</b>
            <span>Saves by type, each replayed slower and framed on the goalie. No score.</span>
          </div>
          {" "}
          <div className="seg">
            <i className="on">9:16</i>
            <i>16:9</i>
          </div>
          {" "}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <b>Moments</b>
            <span className="sm mu">7 of 8 in · about 1:50</span>
          </div>
          {" "}
          <div className="card rows sm">{" "}
            <div className="rw">
              <span>☑{" "}
                <span className="mn">P1 · 2:10</span>
                {" "}Glove save</span>
              <span className="sw"></span>
            </div>
            {" "}
            <div className="rw">
              <span>☑{" "}
                <span className="mn">P1 · 9:05</span>
                {" "}Goal for</span>
              <span className="sw"></span>
            </div>
            {" "}
            <div className="rw">
              <span>☐{" "}
                <span className="mn">P1 · 7:42</span>
                {" "}Mark</span>
              <span className="sw off"></span>
            </div>
            {" "}</div>
          {" "}
          <div className="rw card">
            <span>Reel settings</span>
            <span className="mu sm">Sound, replays ›</span>
          </div>
          {" "}
          <span className="b p tap" style={{ marginTop: "auto" }}>Export the game reel</span>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s7-17: Pick a reel
export const S7_17 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Game reel picked, Goalie reel below">{" "}
      <div className="mode on tap">
        <b>Game reel</b>
        <span>The game's moments in order, with the score, an opening screen, the celebration and the final score.</span>
      </div>
      {" "}
      <div className="mode">
        <b>Goalie reel</b>
        <span>Saves by type, each replayed slower and framed on the goalie. No score.</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s7-18: Tall or wide
export const S7_18 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Shape: 9:16 picked, 16:9 beside it">{" "}
      <div className="seg">
        <i className="on tap">9:16</i>
        <i>16:9</i>
      </div>
      {" "}
      <span className="cap">Reels, Shorts and TikTok. The frame follows the play.</span>
      {" "}</div>
    {" "}
  </div>
);

// s7-19: Pick the moments
export const S7_19 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Moment rows with a box to tick and a Slow motion switch">{" "}
      <div className="rw" style={{ padding: "0" }}>
        <span className="tap">☑</span>
        <span className="mn sm">P1 · 2:10 Glove save</span>
        <span className="sw"></span>
      </div>
      {" "}
      <div className="rw" style={{ padding: "0" }}>
        <span>☐</span>
        <span className="mn sm">P1 · 7:42 Mark</span>
        <span className="sw off"></span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s7-20: Take out talking near you
export const S7_20 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Reel settings, Sound: Original, Off, Remove nearby voices">{" "}
      <b>Reel settings</b>
      {" "}
      <span className="k">Sound</span>
      {" "}
      <div className="seg">
        <i>Original</i>
        <i>Off</i>
        <i className="on tap">Remove nearby voices</i>
      </div>
      {" "}
      <span className="cap">Talking close to the phone is taken out, and the crowd and ice are brought back up. Some may remain. Your clips aren't changed.</span>
      {" "}</div>
    {" "}
  </div>
);

// s7-21: Make it
export const S7_21 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Making the reel: a progress bar, Stop, and Keep RN Video open until it's done. The screen stays on.">{" "}
      <span className="sm">Making the reel…{" "}
        <span className="mn">1:12 of 2:40</span>
      </span>
      {" "}
      <div style={{ height: ".5em", borderRadius: "1em", background: "var(--a-border2)" }}>
        <div style={{ height: "100%", width: "45%", borderRadius: "1em", background: "var(--a-gb)" }}></div>
      </div>
      {" "}
      <span className="sm mu">Keep RN Video open until it's done. The screen stays on.</span>
      {" "}
      <span className="b sm g">Stop</span>
      {" "}</div>
    {" "}
  </div>
);

// s7-22: Save it to Photos
export const S7_22 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="The Share screen: Save to Photos, Share, and Export the highlight pack">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>9:24</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="bd" style={{ gap: ".8em" }}>{" "}
          <div className="nav">
            <span className="l">‹ Reel</span>
            <span className="c">Share</span>
            <span></span>
          </div>
          {" "}
          <b>Game reel · 2:40</b>
          {" "}
          <span className="b p tap">Save to Photos</span>
          {" "}
          <span className="gr sm">✓ Saved to Photos.</span>
          {" "}
          <span className="b g">Share…</span>
          {" "}
          <span className="k" style={{ marginTop: ".8em" }}>Share with the team's families</span>
          {" "}
          <span className="sm mu">The highlight pack is the game reel's moments, each its own clip, and the game reel joined.</span>
          {" "}
          <span className="b g">Export the highlight pack…</span>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s7-23: Send it to someone
export const S7_23 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="The Share button opens the share sheet with AirDrop and Messages">{" "}
      <span className="b sm g tap">
        <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12M8 7l4-4 4 4M6 11H5v10h14V11h-1" /></svg>
        Share…</span>
      {" "}
      <span className="cap" style={{ textAlign: "center" }}>AirDrop · Messages · Mail · Save to Files</span>
      {" "}</div>
    {" "}
  </div>
);

// s7-24: Every moment as its own clip
export const S7_24 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Export the highlight pack, and It goes in Files, as Owls, the game, then highlights">{" "}
      <span className="b sm g tap">Export the highlight pack…</span>
      {" "}
      <span className="cap">It goes in Files, as Owls/2026-11-02_maple-arena/highlights.</span>
      {" "}</div>
    {" "}
  </div>
);

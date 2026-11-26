// Drawings for the guide's "stream" section, one per step.
// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (9)). Don't edit by hand.

// s3-1: Pick Stream
export const S3_1 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="The Stream card in the Library: Stream a game live to YouTube or Facebook while it records">{" "}
      <div className="mode tap">
        <b>Stream</b>
        <span>Stream a game live to YouTube or Facebook while it records.</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s3-2: Name both teams
export const S3_2 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="The New stream sheet: Rink, Teams with On the scoreboard: NOR and HAR. and Change, Where it goes, Stream quality 720p or 1080p, Lens and Focus">{" "}
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
        <div className="bd" style={{ gap: ".6em" }}>{" "}
          <div className="nav">
            <span className="l">Cancel</span>
            <span className="c">New stream</span>
            <span className="mu" style={{ fontWeight: "600" }}>Ready</span>
          </div>
          {" "}
          <div className="fld">
            <span className="k">Rink</span>
            <div className="fbox">Maple Arena</div>
          </div>
          {" "}
          <div className="fld">
            <span className="k">Teams</span>
            <div className="fbox tap">Northside Owls</div>
            <div className="fbox">Harbour Gulls</div>
            <span className="cap">On the scoreboard: NOR and HAR.{" "}
              <span className="gr">Change</span>
            </span>
          </div>
          {" "}
          <div className="rw card">
            <span>Where it goes</span>
            <span className="am sm">Choose</span>
          </div>
          {" "}
          <div className="fld">
            <span className="k">Stream quality</span>
            <div className="seg">
              <i className="on">720p</i>
              <i>1080p</i>
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
          <span className="cap">A stream is wide, so hold the phone in landscape.</span>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s3-3: Say where it goes
export const S3_3 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="Where it goes: Most used, YouTube and Facebook. Other ways, Another stream address. Stream keys are kept on this iPhone only.">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>6:46</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="bd" style={{ gap: ".6em" }}>{" "}
          <div className="nav">
            <span className="l">‹ New stream</span>
            <span className="c">Where it goes</span>
            <span></span>
          </div>
          {" "}
          <span className="sm mu">For Northside Owls. You can change it for any game.</span>
          {" "}
          <span className="k">Most used</span>
          {" "}
          <div className="card rows sm">{" "}
            <div className="rw tap">
              <span>
                <b>YouTube</b>
                <br />
                <span className="mu">Your team's channel. Families watch on YouTube. Free.</span>
              </span>
              <span className="mu">›</span>
            </div>
            {" "}
            <div className="rw">
              <span>
                <b>Facebook</b>
                <br />
                <span className="mu">A page, or a private group where only members watch. Free.</span>
              </span>
              <span className="mu">›</span>
            </div>
            {" "}</div>
          {" "}
          <span className="k">Other ways</span>
          {" "}
          <div className="card rows sm">
            <div className="rw">
              <span>
                <b>Another stream address</b>
                <br />
                <span className="mu">Any service that gives you an address and a stream key. Free.</span>
              </span>
              <span className="mu">›</span>
            </div>
          </div>
          {" "}
          <span className="cap">Stream keys are kept on this iPhone only. RN Video can't see, post on or change your channel, page or group.</span>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s3-4: YouTube: bring the key
export const S3_4 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="Stream to YouTube: three steps. Choose Unlisted. Bring over the stream key with Paste and Save. Send the families YouTube's link.">{" "}
      <div className="rn-s">{" "}
        <div className="sb">
          <b>6:47</b>
          <span className="isl"></span>
          <span className="sbr">
            <i className="sig"></i>
            <i className="bat"></i>
          </span>
        </div>
        {" "}
        <div className="bd" style={{ gap: ".6em" }}>{" "}
          <div className="nav">
            <span className="l">‹ Where it goes</span>
            <span className="c">Stream to YouTube</span>
            <span></span>
          </div>
          {" "}
          <div className="cardp sm">
            <b>1 On YouTube Studio, choose Create, then Go live, then Stream</b>
            <span className="mu">On a computer or in the YouTube app. Choose Unlisted, so only people with the link can watch.</span>
          </div>
          {" "}
          <div className="cardp sm">
            <b>2 Bring over the stream key</b>
            <span className="mu">Stream key</span>
            <div className="fbox ph">Stream key</div>
            <div className="side-btns">
              <span className="b sm g tap">Paste</span>
              <span className="b sm g">Save</span>
            </div>
          </div>
          {" "}
          <div className="cardp sm">
            <b>3 Send the families YouTube's link</b>
            <span className="mu">From Share on YouTube. RN Video doesn't send it for you.</span>
          </div>
          {" "}
          <span className="cap">Don't choose Made for Kids just to turn chat off: turn chat off on YouTube instead.</span>
          {" "}</div>
        {" "}
        <i className="hi"></i>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s3-5: Or Facebook
export const S3_5 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Stream to Facebook: Page or Group, then the server and the stream key">{" "}
      <span className="k">Stream to Facebook</span>
      {" "}
      <div className="seg">
        <i>Page</i>
        <i className="on tap">Group</i>
      </div>
      {" "}
      <span className="sm">1 On Facebook, open the group's live video</span>
      {" "}
      <span className="sm">2 Bring over the server and stream key</span>
      {" "}
      <span className="sm">3 Press Go Live on Facebook</span>
      {" "}</div>
    {" "}
  </div>
);

// s3-6: Or another address
export const S3_6 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Another address: a warning, This address isn't encrypted, for an address that starts with rtmp">{" "}
      <span className="k">Another address</span>
      {" "}
      <div className="fbox mn sm">rtmp://live.example.com/app</div>
      {" "}
      <span className="am sm">⚠ This address isn't encrypted.</span>
      {" "}
      <span className="cap">If the service offers an address that starts with rtmps://, use that.</span>
      {" "}</div>
    {" "}
  </div>
);

// s3-7: Pick the quality
export const S3_7 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Stream quality: 720p picked, 1080p beside it">{" "}
      <span className="k">Stream quality</span>
      {" "}
      <div className="seg">
        <i className="on tap">720p</i>
        <i>1080p</i>
      </div>
      {" "}
      <span className="cap">720p suits most rinks' internet, and uses about 1.6 GB an hour on cellular. The recording on this iPhone stays 4K.</span>
      {" "}</div>
    {" "}
  </div>
);

// s3-8: Get ready
export const S3_8 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="The top of the New stream sheet, with Ready at the right, and Where it goes: YouTube, Key saved">{" "}
      <div className="nav">
        <span className="l">Cancel</span>
        <span className="c">New stream</span>
        <span className="l tap" style={{ fontWeight: "600" }}>Ready</span>
      </div>
      {" "}
      <div className="rw card">
        <span>Where it goes</span>
        <span className="mu sm">YouTube · Key saved</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// s3-9: Go live
export const S3_9 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph land" role="img" aria-label="The Ready screen of a stream: Go live, YouTube 720p, Change, with Start warm-up and a big Start P1">{" "}
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
          <div style={{ padding: ".6em 3.4em 0" }}>
            <div className="sbar">
              <span className="b sm ctrl tap">Go live</span>
              <span className="gr">YouTube 720p · Change</span>
            </div>
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

// s3-10: You're on air
export const S3_10 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph land" role="img" aria-label="Recording and on air: ON AIR, YouTube, sending well, with Stop stream. Below, the score, saves, goals and MARK">{" "}
      <div className="rn-s">{" "}
        <div className="cam">
          <i className="circ"></i>
        </div>
        {" "}
        <div className="ov">{" "}
          <div className="strip">
            <span className="recdot"></span>
            <span className="rd">REC</span>
            <span>P1 · Clip 2 · 4 marks</span>
            <span style={{ marginLeft: "auto" }} className="mu">1 h 40 min left · 76%</span>
          </div>
          {" "}
          <div style={{ padding: ".5em 3.4em 0" }}>
            <div className="sbar">
              <span className="onair">ON AIR</span>
              <span>YouTube · sending well</span>
              <span className="b sm ctrl" style={{ marginLeft: "auto" }}>Stop stream</span>
            </div>
          </div>
          {" "}
          <div className="recl">{" "}
            <div className="lft">
              <span className="b sm ctrl">Pause</span>
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
                <span className="b sm ctrl">Goal for</span>
                <span className="b sm ctrl">Goal against</span>
              </div>
              {" "}
              <div className="markbtn" style={{ width: "5em", height: "5em" }}>MARK</div>
              {" "}</div>
            {" "}</div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s3-11: If the internet drops
export const S3_11 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="RECONNECTING in amber, and the line The stream lost its connection. Trying again. The recording is fine.">{" "}
      <div className="sbar">
        <span className="onair re">RECONNECTING</span>
        <span>YouTube</span>
      </div>
      {" "}
      <span className="am sm">The stream lost its connection. Trying again. The recording is fine.</span>
      {" "}
      <span className="cap">Weak internet: the stream is sending less detail. The recording is fine.</span>
      {" "}</div>
    {" "}
  </div>
);

// s3-12: Stop the stream
export const S3_12 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="Stop the stream? The recording carries on. Viewers see the stream end. With Stop stream and Keep streaming">{" "}
      <div className="rn-s">{" "}
        <div className="cam" style={{ opacity: ".6" }}></div>
        {" "}
        <div className="dim"></div>
        {" "}
        <div className="alert">{" "}
          <div className="at">
            <b>Stop the stream?</b>
            <span>The recording carries on. Viewers see the stream end.</span>
          </div>
          {" "}
          <div className="ab">
            <span className="x tap">Stop stream</span>
            <span>Keep streaming</span>
          </div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s3-13: Tapped Home by mistake?
export const S3_13 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="ph" role="img" aria-label="After Home while live: Stop the stream? Going home ends the stream. The recording so far is kept. With Stop stream and Keep streaming">{" "}
      <div className="rn-s">{" "}
        <div className="cam" style={{ opacity: ".6" }}></div>
        {" "}
        <div className="dim"></div>
        {" "}
        <div className="alert">{" "}
          <div className="at">
            <b>Stop the stream?</b>
            <span>Going home ends the stream. The recording so far is kept.</span>
          </div>
          {" "}
          <div className="ab">
            <span className="x">Stop stream</span>
            <span className="tap">Keep streaming</span>
          </div>
          {" "}</div>
        {" "}</div>
      {" "}</div>
    {" "}
  </div>
);

// s3-14: End the game
export const S3_14 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Game over at the end, with Yes, the game is over">{" "}
      <b>Is the game over?</b>
      {" "}
      <span className="sm mu">Final score: NOR 3–2 HAR.</span>
      {" "}
      <span className="b sm g tap">Yes, the game is over</span>
      {" "}</div>
    {" "}
  </div>
);

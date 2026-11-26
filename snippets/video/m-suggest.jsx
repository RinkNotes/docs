// Drawings for the guide's "m-suggest" section, one per step.
// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (9)). Don't edit by hand.

// m5-1: Start it
export const M5_1 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Suggestions, with the line about what it does and a Suggest moments button">{" "}
      <span className="k">Suggestions</span>
      {" "}
      <span className="sm mu">Suggest moments looks through the video for saves and goalie action you didn't mark. Nothing leaves this Mac.</span>
      {" "}
      <span className="b sm p tap">Suggest moments</span>
      {" "}</div>
    {" "}
  </div>
);

// m5-2: Keep or skip each one
export const M5_2 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="24 suggestions, best first, with Keep as a save (K) and Skip (⌫)">{" "}
      <span className="sm mu">24 suggestions, best first. Pick one to watch it. K keeps it as a save, and ⌫ skips it.</span>
      {" "}
      <div className="side-btns">
        <span className="b sm p tap">Keep as a save (K)</span>
        <span className="b sm g">Skip (⌫)</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

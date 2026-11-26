// Drawings for the guide's "m-space" section, one per step.
// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (9)). Don't edit by hand.

// m9-1: Delete a game
export const M9_1 = () => (
  <div className="rn-shot not-prose">
    {" "}
    <div className="frag" role="img" aria-label="Delete this game from this Mac? with Move to Trash and Cancel">{" "}
      <b>Delete this game from this Mac?</b>
      {" "}
      <span className="sm mu">It moves the game (21.4 GB) to the Trash. Empty the Trash to free the space. Your iPhone may still have its own copy.</span>
      {" "}
      <div className="side-btns">
        <span className="b sm g">Cancel</span>
        <span className="b sm r tap">Move to Trash</span>
      </div>
      {" "}</div>
    {" "}
  </div>
);

// m9-2: Get the space back
export const M9_2 = () => (
  <div className="rn-shot not-prose">
    <span className="ill">Picture</span>
    {" "}
    <div className="hw" role="img" aria-label="The Trash in the Dock">{" "}
      <span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4" /></svg>
        Game</span>
      {" "}
      <span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </span>
      {" "}
      <span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6" /></svg>
        Trash</span>
      {" "}</div>
    {" "}
  </div>
);

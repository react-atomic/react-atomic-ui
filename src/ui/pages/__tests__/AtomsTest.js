import { expect } from "chai";
import { render } from "reshow-unit";

import Atoms from "../Atoms";

describe("Atoms page Test", () => {
  it("basic test", () => {
    const wrap = render(<Atoms />);
    const html = wrap.html();
    expect(html).to.have.string("This is atom");
  });
});

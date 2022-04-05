import { expect } from "chai";
import { render } from "reshow-unit";

import Atoms from "../Atoms";

describe("Atoms page Test", () => {
  it("basic test", () => {
    const vDom = <Atoms />;
    const wrap = render(vDom);
    const html = wrap.html();
    expect(html).to.have.string("This is atom");
  });
});

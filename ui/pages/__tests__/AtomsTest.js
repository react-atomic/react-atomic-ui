import { expect } from "chai";
import { mount } from "reshow-unit";

import Atoms from "../Atoms";

describe("Atoms page Test", () => {
  it("basic test", () => {
    const vDom = <Atoms />;
    const wrap = mount(vDom);
    const html = wrap.html();
    expect(html).to.have.string("This is atom");
  });
});

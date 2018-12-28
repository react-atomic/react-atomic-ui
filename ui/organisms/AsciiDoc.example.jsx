import React, { PureComponent } from "react";

import Asciidoc from "organism-react-asciidoc";

const adoc = `
:toc:
:toc-placement!:
toc::[]

= h1 - test
test

== h2 - test2
* Hello *world*

== h2 - test3
- [ ] option1
- [*] option1
`;

class AsciidocDemo extends PureComponent {
  render() {
    return <Asciidoc options={{ doctype: "book" }}>{adoc}</Asciidoc>;
  }
}

export default AsciidocDemo;


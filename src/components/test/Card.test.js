import React from "react";
import { shallow } from "enzyme";

import Card from "../Card";

describe("Card", () => {
  test("it matches snapshot", () => {
    const wrapper = shallow(
      <Card
        id={18}
        text="Fake it till you make it!"
        emoji="beer"
        onDeleteCard={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

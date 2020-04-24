import React from "react";
import { mount } from "enzyme";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<Profile username="parkchanjong" name="박찬종" />);
    expect(wrapper).toMatchSnapshot();
  });
});

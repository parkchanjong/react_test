import React from "react";
import { mount } from "enzyme";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<Profile username="chanjong" name="박찬종" />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders username and name", () => {
    const wrapper = mount(<Profile username="chanjong" name="박찬종" />);

    expect(wrapper.props().username).toBe("chanjong");
    expect(wrapper.props().name).toBe("박찬종");

    const boldElement = wrapper.find("b");
    expect(boldElement.contains("chanjong")).toBe(true);
    const spanElement = wrapper.find("span");
    expect(spanElement.text()).toBe("(박찬종)");
  });
});

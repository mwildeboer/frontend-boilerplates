import { storiesOf } from "@storybook/react";
import Title from "../components/Title";

storiesOf("Title", module)
  .add("Base", () => (
    <Title>Hello World</Title>
  ))
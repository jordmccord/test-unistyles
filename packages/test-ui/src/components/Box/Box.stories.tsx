import React, { useEffect } from "react";
import { Box } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { colors } from "../../core/colours";
import { UnistylesRuntime } from "react-native-unistyles";
import { View } from "react-native";

const meta = {
  title: "Stories / Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: "text",
    },
    bg: {
      options: [...Object.keys(colors).map((color) => `$${color}`)],
      control: "select",
      description:
        "Background color of the box. Use the color name from the theme.",
    },
    w: { control: "number" },
    h: { control: "number" },
  },
  args: {
    children: "This is a box",
    bg: "$red500",
    w: 300,
    h: 200,
    p: "$4",
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ children, ...args }) => {
    const [bgColor, setBgColor] = React.useState<"$green500" | "$cyan600">(
      "$green500"
    );
    const [other, setOther] = React.useState(false);
    useEffect(() => {
      setTimeout(() => {
        UnistylesRuntime.setTheme("dark");
        setTimeout(() => {
          setBgColor("$cyan600");
          setTimeout(() => {
            setOther(true);
          }, 2000);
        }, 2000);
      }, 4000);
    }, []);

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          padding: other ? 20 : 0,
        }}
      >
        <Box {...args} bg={bgColor}>
          <Text>{children}</Text>
        </Box>
      </View>
    );
  },
};

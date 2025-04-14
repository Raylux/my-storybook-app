import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { within } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";


const meta: Meta<typeof Button> = {
    component: Button,
    title: "Components/Button",
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

const onClick = async () => {
    return new Promise<void>(
        (resolve) => {
            setTimeout(() => {
                alert("Clicked!");
                resolve();
            }, 5000);
        }
    )
}

export const Active: Story = {
    args: {
        label: "Click me",
        onClick: onClick,
    }
}

export const Disabled: Story = {
    args: {
        label: "Click me",
        onClick: onClick,
        isDisabled: true,
    }
}

export const WithInteraction: Story = {
    args: {
        label: "Click me",
        onClick: onClick,
        isDisabled: false,
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole("button");
        await userEvent.click(button);
    }
}

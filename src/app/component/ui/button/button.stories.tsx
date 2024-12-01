import type { Meta, StoryObj } from '@storybook/react';
// import '../../../../globals.css';
import Button from './index';

const meta: Meta<typeof Button> = {
	component: Button,
	title: 'Button',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		type: 'button',
		variant: 'primary',
		className: 'ml-5',
		children: '保存',
	},
};

export const Secondary: Story = {
	args: {
		type: 'button',
		variant: 'secondary',
		className: 'ml-5',
		children: 'キャンセル',
	},
};

export const Secondary: Story = {
	args: {
		type: 'button',
		variant: 'secondary',
		className: 'ml-5',
		children: 'キャンセル',
	},
};

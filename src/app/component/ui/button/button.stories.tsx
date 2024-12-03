import type { Meta, StoryObj } from '@storybook/react';
// import '../../../../globals.css';
import Button from './index';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';

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
		children: '次へ',
		size: 'lg',
	},
};

export const Submit: Story = {
	args: {
		...Default,
		type: 'submit',
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

export const Tertiary: Story = {
	args: {
		...Default,
		variant: 'tertiary',
		children: 'ボタン',
	},
};

export const WithIcon: Story = {
	name: 'アイコン付き', // 日本語名を追加
	args: {
		// ...baseArgs,
		children: '追加',
		icon: faPlus,
		size: 'base',
		variant: 'primary',
	},
};

export const IconOnly: Story = {
	name: 'アイコンのみ', // 日本語名を追加
	args: {
		// ...baseArgs,
		icon: faEdit,
		size: 'base',
		variant: 'primary',
	},
};

export const Disable: Story = {
	name: 'ボタン非活性', // 日本語名を追加
	args: {
		// ...baseArgs,
		icon: faEdit,
		size: 'base',
		variant: 'disable',
		disabled: true,
	},
};

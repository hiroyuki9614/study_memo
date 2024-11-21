import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	// Controlsで調整可能なpropsを定義
	argTypes: {
		size: {
			control: 'select',
			options: ['xs', 'sm', 'base', 'lg', 'xl'],
		},
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'tertiary', 'custom'],
		},
		disabled: {
			control: 'boolean',
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基本的なボタン
export const Primary: Story = {
	args: {
		children: 'Primary Button',
		variant: 'primary',
		size: 'base',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Secondary Button',
		variant: 'secondary',
		size: 'base',
	},
};

// サイズバリエーション
export const Small: Story = {
	args: {
		children: 'Small Button',
		size: 'sm',
	},
};

export const Large: Story = {
	args: {
		children: 'Large Button',
		size: 'lg',
	},
};

// アイコン付きボタン
export const WithIconLeft: Story = {
	args: {
		children: 'Add New',
		icon: faPlus,
		iconPosition: 'left',
	},
};

export const WithIconRight: Story = {
	args: {
		children: 'Edit',
		icon: faEdit,
		iconPosition: 'right',
	},
};

// アイコンのみ
export const IconOnly: Story = {
	args: {
		icon: faTrash,
		'aria-label': 'Delete',
	},
};

// 無効状態
export const Disabled: Story = {
	args: {
		children: 'Disabled Button',
		disabled: true,
	},
};

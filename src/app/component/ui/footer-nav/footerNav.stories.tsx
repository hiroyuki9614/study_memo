import type { Meta, StoryObj } from '@storybook/react';
// import '../../../../globals.css';
import footerNav from './index';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
	component: Input,
	title: 'Input',
	tags: ['autodocs'],
};

export default meta;

export const Default: Story = {
	args: {
		id: '1',
		title: 'aaa',
		name: 'aaa',
		errors: {},
		required: true,
		maxLength: 12,
		type: 'text',
		registerOptions: {
			required: 'This field is required',
			maxLength: {
				value: 20,
				message: '20文字以内で入力してください',
			},
		},
	},
};

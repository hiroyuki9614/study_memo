import type { Meta, StoryObj } from '@storybook/react';
// import '../../../../globals.css';
import Input from './index';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
	component: Input,
	title: 'Input',
	tags: ['autodocs'],
};

export default meta;

const mockRegister = (name: string) => ({
	onChange: () => {},
	onBlur: () => {},
	ref: () => {},
	name: name,
});

export const Default: Story = {
	args: {
		id: '1',
		title: 'aaa',
		name: 'aaa',
		errors: {},
		required: true,
		maxLength: 12,
		type: 'text',
		register: mockRegister,
		registerOptions: {
			required: 'This field is required',
			maxLength: {
				value: 20,
				message: '20文字以内で入力してください',
			},
		},
	},
};

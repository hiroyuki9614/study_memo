import type { Meta, StoryObj } from '@storybook/react';
// import '../../../../globals.css';
import TextArea from './index';
import { UseFormRegister, UseFormRegisterReturn, FieldErrors } from 'react-hook-form';

type Story = StoryObj<typeof TextArea>;

const meta: Meta<typeof TextArea> = {
	component: TextArea,
	title: 'TextArea',
	tags: ['autodocs'],
};

export default meta;

const mockRegister: UseFormRegister<any> = (name: any) => ({
	onChange: async () => Promise.resolve(),
	onBlur: async () => Promise.resolve(),
	ref: (instance: HTMLInputElement | null) => {},
	name,
	disabled: false,
});

export const Default: Story = {
	args: {
		id: '1',
		title: 'demo',
		name: 'demo-note',
		errors: {},
		register: mockRegister,
		required: false,
		maxLength: 100,
		className: '',
		children: '',
		placeholder: 'aaa',
		// register: mockRegister,
		// registerOptions: {
		// 	required: 'This field is required',
		// 	maxLength: {
		// 		value: 20,
		// 		message: '20文字以内で入力してください',
		// 	},
		// },
	},
};

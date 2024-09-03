'use client';
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import DialogSample from '../modal/index';
import Statics from '@/app/statics/page';

export default function FooterNav() {
	return (
		<nav className='h-16 flex items-center fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200'>
			<ul className='flex justify-between w-full px-4'>
				<li className='w-1/3'>
					<Link href='/statics' className='flex flex-col items-center'>
						<FontAwesomeIcon icon={faChartBar} size='xl' />
						<span className='text-xs mt-1'>STATIC</span>
					</Link>
				</li>
				<li className='w-1/3'>
					<div className='flex flex-col items-center'>
						<DialogSample icon={faPlus} size={'2x'}>
							ADD
						</DialogSample>
					</div>
				</li>
				<li className='w-1/3'>
					<Link href='/' className='flex flex-col items-center'>
						<FontAwesomeIcon icon={faHome} size='xl' />
						<span className='text-xs mt-1'>INDEX</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

'use client';
import { useState, useEffect } from 'react';
import Loading from '@/app/loading';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import DialogSample from '../modal/index';

export default function FooterNav() {
	const [loaded, setLoaded] = useState(false);

	// 意図的に遅延を入れる
	setTimeout(() => setLoaded(true), 1000);

	const SkeletonIcon = () => <div className='w-4 h-4 bg-gray-200 animate-pulse rounded'></div>;
	return (
		<nav className='h-16 flex items-center fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200'>
			<ul className='flex justify-between w-full px-4'>
				<li className='w-1/3'>
					<Link href='/statics' className='flex flex-col items-center'>
						{loaded ? <FontAwesomeIcon icon={faChartBar} size='xl' /> : <SkeletonIcon />}
						<span className='text-xs mt-1'>STATIC</span>
					</Link>
				</li>
				<li className='w-1/3'>
					<div className='flex flex-col items-center'>
						{loaded ? <DialogSample icon={faPlus}>ADD</DialogSample> : <SkeletonIcon />}
					</div>
				</li>
				<li className='w-1/3'>
					<Link href='/' className='flex flex-col items-center'>
						{loaded ? <FontAwesomeIcon icon={faHome} size='xl' /> : <SkeletonIcon />}
						<span className='text-xs mt-1'>INDEX</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

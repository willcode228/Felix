import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollLoader from '../ScrollLoader/ScrollLoader';
import styles from './InfiniteBox.module.scss';

const End = () => (
	<h2 className={styles.end}>Yay! You have seen it all</h2>
);

const InfiniteBox = ({children, target, next, more, length, ...props}) => {
	return (
		<InfiniteScroll
			{...props}
			next={next}
			hasMore={more}
			dataLength={length}
			endMessage={<End />}
			loader={<ScrollLoader />}
			scrollableTarget={target}
			style={{ overflow: 'hidden' }}
		>
			{children}
		</InfiniteScroll>
	);
};

export default InfiniteBox;
import React from 'react';
import BillCard from '../BillCard/BillCard';
import Catalogue from '../../Catalogue/Catalogue';
import { removeDuplicate } from '../../../utils/removeDuplicates';

const BillCatalogue = ({title, catalogue=[], vertical, isBigSize = true, linkText='All movies', path}) => {
	return (
		<Catalogue
			title={title}
			vertical={vertical}
			linkText={linkText}
			path={path}
		>
			{removeDuplicate(catalogue).map(bill => (
				<BillCard
					isBigSize={isBigSize}
					key={bill.id}
					bill={bill}
				/>
			))}
		</Catalogue>
	);
};

export default BillCatalogue;
import React from 'react';
import BillCard from '../BillCard/BillCard';
import Catalogue from '../Catalogue/Catalogue';

const BillCatalogue = ({title, catalogue=[], vertical, isBigSize = true, linkText='All movies'}) => {
	return (
		<Catalogue
			title={title}
			vertical={vertical}
			linkText={linkText}
		>
			{catalogue.map(bill => (
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
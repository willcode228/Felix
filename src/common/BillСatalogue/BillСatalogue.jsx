import React from 'react';
import BillCard from '../BillCard/BillCard';
import Catalogue from '../Catalogue/Catalogue';

const removeDuplicateBill = (catalogue) =>
	[...catalogue].filter((bill, index, self) => index === self.findIndex(t => t.id === bill.id));


const BillCatalogue = ({title, catalogue=[], vertical, isBigSize = true, linkText='All movies'}) => {
	return (
		<Catalogue
			title={title}
			vertical={vertical}
			linkText={linkText}
		>
			{removeDuplicateBill(catalogue).map(bill => (
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
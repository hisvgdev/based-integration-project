import { v4 as uuidv4 } from 'uuid';

import { icons } from '../assets/public/index';
import { RoutePath } from '../types/RoutePath.enum';

export const expandedRouteItems = [
	{
		id: uuidv4(),
		title: 'Товары',
		icon: icons.boxItemLogo,
		type: 'button',
		children: [
			{
				id: uuidv4(),
				title: 'Список товаров',
				routeLink: RoutePath.LIST_ITEM,
			},
			{
				id: uuidv4(),
				title: 'Добавить товары',
				routeLink: RoutePath.ADDING_ITEM,
			},
		],
	},
	{
		id: uuidv4(),
		title: 'Интеграции',
		icon: icons.integrationLogo,
		routeLink: RoutePath.ADDING_INTEGRATION,
		type: 'link',
	},
];

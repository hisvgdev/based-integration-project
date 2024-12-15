import { v4 as uuidv4 } from 'uuid';

import { icons } from '../assets/public/index';

export const mainPageCardsData = [
	{
		id: uuidv4(),
		title: 'Добавить вручную',
		description:
			'Подойдёт, если товаров немного. Можно создавать по одному варианту или сразу по несколько',
		tags: 'Немного товара',
		icon: icons.lowBoxIcon,
	},
	{
		id: uuidv4(),
		title: 'Добавить через шаблон',
		description:
			'Добавьте сразу много товаров одной категории — для этого есть умные таблицы с подсказками',
		tags: 'Много товара',
		icon: icons.moreBoxIcon,
	},
];

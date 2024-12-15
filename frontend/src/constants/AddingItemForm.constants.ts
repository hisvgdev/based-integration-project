import { v4 as uuidv4 } from 'uuid';
export const stepsCreateItem = [
	{
		id: uuidv4(),
		title: 'Информация о товаре',
		step: 1,
	},
	{
		id: uuidv4(),
		title: 'Предварительный просмотр',
		step: 2,
	},
];

export const AddingItemField = [
	{
		id: 'name',
		name: 'name',
		type: 'text',
		placeholder: 'Название',
		required: true,
	},
	{
		id: 'category',
		name: 'category',
		type: 'text',
		placeholder: 'Категория и тип',
		required: true,
	},
	{
		id: 'code',
		name: 'code',
		type: 'text',
		placeholder: 'Штрих код',
		required: true,
	},
	{
		id: 'articule',
		name: 'articule',
		type: 'text',
		placeholder: 'Артикул',
		required: true,
	},
	{
		id: 'price',
		name: 'price',
		type: 'number',
		placeholder: 'Ваша цена, ₽',
		required: true,
	},
	{
		id: 'discounted price',
		name: 'discounted price',
		type: 'text',
		placeholder: 'Цена до скидки, ₽',
		required: true,
	},
];

export const AddingItemDimestionAndWeightData = [
	{
		id: 'length',
		name: 'length',
		type: 'number',
		placeholder: 'Длина упаковки, мм *',
		required: true,
	},
	{
		id: 'weight',
		name: 'weight',
		type: 'number',
		placeholder: 'Ширина упаковки, мм *',
		required: true,
	},
	{
		id: 'height',
		name: 'height',
		type: 'number',
		placeholder: 'Высота упаковки, мм *',
		required: true,
	},
	{
		id: 'dimensions',
		name: 'dimensions',
		type: 'number',
		placeholder: 'Вес с упаковкой, г *',
		required: true,
	},
];

import { TABLE_HEADER_ITEM } from '@constants/TableItem.constants';
import { IProductsProps } from '@pages/ListItemsPage/ListItemsPage';
import { FC } from 'react';

export const TableItem: FC<{ products: IProductsProps[] }> = ({ products }) => {
   return (
      <div className="relative overflow-x-auto">
         <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs uppercase bg-gray-50">
               <tr>
                  {TABLE_HEADER_ITEM.map((header, index) => (
                     <th
                        key={`${header}-${index}`}
                        scope="col"
                        className="px-6 py-3"
                     >
                        {header}
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {Array.isArray(products) && products.length > 0 ? (
                  products.map((product, idx) => (
                     <tr key={idx} className="bg-gray-100 border-b">
                        <td className="px-6 py-4 font-medium">
                           {product.vendorCode || '-'}
                        </td>
                        <td className="px-6 py-4">
                           {product.photos && product.photos[0]?.square ? (
                              <img
                                 src={product.photos[0].square}
                                 alt={`Фото ${product.title}`}
                                 className="h-10 w-10 object-cover rounded-md"
                              />
                           ) : (
                              '-'
                           )}
                        </td>
                        <td className="px-6 py-4 font-medium">
                           {Array.isArray(product.sizes) &&
                           product.sizes.length > 0 &&
                           product.sizes[0].skus
                              ? product.sizes[0].skus.join(', ')
                              : '-'}
                        </td>
                        <td className="px-6 py-4">{product.title || '-'}</td>
                        <td className="px-6 py-4">
                           {product.characteristics
                              ?.find((char) => char.name === 'Контент-рейтинг')
                              ?.value?.join(', ') || '-'}
                        </td>
                        <td className="px-6 py-4">
                           {new Date(product.createdAt).toLocaleDateString() ||
                              '-'}
                        </td>
                        <td className="px-6 py-4">
                           {product.needKiz
                              ? 'Готов к продаже'
                              : 'Нет на складе'}
                        </td>
                     </tr>
                  ))
               ) : (
                  <tr>
                     <td
                        colSpan={TABLE_HEADER_ITEM.length}
                        className="px-6 py-4 text-center"
                     >
                        Таблица пуста!
                     </td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
   );
};

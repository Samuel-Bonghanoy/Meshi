import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="text-slate-200">
          <span className="mr-3 font-bold text-yellow-400">
            {quantity}&times;
          </span>{' '}
          {name}
        </p>
        <p className="font-bold text-slate-200">{formatCurrency(totalPrice)}</p>
      </div>

      <p className="text-sm capitalize italic text-slate-200">
        {isLoadingIngredients ? 'Loading' : ingredients.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;

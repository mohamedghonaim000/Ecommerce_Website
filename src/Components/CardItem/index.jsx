import { FaTrash } from "react-icons/fa";

function CardItem({ product, onQuantityChange , onDelete}) {
    
    return (
        <>

            <div className="p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow my-3">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <img src={product.product?.imageCover} alt={product.product?.title} width={130} className='w-32 h-24 sm:w-36 sm:h-28 object-cover rounded-md bg-[var(--secondry-color)]' />

                    <div className='font-normal text-lg flex-1 flex flex-col gap-4 text-[var(--productDetail-text-color)]'>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h2 className="font-semibold text-lg truncate">{product.product?.title}</h2>
                            <span className="text-sm sm:text-base font-medium">{product?.count * product?.price} EGP</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <label htmlFor="quantity" className="sr-only">Quantity</label>
                            <div className='flex items-center border rounded-md'>
                                <button className='px-2 py-1 text-lg font-semibold text-[var(--primary-color)]'
                                onClick={() => onQuantityChange(product.product._id, product.count - 1)}>-</button>
                                <span className='px-2 py-1'>{product.count}</span>
                                <button className='px-2 py-1 text-lg font-semibold text-[var(--primary-color)]'
                                onClick={() => onQuantityChange(product.product._id, product.count + 1)}>+</button>
                            </div>
                            <button aria-label="Remove item" title="Remove item" 
                            className='ml-3 p-2 rounded-md hover:bg-gray-100 transition-colors text-[var(--primary-color)]'
                            onClick={() => onDelete(product.product_id)}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardItem

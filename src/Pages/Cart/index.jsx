import cartimg from '../../assets/images/cartimg.png'
import { FaTrash } from "react-icons/fa";
import CardItem from '../../Components/CardItem';

function Cart() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 m-10 justify-center items-center">
            <div className="col-span-1 sm:col-span-3">

                <CardItem/>

            </div>

            <div className="col-span-1 sm:col-span-1 rounded-xl py-5">
                <div className="p-6 rounded-xl shadow-sm border border-gray-200 bg-[var(--secondry-color)]">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h2 className="font-bold text-3xl">Cart Total</h2>

                        <div className='w-full flex flex-col sm:flex-row justify-between items-center gap-6'>
                            <div className='flex flex-row sm:flex-col text-lg font-medium gap-3 items-center justify-center text-center'>
                                <h3>Subtotal</h3>
                                <h3>Total</h3>
                            </div>
                            <div className='flex flex-row sm:flex-col gap-2 items-center justify-center text-center'>
                                <h3 className='text-lg text-[var(--productDetail-text-color)]'>Rs. 250,000.00</h3>
                                <h3 className='text-xl font-semibold text-[var(--primary-color)]'>Rs. 250,000.00</h3>
                            </div>
                        </div>

                        <button className='w-full border border-black text-center px-3 py-2 rounded-md text-xl hover:bg-[var(--hover-color)] hover:text-white hover:border-[var(--hover-color)] hover:text-2xl hover:opacity-95 transition-all'>Check Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
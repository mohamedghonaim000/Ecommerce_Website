import CardItem from '../../Components/CardItem';
import { FaChevronRight } from "react-icons/fa";
import bannerImg from "../../assets/images/shopbg.png";
import logo from '../../assets/images/logo.png'
import { getUserCart, removeCartItem, updateCartItem } from '../../Api/cart.Api';
import { useEffect, useState } from 'react';
import Loader from '../../Components/loading';
import toast from 'react-hot-toast';
import { Link } from 'react-router';

function Cart() {

    const [cartProducts, setCartProducts] = useState([]);
    const [cartId, setCartid] = useState("");
    const [loading, setLoading] = useState(false)   
    console.log(cartId);
    

    const getUserCartItems = async () => {
        setLoading(true)
        try {
            const res = await getUserCart()
            setCartProducts(res.data.data.products)
            setCartid(res.data.cartId)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }


    }
    console.log(cartProducts);

    const handleQuantityChange = async (productId, quantity) => {
        setLoading(true)
        try {
            const res = await updateCartItem(productId, quantity)
            console.log(res);
           
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
            getUserCartItems()

        }
    }


    const deleteCartItem = async (productId) => {
        setLoading(true)
        try {
            const res = await removeCartItem(productId)
            console.log(res);
             setCartProducts((prevProduct)=>
            prevProduct.filter((item)=>item.product._id !== productId))
            toast.success('Item removed successfully')

        } catch (error) {
            console.log(error);
            toast.error('Failed to remove item')
        } finally {
            setLoading(false)
            getUserCartItems()
        }
    }

    const totalPrice= cartProducts.reduce((total , item)=>{
        return total +item.price * item.count
     },0)
     console.log(totalPrice);

    useEffect(() => {
        getUserCartItems()
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4  justify-center items-start">
            <div
                className="col-span-4 relative h-[300px] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bannerImg})`,
                }}
            >
                <div className="absolute inset-0 bg-white/20"></div>

                <div className="relative text-center flex flex-col justify-center items-center gap-1">
                    <img src={logo} alt="logo image" width={50} />
                    <h1 className="text-4xl font-bold mb-3">Cart</h1>
                    <p className="text-black text-xl flex items-center gap-1">
                        <span>Home</span>
                        <FaChevronRight className="text-sm" />
                        <span className='font-light'>Cart</span>
                    </p>

                </div>
            </div>

            {loading ?
                <div className='col-span-4 flex justify-center items-center h-[200px]'>
                    <Loader />
                </div>
                :
                <>
                    <div className="col-span-1 sm:col-span-3 ml-10">

                        {cartProducts.map((item) => {
                            return <CardItem key={item._id} 
                            product={item} 
                            onQuantityChange={handleQuantityChange} 
                            onDelete={deleteCartItem} 
                            />
                        })}
                    </div>

                    <div className="col-span-1 sm:col-span-1 rounded-xl py-5 mr-10">
                        <div className="p-6 rounded-xl shadow-sm border border-gray-200 bg-[var(--secondry-color)]">
                            <div className="flex flex-col justify-center items-center gap-6">
                                <h2 className="font-bold text-3xl">Cart Total</h2>

                                <div className='w-full flex flex-col sm:flex-row justify-between items-center gap-6'>
                                    <div className='flex flex-row sm:flex-col text-lg font-medium gap-3 items-center justify-center text-center'>
                                        <h3>Total</h3>
                                    </div>
                                    <div className='flex flex-row sm:flex-col gap-2 items-center justify-center text-center'>
                                        <h3 className='text-xl font-semibold text-[var(--primary-color)]'>{totalPrice} EGP</h3>
                                    </div>
                                </div>

                                <Link to={`/checkout/${cartId}`}
                                className='w-full border border-black text-center px-3 py-2 rounded-md text-xl hover:bg-[var(--hover-color)] 
                                hover:text-white hover:border-[var(--hover-color)] hover:text-2xl hover:opacity-95 transition-all'>
                                    Check Out
                                </Link>
                                <Link to='/' className='text-[var(--primary-color)] underline hover:text-[var(--hover-color)] hover:no-underline transition-all'>
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            }

        </div>
    );
}

export default Cart;
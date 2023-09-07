import { userItemsCart } from './hooks/userItemsCart';
import { NavBar } from './components/NavBar';
import { CartRoutes } from './routes/CartRoutes';

export const CartApp = () => {

    const { cardItems, handlerAddProductCart, handlerDeleteProductCart } = userItemsCart();

    return (
        <>
            <NavBar />

            <div className="container my-4">
                <CartRoutes
                    cardItems={cardItems}
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProductCart={handlerDeleteProductCart} />
            </div>
        </>
    )
}

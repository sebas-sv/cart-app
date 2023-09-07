import { useEffect, useState } from 'react'
import { getProducts } from '../services/productServices'
import { ProductCardView } from './ProductCardView';

export const CatalogView = ({ handler }) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const findAll = async () => {
        const productsBackend = await getProducts();
        setProducts(productsBackend);
        setIsLoading(false);
    }

    useEffect(() => {
        //setProducts(getProducts());
        findAll();
    }, []);

    return (
        <>
            {isLoading && <div className='alert alert-info'>Cargando</div>}

            <div className="row">
                {products.map(product => (
                    <div className="col-4 my-2" key={product.id}>
                        <ProductCardView
                            product={product}
                            handler={handler}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

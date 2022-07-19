/* eslint-disable camelcase */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { fetchAllProducts } from './actions/actionCreator';
import Loader from '../components/Loader/Loader';

function Product() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  if (loading) {
    return (
      <h4>
        <Loader />
        loading..
      </h4>
    );
  }
  if (error != null) {
    return <h4>{error}</h4>;
  }
  return (
    <section>
      <h1>{t('Products')}</h1>
      <button onClick={() => dispatch(fetchAllProducts())}>Reload date</button>
      <table>
        <tbody>
          <tr>
            <td><b>{t('title')}</b></td>
            <td><b>{t('price')}</b></td>
            <td><b>{t('category')}</b></td>
          </tr>
          {products && products.map((product) => (
            <tr key={product.id}>
              <td>
                {product.title}
              </td>
              <td>
                {product.price}
              </td>
              <td>
                {product.category}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Product;

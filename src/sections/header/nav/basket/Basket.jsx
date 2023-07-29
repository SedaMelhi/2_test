import BasketSvg from '../../../../assets/svg/BasketSvg';
import style from './Basket.module.sass';
const Basket = () => {
  return (
    <div className={style.basket}>
      <BasketSvg />
      <div className={style.count}>0</div>
    </div>
  );
};
export default Basket;

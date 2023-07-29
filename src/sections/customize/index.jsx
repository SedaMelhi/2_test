import Subtitle from './../../components/subtitle/Subtitle';
import style from './Customize.module.sass';
import Carousel from './carousel/Carousel';
const Customize = () => {
  return (
    <section className={style.customize}>
      <div className={`${style.customize__wrap} wrap`}>
        <div className={style.left}></div>
        <div className={style.right}>
          <Subtitle />
          <h2 className={style.title}>Customize your Own Character</h2>
          <p className={style.description}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae.
          </p>
          <div className={style.images}>
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customize;

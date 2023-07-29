import Subtitle from './../../components/subtitle/Subtitle';

import style from './News.module.sass';
const News = () => {
  return (
    <section className={style.news}>
      <div className="wrap">
        <div className={style.subtitle}>
          <Subtitle />
          <div className={style.top}>
            <h2 className={style.title}>Latest News & Articles</h2>
            <div className={style.btn}>Read More</div>
          </div>
          <div className={style.cards}>
            <div className={style.main}>
              <div className={style.main__img}></div>
              <div className={style.main__date}>April 2, 2021</div>
              <div className={style.main__title}>
                Esports Group teams up with the Indianapolis Colts
              </div>
            </div>
            <div className={style.card}>
              <div className={style.card__img + ' ' + style.card__img_one}></div>
              <div className={style.card__date}>April 2, 2021</div>
              <div className={style.card__title}>
                Esports Group teams up with the Indianapolis Colts
              </div>
            </div>
            <div className={style.card}>
              <div className={style.card__img + ' ' + style.card__img_two}></div>
              <div className={style.card__date}>April 2, 2021</div>
              <div className={style.card__title}>
                Esports Group teams up with the Indianapolis Colts
              </div>
            </div>
            <div className={style.card}>
              <div className={style.card__img + ' ' + style.card__img_three}></div>
              <div className={style.card__date}>April 2, 2021</div>
              <div className={style.card__title}>
                Esports Group teams up with the Indianapolis Colts
              </div>
            </div>
            <div className={style.card}>
              <div className={style.card__img + ' ' + style.card__img_four}></div>
              <div className={style.card__date}>April 2, 2021</div>
              <div className={style.card__title}>
                Esports Group teams up with the Indianapolis Colts
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

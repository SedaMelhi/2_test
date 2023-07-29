import Subtitle from '../../../components/subtitle/Subtitle';

import line from './../../../assets/line.png';

import style from './Content.module.sass';

const Content = () => {
  return (
    <div className={style.content}>
      <Subtitle />
      <h1 className={style.title}>
        Unleash the Next Generation of Gaming
        <img src={line} alt="" className={style.line} />
      </h1>
      <p className={style.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar.
        Enim non pulvinar neque.
      </p>
      <div className={style.btns}>
        <div className={style.btn__left}>Explore More</div>
        <div className={style.btn__right}>View our team</div>
      </div>
    </div>
  );
};

export default Content;

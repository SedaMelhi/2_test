import style from './Subtitle.module.sass';
import fire from './../../assets/fire.svg';
const Subtitle = () => {
  return (
    <p className={style.subtitle}>
      <img src={fire} alt="" />
      <span>FUTURE OF eSPORTS</span>
    </p>
  );
};
export default Subtitle;

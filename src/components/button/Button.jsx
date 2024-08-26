/* eslint-disable react/prop-types */
import Style from './Style.module.scss';

const Button = ({ value, color }) => {
  const getColor = () => {
    if (color === 2) return Style.BtnTwo;
    else if (color === 3) return Style.BtnThree;
    else return Style.BtnOne;
  };
  return (
    <>
      <input type='button' value={value} className={getColor()} />
    </>
  );
};
export default Button;

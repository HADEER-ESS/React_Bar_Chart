import logo from "../../assets/logo.svg";
import './balance.css'

const Balance = () => {
  return (
    <div className="balance-wrapper">
      <div className="item-left">
        <h4 className="text">My balance</h4>
        <h2 className="text">$ 921.48</h2>
      </div>
      <div className="item-right">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Balance;

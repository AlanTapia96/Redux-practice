import { deposit, withdraw } from "../../store/amount/action";
import { selectCurrentAmount } from "../../store/amount/reducer";
import { connect } from "react-redux";

const Counter = ({ deposit, withdraw, amount }) => {
  return (
    <div>
      <h1>{amount}</h1>
      <button onClick={() => deposit()}>Deposit $10</button>
      <button onClick={() => withdraw()}>Withdraw $10</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    amount: selectCurrentAmount(state),
  };
};

export default connect(mapStateToProps, { deposit, withdraw })(Counter);

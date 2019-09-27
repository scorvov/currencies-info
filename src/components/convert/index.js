import { connect } from "react-redux";
import Convert from "./convert";
import {handleAmounts} from "../../store/actions";

const mapStateToProps = ({ amountsReducer, ratesReducer }) => {
  const { amount1, amount2 } = amountsReducer;
  const { ratesFor1, ratesFor2 } = ratesReducer;
  return { amount1, amount2, ratesFor1, ratesFor2 };
};

export const ConvertContainer = connect(
  mapStateToProps,
  { handleAmounts }
)(Convert);

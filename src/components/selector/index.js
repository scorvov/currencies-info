import { connect } from "react-redux";
import Selector from "./selector";
import {handleCurrencies, setRates} from "../../store/actions";

const mapStateToProps = ({ currenciesReducer }) => {
  const { currency1, currency2, currencies } = currenciesReducer;
  return { currency1, currency2, currencies };
};

export const SelectorContainer = connect(
  mapStateToProps,
  { setRates, handleCurrencies }
)(Selector);

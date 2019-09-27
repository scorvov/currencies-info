import { connect } from "react-redux";
import App from "./app";
import {fetchCurrencies} from "../../store/actions";

export const AppContainer = connect(
  null,
  { fetchCurrencies }
)(App);

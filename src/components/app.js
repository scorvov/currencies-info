import React, { Component } from "react";
import { apiService } from "../services/api-service";
import { abbreviationCurrency, getRatesForCurrency } from "../utils/helpers";
import { Header } from "./header";
import { Convert } from "./convert";
import "../assests/styles/app.scss";
import {ErrorBoundary} from "./error-boundary";

class App extends Component {
  state = {
    currency1: "",
    currency2: "",
    currencies: null,
    ratesForUSD: null,
    ratesFor1: {},
    ratesFor2: {},
    amount1: 0,
    amount2: 0,
    readonly: true
  };

  async componentDidMount() {
    const ratesForUSD = await apiService.getRates();
    ratesForUSD && this.setState({ ratesForUSD });
    const currencies = await apiService.getCurrencies();
    currencies && this.setState({ currencies });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { currency1, currency2, ratesForUSD, currencies } = this.state;
    if (
      currency1 !== prevState.currency1 ||
      currency2 !== prevState.currency2
    ) {
      if (
        currencies &&
        ratesForUSD &&
        currencies.hasOwnProperty(currency1) &&
        currencies.hasOwnProperty(currency2)
      ) {
        const ratesFor1 = getRatesForCurrency(ratesForUSD, currency1);
        const ratesFor2 = getRatesForCurrency(ratesForUSD, currency2);
        const amount2 = ratesFor1[`${currency2}`];
        this.setState({
          ratesFor1,
          ratesFor2,
          amount1: 1,
          amount2,
          readonly: false
        });
      } else
        this.setState({
          amount1: 0,
          amount2: 0,
          ratesFor1: 0,
          ratesFor2: 0,
          readonly: true
        });
    }
  }

  handleChangeCurrency = e => {
    this.setState({
      [e.currentTarget.id]: abbreviationCurrency(e.currentTarget.value)
    });
  };

  handleChangeAmount = e => {
    const { currency1, currency2, ratesFor1, ratesFor2 } = this.state;
    const direction = e.currentTarget.id;
    const value = e.currentTarget.value;
    const amount1 =
      direction === "amount1" ? value : value * ratesFor2[`${currency1}`];
    const amount2 =
      direction === "amount2" ? value : value * ratesFor1[`${currency2}`];
    this.setState({ amount1, amount2 });
  };

  render() {
    const {
      currency1,
      currency2,
      amount1,
      amount2,
      currencies,
      readonly
    } = this.state;
    return (
      <div className={"app"}>
        <h1 className={"title"}>Exchange Rates</h1>
        <ErrorBoundary>
          <Header
            currency1={currency1}
            currency2={currency2}
            currencies={currencies}
            onChange={this.handleChangeCurrency}
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <Convert
            amount1={amount1}
            amount2={amount2}
            disabled={readonly}
            onChange={this.handleChangeAmount}
          />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

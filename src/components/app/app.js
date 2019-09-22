import React, { Component } from "react";
import { apiService } from "../../services/api-service";
import { abbreviationCurrency, getRatesForCurrency } from "../../utils/helpers";
import { Header } from "../header/header";
import { Convert } from "../convert/convert";
import "../../assests/styles/app.scss";

class App extends Component {
  state = {
    currency1: "",
    currency2: "",
    ratesForUSD: null,
    ratesFor1: {},
    ratesFor2: {},
    amount1: 0,
    amount2: 0,
    currencies: null
  };

  async componentDidMount() {
    const currencies = await apiService.getCurrencies();
    currencies && this.setState({ currencies });
    const ratesForUSD = await apiService.getRates();
    ratesForUSD && this.setState({ ratesForUSD });
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
        this.setState({ ratesFor1, ratesFor2, amount1: 1, amount2 });
      } else if (prevState.amount1 !== 0)
        this.setState({ amount1: 0, amount2: 0 });
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
    const { currency1, currency2, amount1, amount2, currencies } = this.state;
    return (
      <div className={"app"}>
        <h1 className={"title"}>Exchange Rates</h1>
        <Header
          currency1={currency1}
          currency2={currency2}
          currencies={currencies}
          onChange={this.handleChangeCurrency}
        />
        <Convert
          amount1={amount1}
          amount2={amount2}
          onChange={this.handleChangeAmount}
        />
      </div>
    );
  }
}

export default App;

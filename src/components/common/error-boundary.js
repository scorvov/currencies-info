import * as React from "react";

export class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>Error</p>
          <button onClick={() => console.log("Сообщение об ошибке")}>
            Показать
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

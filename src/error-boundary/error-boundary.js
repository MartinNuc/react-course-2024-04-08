import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // optional
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const {hasError} = this.state;
    if (hasError) {
      return <div>Ups, something went wrong</div>;
    }

    return this.props.children; 
  }
}
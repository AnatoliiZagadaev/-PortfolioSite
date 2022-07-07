/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(nextProps) {
      console.log('prevProps', this.props);
      console.log('nextProps', nextProps);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  LogProps.displeyName = `LogProps(${WrappedComponent.displeyName || WrappedComponent.name || 'WrappedComponent'})`;
  return LogProps;
}
export default logProps;

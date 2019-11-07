import App from 'next/app';
import '../styles/normalize.scss'

class RootApp extends App<any> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
      </>
    )
  }
}

export default RootApp

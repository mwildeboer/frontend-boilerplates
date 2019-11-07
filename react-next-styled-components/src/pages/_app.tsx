import App from 'next/app';
import { Normalize } from 'styled-normalize'
import Global from "../styles/global"

class RootApp extends App<any> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Normalize />
        <Global />

        <Component {...pageProps} />
      </>
    )
  }
}

export default RootApp

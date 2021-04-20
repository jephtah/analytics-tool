import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Home from "./home";
import { Provider } from 'react-redux';
import store from '../_helpers/store'


export default function index() {
  return (
    <Provider store={store}>
      <Head>
        <title>MyPaddi Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </Provider>
  )
}

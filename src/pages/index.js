import React from 'react'
import Head from 'next/head'
import Login from './login'

export default function index () {
  return (
    <>
      <Head>
        <title>MyPaddi Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  )
}

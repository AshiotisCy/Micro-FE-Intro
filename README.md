- [1. Introduction](#1-introduction)
  - [1.1. How To:](#11-how-to)

# 1. Introduction

This application is an Introduction to Micro-FE.

## 1.1. How To:

If you want to call a component Asyncronosly you can do it as follows.

const Header = React.lazy(() => import("home/Header"));

const App = () => (

    <Suspense fallback={<div>Loading</div>}>
      <Header />
    </Suspense>

);

NOTE: https://www.youtube.com/watch?v=lKKsjpH09dU&t=506s

In order to deploy a Module Fenderation you need a static store like S3.
For this example we used servor.

Steps to install servor:

- run yarn build in your home repo
- npm run servor:start

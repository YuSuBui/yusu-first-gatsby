import * as React from "react"
import SignIn from "../components/core/sign-in"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SignInPage = () => (
  <Layout>
    <Seo title="Sign in" />
    <SignIn></SignIn>
  </Layout>
)

export default SignInPage

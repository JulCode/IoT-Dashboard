//if the user has a token, they will be redirected to the dashboard

export default function({ store, redirect }) {
  store.dispatch("readToken");

  if (store.state.auth) {
    return redirect("/dashboard");
  }
}

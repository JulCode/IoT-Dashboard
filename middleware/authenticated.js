//if the user does not have a token, they will be redirected to the login

export default function({ store, redirect }) {
  store.dispatch("readToken");
  if (!store.state.auth) {
    return redirect("/login");
  }
}

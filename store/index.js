export const state = () => ({
  auth: null,
  devices: []
});

export const mutations = {
  setAuth(state, inAuth) {
    state.auth = inAuth;
  }
};

export const actions = {
  readToken() {
    let auth = null;
    try {
      auth = JSON.parse(localStorage.getItem("auth"));
    } catch (error) {
      console.log(error);
    }
    //saving auth in state
    this.commit("setAuth", auth);
  }
};

// empty object for user
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQCZYHDSDUVSTNvr5Pl_K8z_BVigTeJzuVcexKvXWwHQKmlKSY96NwtOOc8rqpf9G8m-42mWd-9VpkLLZ_mpbw8dmuEmnhmgn2qGV2gWE5fjbIVvRXEswXz1CH_DIIJsmbdtgkZTDMOcovrueFJOKiqYyDC-wRchQrUg9vvhgo3N8IKT",
};

//state: how data layer look like
//action: what action to be perform -setAction
//reducer: listen to certain action
const reducer = (state, action) => {
  // Action -> type,[payload]
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state, //without ..., state will be overwrite
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
export default reducer;

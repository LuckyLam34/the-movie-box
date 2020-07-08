// const defaultState: IState = {
//     loadingFlagGlobal: false,
//     fridgeItems: [],
//     vegeItems: []
// }

const reducers = (state = {}, action: any) => {
  switch (action.type) {
    case "SHOW_ITEMS":
      return {};

    default:
      return state;
  }
};

export default reducers;

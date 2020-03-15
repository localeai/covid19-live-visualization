import { types} from './mutations';

export default {
  hideControls({ commit }) {
    commit(types.SET_LAYERS_CONTROLS_VISIBLE, false);
    commit(types.SET_VISUALIZATIONS_CONTROLS_VISIBLE, false);
  },
  setLayerControlsVisible({ commit }, flag) {
    commit(types.SET_LAYERS_CONTROLS_VISIBLE, flag);
  },
  setVisualizationControlVisible({ commit }, flag) {
    commit(types.SET_VISUALIZATIONS_CONTROLS_VISIBLE, flag);
  }
};

import { mapMutations } from 'vuex';
import { LOADING_SPINNER_SHOW_MUTATION } from '../../../store/AppMutations';
export default{
    ...mapMutations({
        showLoading:LOADING_SPINNER_SHOW_MUTATION
      }),
}
import { useDispatch, useSelector } from "react-redux"
import { onOpenDateModal ,onCloseDateModal} from "../store";



export const useUiStore = () => {

    const dispatch = useDispatch();

    const { isDateModalOpen

    } = useSelector(state => state.ui);

    const openDateModal = () => {
      //  console.log('openDateModal')
        dispatch(onOpenDateModal())
    }

    const closeDateModal = () => {
        dispatch (onCloseDateModal())
    }

    const toogleDateModal= () => {

        (isDateModalOpen)
        ? openDateModal()
        : closeDateModal;
    }

    return {
        //*properties
        isDateModalOpen,

        //*methods
        openDateModal,
        closeDateModal,
        toogleDateModal
    }

}

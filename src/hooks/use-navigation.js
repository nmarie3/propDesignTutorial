import { useContext } from "react";
import NaviContext from "../context/navi";

function useNavi() {
    return useContext(NaviContext);
}

export default useNavi;
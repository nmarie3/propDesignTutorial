import useNavi from "../hooks/use-navigation";

function Route({path, children}) {
    const {currentPath} = useNavi();

    if (path ===currentPath) {
        return children;
    }
    return null;
}

export default Route;
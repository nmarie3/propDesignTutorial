import Button from "../components/Button";
import { GoBell} from "react-icons/go";
import { GoCloudDownload} from "react-icons/go";
import { GoDatabase} from "react-icons/go";



function ButtonsPage() {

    const handleClick=() => {
        console.log("Clicked!");
    }

    return (

    <div>
        <div>
            <Button primary rounded className="mb-5" onClick={handleClick}>1<GoBell className="ml-1"/></Button>
        </div>
            <div>
                <Button secondary outline rounded>2</Button>
            </div>
        <div>
            <Button success><GoCloudDownload/>3</Button>
        </div>
            <div>
                <Button warning>4</Button>
            </div>
        <div>
            <Button danger outline>5<GoDatabase/></Button>
        </div>
    </div>
)}

export default ButtonsPage;
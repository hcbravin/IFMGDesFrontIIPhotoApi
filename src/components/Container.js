import Loader from "./Loader";
import { useEffect, useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";

function Container({searchTerm}){

    const {images, loading, runSearch} = useContext(PhotoContext);

    useEffect(() => {
        runSearch(searchTerm);

    },[searchTerm]);

    return (
        <div>
            {loading ? <Loader /> : <p>Galeria</p>}
        </div>
    )
}

export default Container
import Image from "./Image";

function Gallery({data}){

    const results = data;

    return (
        <div>
            {results.length > 0 ? (
                <ul>
                {results.map((image) => {
                    const {farm, server, id, secret, title} = image;
                    const url = `https://farm${farm}.staticflickr.com/${farm}/${server}/${id}_${secret}_m.jpg`;
                    return <Image url={url} title={title} key={id} />

                })}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
}

export default Gallery
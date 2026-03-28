import Container from "./Container"

function Item({searchItem}){
    return (
        <div>
            <h2>{searchItem} Photos</h2>
            <Container searchTerm={searchItem} />
        </div>
    )
}

export default Item
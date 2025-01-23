const Person = ({image, name, age, id}) => {

    // const handleDelete = (id) => {
        
    // }
 return <article className="person">
    <img src={image} alt={name} className="img"/>
    <div>
        <h4>{name}</h4>
        <p>{age}</p>
        <button type="button" className="btn btn-clock">Delete</button>
    </div>
 </article>
}
export default Person;
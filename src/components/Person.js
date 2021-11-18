import './Person.css'

const Person = (props) => {
  return(
    <div className="person">
      <p>{props.name}</p>
      <p>({props.age})</p>
    </div>
  )
}

export default Person;

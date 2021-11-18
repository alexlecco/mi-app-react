import './Person.css'

const Person = ({ name, age }) => {
  return(
    <div className="person">
      <p>{name}</p>
      <p>({age})</p>
    </div>
  )
}

export default Person;

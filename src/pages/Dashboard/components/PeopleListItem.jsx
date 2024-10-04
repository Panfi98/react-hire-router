import { useEffect } from "react";
import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person } = props
  
  useEffect(()=>{
    console.log(props)
  },[])

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <Link to={`/person/${person.login.uuid}`}>Profile</Link>
    </li>
  )
}

export default PeopleListItem

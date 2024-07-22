import {useState} from 'react'

function ListRender() {
//Pode criar  o useState sem usar o set se não for alterar nada.
const [list] = useState(["Mathes","Pedro","Josias"]);

const [users, setUsers] = useState([
    {id: 1, name:"Matheus", age:31},
    {id: 2, name:"Pedro", age:20},
    {id: 3, name:"Josias", age:19},

]); 

const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers)=> prevUsers.filter((user)=>randomNumber !== user.id ))
}

  return (
    <div>
        <div>
        {/*4-render sem kay */}
        <ul>
            {list.map((item)=>(
                <li>{item}</li>
            ))}
        </ul>
        </div>

        <div>
        {/* 5 - render com key */}
        <ul>
            {users.map((user) =>(
                <li key={user.id}>{user.name} - {user.age} anos.</li>
            ))}
            {/*6-previous state */}
            <button onClick={deleteRandom}>Deletar random user</button>
        </ul>
      </div>
    </div>
  )
}

export default ListRender

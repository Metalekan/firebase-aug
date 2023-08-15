import { useState, useEffect } from 'react'
import './index.css'


import GoogleAuth from './components/GoogleAuth';
import Auth from './components/Auth';

import { db } from './firebase'
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';



function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users")
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)
  const [newJob, setNewJob] = useState("")

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data.docs);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getUser();
  }, [])

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge), occupation: newJob })
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, 'users', id)
    const newInput = { age: age + 1 }
    await updateDoc(userDoc, newInput)
  }
  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id)
    await deleteDoc(userDoc);
  }
 
  return (
    <div className='container d-flex flex-column justify-content-center align-items center min-vh-100'>
      <div className="border p-4 bg-secondary">
        <input className='form-control' type="text" placeholder='name..' onChange={(event) => { setNewName(event.target.value) }} />
        <input className='form-control' type="number" placeholder='age..' onChange={(event) => { setNewAge(event.target.value) }} />
        <input className='form-control' type="text" placeholder='occupation..' onChange={(event) => { setNewJob(event.target.value) }} />

        <button className='btn btn-outline-dark' onClick={createUser}>
          Enter
        </button>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <tr key={user.id}>
                  <th scope="row">{}</th>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.occupation}</td>
                  <td className='btn btn-warning' onClick={() => updateUser(user.id, user.age)}>Add</td>
                  <td className='btn btn-danger' onClick={deleteUser(user.id)}>Del</td>

                </tr>

              ))
            }
          </tbody>
        </table>

      </div>
      
      <GoogleAuth/>
      <Auth/>
    </div>
  )
}

export default App

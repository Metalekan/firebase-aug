import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../index.css";

import { db } from "../firebase";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

function Database() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newJob, setNewJob] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data.docs);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      age: Number(newAge),
      occupation: newJob,
    });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newInput = { age: age + 1 };
    await updateDoc(userDoc, newInput);
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
      </div>
      <div className="bg-secondary d-flex flex-column min-vh-100">
        <form onSubmit={createUser} className="border p-4 bg-success">
          <input
            className="form-control"
            type="text"
            placeholder="name.."
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
          <input
            className="form-control"
            type="number"
            placeholder="age.."
            onChange={(event) => {
              setNewAge(event.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="occupation.."
            onChange={(event) => {
              setNewJob(event.target.value);
            }}
          />

          <button className="btn btn-outline-dark">Enter</button>
        </form>
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
            {users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{}</th>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.occupation}</td>
                <td
                  className="btn btn-warning"
                  onClick={() => updateUser(user.id, user.age)}
                >
                  Add
                </td>
                <td className="btn btn-danger" onClick={deleteUser(user.id)}>
                  Del
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Database;

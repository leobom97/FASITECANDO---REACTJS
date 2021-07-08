import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map(user => (
            <ListGroupItem className="d-flex" key={user.id}>
              <strong>{user.name}</strong>
              <div className="ml-auto">
                <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-1">Editar</Link>
                <Button onClick={() => removeUser(user.id)} color="danger">Deletar</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
          <h4 className="text-center">Sem Cadastrados</h4>
        )}
    </ListGroup>
  )
}

import {showUsers} from "../redux/actions";
import User, {IUser} from "./User";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";

interface IUsers {
  users: IUser[]
}

export interface IState {
  usersReducer: IUsers,
}

const FetchedUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector( (state: IState) => {
    return state.usersReducer.users;
  })

  if (!users.length){
    return <Button variant="contained" onClick={() => dispatch(showUsers())}>
      Загрузить пользователей
    </Button>
  }
  return (
    <div className="users">
      {users.map((user: IUser) => <User user={user} key={user.id} />)}
    </div>
  );
}

export default FetchedUsers;
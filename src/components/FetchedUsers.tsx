import {showUsers} from "../redux/actions";
import User, {IUser} from "./User";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import {Loader} from "./Loader";
import {IAppState} from "../redux/appReducer";

interface IUsers {
  users: IUser[]
}

export interface IState {
  usersReducer: IUsers,
  appReducer: IAppState
}

const FetchedUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector( (state: IState) => {
    return state.usersReducer.users;
  })

  const loading = useSelector( (state: IState) => {
    return state.appReducer.loading
  })
  if (loading){
    return <Loader />
  }

  if (!users.length){
    return <Button sx={{margin: "1em"}} variant="contained" onClick={() => dispatch(showUsers())}>
      Загрузить пользователей
    </Button>
  }
  return (
    <div className="users" style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
      {users.map((user: IUser) => <User user={user} key={user.id} />)}
    </div >
  );
}

export default FetchedUsers;
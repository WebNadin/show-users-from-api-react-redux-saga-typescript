import React from 'react'
import {Card, CardContent, Typography} from "@mui/material";

export interface IUser {
  login: string,
  id: number
}

const User = ({ user }: {user: IUser}) => {
  return (
    <Card sx={{ minWidth: 300, margin: "1em"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          userId: {user.id}
        </Typography>
        <Typography variant="h5" component="div">
          {user.login}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default User;
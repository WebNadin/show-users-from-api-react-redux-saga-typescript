import React from 'react'
import {Card, CardContent, Typography} from "@mui/material";

export interface IUser {
  login: string,
  id: number
}

const User = ({ user }: {user: IUser}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {user.id}
          test id
        </Typography>
        <Typography variant="h5" component="div">
          {user.login}
          test login
        </Typography>
      </CardContent>
    </Card>
  )
}

export default User;
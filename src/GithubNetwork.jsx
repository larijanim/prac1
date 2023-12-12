/*
This coding test has five parts, with a 35-minute time limit.
You can earn bonus points by completing parts 4 and 5.
Please refer to the attached "task.jpg" for the desired output.
Part 1:
Create a component to input a GitHub username and fetch their profile data from "https://api.github.com/users/${qry}."
Part 2:
Display the user's profile card with login, avatar URL, creation date, and location. Add a "Find my Followers" button.
Part 3:
Clicking "Find my Followers" calls "https://api.github.com/users/${id}/followers" and displays their profiles as a grid.
Part 4:
Clicking "Find my Follower" in the grid updates the main profile card and the follower list.
Part 5:
Improve the UI using CSS.
*/
/*followers_url":"https://api.github.com/users/larijanim/followers
login
created-at
location */
import { useState } from "react";
import GitForm from "./GitForm";
const GithubNetwork=()=>{ 
    const [param,setparam]=useState('');
    const [data,setData]=useState(null);
    return(
    <div><GitForm />
        </div>)}
export default GithubNetwork;
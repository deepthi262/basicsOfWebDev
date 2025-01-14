const express = require("express");
const app = express();
const port = 3000;

const USERS = [];

const QUESTIONS = [
  {
    title: "Find Max",
    description: "Given an array , return the maximum of the array",
    testCases: [
      {
        input: "[1,2,3,4,5]",
        output: "5",
      }
    ]
  },
  {
    title : "Find Sum",
    description : "Given an array , return the sum of the array",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "15"
  }]},
];

const SUBMISSIONS = [
    // {
    //     userId: '1',
    //     questionId : '1',
    //     code: "function max(arr) {return Math.min(...arr)}",
    //     status : "rejected"

    // },
    // {
    //     userId: '1',
    //     questionId : '1',
    //     code: "function max(arr) {return Math.max(...arr)}",
    //     status : "accepted"

    // }
];
//let users signup
app.post("/signup", (req, res) => {
  //add logic to decode body
   const {email, password} = JSON.parse(req.body)
  //body should have email and password
  //store email and password(As is for now) in the USERS array above, only if user with the given email doesnt exist)
  USERS.push({email : email, password : password, });

  //return back 200 status code to the client
res.status(200);

});

app.post("/login", (req, res) => {
  //add logic to decode body
  //body should have email and password
  //check if the user with the given email exists in the USERS array
  const loginUser = USERS.filter((user)=>{user.email === email, user.password ===})
  // Also ensure that the password is the same
  //If the password is the same, return back 200 status code to the client
  if(loginUser) res.status(200)
  //ALso send back a token ( any random string will do for now)
  else res.status(404)
  //If its not the same send back 404 status code for now.
});

app.get('/questions', (req, res) => {
    //return all the questions in the QUESTIONS array
//const questions = QUESTIONS
    res.status(200).send(JSON.stringify(QUESTIONS));
});

app.get('/submissions', (req,res)=>{
    //return the users submissions for this problem
    res.status(200).send(JSON.stringify(SUBMISSIONS))
})

app.post('/submissions', (req,res)=>{
//let the user submit a problem, randomly accept or reject the solution
const {userId , questionId, code} = req.body
//store the submission in the SUBMISSIONS array
const accRej = ['accepted', 'rejected']
const status = accRej[ Math.floor(Math.random()*2)]
SUBMISSIONS.push({userId : userId , questionId :questionId , code : code ,  status : status })

})

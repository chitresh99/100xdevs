import express from "express";

const app = express();

// app.get('/',function (req,res){
//     res.send("server is ready");
// });

app.get('/api/jokes',function(req,res){
    const jokes = [
        {
          id: 1,
          title: "Nature and Programmers",
          content: "Why don't programmers like nature? Because it has too many bugs."
        },
        {
          id: 2,
          title: "Dark Mode Preference",
          content: "Why do programmers prefer dark mode? Because the light attracts bugs!"
        },
        {
          id: 3,
          title: "Changing a Light Bulb",
          content: "How many programmers does it take to change a light bulb? None. That's a hardware problem."
        },
        {
          id: 4,
          title: "Java Developers and Glasses",
          content: "Why do Java developers wear glasses? Because they don’t see sharp."
        },
        {
          id: 5,
          title: "Programmer’s Hangout",
          content: "What’s a programmer’s favorite hangout place? Foo Bar."
        },
        {
          id: 6,
          title: "Sad JavaScript Developer",
          content: "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings."
        },
        {
          id: 7,
          title: "Broke Developer",
          content: "Why did the developer go broke? Because he used up all his cache."
        }
      ];
      res.send(jokes);
})

const port = process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
});
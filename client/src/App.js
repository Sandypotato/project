import "./App.css";
import io from "socket.io-client";
import { useEffect, useState,  Component, createElement } from "react";
let words = require('./words')

const socket = io.connect("http://localhost:3001");

function App() {
  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [name, setName] = useState('')
  
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  
  const [running2, setRunning2] = useState(false)

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);


  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }else{
      alert('Room number cannot be empty!')
    }
  };

 /* const sendMessage = () => {
    words = words.replace(' ', '')
    message = message.replace(' ', '')
    
    if(message === words){
      socket.emit("send_message", {
        message: message,
        room: room, 
        name: name, 
        });
      
    }else{
      alert(`wrong, ${message}! But /${words}/`)
    }
  };*/
  
  const isRunning = () => {
    setRunning2(true)
  }
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.name);
    });
  }, []);

const [time1, setTime1] = useState(0)
    const [username, setUsername] = useState('')

  function useWinner(){
    if(message === words){
      socket.emit('send_winner', {
      username: name,
      time: time
    }, [name, time])
    
  
    }
      
   /* return createElement(
      'h2',
      {class: 'winners'},
      { username } ,' has won!'
    ) 8-*/
  }
  useEffect(() => {
    socket.on('receive_winner', (data) => {
      setUsername(data.username);
      setTime1(data.time);
      alert(`Player ${data.username} has finished in ${data.time} seconds!`)
      
    }, [])
    }
  )
  
/*  const date = new Date()
  function startTime(){
    const now = date.now();
    return now;
  }
  function endTime(){
    const now = date.now()
    return now;
  } */

/*  function displayWinner({ props }){
    return createElement(
      'h2',
      {class: 'winners'},
      { props } ,' has won!'
    )
  } */
    
  
/*    class Time extends Component{
      state = {
        seconds: 0
      }
      startTimer = () => {
        this.interval = setInterval(() => {
          this.setState({
            seconds: this.state.seconds + 1
          });
        }, 1000);
      }
      stopTimer = () => {
        clearInterval(this.interval);
      }
      */
    
    
 /* async function hello() {
    var temp1
    await fetch('http://localhost:3000/words')
    .then((response) => {
      response.json()
    })
    .then((data) => {
      temp1 = data
    })
    return <p>{temp1}</p>
  } */
  /*  <form action="/words" method="get">
          <input name = "name" type="text" placeholder="Your name"/>
          <input type="submit" value="OK" />
        </form>
        <button onClick={ hello }>Click me</button> */
  
    

    return (
  
      <div id="roomNum">
        <input placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}/>
      <button onClick={ joinRoom } > Join Room</button> <br/> <br/>
      
      <input placeholder="Your username?" id="username" onChange={(event) => {
        setName(event.target.value)
      }}/>
       
        <h4>Your sentence: {words}</h4>
        <input id="input1" placeholder="Type!"
          onChange={(event) => {
          setMessage(event.target.value);
        }}/>     
        <p>{ message }</p>
      <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>       
      </div>
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
        <button onClick={ useWinner }>Submit</button>
        
      <h2>
        Winners: 
      </h2>
        <ol>
          <li id="firstPlace"></li>
          <li id="secondPlace"></li>
          <li id="thirdPlace"></li>
        </ol>

      
    </div>
  );
  }

      


export default App;

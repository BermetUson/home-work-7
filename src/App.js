import "./App.css";
import Comment from "./components/comment";
// import { comment } from "./data/data";

function App() {
  const comment = [
    {
      date: new Date(),
      text: "I hope you enjoy learning React!",
      id: 1,
      author: {
        name: "Hello Kitty",
        avatarUrl: "http://placekitten.com/g/62/62",
      },
    },
    {
      date: new Date(),
      text: "I hope you enjoy learning React!",
      id: 2,
      author: {
        name: "Hello Kitty",
        avatarUrl: "http://placekitten.com/g/64/64",
      },
    },
    {
      date: new Date(),
      text: "I hope you enjoy learning React!",
      id: 3,
      author: {
        name: "Hello Kitty",
        avatarUrl: "http://placekitten.com/g/64/64",
      },
    },
  ];
  return (
    <div className="App">
      {comment.map((item) => (
        <Comment key={item.id} author={item.author} text={item.text} date={item.date} />
      ))}
    </div>
  );
}

export default App;

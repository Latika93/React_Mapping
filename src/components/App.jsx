import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createCard(emojipedia) {
  return (
    <Card
      img={emojipedia.emoji}
      name={emojipedia.name}
      content={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
        {/* <Card img={"ðª"} name={"Tense Biceps"} content={"âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."} />
        <Card img={"ð"} name={"Tense Biceps"} content={"âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."} />
        <Card img={"ðª"} name={"Tense Biceps"} content={"âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."} /> */}
      </dl>
    </div>
  );
}

export default App;

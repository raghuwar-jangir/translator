import { useState } from "react";
import "./App.css";
import { langs } from "./langs";

const str = "Your translated text will be shown here...";
const api_key = "AIzaSyBpXJwRLD2fyohN9MOzeQhh-O8qxHo896Y";

function App() {
  console.count('rendered : ')
  const [text, setText] = useState("");
  const [targetLang, setTargetLang] = useState("hi");
  const [myTranslatedText, setMyTranslatedText] = useState(str);

  const extractTranslatedText = (data) => {
    const jsonData = JSON.parse(data);
    return jsonData.data.translatedText;
  };

  const handleSubmit = async () => {
   console.log('hello');
    const url = "https://text-translator2.p.rapidapi.com/translate";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "c835f2814dmshd34c6338c323bf1p159fb1jsnf745e5013d74",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      body: new URLSearchParams({
        source_language: "en",
        target_language: targetLang,
        text: text,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const txt = extractTranslatedText(result);
      setMyTranslatedText(txt);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Translator</h1>
        <div className="input-container">
          <textarea
            required
            rows="10"
            cols={50}
            type="text"
            id="original-text"
            placeholder={`${text}, ${targetLang}, ${myTranslatedText}`}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <select
            id="target-language"
            onChange={(e) => setTargetLang(e.target.value)}
          >
            {langs.map((lang) => {
              return (
                <option key={lang.val} value={lang.val}>
                  {lang.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="output-container">
          <p id="translated-text">{myTranslatedText}</p>
        </div>
        <button id="submit" onClick={handleSubmit}>
          Translate
        </button>
      </div>
    </>
  );
}

export default App;

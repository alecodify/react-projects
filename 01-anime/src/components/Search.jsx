import { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  }

  return (
    <section style={{height: "100px"}}>
        <form>
            <input type="text" className="form-control" placeholder="Search..." autoFocus value={text} onChange={(e) => onChange(e.target.value)} style={{display: "block", padding: "10px", fontSize: "20px", border: "none", borderRadius: "5px", width: "60%", margin: "auto", outline: "none"}} />
        </form>
    </section>
  )
}

export default Search
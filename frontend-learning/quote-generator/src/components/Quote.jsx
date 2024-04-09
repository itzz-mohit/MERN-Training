import style from "../CSS/Quote.module.css";
import Card from "react-bootstrap/Card";
import BottomActions from "./BottomActions";

function Quote({ h, q, a }) {
  return (
    <Card className={`px-2 ${style.card}`}>
      <Card.Body>
        <p className={style.quoteText}>
          {q ? q : "You cannot believe in God until you believe in yourself."}
        </p>
        <p className={style.quoteAuthor}>-
          {a ? a : "Swami Vivekananda"}
        </p>
        <BottomActions h={h} />
      </Card.Body>
    </Card>
  );
}

export default Quote;

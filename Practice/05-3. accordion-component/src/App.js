import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  const [status, setStatus] = useState(new Array(faqs.length).fill(false));

  function alterStatus(index) {
    let stat = status;
    stat = stat.map((st, i) => (index === i ? !st : st));
    setStatus(stat);
  }

  return (
    <div>
      <Accordion faqs={faqs} status={status} alterStatus={alterStatus} />
    </div>
  );
}

function Accordion({ faqs, status, alterStatus }) {
  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          num={index}
          title={faq.title}
          text={faq.text}
          status={status}
          alterStatus={alterStatus}
          key={index}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, status, alterStatus }) {
  return (
    <div className="item">
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className={status[num] ? "title" : "title open"}>{title}</p>
      <p className="icon" onClick={() => alterStatus(num)}>
        {status[num] ? "-" : "+"}
      </p>
      {status[num] ? (
        <div className="content-box open">{text}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

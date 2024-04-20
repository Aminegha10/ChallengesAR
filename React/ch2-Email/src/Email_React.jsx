import "./App.css";
const p1 = (props) => {
  return "Hi", props.name;
};
const p2 = () =>
  "I wanted to let you know as soon as possible that I will be staying home from work today.";

const p3 = () =>
  " Unfortunately, I developed a stomach bug that has made it very difficult toget work done.";

const p4 = (props) => (
  " I went to urgent care last night and was told it should subside within "
  +props.nbh+
  " hours. I do not expect to be online throughout the day."
);

const p5 = () =>
  "While I do plan to be back in the office tomorrow, Ive asked Kelly to take over for me today in case any emergencies arise. I had an important callscheduled with a supplier, but Daniel has agreed to manage the meeting.";

const p6 = () =>
  "Please let me know of any additional steps youd like me to take to ensure the day runs as smoothly as possible in my absence.";
const p7 = (props) => {
  return "Thank you," + props.name;
};
const classP = (pos, data) => {
  return <p className={`p${pos}`}>{data}</p>;
};

export default function Eamil(props) {
  return (
    <>
      {classP(1, p1(props))}
      {classP(2, p2())}
      {classP(3, p3())}
      {classP(4, p4(props))}
      {classP(5, p5())}
      {classP(6, p6())}
      {classP(7, p7(props))}
    </>
  );
}

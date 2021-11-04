import classes from './MeetupDetail.module.css';

const MeetupDetail = props => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
  // Turns out that <address> is a real HTML tag. Who knew?
};

export default MeetupDetail;

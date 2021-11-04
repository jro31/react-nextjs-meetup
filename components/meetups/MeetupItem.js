import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

const MeetupItem = props => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push(`/${props.id}`); // 'router.push()' is the programatic equivalent of using the <Link> component
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          {/* A <Link> component would be better than a button here. Done this way just to demo navigating programatically. */}
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;

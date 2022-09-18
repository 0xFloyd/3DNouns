import classes from './Link.module.css';

const Link = (props) => {
  const { text, url, leavesPage } = props;
  return (
    <a
      className={classes.link}
      href={url}
      target={leavesPage ? '_blank' : '_self'}
      rel="noreferrer"
    >
      {text}
    </a>
  );
};
export default Link;

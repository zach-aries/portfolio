import Icon from "./Icon";
import styles from "./IconList.styles";

interface Props {
  icons: { id: string; name: string; alt: string }[];
}

const IconList = (props: Props) => {
  const { icons } = props;

  return (
    <ul className={styles.iconList}>
      {icons.map(({ id, name, alt }) => (
        <li key={id} className={styles.iconListItem}>
          <div>
            <Icon name={name} alt={alt} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default IconList;

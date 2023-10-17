import styles from "./Card.module.scss";

export const Card = ({ city, weather, click, src, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.divLike}>
        <button className={styles.button} onClick={() => click()}>
          {text}
          <img className={styles.imgLike} src={src} alt="icon" />
        </button>
      </div>
      <h2 className={styles.text}>{city.EnglishName}</h2>
      <h1 className={styles.text}>
        {parseInt(weather.Temperature.Metric.Value, 10)}°C
      </h1>
      <h4 className={styles.text}>{weather.WeatherText}</h4>
    </div>
  );
};

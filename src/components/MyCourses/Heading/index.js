import React from "react";
import s from "./styles.module.css";
const MyCoursesHeading = ({
  minutes = 35,
  duration = 100,
  startDate = "11.11.2020",
  stopedVideo = 3,
  text
}) => {
  return (
    <div className={s.heading}>
      <p>Мой прогресс</p>
      <div className={s.info}>
        <div className={s.progress}>
          {`${minutes}/${duration}`}
          <p>минут</p>
        </div>
        <div className={s.description}>
          <p>Старт курса был {startDate}</p>
          <p>Вы остановились на уроке {stopedVideo}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default MyCoursesHeading;

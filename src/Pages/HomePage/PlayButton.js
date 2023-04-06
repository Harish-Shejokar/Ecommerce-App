import React from 'react'
import { IconName, AiOutlinePlayCircle } from "react-icons/ai";
import classes from './PlayButton.module.css'

const PlayButton = () => {
  return (
    <div>
      <AiOutlinePlayCircle className={classes["play-btn"]} />
    </div>
  );
}

export default PlayButton

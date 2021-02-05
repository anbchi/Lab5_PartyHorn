// main.js

// TODO
var volume_value = document.getElementById("volume-number");
var volume_scroll = document.getElementById("volume-slider");
var volume_pic = document.getElementById("volume-image");
var sound_choose = document.getElementById("audio-selection");
var sound = document.getElementById("horn-sound");
var sound_pic = document.getElementById("sound-image");

function changeVolume()
{  
  if (volume_value < 34 || volume_scroll 34)
  {
    volume_pic.src = "./assets/media/icons/volume-level-1.svg";
  }
  else if (volume_value < 67 || volume_scroll < 67)
  {
    volume_pic.src = "./assets/media/icons/volume-level-2.svg";
  }
  else
  {
    volume_pic.src = "./assets/media/icons/volume-level-3.svg";
  }
}

volume-slider.addEventListener("change", number);

function number()
{
  volume_value = volume_scroll;
}

volume-number.addEventListener("change", slider);

function slider()
{
  volume_scroll = volume_value;
}

document.getElementById("audio-selection").addEventListener("click", changePic);

function changePic()
{
  if (sound_choose === "radio-air-horn-container")
  {
    sound_pic.src = "./assets/media/images/air-horn.svg";
  }
  else if (sound_choose === "radio-car-horn-container")
  {
    sound_pic.src = "./assets/media/images/car.svg";
  }
  else
  {
    sound_pic.src = "./assets/media/images/party-horn.svg";
  }
}

document.getElementById("honk-btn").addEventListener("click", hearSound);

function hearSound()
{
  if (sound_choose === "radio-air-horn-container")
  {
    sound.src = "./assets/media/audio/air-horn.mp3";
  }
  else if (sound_choose === "radio-car-horn-container")
  {
    sound.src = "./assets/media/audio/car-horn.mp3";
  }
  else
  {
    sound.src = "./assets/media/audio/party-horn.mp3";
  }
}

import React from "react"
import Card from '@mui/material/Card';

export default function Info() {
  return (
    <div>
      <Card sx={{ width: 400, height: 700, backgroundColor: 'pallette.primary.light' }}>
      {/* Add your content here */}
        <img id="myImg" src="src/assets/angelina.png" alt="My Profile Photo" width="400" height="428" />
        <h1>Angelina Velazquez</h1>
        <h2>Web Developer</h2>
        <h3>angelinavelazquez.website</h3>
        <button class="email"><i class="fa fa-dark fa-envelope"></i> Email</button>
        <button class="link"><i class="fa fa-brands fa-linkedin"></i> LinkedIn</button>
        </Card>
    </div>
  )
}
"use client"

import React from 'react';
import ToggleSwitch from "@/app/components/Switch";
import Slider from "@/app/components/Slider";
import '@/app/components/App.css'

export default function Home() {
  return (
    <div className="app">
      <ToggleSwitch />
      <ToggleSwitch />
      <Slider />
    </div>
  );
}

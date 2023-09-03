"use client";
import React, { Component } from "react";
import  Dashboard from "./components/dashboard/dashboard";

export const metadata = {
  title:'next.js'
}

export default function inv(){
  return (
  <main>
      <div>
      <Dashboard />
    </div>
  </main>
  );
}


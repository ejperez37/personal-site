"use client"

import { useTheme } from "next-themes"

export default function Page() {
    const {theme, setTheme } = useTheme();
    return (
        <p>whaddup</p>
    )
  }
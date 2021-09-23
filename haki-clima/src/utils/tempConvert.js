import React, { useState } from "react"

export default function tempConvert(Tcelsius) {
    const Fahr = (Tcelsius * 1.8) + 32
    return Fahr
}
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function thankYou() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (window.innerWidth && window.innerHeight) {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
  }, [])

  return (
    <div>
      <Confetti width={width} height={height} />
      <div className="w-full max-w-sm mx-auto mt-32 text-center text-white bg-black px-4 py-2 border-2 border-orange-500 -skew-x-12">
        <h1 className="text-2xl glowing-text-orange">Thank you for purchasing</h1>
        <p className="mt-2">Your order will be delivered soon!</p>
        <p>Thank you for being a valued customer.</p>
      </div>
    </div>
  );
}

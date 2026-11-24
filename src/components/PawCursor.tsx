
"use client";

import { useEffect, useState } from "react";

type PawPrint = {
  id: number;
  x: number;
  y: number;
  rotation: number;
};

export default function PawCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [prints, setPrints] = useState<PawPrint[]>([]);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let lastPrintTime = 0;
    let printId = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      setPosition({ x: clientX, y: clientY });

      const now = Date.now();

      if (now - lastPrintTime > 110) {
        lastPrintTime = now;
        printId += 1;

        const newPrint: PawPrint = {
          id: printId,
          x: clientX,
          y: clientY,
          rotation: Math.random() * 35 - 17,
        };

        setPrints((previous) => [...previous.slice(-12), newPrint]);

        window.setTimeout(() => {
          setPrints((previous) =>
            previous.filter((print) => print.id !== newPrint.id)
          );
        }, 900);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="paw-cursor"
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        <svg viewBox="0 0 48 48" width="38" height="38" aria-hidden="true">
          <g fill="#8b512f" stroke="#fff8e9" strokeWidth="1.5">
            <ellipse cx="24" cy="29" rx="11" ry="9" />
            <ellipse cx="10" cy="17" rx="5" ry="7" transform="rotate(-25 10 17)" />
            <ellipse cx="21" cy="10" rx="5" ry="7" />
            <ellipse cx="33" cy="12" rx="5" ry="7" transform="rotate(18 33 12)" />
            <ellipse cx="41" cy="21" rx="5" ry="7" transform="rotate(35 41 21)" />
          </g>
        </svg>
      </div>

      <div className="paw-trail" aria-hidden="true">
        {prints.map((print) => (
          <div
            key={print.id}
            className="paw-print"
            style={{
              left: print.x,
              top: print.y,
              transform: `translate(-50%, -50%) rotate(${print.rotation}deg)`,
            }}
          >
            <svg viewBox="0 0 48 48" width="25" height="25">
              <g fill="#a66a43">
                <ellipse cx="24" cy="29" rx="11" ry="9" />
                <ellipse cx="10" cy="17" rx="5" ry="7" transform="rotate(-25 10 17)" />
                <ellipse cx="21" cy="10" rx="5" ry="7" />
                <ellipse cx="33" cy="12" rx="5" ry="7" transform="rotate(18 33 12)" />
                <ellipse cx="41" cy="21" rx="5" ry="7" transform="rotate(35 41 21)" />
              </g>
            </svg>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @media (pointer: fine) {
          body,
          body * {
            cursor: none !important;
          }

          .paw-cursor,
          .paw-trail {
            position: fixed;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 99999;
          }

          .paw-cursor {
            width: 38px;
            height: 38px;
            transform: translate(-5px, -5px);
            filter: drop-shadow(0 2px 3px rgba(50, 25, 15, 0.2));
          }

          .paw-print {
            position: fixed;
            opacity: 0;
            animation: pawFade 900ms ease-out forwards;
          }

          @keyframes pawFade {
            0% {
              opacity: 0.8;
              scale: 0.65;
            }
            100% {
              opacity: 0;
              scale: 1.2;
            }
          }
        }

        @media (pointer: coarse) {
          .paw-cursor,
          .paw-trail {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

"use client";

import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

type ConsultationButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ConsultationButton({
  children,
  className = "",
}: ConsultationButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`cursor-pointer ${className}`}
      >
        {children}
      </button>

      <ConsultationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
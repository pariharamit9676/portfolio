"use client";

import { Download } from "lucide-react";

export default function PrintButton() {
  return (
    <button 
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full bg-teal-400/10 px-4 py-2 text-sm font-medium leading-5 text-teal-300 hover:bg-teal-400/20 transition-colors"
    >
      <Download className="w-4 h-4" />
      Save as PDF
    </button>
  );
}

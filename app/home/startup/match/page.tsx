"use client";

import dynamic from "next/dynamic";

const MatchResult = dynamic(() => import("../../components/MatchResult"), { ssr: false });

export default function MatchStartup() {
  return <MatchResult role="startup" />;
}

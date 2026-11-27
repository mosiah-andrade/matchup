"use client";

import dynamic from "next/dynamic";

const ProfileDetails = dynamic(() => import("../../components/ProfileDetails"), { ssr: false });

export default function DetalhesInvestidor() {
  return <ProfileDetails role="investidor" />;
}

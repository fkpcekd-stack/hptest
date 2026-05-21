"use client";
import dynamic from "next/dynamic";

const ServiceSection = dynamic(() => import("./ServiceSection"), { ssr: false });

interface Service {
  id: string;
  title: string;
  description: string;
}

export default function ServiceSectionLoader({ services }: { services: Service[] }) {
  return <ServiceSection services={services} />;
}

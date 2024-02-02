'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import HeroCard from './components/HeroCard';
import { usePathname } from 'next/navigation';

export default function Page() {
  const [helloMessage, setHelloMessage] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    // Only make the API call once when the component mounts
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => {
        // Assuming the API returns a JSON object with a "hello" field
        setHelloMessage(data.hello);
      })
      .catch(error => {
        // Handle any errors
        console.error('Failed to fetch hello message:', error);
      });
  }, []); // The empty array ensures this effect only runs once on mount

  return (
    <main className="min-h-screen p-8">
      {pathname === '/' && (
        <HeroCard
          imageUrl="/path-to-image.jpg"
          imageAlt="Image Description"
          title="Hero Title"
          subtitle="Hero Subtitle"
          body={helloMessage || "Hero body text"}
        />
      )}
      {/* ... other components */}
    </main>
  );
}

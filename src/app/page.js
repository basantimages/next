'use client'; // This is a client component 👈🏽

import styles from './page.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [user, setUser] = useState('');
  useEffect(() => {
    async function getData() {
      const res = await fetch('http://localhost:3000/api/test', {
        method: 'Post',
        body: JSON.stringify({ input: 'raja' }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setUser(data);
    }

    getData();
  }, []);

  return (
    <main className={styles.main}>
      <h1>Data</h1>
      <div>{JSON.stringify(user)}</div>
    </main>
  );
}

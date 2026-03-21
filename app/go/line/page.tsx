import { Suspense } from 'react';

import GoLineClient from './GoLineClient';

export default function GoLinePage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-white text-sm text-slate-500">
          読み込み中…
        </div>
      }
    >
      <GoLineClient />
    </Suspense>
  );
}

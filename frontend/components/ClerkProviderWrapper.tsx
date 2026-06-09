'use client';

import { ClerkProvider } from '@clerk/nextjs';
import React, { PropsWithChildren } from 'react';

export default function ClerkProviderWrapper({
  children,
}: PropsWithChildren) {
  return <ClerkProvider>{children}</ClerkProvider>;
}

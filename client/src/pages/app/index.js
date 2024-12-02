import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Loader from '@/components/Loader';

const AppPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /app/journals by default
    router.push('/app/journals');
  }, [router]);

  return <Loader />;
};

export default AppPage;

import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Loader from '@/components/Loader';

export default function journal({ id, route }) {

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    // Wait and fetch data of the journal then redirect to the particular page
    router.push(`/app/journal/${query.slug}/${query.route}`);
  }, [router]);

  return <Loader slug={true} />;
}

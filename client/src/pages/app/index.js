import { useRouter } from 'next/router';
import { useEffect } from 'react';

import axios from '@/utils/axios';
import { useJournalStore, useAuthStore } from '@/utils/store';

import Loader from '@/components/Loader';

const AppPage = () => {
  const router = useRouter();
  const email = useAuthStore((state) => state.email);
  const setJournals = useJournalStore((state) => state.setJournals);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const response = await axios.get("/journal", { params: { email } });
        const journals = response.data;
        console.log(journals)
        setJournals({ journals }); // Save fetched journals to the store
        router.push('/app/journals'); // Redirect to the journals page
      } catch (error) {
        console.error(error.response.data.message);
      }
    }
    if (email) {
      fetchJournals();
    }
  }, [router, email]);

  return <Loader />;
};

export default AppPage;

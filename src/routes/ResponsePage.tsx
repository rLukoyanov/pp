import { Response } from '../components/Responses/Response';
import { useEffect, useState } from 'react';
import { getResponses, ResponsesResponse } from '../api/apiHelper';

import styles from './Pages.module.scss';

export default function ResponsesPage() {
  const [responses, setResponses] = useState<ResponsesResponse[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getResponses();
      if (Array.isArray(data)) {
        setResponses(data);
      }
    }
    void fetchData();
  }, []);
  return (
    <div className={styles.responses}>
      {responses.map((item) => (
        <Response status={item.status} />
      ))}
    </div>
  );
}

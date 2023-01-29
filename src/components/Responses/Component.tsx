import { useEffect, useState } from 'react';
import { getResponses, ResponsesResponse } from '../../api/apiHelper';
import { Response } from './Response';

import styles from './styles.module.scss';

export function Responses() {
  const [responses, setResponses] = useState<ResponsesResponse[]>();

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
      <h2>Мои отклики</h2>
      {responses && <Response status={responses[0].status} />}
      {responses && <Response status={responses[1].status} />}
      {responses && <Response status={responses[2].status} />}
    </div>
  );
}

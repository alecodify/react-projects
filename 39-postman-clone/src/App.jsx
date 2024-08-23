import { useState } from 'react'
import { useGlobalContext } from './context/DataProvider';
import { checkParams } from './utils';
import { ErrorScreen, Form, Header, Response, SelectTab, SnackBar } from './components';
import { getData } from './api';

function App() {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [errorResponse, setErrorResponse] = useState(false);
  const [apiResponse, setApiResponse] = useState({});

  const { formData, jsonText, paramData, headerData } = useGlobalContext();

  const onSendClick = async () => {
    if (!checkParams(formData, jsonText, paramData, headerData, setErrorMsg)) {
        setError(true);
        return false;
    }

    let response = await getData(formData, jsonText, paramData, headerData);
    console.log(response);
    if (response === 'error') {
        setErrorResponse(true);
        return;
    }
    setApiResponse(response.data);
};

  return (
    <div>
      <Header />

      <div className='w-full md:w-3/5 mx-auto px-2 mt-5'>
        <Form onSendClick={onSendClick} />
        <SelectTab />
        {errorResponse ? <ErrorScreen /> : <Response data={apiResponse} />}
      </div>

      {error && <SnackBar errorMsg={errorMsg} error={error} setError={setError} />}
    </div>
  )
}

export default App

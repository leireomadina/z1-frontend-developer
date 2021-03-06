const ENDPOINT = "https://front-exercise.z1.digital/evaluations";

let raw: string = JSON.stringify({"summary":{"outcome":""}});

interface Request {
  method: string,
  body: string,
}

const requestOptions: Request = {
  method: "POST",
  body: raw,
};

const getDataFromApi = (): Promise<string> => {
  return fetch(ENDPOINT, requestOptions)
    .then((resp) => resp.json())
    .then((data) => {
      return data.summary.outcome;
    });
};

export { getDataFromApi };

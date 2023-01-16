export const isValidUUID = (str: string) => {
  const regex =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  return str.match(regex);
};

export const checkRequiredField = (...fields: any) => {
  console.log(fields);
  const arr = fields
    .slice(1)
    .map((field: any) => fields[0].hasOwnProperty(field));
  return arr.every((element: boolean) => element === true);
};

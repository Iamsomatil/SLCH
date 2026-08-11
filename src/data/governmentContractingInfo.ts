export type GovernmentContractingInfo = {
  legalName: string;
  dba: string;
  uei: string;
  cageCode: string;
  samRegistration: string;
  businessClassification: string;
  coreNaicsCodes: string[];
};

export const governmentContractingInfo: GovernmentContractingInfo = {
  legalName: "SunLife Corporate Housing LLC",
  dba: "SunLife Facility Solutions",
  uei: "ZFNYY3KNT8E4",
  cageCode: "9CM70",
  samRegistration: "Active",
  businessClassification: "Small Business",
  coreNaicsCodes: ["561210"],
};

export type ContractAward = {
  id: string;
  agency: string;
  project: string;
  location: string;
};

export const selectedContractAwards: ContractAward[] = [
  {
    id: "nps-cedar-shake-roofing-west-branch",
    agency: "National Park Service",
    project: "Cedar Shake Roofing Replacement",
    location: "West Branch, Iowa",
  },
  {
    id: "nps-unarmed-protective-services-san-francisco",
    agency: "National Park Service",
    project: "Unarmed Protective Services",
    location: "San Francisco, California",
  },
  {
    id: "usace-parking-lot-preservation-rhinelander",
    agency: "U.S. Army Corps of Engineers",
    project: "Parking Lot Preservation",
    location: "Rhinelander, Wisconsin",
  },
  {
    id: "usaf-parking-lot-preservation-north-carolina",
    agency: "U.S. Air Force",
    project: "Parking Lot Preservation",
    location: "North Carolina",
  },
];

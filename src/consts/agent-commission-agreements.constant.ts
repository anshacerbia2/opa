export const searchParamsPrefix = [
  "page",
  "unitOwner",
  "iata",
  "no", // data.agreementNo
  "dateFrom", // data.start
  "dateTo", // data.end
  "agentName", // data.agentPccCredential.agent.name or data.amadeusMultiCredential.agent.name
  "oid", // data.amadeusMultiCredential.officeId
];

export const tableDataPrefix = [
  { title: "ID", prefix: "id" },
  { title: "Unit Owner", prefix: "unitOwner" },
  { title: "IATA No.", prefix: "iataNo" },
  { title: "Agreement No.", prefix: "agreementNo" },
  { title: "MSL Domestic", prefix: "mslDom" },
  { title: "MSL International", prefix: "mslIntl" },
  { title: "Agreement Start Date", prefix: "start" },
  { title: "Agreement End Date", prefix: "end" },
  { title: "Domestic Commission", prefix: "domCommission" },
  { title: "International Commission", prefix: "intlCommission" },
  { title: "GDS", prefix: "gds" },
  { title: "Glileo/Sabre PCC", prefix: "agentPcc" },
  { title: "Amaedus Office ID", prefix: "amadeusOid" },
];

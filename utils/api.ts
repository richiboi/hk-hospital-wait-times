import { Hospital } from "@/utils/types";
import { hospitalData } from "@/utils/hospitalData";

type WaitTimeApiResponse = {
  updateTime: string;
  waitTime: { hospName: string; topWait: string }[];
};

export async function getHospitalData(): Promise<Hospital[]> {
  const resultraw = await fetch(
    "https://www.ha.org.hk/opendata/aed/aedwtdata-en.json"
  );

  const apiResult: WaitTimeApiResponse = await resultraw.json();

  // Append each hospital's wait time to the hospitalData
  return apiResult.waitTime.map((hospitalWaitTime) => {
    const hospitalIndex = hospitalData.findIndex(
      (hospitalData) => hospitalData.name[0] === hospitalWaitTime.hospName // Match english
    );
    if (hospitalIndex === -1) {
      // This should never happen. Maybe error it out as well
      console.error("Cannot find hospital: ", hospitalWaitTime.hospName);
    }

    const waitTimeTokenized = hospitalWaitTime.topWait.split(" ");

    return {
      ...hospitalData[hospitalIndex],
      waitTimeValue: parseInt(waitTimeTokenized[1]),
      waitTimeModifier: waitTimeTokenized[0] === "Over" ? ">" : "~",
      waitTimeText: hospitalWaitTime.topWait,
    };
  });
}
